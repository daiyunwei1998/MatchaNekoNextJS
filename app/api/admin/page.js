await fetch('/api/admin/add-image', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    key, filename: file.name,
    label, description,
    parentFolder: folder,
    size: file.size,
    contentType: file.type
  })
})
