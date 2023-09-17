// userStore.ts
import { UserService } from 'services'
import create from 'zustand'

import { IuserStore } from './interface'

export const useUserStore = create<IuserStore>((set) => ({
  users: [],

  fetchUsers: async () => {
    try {
      // Fetch user data from the API
      const response = await UserService.getUser()
      // Update the store with the fetched user data
      set({ users: response.users })
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  },
}))

export default useUserStore
