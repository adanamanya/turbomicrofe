import React from 'react'

import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex z-10 flex-row justify-between items-center py-3 px-6 shadow">
      <Image alt="logo-alteacare" src="/assets/images/alteacare-logo.svg" width={125} height={35} priority />
      <div className="flex flex-row gap-x-5 items-center">
        {/* avatar btn */}
        <div className="group inline-block relative">
          <div className="p-2 hover:bg-main-subtle rounded-full">
            <button className="p-1 px-1.5 text-white bg-main-darker rounded-full">ABC</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
