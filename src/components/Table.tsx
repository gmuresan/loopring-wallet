import React from 'react'

const Table = ({ headerNames, children }: { headerNames: string[], children: React.ReactNode[]}) => {
  return (
    <table>
      <thead>
        <tr>
          {headerNames.map((name) => (
            <th key={name}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )

}

export default Table
