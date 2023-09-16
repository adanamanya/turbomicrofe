import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

const useNavbar = () => {
  const router = useRouter()
  const [activePath, setActivePath] = useState<string>('')
  const [minimize, setMinimize] = useState<boolean>(false)
  const [showSubmenu, setShowSubmenu] = useState<boolean>(true)

  const expandSubmenu = () => {
    setShowSubmenu(!showSubmenu)
  }

  const toggleMinimizeNavbar = () => {
    setMinimize(!minimize)
  }

  useEffect(() => {
    setActivePath(router?.pathname)
  }, [router?.pathname])

  return {
    activePath,
    showSubmenu,
    minimize,
    expandSubmenu,
    toggleMinimizeNavbar,
  }
}

export default useNavbar
