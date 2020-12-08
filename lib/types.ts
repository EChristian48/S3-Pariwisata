export type PostMetaData = {
  name?: string
  photoUrl?: string
  shortDesc?: string
  [key: string]: any
}

export type PostData = {
  metadata: PostMetaData
  content: string
  id: string
}
