import { s3, bucket, toPublicUrl, presignGet } from '@/lib/r2'
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'

const KEY = 'index.json'

export function normalizeLabels(input) {
  if (!input) return []
  const list = Array.isArray(input)
    ? input
    : String(input).split(',') // allow comma-separated from UI
  return [...new Set(list
    .map(s => String(s).trim())
    .filter(Boolean)
    .slice(0, 50) // safety cap
  )]
}

export function normalizeGroup(input) {
  if (!input) return ''
  // keep letters, numbers, / _ - ; collapse duplicate slashes
  return String(input)
    .trim()
    .replace(/\\/g, '/')
    .replace(/[^a-zA-Z0-9/_-]/g, '-')
    .replace(/\/{2,}/g, '/')
    .replace(/^\/|\/$/g, '') // no leading/trailing slash
}

export function getAuthorFromAuth(req) {
  try {
    const auth = req.headers.get('authorization') || ''
    const [scheme, b64] = auth.split(' ')
    if ((scheme || '').toLowerCase() !== 'basic' || !b64) return null
    const [user] = Buffer.from(b64, 'base64').toString().split(':')
    return user || null
  } catch {
    return null
  }
}


export async function readManifest() {
  try {
    const res = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: KEY }))
    const text = await res.Body.transformToString()
    return JSON.parse(text || '[]')
  } catch {
    return [] // if not exists yet
  }
}

export async function writeManifest(json) {
  const Body = Buffer.from(JSON.stringify(json, null, 2))
  await s3.send(new PutObjectCommand({
    Bucket: bucket, Key: KEY, Body, ContentType: 'application/json'
  }))
}

export async function withUrl(item) {
  const pub = toPublicUrl(item.key)
  return { ...item, url: pub || await presignGet(item.key) }
}
