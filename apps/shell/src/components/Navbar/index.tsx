import React from 'react'

import { Navbar } from 'ui'

import useNavbar from '@/hooks/components/Navbar/useNavbar'

const NavbarWrapper = () => {
  const { activePath, minimize, toggleMinimizeNavbar } = useNavbar()
  return (
    <div>
      <Navbar minimize={minimize} toggleMinimizeNavbar={toggleMinimizeNavbar} activePath={activePath} />
    </div>
  )
}

export default NavbarWrapper
