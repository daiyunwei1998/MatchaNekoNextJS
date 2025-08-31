'use client'
import { useEffect, useRef, useState } from 'react'

/* ---------- helpers ---------- */

// convert any image (png/jpg/etc) to webp in-browser
async function fileToWebP(file, quality = 0.82) {
  if (file.type === 'image/webp') return file
  if (!file.type.startsWith('image/')) throw new Error('Not an image')
  if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
    throw new Error('HEIC is not supported in-browser')
  }

  const dataUrl = await new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(r.result)
    r.onerror = reject
    r.readAsDataURL(file)
  })

  const img = await new Promise((resolve, reject) => {
    const i = new Image()
    i.onload = () => resolve(i)
    i.onerror = reject
    i.src = dataUrl
  })

  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)

  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, 'image/webp', quality)
  )
  if (!blob) throw new Error('WebP conversion failed')

  const base = file.name.replace(/\.[^.]+$/, '')
  return new File([blob], `${base}.webp`, { type: 'image/webp' })
}

// utility: small badge
function Badge({ children }) {
  return (
    <span style={{ fontSize: 12, color: '#666', background: '#f2f2f2', padding: '2px 6px', borderRadius: 6 }}>
      {children}
    </span>
  )
}

/* ---------- page ---------- */

export default function Admin() {
  // upload form state
  const [groupPath, setGroupPath] = useState('gposes')       // path-like grouping (e.g., "gposes/cats")
  const [author, setAuthor] = useState('')                   // optional; server will default from Basic Auth username
  const [labelsText, setLabelsText] = useState('')           // comma-separated labels
  const [quality, setQuality] = useState(0.82)               // WebP quality 0..1
  const [files, setFiles] = useState([])
  const fileInputRef = useRef(null)

  // list state
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [busy, setBusy] = useState(false)

  useEffect(() => { refresh() }, [])

  async function refresh() {
    setLoading(true)
    try {
      const res = await fetch('/api/manifest', { cache: 'no-store' })
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      console.error(e)
      alert('Failed to load manifest')
    } finally {
      setLoading(false)
    }
  }

  function pickFiles() { fileInputRef.current?.click() }
  function onPick(e) { setFiles(Array.from(e.target.files || [])) }
  function onDrop(e) {
    e.preventDefault()
    setFiles(Array.from(e.dataTransfer.files || []))
  }

  async function uploadAll() {
    if (!files.length) { alert('Pick files first'); return }
    setBusy(true)
    try {
      for (const original of files) {
        const webpFile = await fileToWebP(original, quality)
        const ct = webpFile.type // 'image/webp'

        // 1) presign using .webp name + content type
        const presignRes = await fetch('/api/admin/presign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: webpFile.name,
            contentType: ct,
            folder: groupPath   // reuse as key prefix; server stores a separate "group" too
          })
        })
        if (!presignRes.ok) {
          const text = await presignRes.text()
          throw new Error(`presign failed: ${presignRes.status} ${text}`)
        }
        const { key, uploadUrl } = await presignRes.json()

        // 2) PUT directly to R2
        const put = await fetch(uploadUrl, { method: 'PUT', body: webpFile, headers: { 'Content-Type': ct } })
        if (!put.ok) throw new Error(`PUT failed for ${webpFile.name}: ${put.status}`)

        // 3) append metadata to index.json
        const addRes = await fetch('/api/admin/add-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            key,
            filename: webpFile.name,
            author,               // optional; server will fallback to auth username
            labels: labelsText,   // comma string or array; server normalizes to []
            group: groupPath,     // path-like
            size: webpFile.size,
            contentType: ct
          })
        })
        if (!addRes.ok) {
          const text = await addRes.text()
          throw new Error(`add-image failed: ${addRes.status} ${text}`)
        }
      }

      setFiles([])
      setLabelsText('')
      await refresh()
      alert('Upload complete (converted to WebP)')
    } catch (e) {
      console.error(e)
      alert(e.message || 'Upload failed')
    } finally {
      setBusy(false)
    }
  }

  // inline updates
  async function updateItem(key, fields) {
    try {
      const res = await fetch('/api/admin/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, ...fields })
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`update failed: ${res.status} ${text}`)
      }
    } catch (e) {
      console.error(e)
      alert(e.message || 'Update failed')
    }
  }

  // optimistic delete
  async function deleteItem(key) {
    if (!confirm('Delete this image (R2 object + manifest entry)?')) return
    setItems(prev => prev.filter(it => it.key !== key))
    try {
      const res = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`delete failed: ${res.status} ${text}`)
      }
      // optional re-sync
      await refresh()
    } catch (e) {
      console.error(e)
      alert(e.message || 'Delete failed')
      await refresh() // revert if server failed
    }
  }

  return (
    <div style={{ maxWidth: 1100, margin: '40px auto', fontFamily: 'system-ui', padding: '0 16px' }}>
      <h1 style={{ marginBottom: 10 }}>Admin — R2 Gallery</h1>

      {/* Upload panel */}
      <div style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 16, background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, color: '#666' }}>Group (path)</label>
            <input value={groupPath} onChange={e=>setGroupPath(e.target.value)}
              style={{ width:'100%', padding:8, borderRadius:8, border:'1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#666' }}>Author</label>
            <input value={author} onChange={e=>setAuthor(e.target.value)}
              placeholder="(optional; defaults to auth user)"
              style={{ width:'100%', padding:8, borderRadius:8, border:'1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#666' }}>Labels (comma-separated)</label>
            <input value={labelsText} onChange={e=>setLabelsText(e.target.value)}
              placeholder="e.g. sunset, rooftop"
              style={{ width:'100%', padding:8, borderRadius:8, border:'1px solid #ccc' }} />
          </div>
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
          <label style={{ fontSize: 12, color: '#666' }}>WebP Quality</label>
          <input type="range" min="0.4" max="1" step="0.01"
            value={quality}
            onChange={e => setQuality(parseFloat(e.target.value))}
            style={{ flex: 1 }} />
          <Badge>{quality.toFixed(2)}</Badge>
        </div>

        <div
          onDragOver={e => e.preventDefault()}
          onDrop={onDrop}
          style={{
            marginTop: 14, padding: 20, textAlign: 'center',
            border: '2px dashed #bbb', borderRadius: 12, background: '#fafafa'
          }}
        >
          <p style={{ margin: 0, color: '#666' }}>Drag & drop images here</p>
          <button onClick={pickFiles}
            style={{ marginTop: 8, padding: '8px 14px', borderRadius: 8, border: '1px solid #ddd', background: '#fff' }}>
            Choose files…
          </button>
          <input ref={fileInputRef} type="file" multiple accept="image/*" style={{ display:'none' }} onChange={onPick} />
          <p style={{marginTop:6, color:'#777', fontSize:12}}>
            PNG/JPG will be converted to <code>.webp</code> before upload.
          </p>
        </div>

        {!!files.length && (
          <div style={{ marginTop: 10 }}>
            <strong>{files.length}</strong> file(s) selected
            <ul style={{ marginTop: 6 }}>
              {files.map(f => (
                <li key={f.name} style={{ fontSize: 13, color: '#444' }}>
                  {f.name} — {Math.round(f.size / 1024)} KB
                </li>
              ))}
            </ul>
            <button disabled={busy} onClick={uploadAll}
              style={{ padding: '10px 16px', borderRadius: 8, background: '#222', color: '#fff', border: 'none' }}>
              {busy ? 'Uploading…' : 'Upload'}
            </button>
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div style={{ marginTop: 18, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={refresh} disabled={loading || busy}
          style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #ddd', background: '#fff' }}>
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
        <span style={{ fontSize: 12, color: '#777' }}>
          {items.length} item{items.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div style={{
        marginTop: 12,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))',
        gap: 12
      }}>
        {items.map(it => (
          <Card key={it.key} it={it} onUpdate={updateItem} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  )
}

function Card({ it, onUpdate, onDelete }) {
  const [localAuthor, setLocalAuthor] = useState(it.author || '')
  const [localLabels, setLocalLabels] = useState((it.labels || []).join(', '))
  const [localGroup, setLocalGroup] = useState(it.group || '')

  return (
    <div style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 10, background: '#fff' }}>
      <div style={{ position: 'relative', width: '100%', height: 160, overflow: 'hidden', borderRadius: 8, background: '#f4f4f4' }}>
        <img
          src={it.url}
          alt={it.filename}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </div>

      <div style={{ marginTop: 8, fontSize: 12, color: '#555', wordBreak: 'break-all' }}>{it.key}</div>
      <div style={{ marginTop: 4, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge>{it.contentType || 'image'}</Badge>
        {it.size ? <Badge>{Math.round(it.size / 1024)} KB</Badge> : null}
        {it.uploadedAt ? <Badge>{new Date(it.uploadedAt).toLocaleString()}</Badge> : null}
      </div>

      <div style={{ marginTop: 8, display: 'grid', gap: 6 }}>
        <input
          value={localAuthor}
          onChange={e => setLocalAuthor(e.target.value)}
          onBlur={() => localAuthor !== (it.author || '') && onUpdate(it.key, { author: localAuthor })}
          placeholder="Author"
          style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 14 }}
        />
        <input
          value={localLabels}
          onChange={e => setLocalLabels(e.target.value)}
          onBlur={() => onUpdate(it.key, { labels: localLabels /* comma string; server normalizes */ })}
          placeholder="Labels (comma-separated)"
          style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 14 }}
        />
        <input
          value={localGroup}
          onChange={e => setLocalGroup(e.target.value)}
          onBlur={() => localGroup !== (it.group || '') && onUpdate(it.key, { group: localGroup })}
          placeholder="Group path"
          style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccc', fontSize: 14 }}
        />
      </div>

      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <a href={it.url} target="_blank" rel="noreferrer"
          style={{ flex: 1, textAlign: 'center', padding: '8px 10px', border: '1px solid #ddd', borderRadius: 8, textDecoration: 'none', color: '#222' }}>
          Open
        </a>
        <button
          onClick={() => onDelete(it.key)}
          style={{ padding: '8px 10px', borderRadius: 8, background: '#b91c1c', color: '#fff', border: 'none' }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
