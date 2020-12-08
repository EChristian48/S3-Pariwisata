import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

const CustomHeading2: FC = ({ children }) => (
  <Heading size='xl' marginBottom={4}>
    {children}
  </Heading>
)

export default CustomHeading2
