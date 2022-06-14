import React from 'react';

const Form = ({onSubmit, children}) => {
  return (
    <div>
    <form onSubmit={onSubmit}>
     <div> {children} </div> 
<button> add </button>
      </form>  
    </div>
  );
}

export default Form;
