import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import path from 'path'
import { useState } from 'react'
import { Remarkable } from 'remarkable'
import Nav from '~root/components/Nav'
import { WRAPPER_ID } from '~root/lib/constants'
import { PostData } from '~root/lib/types'

type HomeProps = {
  featuredPlaces: PostData[]
}

export default function Home({ featuredPlaces }: HomeProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <>
      <NextSeo title='Home' />

      <Nav />

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

      <Box>
        <Container maxWidth={['100%', , '80%']} marginTop={8}>
          <Heading textAlign='center' fontFamily='Caveat'>
            Tempat Pilihan buat kamu:
          </Heading>

          <VStack marginTop={8} spacing={4}>
            {featuredPlaces.map(
              ({ metadata: { name, photoUrl, shortDesc } }) => (
                <SimpleGrid columns={2} key={name}>
                  <Center width='full' height='full' flexDirection='column'>
                    <Heading fontFamily='Nanum Pen Script' textAlign='center'>
                      {name}
                    </Heading>
                    <Text textAlign='center'>{shortDesc}</Text>
                  </Center>

                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Image src={photoUrl} objectFit='cover' rounded='10px' />
                  </motion.div>
                </SimpleGrid>
              )
            )}
          </VStack>
        </Container>
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
