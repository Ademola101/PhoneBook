import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  
  font-size: large;
  color: green;
  padding: 10px;
  border-color: green;
  background-color: darkgrey;
  border-radius:3px;
  border-style: solid ;

`


const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <Div className='Notification'>
      {message}
    </Div>
  );
}

export default Notification;
