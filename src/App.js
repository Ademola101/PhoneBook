import {useState} from "react"
import Phone from "./components/Phone";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Input from "./components/Input";
import { AppStyle } from "./components/styles/App.styles";
import { Formstyle } from "./components/styles/Form.styles";
import Button from "./components/Button";
import {useEffect} from "react"
import PhoneServices from "./services/PhoneServices";
import Notification from "./components/Notification";

function App() {

  const [Person, setPerson] = useState([]);

  const [newName, setNewName] = useState( {name: "", number:"", id: 0});

  const [filter, setFilter] = useState("");
  const [Notification, setNotification] = useState(null)

  useEffect( () => {
    PhoneServices.getAll().then((initialPerson) => {
      setPerson(initialPerson)
    })
  })

  const inputOnchange = (e) => {
    console.log(e.target.value);
setFilter(e.target.value)
  };



  const addPerson = (e) => {
    e.preventDefault()

    
  const personObject = {
  name: newName.name,
  number: newName.number
};



const currentName = Person.filter((person) => person.name === personObject.name)
console.log(currentName);
if (currentName.length === 0) {
  PhoneServices.create(personObject).then((returnObject) => {
    setPerson(Person.concat(returnObject));
    setNewName({name: "",
number: ""})
  })
  
  
}

else {
  if(window.confirm(`${currentName.name} is already added to the Phone book. Replace the old number with the new one?`)){
    PhoneServices.update(currentName[0].id, personObject).then(returnedPerson => {
      const updatedPersons = Person.map(person => person.id !== returnedPerson.id ? person : returnedPerson);
      setPerson(updatedPersons);
      
    })
  }
}

  

  }

  const PersonToShow = Person.filter(person => 
    person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()))


const Delete = (id) =>{ 

  
const phone = Person.find((person) => person.id === id);
if (window.confirm(`Are you sure you want to delete ${phone.name}`) ) 
{
  PhoneServices.deleteOne(id).then((response) => {
    console.log(response);
  })
  
}
};



  return (<AppStyle> 
  
  <h2>Phonebook</h2>
  <Filter onChange={inputOnchange}/>


<Formstyle  as = {Form} onSubmit={addPerson}> 
<div>  Name: <Input value={newName.name} type= "text" onChange={(e) => setNewName({...newName, name: e.target.value})}/></div>  

Number: <Input type= "number" value={newName.number}  onChange = {(e) => setNewName({...newName, number: e.target.value})}/>
</Formstyle>

<h2>Numbers</h2>
<Notification/>
      {PersonToShow.map((person) =>
      <Phone key={person.id} person={person}> <Button Delete={() => Delete(person.id)}/> </Phone>

      )}
  
  
  </AppStyle>
  );
}

export default App;
