import { HStack, Portal } from '@chakra-ui/react'
import { menus } from '~root/lib/menus'
import NavItem from './NavItem'

export default function Nav() {
  return (
    <Portal>
      <HStack width='full' justify='center' position='fixed' top={0}>
        {menus.map(({ href, label }) => (
          <NavItem key={label} href={href} label={label} />
        ))}
      </HStack>
    </Portal>
  )
}
