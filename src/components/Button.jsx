import React from 'react';
import styled from 'styled-components';
 const ButtonStyle = styled.button`
  
background-color: crimson;
padding: 2px;
border: 1px solid;
border-radius: 2px;
margin-left: 20px;
&:hover {
  background-color: aliceblue;
}
&:active {
  background-color: pink;
}
 `

const Button = ({Delete, text}) => {
  return (
    
    <ButtonStyle onClick={Delete}>

{text}
    </ButtonStyle>
    );
}

export default Button;
