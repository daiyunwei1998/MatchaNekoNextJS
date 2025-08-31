'use client'
import { useEffect, useMemo, useState } from 'react'
import Gallery from '../components/Gallery' // unchanged

// ---- tiny utils (scoped to this file; no global CSS) ----
const asDate = (v) => {
  const d = v ? new Date(v) : null
  return isNaN(d?.getTime?.()) ? null : d
}
const uniqSorted = (arr) => Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b))
const sanitizeGroup = (g='') => g.replace(/\\/g,'/').replace(/^\/|\/$/g,'')
const pill = (active) => ({
  padding: '6px 10px', borderRadius: 999,
  border: `1px solid ${active ? '#111' : '#ddd'}`,
  background: active ? '#111' : '#fff',
  color: active ? '#fff' : '#111',
  cursor: 'pointer', fontSize: 13
})

export default function Page() {
  const [rawItems, setRawItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // filters (additive UI; does not affect your Gallery styles)
  const [search, setSearch] = useState('')
  const [selAuthors, setSelAuthors] = useState(new Set())
  const [selLabels, setSelLabels] = useState(new Set())
  const [groupPath, setGroupPath] = useState('') // navigate subgroups like "foo/bar"

  // fetch from NEW API (data source change)
  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/manifest', { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const { items } = await res.json()

        if (!alive) return
        // normalize + sort (latest first)
        const norm = (items || []).map(it => {
          const uploadedAt = asDate(it.uploadedAt) || asDate(it.createdAt)
          return {
            ...it,
            _uploadedAtISO: uploadedAt ? uploadedAt.toISOString() : null,
            group: sanitizeGroup(it.group || '')
          }
        }).sort((a,b) => (b._uploadedAtISO || '').localeCompare(a._uploadedAtISO || ''))

        setRawItems(norm)
      } catch (e) {
        console.error(e)
        setError('Failed to load gallery.')
      } finally {
        setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [])

  // scope by group (exact group only); compute authors/labels/subgroups/breadcrumbs
  const { scoped, authors, labels, subgroups, crumbs } = useMemo(() => {
    const scoped = rawItems.filter(it => groupPath ? it.group === groupPath : true)

    const authors = uniqSorted(scoped.map(it => it.author || '').filter(Boolean))
    const labels  = uniqSorted(
      scoped.flatMap(it => Array.isArray(it.labels) ? it.labels : []).filter(Boolean)
    )

    // subgroups under current group
    const subs = new Set()
    const pfx = groupPath ? groupPath + '/' : ''
    rawItems.forEach(it => {
      if (!it.group) return
      if (!groupPath) {
        subs.add(it.group.split('/')[0])
      } else if (it.group.startsWith(pfx) && it.group !== groupPath) {
        const rest = it.group.slice(pfx.length)
        const first = rest.split('/')[0]
        if (first) subs.add(first)
      }
    })

    // breadcrumbs
    const crumbs = [{ label: 'All', path: '' }]
    if (groupPath) {
      let acc = ''
      groupPath.split('/').forEach(seg => {
        acc = acc ? `${acc}/${seg}` : seg
        crumbs.push({ label: seg, path: acc })
      })
    }

    return { scoped, authors, labels, subgroups: Array.from(subs).sort(), crumbs }
  }, [rawItems, groupPath])

  // apply filters inside scoped set
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const filterAuthors = selAuthors.size > 0
    const filterLabels  = selLabels.size > 0

    return scoped.filter(it => {
      if (filterAuthors && !selAuthors.has(it.author || '')) return false
      if (filterLabels) {
        const ls = new Set(Array.isArray(it.labels) ? it.labels : [])
        const hasAny = [...selLabels].some(l => ls.has(l))
        if (!hasAny) return false
      }
      if (q) {
        const t = (it.title || '').toLowerCase()
        if (!t.includes(q)) return false
      }
      return true
    })
  }, [scoped, search, selAuthors, selLabels])

  // map to your ORIGINAL Gallery shape (do not change Gallery)
  const galleryData = useMemo(() => {
    return filtered.map(it => ({
      parentFolder: it.group || '',                // original field
      filename: it.filename,                       // original field
      label: Array.isArray(it.labels) ? it.labels.join(', ') : (it.label || ''), // original "label" was a string
      path: it.url,                                // original field used as image src
      // we’re only ADDING extras; Gallery can ignore them safely
      title: it.title || '',
      author: it.author || '',
      uploadedAt: it._uploadedAtISO || null
    }))
  }, [filtered])

  // helpers
  const toggleAuthor = (a) => {
    const next = new Set(selAuthors); next.has(a) ? next.delete(a) : next.add(a); setSelAuthors(next)
  }
  const toggleLabel  = (l) => {
    const next = new Set(selLabels); next.has(l) ? next.delete(l) : next.add(l); setSelLabels(next)
  }
  const clearFilters = () => { setSearch(''); setSelAuthors(new Set()); setSelLabels(new Set()) }
  const gotoGroup    = (p) => { setGroupPath(p); clearFilters() }

  return (
    <div>
      {/* Sticky filter bar – added UI, does not touch your Gallery styles */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 16px' }}>
          {/* breadcrumbs */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:10 }}>
            {crumbs.map(c => (
              <button key={c.path || 'root'} onClick={() => gotoGroup(c.path)}
                style={{
                  background: c.path === groupPath ? '#111' : '#f4f4f5',
                  color: c.path === groupPath ? '#fff' : '#111',
                  border: '1px solid #ddd', borderRadius: 999, padding: '6px 10px', fontSize: 13, cursor:'pointer'
                }}
                title={c.path || 'root'}
              >{c.label}</button>
            ))}
          </div>

          {/* subgroup chips */}
          {subgroups.length > 0 && (
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:10 }}>
              <span style={{ fontSize:12, color:'#666', alignSelf:'center' }}>Subgroups:</span>
              {subgroups.map(sg => (
                <button key={sg} onClick={() => gotoGroup(groupPath ? `${groupPath}/${sg}` : sg)}
                  style={{ padding:'6px 10px', borderRadius:999, border:'1px solid #ddd', background:'#fff', fontSize:13, cursor:'pointer' }}
                >{sg}</button>
              ))}
            </div>
          )}

          {/* search + filters */}
          <div style={{ display:'grid', gap:10 }}>
            <div style={{ display:'flex', gap:10 }}>
              <input
                value={search}
                onChange={e=>setSearch(e.target.value)}
                placeholder="Search by title…"
                style={{ flex:1, padding:10, borderRadius:10, border:'1px solid #ddd', fontSize:14, outline:'none' }}
              />
              {(search || selAuthors.size || selLabels.size) ? (
                <button onClick={clearFilters}
                  style={{ padding:'10px 14px', borderRadius:10, border:'1px solid #ddd', background:'#fff', cursor:'pointer' }}>
                  Clear
                </button>
              ) : null}
            </div>

            {authors.length > 0 && (
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                <span style={{ fontSize:12, color:'#666', alignSelf:'center' }}>Authors:</span>
                {authors.map(a => (
                  <span key={a || '(none)'} onClick={()=>toggleAuthor(a)} style={pill(selAuthors.has(a))}>
                    {a || '—'}
                  </span>
                ))}
              </div>
            )}

            {labels.length > 0 && (
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                <span style={{ fontSize:12, color:'#666', alignSelf:'center' }}>Labels:</span>
                {labels.map(l => (
                  <span key={l} onClick={()=>toggleLabel(l)} style={pill(selLabels.has(l))}>
                    #{l}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Your original Gallery — untouched — now fed by the new API */}
      <div style={{ maxWidth: 1200, margin: '16px auto', padding: '0 16px' }}>
        {loading ? (
          <div style={{ padding:20, color:'#666' }}>Loading…</div>
        ) : error ? (
          <div style={{ padding:20, color:'#b91c1c' }}>{error}</div>
        ) : (
          <Gallery data={galleryData} />
        )}
      </div>
    </div>
  )
}
