import styled from 'styled-components';

const Formstyle = styled.form`
  
  h3 {
    text-align: center;
    background-color: darksalmon;
    color: green;
    padding: 5px;
  }

  .button {
    padding: 10px;
    height: 30px;
    width: 50px;
    
    background-color: darkslategray;
    color: white;
    text-align: center;
    line-height: 1.2em;
    &:hover {
      background-color: blue;
      border-radius: 3px;
    };
    border-color: white;
    text-align: center;
    align-items: center;
    justify-items: center;
    margin-left: 60px;
  }
`

const Form = ({onSubmit, children}) => {
  return (
    
      
    <Formstyle onSubmit={onSubmit}>
    <h3>Add contact</h3>
     <div> {children} </div> 
<button className='button'> Add</button>
      </Formstyle>  
    
  );
}

export default Form;
