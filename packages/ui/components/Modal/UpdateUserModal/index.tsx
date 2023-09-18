import React, { useEffect, useState } from 'react'

import { updateUser } from 'services/user-service'

import { IUser } from '../../Table/Interface/UserInterfaces'
import Toast from '../../Toast'
interface UpdateUserModalProps {
  user: IUser // Replace with your user type/interface
  onClose: () => void
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({ user, onClose }) => {
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    password: user.password,
  })

  const [showPassword, setShowPassword] = useState(false) // Initially hide the password

  // State variable to control the submit button
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

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
    // Implement your update logic here using the updateUser service
    updateUser(formData, user.id)
      .then(() => {
        // Show success message and close the modal
        setShowSuccessToast(true)
      })
      .catch((error) => {
        // Handle error if the update fails
        console.error(`Error updating user: ${error.message}`)
      })
  }

  useEffect(() => {
    // Check if all required fields are filled
    const isFormValid = Object.values(formData).every((value) => !!value)
    setIsSubmitDisabled(!isFormValid)
  }, [formData])

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
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      {/* Modal */}
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative z-50">
        <h2 className="text-2xl font-bold mb-4">Update User</h2>
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
      {showSuccessToast && <Toast message="User updated successfully." onClose={() => setShowSuccessToast(false)} />}
    </div>
  )
}

export default UpdateUserModal
