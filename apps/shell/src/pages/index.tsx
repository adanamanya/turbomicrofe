/* eslint-disable @next/next/no-img-element */

import { ReactElement } from 'react'

import Card from '@/components/Card'
import MainLayout from '@/layouts/MainLayout'
const Home = () => {
  return <Card />
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default Home
