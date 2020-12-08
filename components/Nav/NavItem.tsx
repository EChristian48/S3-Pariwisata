import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import LinkWrapper from '../LinkWrapper'

export type NavItemProps = {
  href: string
  label: string
}

export default function NavItem({ href, label }: NavItemProps) {
  const { pathname } = useRouter()

  return (
    <Box
      color={pathname === href ? 'white' : 'gray.300'}
      _hover={{ color: 'white' }}
      textDecoration={pathname === href ? 'underline' : 'none'}
      textTransform='uppercase'
      key={label}
    >
      <LinkWrapper nextProps={{ href }}>{label}</LinkWrapper>
    </Box>
  )
}
