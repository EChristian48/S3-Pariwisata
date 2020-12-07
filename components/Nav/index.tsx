import { Flex } from '@chakra-ui/react'
import { useToggler } from 'molohooks'
import { HamburgerSpring } from 'react-animated-burgers'
import { WRAPPER_ID } from '~root/lib/constants'

const MENU_WRAPPER_ID = 'menu-wrapper-id'

export default function Nav() {
  const [isDrawerOpen, openDrawer, closeDrawer, toggleDrawer] = useToggler()

  return (
    <>
      <Flex width='full' id={WRAPPER_ID}>
        <HamburgerSpring isActive={isDrawerOpen} toggleButton={toggleDrawer} />
      </Flex>
    </>
  )
}
