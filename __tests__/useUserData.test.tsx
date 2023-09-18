import { renderHook } from '@testing-library/react-hooks'

import useUserData from '../apps/shell/src/hooks/pages/UserList/useUserData' // Update the import path

// Mock the userStore module
jest.mock('store', () => ({
  userStore: () => ({
    users: [],
    fetchUsers: jest.fn(),
  }),
}))

describe('useUserData', () => {
  it('should return initial loading state as true', () => {
    const { result } = renderHook(() => useUserData())

    expect(result.current.loading).toBe(true)
  })

  it('should return users data when fetch is successful', async () => {
    // Mock a successful fetchUsers function
    const mockUsers = [
      // Insert sample user data here
    ]
    const fetchUsersMock = jest.fn().mockResolvedValue(mockUsers)

    // Mock the userStore to return the fetchUsers mock
    jest.mock('store', () => ({
      userStore: () => ({
        users: [],
        fetchUsers: fetchUsersMock,
      }),
    }))

    const { result, waitForNextUpdate } = renderHook(() => useUserData())

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
    expect(result.current.users).toEqual(mockUsers)
  })

  it('should return an error when fetch fails', async () => {
    // Mock a failed fetchUsers function
    const error = new Error('Fetch failed')
    const fetchUsersMock = jest.fn().mockRejectedValue(error)

    // Mock the userStore to return the fetchUsers mock
    jest.mock('store', () => ({
      userStore: () => ({
        users: [],
        fetchUsers: fetchUsersMock,
      }),
    }))

    const { result, waitForNextUpdate } = renderHook(() => useUserData())

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.error).toEqual(error)
    expect(result.current.users).toBeNull()
  })
})
