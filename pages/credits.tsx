import { Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Layout from '~root/components/Layout'
import Nav from '~root/components/Nav'

export default function Credits() {
  return (
    <>
      <NextSeo title='Credits' />

      <Layout>
        <Text color='white'>Ini Credits</Text>
      </Layout>
    </>
  )
}
