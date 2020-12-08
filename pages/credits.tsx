import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Layout from '~root/components/Layout'
import LinkWrapper from '~root/components/LinkWrapper'
import Nav from '~root/components/Nav'

export default function Credits() {
  return (
    <>
      <NextSeo title='Credits' />

      <Layout>
        <Center
          width='full'
          height='100vh'
          color='white'
          flexDirection='column'
        >
          <VStack>
            <Heading>Punten Bogor</Heading>
            <Text>Dibuat oleh: SMK Wikrama Bogor</Text>
            <Heading>Attribution:</Heading>
            <OrderedList>
              <ListItem>
                <LinkWrapper
                  nextProps={{ href: 'https://unsplash.com/@fikranjabbart' }}
                >
                  Foto Tempat Sampah
                </LinkWrapper>
              </ListItem>

              <ListItem>
                <LinkWrapper
                  nextProps={{
                    href:
                      'https://unsplash.com/photos/rLQRti5Jfho?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
                  }}
                >
                  Foto Kereta
                </LinkWrapper>
              </ListItem>

              <ListItem>
                <LinkWrapper
                  nextProps={{
                    href: 'www.flaticon.com/authors/freepik',
                  }}
                >
                  Logo
                </LinkWrapper>
              </ListItem>
            </OrderedList>
          </VStack>
        </Center>
      </Layout>
    </>
  )
}
