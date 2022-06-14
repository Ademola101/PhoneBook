import {useState} from "react"
import Phone from "./components/Phone";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Input from "./components/Input";
function App() {

  const [Person, setPerson] = useState([ { name: 'Arto Hellas', number: "000234567" }
]) 
    
  

  const [newName, setNewName] = useState( {name: "", number:""})

  const [filter, setFilter] = useState("")

  const inputOnchange = (e) => {
    console.log(e.target.value);
setFilter(e.target.value)
  }
  const addPerson = (e) => {
    e.preventDefault()

    
  const personObject = {
  name: newName.name,
  number: newName.number
};
const currentName = Person.filter((person) => person.name === personObject.name)

if (currentName.length === 0) {
  setPerson(Person.concat(personObject))
  setNewName({name: "",
number: ""})
}

else{
  alert(`${personObject.name} already exist in the Phonebook`)
}

  

  }

  const PersonToShow = Person.filter(person => 
    person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()))
  return (<> 
  
  <h2>Phonebook</h2>
  <Filter onChange={inputOnchange}/>


<Form onSubmit={addPerson}> 
<div>  Name: <Input value={newName.name} type= "text" onChange={(e) => setNewName({...newName, name: e.target.value})}/></div>  

Number: <Input type= "number" value={newName.number}  onChange = {(e) => setNewName({...newName, number: e.target.value})}/>
</Form>

<h2>Numbers</h2>
      {PersonToShow.map((person) =>
      <Phone key={person.id} person={person}/>

      )}
  
  
  </>
  );
}

export default App;
