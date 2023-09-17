import React from 'react'

import Image from 'next/image'

interface IheaderLogo {
  url: string
}

const Header = ({ url }: IheaderLogo) => {
  return (
    <div className="flex z-10 flex-row items-center py-3 px-6 shadow">
      <Image alt="logo-btc" src={url} width={65} height={25} priority />
      <div className="p-2 hover:bg-main-subtle">
        <button className="p-1 px-3 text-white bg-btcorange">This is Header</button>
      </div>
    </div>
  )
}

export default Header
