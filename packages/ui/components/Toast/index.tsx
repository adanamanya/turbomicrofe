import React, { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`${
        show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } transition-transform duration-300 ease-in-out fixed top-5 right-5 bg-info-1 text-white px-4 py-2 rounded shadow`}
    >
      {message}
    </div>
  )
}

export default Toast
