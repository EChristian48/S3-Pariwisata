import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import LinkWrapper from '../LinkWrapper'

export type NavItemProps = {
  href: string
  label: string
}

export default function NavItem({ href, label }: NavItemProps) {
  const { pathname } = useRouter()

  return (
    <motion.div
      animate={{
        display: 'flex',
        flexDirection: 'column-reverse',
        y: 0,
      }}
      whileHover={{ y: 20 }}
      whileTap={{ y: 20 }}
    >
      <LinkWrapper
        nextProps={{ href }}
        chakraProps={{
          textAlign: 'center',
          backgroundColor: pathname === href ? 'white' : 'black',
          paddingTop: 8,
          color: pathname === href ? 'black' : 'white',
          paddingBottom: 2,
          roundedBottom: 'lg',
          paddingX: 6,
          position: 'relative',
          top: -6,
          borderWidth: '2px',
        }}
      >
        {label}
      </LinkWrapper>
    </motion.div>
  )
}
