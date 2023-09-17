// ExpandedRowComponent.tsx
import React from 'react'

const ExpandedRowComponent: React.FC<{ data: any }> = ({ data }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)

export default ExpandedRowComponent
