import { Container, Text } from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import path from 'path'
import { Remarkable } from 'remarkable'
import Layout from '~root/components/Layout'
import { PostData } from '~root/lib/types'

type TempatWisataProps = {
  places: PostData[]
}

export default function TempatWisata() {
  return (
    <>
      <NextSeo title='Tempat Wisata' />

      <Layout>
        <Container></Container>
        <Text color='white'>Ini Tempat Wisata</Text>
      </Layout>
    </>
  )
}

const placesDir = path.join(process.cwd(), 'places')

export const getStaticProps: GetStaticProps<TempatWisataProps> = async () => {
  const md = new Remarkable()
  const fileNames = fs.readdirSync(placesDir)
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
  return {
    props: {
      places: postDatas,
    },
  }
}
