// userStore.ts
import { UserService } from 'services'
import create from 'zustand'

interface Iuser {
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

interface IuserStore {
  users: Iuser[] | null
  fetchUsers: () => Promise<void>
}

export const useUserStore = create<IuserStore>((set) => ({
  users: null,

  fetchUsers: async () => {
    try {
      // Fetch user data from the API
      const response = await UserService.getUser()
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }

      const data = await response.json()

      // Update the store with the fetched user data
      set({ users: data })
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  },
}))
