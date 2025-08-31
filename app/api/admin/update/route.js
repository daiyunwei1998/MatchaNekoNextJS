import { NextResponse } from 'next/server'
import { readManifest, writeManifest } from '@/app/api/_manifest'
import { normalizeLabels, normalizeGroup } from '@/app/api/_meta'

export async function POST(req) {
  const { key, title,  author, labels, label, group, parentFolder, description } = await req.json()

  const list = await readManifest()
  const i = list.findIndex(x => x.key === key)
  if (i < 0) return NextResponse.json({ error: 'not found' }, { status: 404 })

  const next = { ...list[i] }

  if (author !== undefined) next.author = String(author).slice(0, 100)
  if (labels !== undefined || label !== undefined) next.labels = normalizeLabels(labels ?? label)
  if (group !== undefined || parentFolder !== undefined) next.group = normalizeGroup(group ?? parentFolder)
  if (title !== undefined) next.title = String(title).slice(0, 200)


  // keep backward-compatible fields if you had them (optional):
  if (description !== undefined) next.description = String(description)

  list[i] = next
  await writeManifest(list)
  return NextResponse.json(next)
}
