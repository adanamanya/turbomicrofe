import React from 'react'

import DataTable, { TableColumn } from 'react-data-table-component'

import { IUser } from '../Interface/UserInterfaces'
import { IUserTableProps } from '../Interface/UserTableInterfaces'
const UserTable: React.FC<IUserTableProps> = ({ userData }) => {
  const columns: TableColumn<IUser>[] = [
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
    // Add more columns for additional user data
  ]

  return (
    <div>
      <h1>User List</h1>
      {userData && <DataTable title="Users" columns={columns} data={userData} pagination paginationPerPage={10} />}
    </div>
  )
}

export default UserTable
