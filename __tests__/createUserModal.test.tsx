import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import CreateUserModal from '../packages/ui/components/Modal/CreateUserModal'
// Import the custom matchers
import '@testing-library/jest-dom/extend-expect'
// Mock the addUser function
jest.mock('services/user-service', () => ({
  addUser: jest.fn(),
}))

describe('CreateUserModal', () => {
  it('renders component with form fields', () => {
    render(<CreateUserModal onClose={() => {}} />)

    expect(screen.getByText('Create User Form')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByText('Show Password')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const onClose = jest.fn()
    const mockUser = {
      username: 'testuser',
      firstName: 'John',
      lastName: 'Doe',
      phone: '123-456-7890',
      password: 'password123',
    }

    // Mock the addUser function to resolve with the mockUser data
    const addUserMock = require('services/user-service').addUser
    addUserMock.mockResolvedValue(mockUser)

    render(<CreateUserModal onClose={onClose} />)

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: mockUser.username } })
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: mockUser.firstName } })
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: mockUser.lastName } })
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: mockUser.phone } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: mockUser.password } })

    // Submit the form
    fireEvent.click(screen.getByText('Submit'))

    // Wait for the success toast to appear
    await waitFor(() => {
      expect(screen.getByText('User created successfully.')).toBeInTheDocument()
    })

    // Verify that addUser was called with the correct data
    expect(addUserMock).toHaveBeenCalledWith(mockUser)

    // Verify that the onClose callback was called
    expect(onClose).toHaveBeenCalled()
  })

  it('disables submit button when required fields are empty', () => {
    render(<CreateUserModal onClose={() => {}} />)

    // Check if the submit button is disabled
    const submitButton = screen.getByText('Submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    // Fill out some form fields
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } })
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } })

    // Submit button should still be disabled
    expect(submitButton.disabled).toBe(true)

    // Fill out the remaining required fields
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '123-456-7890' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } })

    // Submit button should not be disabled
    expect(submitButton.disabled).toBe(false)
  })
})
