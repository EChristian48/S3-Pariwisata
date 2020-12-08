import { Center, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import path from 'path'
import FeaturedPlace from '~root/components/FeaturedPlace'
import Layout from '~root/components/Layout'
import LinkWrapper from '~root/components/LinkWrapper'
import { getPostsDatas } from '~root/lib/tempat-wisata'
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
            {places.map(({ metadata: { name, photoUrl }, id }) => (
              <Center height='100%' width='100%' key={name}>
                <LinkWrapper nextProps={{ href: `/tempat-wisata/${id}` }}>
                  <FeaturedPlace {...{ name, photoUrl }} />
                </LinkWrapper>
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
  const postDatas = getPostsDatas()
  return {
    props: {
      places: postDatas,
    },
  }
}
