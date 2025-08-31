import { S3Client, PutObjectCommand, GetObjectCommand, HeadObjectCommand, DeleteObjectCommand, PutObjectTaggingCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const endpoint = `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`
export const bucket = process.env.R2_BUCKET_NAME
export const publicBase = process.env.R2_PUBLIC_BASE_URL || ''

export const s3 = new S3Client({
  region: 'auto',
  endpoint,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})

export const presignPut = (Key, ContentType='application/octet-stream') =>
  getSignedUrl(s3, new PutObjectCommand({ Bucket: bucket, Key, ContentType }), { expiresIn: 300 })

export const presignGet = (Key) =>
  getSignedUrl(s3, new GetObjectCommand({ Bucket: bucket, Key }), { expiresIn: 600 })

export const headObject = (Key) =>
  s3.send(new HeadObjectCommand({ Bucket: bucket, Key })).catch(e => (e?.$metadata?.httpStatusCode===404 ? null : Promise.reject(e)))

export const deleteObject = (Key) =>
  s3.send(new DeleteObjectCommand({ Bucket: bucket, Key }))

export const toPublicUrl = (Key) => publicBase ? `${publicBase}/${Key}` : null
