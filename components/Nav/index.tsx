import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  Portal,
  SkeletonCircle,
  Slide,
} from '@chakra-ui/react'
import { useToggler } from 'molohooks'
import { HamburgerSpring } from 'react-animated-burgers'
import { useMediumScreen } from '~root/lib/hooks'
import { menus } from '~root/lib/menus'
import DrawerItem from './DrawerItem'
import NavItem from './NavItem'

const widths = ['60px', , '70px']
const navHeights = ['70px', , '80px']

export default function Nav() {
  const [isDrawerOpen, , , toggleDrawer] = useToggler()
  const isMediumScreen = useMediumScreen()

  return (
    <>
      <Container maxWidth='full' position='fixed' zIndex={1}>
        <Flex width='full' height={navHeights} alignItems='center'>
          <Image
            src='/logo.png'
            width={widths}
            height={widths}
            marginLeft={4}
            marginRight='auto'
            fallback={<SkeletonCircle width={widths} height={widths} />}
          />

          {isMediumScreen ? (
            <HStack spacing={8} marginRight={8}>
              {menus.map(({ href, label }) => (
                <NavItem {...{ href, label }} key={label} />
              ))}
            </HStack>
          ) : (
            <HamburgerSpring
              isActive={isDrawerOpen}
              toggleButton={toggleDrawer}
              barColor='white'
            />
          )}
        </Flex>
      </Container>

      <Portal>
        <Slide in={isDrawerOpen} direction='bottom'>
          <Box backgroundColor='gray.900' height='300px'>
            <Grid
              height='full'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(2, 1fr)'
              gap={2}
              padding={2}
            >
              {menus.map(({ href, label }, index) => (
                <DrawerItem
                  key={label}
                  {...{ href, label }}
                  rowspan={index ? 1 : 2}
                />
              ))}
            </Grid>
          </Box>
        </Slide>
      </Portal>
    </>
  )
}
