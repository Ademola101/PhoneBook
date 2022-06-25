import styled from 'styled-components';

const Formstyle = styled.form`
  
  h3 {
    text-align: center 
  }

  button {
    padding: 10px;
    height: 30px;
    width: 50px;
    
    background-color: #836565;
    color: white;
    text-align: center;
    line-height: 1.2em;
    &:hover {
      border-color: blue;
      border-radius: 3px;
    };
    border-color: white;
    text-align: center;
    align-items: center;
    justify-items: center;
    &&& {
      margin-right: 30px !important;
    margin: auto !important;
   
    }
  }
`

const Form = ({onSubmit, children}) => {
  return (
    
      
    <Formstyle onSubmit={onSubmit}>
    <h3>Add contact</h3>
     <div> {children} </div> 
<button> Add </button>
      </Formstyle>  
    
  );
}

export default Form;
