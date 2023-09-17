import React from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Link from 'next/link'

import SideMenu from './SideMenu'
// import TransactionMenu from './Menu/TransactionMenu'

interface InavbarHooks {
  minimize: boolean
  toggleMinimizeNavbar: () => void
  activePath: string
}

const Navbar = ({ minimize, toggleMinimizeNavbar, activePath }: InavbarHooks) => {
  return (
    <div
      className="flex flex-col  bg-white text-sm transition-all duration-500"
      style={{ width: minimize ? '60px' : '230px' }}
    >
      <div
        className={`flex flex-row items-center justify-between py-4 px-6 cursor-pointer hover:bg-orange hover:text-white ${
          activePath === '/' ? 'bg-btcorange text-white' : 'bg-white text-btcorange'
        }`}
      >
        {!minimize && (
          <Link passHref href="/" className="font-semibold">
            Home
          </Link>
        )}
        <button className="p-0.5 rounded-full text-white outline-none" onClick={toggleMinimizeNavbar}>
          {minimize ? <ArrowForwardIcon fontSize="small" /> : <ArrowBackIcon fontSize="small" />}
        </button>
      </div>
      {/* navigation menu */}
      <SideMenu minimize={minimize} activePath={activePath} />
    </div>
  )
}

export default Navbar
