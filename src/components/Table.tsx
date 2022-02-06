import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border: 1px solid black;
  th, td {
    border: 1px solid black;
    padding: 5px;
    border-collapse: collapse;
  }

`

const Table = ({ headerNames, children }: { headerNames: string[], children: React.ReactNode[]}) => {
  return (
    <StyledTable>
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
    </StyledTable>
  )

}

export default Table
