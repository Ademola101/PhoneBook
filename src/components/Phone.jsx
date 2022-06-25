import React from 'react'
import styled from 'styled-components';
const Contaniner = styled.div`
  
  display: flex;
  
  flex-direction: row;
`
export default function Phone({person,children}) {
  return ( <Contaniner>
    Name:


    <div>
{person.name}
    </div>

    <div>
{person.number}
    </div>
    <div>

    </div>
    </Contaniner>
  )
}
