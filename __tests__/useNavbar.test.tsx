import { act, renderHook } from '@testing-library/react-hooks'
import { useRouter } from 'next/router'

import useNavbar from '../apps/shell/src/hooks/components/Navbar/useNavbar' // Update the import path as per your project structure

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('useNavbar', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockClear()
  })

  it('should initialize with default values', () => {
    ;(useRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/home',
    })

    const { result } = renderHook(() => useNavbar())

    expect(result.current.activePath).toBe('/home')
    expect(result.current.minimize).toBe(false)
  })

  it('should update activePath when router pathname changes', () => {
    const { result, rerender } = renderHook(() => useNavbar())

    // Mock the useRouter function
    ;(useRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/home',
    })

    // Re-render the hook
    rerender()

    expect(result.current.activePath).toBe('/home')

    // Mock the useRouter function again for a different pathname
    ;(useRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/about',
    })

    // Re-render the hook
    rerender()

    expect(result.current.activePath).toBe('/about')
  })
  it('should toggle minimize state', () => {
    const { result } = renderHook(() => useNavbar())

    act(() => {
      result.current.toggleMinimizeNavbar()
    })

    expect(result.current.minimize).toBe(true)

    act(() => {
      result.current.toggleMinimizeNavbar()
    })

    expect(result.current.minimize).toBe(false)
  })
})
