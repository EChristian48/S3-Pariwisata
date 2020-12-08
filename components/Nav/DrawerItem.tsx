import { Box, Center, GridItem, Text } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import LinkWrapper from '../LinkWrapper'

export type DrawerItemProps = {
  rowspan: number
  label: string
  href: string
}

export default function DrawerItem({ label, rowspan, href }: DrawerItemProps) {
  const controls = useAnimation()

  return (
    <GridItem rowSpan={rowspan}>
      <LinkWrapper nextProps={{ href }}>
        <Box
          width='full'
          height='full'
          backgroundColor='gray.700'
          position='relative'
          overflow='hidden'
          onMouseEnter={async () => {
            await controls.start({
              y: 0,
              backgroundColor: '#A0AEC0',
              width: '100%',
              height: '100%',
              zIndex: 0,
            })
          }}
          onMouseLeave={async () => {
            await controls.start({
              y: -300,
              backgroundColor: '#A0AEC0',
              width: '100%',
              height: '100%',
            })
          }}
        >
          <Center position='absolute' width='full' height='full'>
            <Text color='white' fontSize='xl' zIndex={1}>
              {label}
            </Text>
          </Center>

          <motion.div
            initial={{
              y: -100,
            }}
            animate={controls}
          />
        </Box>
      </LinkWrapper>
    </GridItem>
  )
}
