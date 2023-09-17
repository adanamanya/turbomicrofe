// ExpandedRowComponent.tsx
import React from 'react'

import { IUser } from '../../Interface/UserInterfaces'

interface ExpandedRowProps {
  data: IUser
}

const ExpandedRowComponent: React.FC<ExpandedRowProps> = ({ data }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)

export default ExpandedRowComponent
