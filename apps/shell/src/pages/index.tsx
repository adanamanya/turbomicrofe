/* eslint-disable @next/next/no-img-element */
import { ReactElement, Suspense } from 'react'

import dynamic from 'next/dynamic'

// Wrap the dynamic import in a no-ssr component
const RemoteHome = dynamic(() => import('@/apps/home/src/pages/index'), {
  ssr: false,
})
import MainLayout from '@/layouts/MainLayout'
const Home = () => {
  return (
    <div className="card w-full">
      <Suspense fallback={<p>Loading...</p>}>
        <RemoteHome />
      </Suspense>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default Home
