// UserTable.tsx

import React from 'react'

import { UserTable } from 'ui'

import { IUserTableProps } from '../hooks/interfaces/UserTableInterfaces'

const UserList: React.FC<IUserTableProps> = ({ userDataTable }) => {
  return (
    <div>
      <UserTable userData={userDataTable} />
    </div>
  )
}

export default UserList
