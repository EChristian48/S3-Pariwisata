import { Container } from '@chakra-ui/react'
import htmr from 'htmr'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import CustomHeading1 from '~root/components/CustomHeading1'
import CustomHeading2 from '~root/components/CustomHeading2'
import CustomParagraph from '~root/components/CustomParagraph'
import Layout from '~root/components/Layout'
import {
  cleanFileName,
  getSinglePlaceData,
  placesFileNames,
} from '~root/lib/tempat-wisata'
import { PostData } from '~root/lib/types'

type DetailTempatProps = {
  postData: PostData
}

type DetailTempatParams = {
  nama: string
}

export default function DetailTempat({
  postData: {
    metadata: { name },
    content,
  },
}: DetailTempatProps) {
  return (
    <>
      <NextSeo title={name} />

      <Layout>
        <Container maxWidth='60%' color='white'>
          {htmr(content, {
            transform: {
              h1: CustomHeading1,
              h2: CustomHeading2,
              p: CustomParagraph,
            },
          })}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<DetailTempatParams> = async () => {
  const cleanedRoutes = placesFileNames.map(cleanFileName)

  return {
    paths: cleanedRoutes.map(route => ({ params: { nama: route } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  DetailTempatProps,
  DetailTempatParams
> = async ({ params: { nama } }) => {
  const postData = getSinglePlaceData(nama)
  return {
    props: {
      postData,
    },
  }
}
