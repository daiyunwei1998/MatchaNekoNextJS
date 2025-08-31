// app/api/manifest/route.js
import { NextResponse } from 'next/server'
import { readManifest, withUrl } from '@/app/api/_manifest'

export async function GET() {
  const raw = await readManifest()
  const items = await Promise.all(raw.map(withUrl))
  return NextResponse.json({ items })
}
