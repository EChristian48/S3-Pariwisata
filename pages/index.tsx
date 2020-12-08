import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import FeaturedPlace from '~root/components/FeaturedPlace'
import Layout from '~root/components/Layout'
import LinkWrapper from '~root/components/LinkWrapper'
import { useMediumScreen } from '~root/lib/hooks'
import { getPostsDatas } from '~root/lib/tempat-wisata'
import { PostData } from '~root/lib/types'

type HomeProps = {
  featuredPlaces: PostData[]
}

export default function Home({ featuredPlaces }: HomeProps) {
  const isMediumScreen = useMediumScreen()

  return (
    <>
      <NextSeo title='Home' />

      <Layout>
        <Box padding={2}>
          <Box
            background='
              linear-gradient(
                rgba(0, 0, 0, 0.5), 
                rgba(0, 0, 0, 0.3)
              ),
              url(tong-sampah.jpg)'
            backgroundSize='cover'
            backgroundPosition={['center', , '50% 0%']}
            minHeight='500px'
          >
            <Container
              maxWidth={['100%', , '60%']}
              marginLeft={isMediumScreen ? 8 : 'auto'}
              height='full'
            >
              <Heading color='white' size='2xl' paddingTop={48}>
                Hayu urang ka Bogor!
              </Heading>
              <Text color='white' fontSize='2xl' marginTop={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                labore optio libero quis doloremque culpa in similique vero
                illum, dolorem, nemo aliquid deleniti omnis provident quo fuga,
                error magni eos.
              </Text>
            </Container>
          </Box>

          <Container maxWidth={['100%', , '80%']} paddingY={4} paddingTop={8}>
            <Heading textAlign='center' color='white'>
              Tempat Pilihan buat kamu:
            </Heading>

            <Stack
              marginTop={8}
              spacing={4}
              justify='center'
              direction={isMediumScreen ? 'row' : 'column'}
              width='full'
              align='center'
            >
              {featuredPlaces
                .slice(0, 3)
                .map(({ metadata: { name, photoUrl }, id }) => (
                  <LinkWrapper
                    nextProps={{ href: `/tempat-wisata/${id}` }}
                    key={id}
                  >
                    <FeaturedPlace {...{ photoUrl, name }} />
                  </LinkWrapper>
                ))}
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const postDatas = getPostsDatas()
  return {
    props: {
      featuredPlaces: postDatas,
    },
  }
}
