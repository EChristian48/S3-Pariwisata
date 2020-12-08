import { Text } from '@chakra-ui/react'
import { FC } from 'react'

const CustomParagraph: FC = ({ children }) => (
  <Text fontSize='xl' marginBottom={2}>
    {children}
  </Text>
)

export default CustomParagraph
