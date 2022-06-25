import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  
  width: fit-content;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 1%;
  margin: 2%;
  border-color: aliceblue;
`
const Input = ({type, value, onChange, label}) => {
  return ( <>
    <label > {label} </label> <br />
    <StyledInput type={type} value = {value} onChange = {onChange} />
    </>
    );
}

export default Input;
