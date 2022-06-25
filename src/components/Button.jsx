import React from 'react';
import styled from 'styled-components';


const Button = ({Delete, text}) => {
  return (
    
    <button onClick={Delete}>

{text}
    </button>
    );
}

export default Button;
