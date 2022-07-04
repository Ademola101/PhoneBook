import React from 'react';
import styled from 'styled-components';
const NameStyle = styled.div`
width: 33.3vw;
text-align: center;
border-top: 1px solid green;
padding: 7.5px;
font-weight: bold;
color: #485252;
font-size: large;
.button {
  background-color: #485252;
}

@media (max-width: 468px) {
  padding: 7.5px;
  
}

`
const Name = ({person}) => {
  return ( <>
  
    <NameStyle>
      {person.name}
    </NameStyle>
    </>
  );
}

export default Name;
