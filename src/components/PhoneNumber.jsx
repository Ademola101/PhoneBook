import React from 'react'

import styled from 'styled-components';
const NumberStyle = styled.div`
width: 33.3vw;
text-align: center;
border-top: 1px solid green;
padding: 7px;
font-weight: bold;
color: #485252;
font-size: large;
.button {
  background-color: #485252;
}


@media (max-width: 468px) {
  width: 50vw;
}
`


export default function PhoneNumber({person,children}) {
  return (
    <NumberStyle>{person.number}  {children}</NumberStyle>
  )
}
