import React from 'react'

import { act, render, screen } from '@testing-library/react'

import Toast from '../packages/ui/components/Toast'

describe('Toast', () => {
  it('renders with the given message', () => {
    const message = 'Test message'
    const onClose = jest.fn()

    render(<Toast message={message} onClose={onClose} />)

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  it('calls onClose after the timeout', async () => {
    jest.useFakeTimers()

    const message = 'Test message'
    const onClose = jest.fn()

    render(<Toast message={message} onClose={onClose} />)

    // Initial state
    expect(screen.getByText(message)).toBeInTheDocument()

    // Wait for the timeout to complete
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // Toast should be removed
    expect(screen.queryByText(message)).toBeNull()

    // onClose should be called
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('clears the timeout on unmount', async () => {
    jest.useFakeTimers()

    const message = 'Test message'
    const onClose = jest.fn()

    const { unmount } = render(<Toast message={message} onClose={onClose} />)

    // Simulate unmounting
    unmount()

    // Advance timers to ensure the timeout is not called after unmount
    act(() => {
      jest.advanceTimersByTime(3000)
    })

    // onClose should not be called
    expect(onClose).not.toHaveBeenCalled()
  })
})
