import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-0 py-3 h-10 bg-btcorange text-xs text-center text-white w-full">
      <span>©{new Date().getFullYear()} Turbo Micro Frontend Basecode by adanamanya </span>
    </div>
  )
}

export default Footer
