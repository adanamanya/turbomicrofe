import React from 'react'

import PeopleIcon from '@material-ui/icons/PeopleAlt'
import Link from 'next/link'

interface IProps {
  activePath: string
  minimize: boolean
}

const SideMenu = ({ activePath, minimize }: IProps) => {
  return (
    <div className="transition-all">
      <Link
        passHref
        href="/user-list"
        className={`flex flex-row items-center px-4 gap-x-2 py-3 text-sm cursor-pointer border-l-3 whitespace-nowrap hover:text-white hover:bg-btcorange hover:border-lightorange ${
          activePath?.includes('user-list') ? 'bg-btcorange border-lightorange text-white' : 'bg-white text-orange'
        }`}
      >
        <PeopleIcon fontSize="medium" />
        {!minimize && <span>User List</span>}
      </Link>
    </div>
  )
}

export default SideMenu
