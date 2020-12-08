import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import Particles from 'react-particles-js'
import Nav from '~root/components/Nav'
import { useMediumScreen } from '~root/lib/hooks'

const Layout: FC = ({ children }) => {
  const isMediumScreen = useMediumScreen()

  return (
    <>
      <Nav />

      <Box paddingTop={isMediumScreen ? '85px' : '75px'}>{children}</Box>

      <Box
        backgroundColor='gray.900'
        position='fixed'
        zIndex={-1}
        top={0}
        width='full'
        height='full'
      >
        <Particles
          params={{
            'particles': {
              'number': {
                'value': 60,
                'density': {
                  'enable': true,
                  'value_area': 1500,
                },
              },
              'line_linked': {
                'enable': true,
                'opacity': 0.02,
              },
              'move': {
                'direction': 'right',
                'speed': 0.05,
              },
              'size': {
                'value': 1,
              },
              'opacity': {
                'anim': {
                  'enable': true,
                  'speed': 1,
                  'opacity_min': 0.05,
                },
              },
            },
            'interactivity': {
              'events': {
                'onclick': {
                  'enable': true,
                  'mode': 'push',
                },
              },
              'modes': {
                'push': {
                  'particles_nb': 1,
                },
              },
            },
            'retina_detect': true,
          }}
        />
      </Box>
    </>
  )
}

export default Layout
