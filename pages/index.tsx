import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import path from 'path'
import { useEffect, useState } from 'react'
import { Remarkable } from 'remarkable'
import FeaturedPlace from '~root/components/FeaturedPlace'
import Nav from '~root/components/Nav'
import { WRAPPER_ID } from '~root/lib/constants'
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

      <Nav />

      <Box backgroundColor='gray.900' padding={2}>
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
          <Container maxWidth='100%'>
            <Heading
              color='white'
              fontFamily='Caveat'
              textAlign='center'
              size='4xl'
              paddingTop={56}
            >
              Hayu urang ka Bogor!
            </Heading>
            <Heading
              textAlign='center'
              color='white'
              fontFamily='Nanum Pen Script'
              size='2xl'
              marginTop={2}
            >
              Di Bogor, seueur hal anu matak pikabungaheun!
            </Heading>
          </Container>
        </Box>

        <Box backgroundColor='gray.900' paddingBottom='3000px'>
          <Container maxWidth={['100%', , '80%']} paddingTop={8}>
            <Heading textAlign='center' fontFamily='Caveat' color='white'>
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
        </Box>
      </Box>
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
