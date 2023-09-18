import { act } from '@testing-library/react-hooks'

import { useUserStore } from '../packages/store/src/userStore' // Update the import path

// Mock the UserService module
jest.mock('services', () => ({
  UserService: {
    getUser: jest.fn(),
  },
}))

describe('useUserStore', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch and update users', async () => {
    const mockUsers: any[] = [
      // Insert sample user data here
    ]

    // Mock the UserService.getUser method to return the mockUsers data
    const getUserMock = jest.spyOn(require('services').UserService, 'getUser')
    getUserMock.mockResolvedValue({ users: mockUsers })

    const store = useUserStore()

    expect(store.users).toEqual([])

    await act(async () => {
      await store.fetchUsers()
    })

    expect(getUserMock).toHaveBeenCalled()
    expect(store.users).toEqual(mockUsers)
  })

  it('should handle fetch error', async () => {
    const errorMessage = 'Failed to fetch'

    // Mock the UserService.getUser method to throw an error
    const getUserMock = jest.spyOn(require('services').UserService, 'getUser')
    getUserMock.mockRejectedValue(new Error(errorMessage))

    const store = useUserStore()

    expect(store.users).toEqual([])

    await act(async () => {
      await store.fetchUsers()
    })

    expect(getUserMock).toHaveBeenCalled()
    expect(store.users).toEqual([])
    expect(console.error).toHaveBeenCalledWith('Error fetching user data:', expect.any(Error))
  })
})
