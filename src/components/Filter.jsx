import React from 'react';
import Input from './Input';
import styled from 'styled-components';

const FilterStyle = styled.div`
  
  color: green;
`
const Filter = ({value, onChange}) => {
  return (
    <FilterStyle>
      <strong>Filter Name :</strong>  <Input value={value} onChange ={onChange}/>
    </FilterStyle>
  );
}

export default Filter;
