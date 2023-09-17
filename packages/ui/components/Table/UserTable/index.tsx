import React, { useState } from 'react'

import DataTable, { TableColumn } from 'react-data-table-component'
import { deleteUser } from 'services/user-service'

import UpdateUserModal from '../../Modal/UpdateUserModal'
import Toast from '../../Toast'
import { IUser } from '../Interface/UserInterfaces'
import { IUserTableProps } from '../Interface/UserTableInterfaces'
const UserTable: React.FC<IUserTableProps> = ({ userData }) => {
  const [toastMessage, setToastMessage] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false) // State to control the visibility of the create form/modal
  const [showUpdateModal, setShowUpdateModal] = useState(false) // State to control the visibility of the update modal
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

  // Function to open the update modal
  const openUpdateModal = (user: IUser) => {
    setSelectedUser(user)
    setShowUpdateModal(true)
  }

  // Function to close the update modal
  const closeUpdateModal = () => {
    setSelectedUser(null)
    setShowUpdateModal(false)
  }
  const columns: TableColumn<IUser>[] = [
    {
      name: 'Id',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Username',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: 'Birth Date',
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: 'Update',
      cell: (row) => (
        <button
          className="bg-main-darker hover:bg-main-lighter text-white font-bold py-2 px-4 rounded"
          onClick={() => handleUpdate(row)}
        >
          Update
        </button>
      ),
    },
    {
      name: 'Delete',
      cell: (row) => (
        <button
          className="bg-error-1 hover:bg-error-2 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(row.id, row.username)}
        >
          Delete
        </button>
      ),
    },
    // Add more columns for additional user data
  ]

  const handleUpdate = (row: IUser) => {
    // Implement your update logic here
    openUpdateModal(row)
    console.log(`Update user with ID: ${row.id}`)
  }
  const handleCreateClick = () => {
    // Implement logic to show the create form/modal
    setShowCreateForm(true)
  }
  const handleDelete = (userId: any, userName: string) => {
    // Implement your delete logic here
    deleteUser(userId)
      .then(() => {
        const message = `User ${userName} has been deleted.`
        setToastMessage(message)
        console.log(`Delete user with ID: ${userId}`)
      })
      .catch((error) => {
        // Handle error if delete fails
        console.error(`Error deleting user with ID ${userId}: ${error.message}`)
      })
  }

  return (
    <div>
      <div className="mb-2">
        <button
          className=" bg-btcorange hover:bg-lightorange text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateClick}
        >
          Create User
        </button>
      </div>

      {showCreateForm && <div></div>}
      {userData && (
        <>
          <DataTable title="Users" columns={columns} data={userData} pagination paginationPerPage={10} />
          {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
          {showUpdateModal && selectedUser && <UpdateUserModal user={selectedUser} onClose={closeUpdateModal} />}
        </>
      )}
    </div>
  )
}

export default UserTable
