import React from 'react'

import { Navbar } from 'ui'

import useNavbar from '@/hooks/components/Navbar/useNavbar'

// import TransactionMenu from './Menu/TransactionMenu'

const NavbarWrapper = () => {
  const { activePath, showSubmenu, minimize, toggleMinimizeNavbar, expandSubmenu } = useNavbar()
  return (
    <div>
      <Navbar minimize={minimize} toggleMinimizeNavbar={toggleMinimizeNavbar} activePath={activePath} />
    </div>
  )
}

export default NavbarWrapper
