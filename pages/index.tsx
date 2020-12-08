import { Box, Center, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useAnimation } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import path from 'path'
import { useEffect, useState } from 'react'
import { Remarkable } from 'remarkable'
import FeaturedPlace from '~root/components/FeaturedPlace'
import Layout from '~root/components/Layout'
import { useMediumScreen } from '~root/lib/hooks'
import { PostData } from '~root/lib/types'

type HomeProps = {
  featuredPlaces: PostData[]
}

export default function Home({ featuredPlaces }: HomeProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const isMediumScreen = useMediumScreen()
  const imageControl = useAnimation()
  const textControl = useAnimation()

  useEffect(() => {
    imageControl.start({
      objectFit: 'cover',
      filter: 'brightness(50%)',
      height: '300px',
      width: '300px',
      zIndex: -1,
    })
  }, [])

  return (
    <>
      <NextSeo title='Home' />

      <Layout>
        <Box padding={2} paddingTop={0}>
          <Box
            background='
              linear-gradient(
                rgba(0, 0, 0, 0.5), 
                rgba(0, 0, 0, 0.3)
              ),
              url(tong-sampah.jpg)'
            backgroundSize='cover'
            backgroundPosition={['center', , '50% 0%']}
            minHeight='100vh'
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
              {featuredPlaces.map(
                ({ metadata: { name, photoUrl, shortDesc } }) => (
                  <FeaturedPlace {...{ photoUrl, name }} key={name} />
                )
              )}
            </Stack>
          </Container>

          <Container
            maxWidth='100%'
            backgroundColor='black'
            marginTop={4}
            padding={2}
          >
            <Center>
              <Text color='white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem accusamus facilis alias quisquam voluptatibus hic
                impedit dolorum dolorem ab! Placeat quis provident odio est
                cumque nostrum delectus non itaque dolor. Ini Footer
              </Text>
            </Center>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

const placesDir = path.join(process.cwd(), 'places')

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
      featuredPlaces: postDatas,
    },
  }
}
