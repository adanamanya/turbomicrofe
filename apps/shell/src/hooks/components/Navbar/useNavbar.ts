import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

const useNavbar = () => {
  const router = useRouter()
  const [activePath, setActivePath] = useState<string>('')
  const [minimize, setMinimize] = useState<boolean>(false)

  const toggleMinimizeNavbar = () => {
    setMinimize(!minimize)
  }

  useEffect(() => {
    setActivePath(router?.pathname)
  }, [router?.pathname])

  return {
    activePath,
    minimize,
    toggleMinimizeNavbar,
  }
}

export default useNavbar
