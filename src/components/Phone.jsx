import React from 'react'
import styled from 'styled-components';
import Name from './Name';
const Contaniner = styled.div`
  
  display: flex;
  
  flex-direction: row;
`
export default function Phone({person,children}) {
  return ( <Contaniner>
    
    <Name person={person}/>
    </Contaniner>
  )
}
