import React from 'react'

import { fireEvent, render, waitFor } from '@testing-library/react'

import UserTable from '../packages/ui/components/Table/UserTable'
import '@testing-library/jest-dom/extend-expect' // Import jest-dom for additional matchers

// Mock the deleteUser function (assuming it's an async function)
jest.mock('services/user-service', () => ({
  deleteUser: jest.fn(() => Promise.resolve()),
}))

describe('UserTable component', () => {
  const mockUserData = [
    {
      id: 1,
      username: 'testuser1',
      // Add other necessary properties for testing
    },
    // Add more user data as needed
  ]

  it('renders without errors', () => {
    const { getByText } = render(<UserTable userData={mockUserData} />)
    // Assert that the "Create User" button is rendered
    expect(getByText('Create User')).toBeInTheDocument()
  })

  it('shows "Create User" modal when the button is clicked', () => {
    const { getByText } = render(<UserTable userData={mockUserData} />)
    const createButton = getByText('Create User')

    fireEvent.click(createButton)

    // Assert that the Create User modal content is rendered
    expect(getByText('Create User Modal Content')).toBeInTheDocument() // Replace with actual modal content check
  })

  it('deletes a user when the "Delete" button is clicked', async () => {
    const { getByText } = render(<UserTable userData={mockUserData} />)
    const deleteUserButton = getByText('Delete')

    fireEvent.click(deleteUserButton)

    // Wait for the deleteUser function to resolve
    await waitFor(() => {
      // Assert that the deleteUser function is called with the correct arguments
      expect(deleteUser).toHaveBeenCalledWith(1, 'testuser1')
    })

    // Assert that the success message is displayed
    expect(getByText('User testuser1 has been deleted.')).toBeInTheDocument()
  })

  // Add more test cases for other functionalities as needed
})
