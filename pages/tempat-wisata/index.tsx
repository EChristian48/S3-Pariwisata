import { Container, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Layout from '~root/components/Layout'
import Nav from '~root/components/Nav'

export default function TempatWisata() {
  return (
    <>
      <NextSeo title='Tempat Wisata' />

      <Layout>
        <Container  >

        </Container>
        <Text color='white'>Ini Tempat Wisata</Text>
      </Layout>
    </>
  )
}
