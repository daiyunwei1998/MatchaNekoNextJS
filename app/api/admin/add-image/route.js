import { NextResponse } from 'next/server'
import { readManifest, writeManifest, withUrl } from '@/app/api/_manifest'
import { normalizeLabels, normalizeGroup, getAuthorFromAuth } from '@/app/api/_meta' // or wherever you placed helpers

export async function POST(req) {
  const body = await req.json()
  const {
    key,
    filename,
    // accept either 'labels' (array) or 'label' (string) from older UI
    labels: labelsIn,
    label: labelIn,
    group: groupIn,
    parentFolder, // for backward-compat UI
    size = null,
    contentType = null,
    author: authorIn
  } = body

  const author = authorIn || getAuthorFromAuth(req) || 'admin'
  const labels = normalizeLabels(labelsIn ?? labelIn)
  const group = normalizeGroup(groupIn ?? parentFolder)

  const entry = {
    key,
    filename,
    author,
    labels,
    uploadedAt: new Date().toISOString(),
    group,
    size,
    contentType
  }

  // insert/replace by key
  const list = await readManifest()
  const i = list.findIndex(x => x.key === key)
  if (i >= 0) list.splice(i, 1)
  list.unshift(entry)
  await writeManifest(list)

  return NextResponse.json(await withUrl(entry))
}
