import { Box, Center, Heading } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export type FeaturedPlaceProps = {
  photoUrl: string
  name: string
}

export default function FeaturedPlace({ name, photoUrl }: FeaturedPlaceProps) {
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
    <Box
      onMouseEnter={() => {
        imageControl.start({ filter: 'brightness(90%)' })
      }}
      onMouseLeave={() => {
        imageControl.start({ filter: 'brightness(50%)' })
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        animate={{ position: 'relative' }}
      >
        <motion.img src={photoUrl} animate={imageControl} />
        <Center height='full' width='full' position='absolute' top={0}>
          <Heading color='white' textAlign='center'>
            {name}
          </Heading>
        </Center>
      </motion.div>
    </Box>
  )
}
