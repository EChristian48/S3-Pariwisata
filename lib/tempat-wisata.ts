import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Remarkable } from 'remarkable'
import { PostData } from '~root/lib/types'

export const placesDir = path.join(process.cwd(), 'places')
export const placesFileNames = fs.readdirSync(placesDir)

export function getPostsDatas(fileNames: string[] = placesFileNames) {
  const md = new Remarkable()

  const postDatas: PostData[] = fileNames.map(fileName => {
    const filePath = path.join(placesDir, fileName)
    const fileContent = fs.readFileSync(filePath)
    const matterData = matter(fileContent)
    const parsed = md.render(matterData.content)
    return {
      content: parsed,
      metadata: matterData.data,
    }
  })

  return postDatas
}

export function getSinglePlaceData(fileName: string): PostData {
  const md = new Remarkable()

  const fileContent = fs.readFileSync(path.join(placesDir, `${fileName}.md`))

  const matterData = matter(fileContent)
  const parsed = md.render(matterData.content)

  return { content: parsed, metadata: matterData.data }
}
