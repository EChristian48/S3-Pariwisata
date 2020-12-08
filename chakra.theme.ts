import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
  fonts: {
    body: 'Raleway, system-ui, sans-serif',
    heading: 'Coda, Georgia, serif',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 400,
      },
    },
  },
})
