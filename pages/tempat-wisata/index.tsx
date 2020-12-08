import { Center, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import path from 'path'
import { Remarkable } from 'remarkable'
import FeaturedPlace from '~root/components/FeaturedPlace'
import Layout from '~root/components/Layout'
import { PostData } from '~root/lib/types'

type TempatWisataProps = {
  places: PostData[]
}

export default function TempatWisata({ places }: TempatWisataProps) {
  return (
    <>
      <NextSeo title='Tempat Wisata' />

      <Layout>
        <Container maxWidth='100%'>
          <Heading color='white' textAlign='center'>
            Tempat Wisata Unggulan di Bogor
          </Heading>
        </Container>

        <Container maxWidth='100%' marginTop={16}>
          <SimpleGrid columns={[2, , 4]} color='white' spacing='4'>
            {places.map(({ metadata: { name, photoUrl } }) => (
              <Center height='100%' width='100%' key={name}>
                <FeaturedPlace {...{ name, photoUrl }} />
              </Center>
            ))}
          </SimpleGrid>
        </Container>
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
