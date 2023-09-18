/* eslint-disable @next/next/no-img-element */
import { ReactElement, Suspense } from 'react'

import Lottie from 'lottie-react'
import dynamic from 'next/dynamic'

import loadingAnim from '../../../public/assets/image/loading.json'
import useUserData from '../../hooks/pages/UserList/useUserData'
// Wrap the dynamic import in a no-ssr component
const RemoteTable = dynamic(() => import('@/apps/user-list/src/pages/index'), {
  ssr: false,
})
import MainLayout from '@/layouts/MainLayout'
const UserList = () => {
  const { users, loading, error } = useUserData()
  if (loading) {
    // Use Lottie animation here
    return (
      <div className="flex items-center justify-center w-screen">
        <Lottie animationData={loadingAnim} /> {/* Replace with your animation data */}
      </div>
    )
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="card w-full">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-screen">
            <Lottie animationData={loadingAnim} /> {/* Replace with your animation data */}
          </div>
        }
      >
        <RemoteTable userDataTable={users} />
      </Suspense>
    </div>
  )
}

UserList.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default UserList
