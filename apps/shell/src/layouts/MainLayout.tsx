import React, { ReactNode } from 'react'

import Div100vh from 'react-div-100vh'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

interface IMainLayout {
  children: ReactNode
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <Div100vh className="flex flex-col">
      <Header />
      <div className="flex flex-row grow overflow-auto">
        <Navbar />
        {/* dashboard content */}
        <div className="flex flex-1 bg-greycontent p-6 overflow-auto">{children}</div>
      </div>
      <Footer />
    </Div100vh>
  )
}

export default MainLayout
