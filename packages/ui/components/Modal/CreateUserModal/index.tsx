import React, { useEffect, useState } from 'react'

import { addUser } from 'services/user-service'

import Toast from '../../Toast'

interface CreateUserModalProps {
  onClose: () => void
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onClose }) => {
  // State to store form data and control the visibility of the success toast
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  // Function to handle input changes and update formData state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement your create logic here using the createUser service
    addUser(formData)
      .then(() => {
        // Show success toast and close the modal
        setShowSuccessToast(true)
      })
      .catch((error) => {
        // Handle error if the create fails
        console.error(`Error creating user: ${error.message}`)
      })
  }
  useEffect(() => {
    if (showSuccessToast) {
      // Delay the execution of onClose() by a few seconds
      const timer = setTimeout(() => {
        onClose()
      }, 699) // Adjust the time delay as needed (e.g., 3000 milliseconds or 3 seconds)

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer)
    }
  }, [showSuccessToast, onClose])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {showSuccessToast && (
        // Render the success toast if showSuccessToast is true
        <Toast message="User created successfully." onClose={() => setShowSuccessToast(false)} />
      )}

      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Modal */}
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative z-50">
        <h2 className="text-2xl font-bold mb-4">Create User</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-1">Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-1">
              Password
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input ml-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-dark-1">
              Show Password
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="form-checkbox ml-2"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-dark-2 dark-1 px-4 py-2 rounded hover:bg-dark-3 focus:outline-none"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-btcorange text-white px-4 py-2 rounded hover:bg-lightorange focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUserModal
