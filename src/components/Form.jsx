import React from 'react';

const Form = ({onSubmit, children, className}) => {
  return (
    <div className= {className}>
      <h3>Add contact</h3>
    <form onSubmit={onSubmit}>
     <div> {children} </div> 
<button> add </button>
      </form>  
    </div>
  );
}

export default Form;
