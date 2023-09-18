import React, { useEffect, useState } from 'react'

import { addUser } from 'services/user-service'

import Toast from '../../Toast'

interface CreateUserModalProps {
  onClose: () => void
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    // Check if any required field is empty
    const requiredFields = ['username', 'firstName', 'lastName', 'phone', 'password']
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field])

    setIsSubmitDisabled(isAnyFieldEmpty)
  }

  const handleSubmit = () => {
    addUser(formData)
      .then(() => {
        setShowSuccessToast(true)
      })
      .catch((error) => {
        console.error(`Error creating user: ${error.message}`)
      })
  }

  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => {
        onClose()
      }, 699) // Adjust the time delay as needed (e.g., 3000 milliseconds or 3 seconds)

      return () => clearTimeout(timer)
    }
  }, [showSuccessToast, onClose])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {showSuccessToast && <Toast message="User created successfully." onClose={() => setShowSuccessToast(false)} />}

      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

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
              className={`${
                isSubmitDisabled ? 'bg-dark-3 cursor-not-allowed' : 'bg-btcorange hover:bg-lightorange'
              } text-white px-4 py-2 rounded focus:outline-none`}
              disabled={isSubmitDisabled}
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
