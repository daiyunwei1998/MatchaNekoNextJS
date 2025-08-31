import { NextResponse } from 'next/server'
import { presignPut } from '@/lib/r2'  // uses your existing r2.js

export async function POST(req) {
  const { filename, contentType, folder = 'gposes' } = await req.json()
  const safe = filename.replace(/[^a-zA-Z0-9._-]/g, '_')
  const key = folder ? `${folder}/${safe}` : safe

  const uploadUrl = await presignPut(key, contentType || 'application/octet-stream')
  return NextResponse.json({ key, uploadUrl })
}
