import React from 'react'
import styled from 'styled-components';
const Contaniner = styled.div`
  
  display: flex;
  
  flex-direction: column;
`
export default function Phone({person,children}) {
  return ( <Contaniner>
    <div > Name:

{person.name}
    </div>
<div>
Number:
  {person.number}  
</div>
<div>{children}</div>
    </Contaniner>
  )
}
