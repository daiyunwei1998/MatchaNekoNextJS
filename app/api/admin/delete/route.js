import { NextResponse } from 'next/server'
import { deleteObject } from '@/lib/r2'
import { readManifest, writeManifest } from '@/app/api/_manifest'

// sanity probe so you can visit /api/admin/delete in the browser
export async function GET() {
  return NextResponse.json({ ok: true, route: '/api/admin/delete' })
}

export async function POST(req) {
  const { key } = await req.json()
  if (!key) return NextResponse.json({ error: 'key required' }, { status: 400 })

  // delete the R2 object (ignore 404s)
  try { await deleteObject(key) } catch (_) {}

  // remove from index.json
  const list = await readManifest()
  const next = list.filter(item => item.key !== key)
  await writeManifest(next)

  return NextResponse.json({ ok: true })
}
