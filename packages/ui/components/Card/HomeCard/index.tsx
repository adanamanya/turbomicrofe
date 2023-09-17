/* eslint-disable @next/next/no-img-element */
import React from 'react'
const HomeCard = () => {
  return (
    <div className="rounded overflow-hidden shadow-2xl bg-gray-100 ">
      {/* // eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="object-cover h-85 w-full"
        src="https://www.ccn.com/wp-content/uploads/2023/07/bitcoin-ordinals-cover.webp"
        alt="BTC"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Turbo Repo Micro Frontend Basecode</div>
        <p className="text-gray-700 text-base">
          This Basecode created for experimental and project purpose by adanamanya/alleyboss
        </p>
        <ul>
          <li>
            <a
              className="inline-block bg-btcorange px-3 py-1 text-sm font-semibold text-dark-1 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out"
              href={'https://github.com/adanamanya'}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-btcorange px-3 py-1 text-sm font-semibold text-dark-1 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out"
              href={'https://www.linkedin.com/in/gilang-ilsan-tama-lubis-39a24a122/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-btcorange px-3 py-1 text-sm font-semibold text-dark-1 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out"
              href={'https://twitter.com/AlleyBo55'}
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-btcorange rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out">
          #tailwindCSS
        </span>
        <span className="inline-block bg-btcorange rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out">
          #ReactJS
        </span>
        <span className="inline-block bg-btcorange rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out">
          #NextJS
        </span>
        <span className="inline-block bg-btcorange rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out">
          #TurboRepo
        </span>
        <span className="inline-block bg-btcorange rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-lightorange transition delay-50 duration-300 ease-in-out">
          #MicroFrontend
        </span>
      </div>
    </div>
  )
}

export default HomeCard
