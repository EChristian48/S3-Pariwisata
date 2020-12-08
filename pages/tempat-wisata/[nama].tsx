import { Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '~root/components/Layout'
import { getSinglePlaceData, placesFileNames } from '~root/lib/tempat-wisata'
import { PostData } from '~root/lib/types'
import parser from 'html-react-parser'
import { cleanFileName } from '~root/lib/tempat-wisata'

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
        <Text color='white'>Ini {name}</Text>

        {parser(content)}
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
