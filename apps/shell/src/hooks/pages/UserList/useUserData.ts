import { useEffect, useState } from 'react'

import { userStore } from 'store' // Update the import path

interface IUser {
  firstName: string
  lastName: string
  age: number
  id: number
  maidenName: string
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  eyeColor: string
}

interface IUserData {
  users: IUser[] | null
}

interface IUserHookData extends IUserData {
  loading: boolean
  error: Error | null
}

function useUserData(): IUserHookData {
  const { users, fetchUsers } = userStore()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Call the fetchUsers function when the component mounts
    fetchUsers()
      .then(() => {
        setLoading(false)
        setError(null)
      })
      .catch((err: Error) => {
        setLoading(false)
        setError(err)
      })
  }, [fetchUsers])

  return { users, loading, error }
}

export default useUserData
