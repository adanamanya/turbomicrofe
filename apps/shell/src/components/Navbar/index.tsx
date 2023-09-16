import React from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Link from 'next/link'

import useNavbar from '@/hooks/components/Navbar/useNavbar'

// import TransactionMenu from './Menu/TransactionMenu'

const Navbar = () => {
  const { activePath, showSubmenu, minimize, toggleMinimizeNavbar, expandSubmenu } = useNavbar()
  return (
    <div
      className="flex flex-col bg-white text-sm transition-all duration-500"
      style={{ width: minimize ? '60px' : '230px' }}
    >
      <div
        className={`flex flex-row items-center justify-between py-4 px-6 cursor-pointer hover:bg-info-1 hover:text-white ${
          activePath === '/' ? 'bg-info-1 text-white' : 'bg-white text-info-1'
        }`}
      >
        {!minimize && (
          <Link passHref href="/" className="font-semibold">
            Beranda
          </Link>
        )}
        <button className="bg-main-primary p-0.5 rounded-full text-white outline-none" onClick={toggleMinimizeNavbar}>
          {minimize ? <ArrowForwardIcon fontSize="small" /> : <ArrowBackIcon fontSize="small" />}
        </button>
      </div>
      {/* navigation menu */}
      {/* <TransactionMenu
        activePath={activePath}
        minimize={minimize}
        showSubmenu={showSubmenu}
        expandSubmenu={expandSubmenu}
      /> */}
    </div>
  )
}

export default Navbar
