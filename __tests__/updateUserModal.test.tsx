import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import UpdateUserModal from '../packages/ui/components/Modal/UpdateUserModal'

// Mock the updateUser function
jest.mock('services/user-service', () => ({
  updateUser: jest.fn(),
}))

// Mock a user object
const mockUser = {
  id: 1,
  username: 'testuser',
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-7890',
  password: 'password123',
}

describe('UpdateUserModal', () => {
  it('renders component with form fields', () => {
    render(<UpdateUserModal user={mockUser} onClose={() => {}} />)

    expect(screen.getByText('Update User')).toBeInTheDocument()
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

    // Mock the updateUser function to resolve
    const updateUserMock = require('services/user-service').updateUser
    updateUserMock.mockResolvedValue()

    render(<UpdateUserModal user={mockUser} onClose={onClose} />)

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'newusername' } })
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Smith' } })
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '987-654-3210' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'newpassword123' } })

    // Submit the form
    fireEvent.click(screen.getByText('Submit'))

    // Wait for the success toast to appear
    await waitFor(() => {
      expect(screen.getByText('User updated successfully.')).toBeInTheDocument()
    })

    // Verify that updateUser was called with the correct data
    expect(updateUserMock).toHaveBeenCalledWith(
      {
        username: 'newusername',
        firstName: 'Jane',
        lastName: 'Smith',
        phone: '987-654-3210',
        password: 'newpassword123',
      },
      mockUser.id
    )

    // Verify that the onClose callback was called
    expect(onClose).toHaveBeenCalled()
  })

  it('disables submit button when required fields are empty', () => {
    render(<UpdateUserModal onClose={() => {}} />)

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
