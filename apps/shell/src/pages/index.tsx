import { ReactElement } from 'react'

import MainLayout from '@/layouts/MainLayout'

const Home = () => {
  return <div></div>
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default Home
