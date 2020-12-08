import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

const CustomHeading1: FC = ({ children }) => (
  <Heading size='2xl' marginBottom={4}>
    {children}
  </Heading>
)

export default CustomHeading1
