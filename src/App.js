import {useState} from "react"
import Phone from "./components/Phone";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Input from "./components/Input";
import { AppStyle } from "./components/styles/App.styles";
import Button from "./components/Button";
import {useEffect} from "react"
import PhoneServices from "./services/PhoneServices";
import Notification from "./components/Notification";
import { H2 } from "./components/styles/PhoneHeader";

function App() {

  const [Person, setPerson] = useState(null);

  const [newName, setNewName] = useState( {name: "", number:"", id: 0});

  const [filterSearch, setFilterSearch] = useState("");
  const [message, setMessage] = useState(null)

  useEffect( () => {
    PhoneServices.getAll().then((initialPerson) => {
      setPerson(initialPerson)
    })
  }, [])

  const inputOnchange = (e) => {
    console.log(e.target.value);
setFilterSearch(e.target.value)
  };



  const addPerson = (e) => {
    e.preventDefault()

    
  const personObject = {
  name: newName.name,
  number: newName.number
};



const currentName = Person?.filter((person) => person.name === personObject.name)
console.log(currentName);
if (currentName.length === 0) {
  PhoneServices.create(personObject).then((returnObject) => {
    setPerson(Person.concat(returnObject));
    setMessage(`${returnObject.name} successfully added to the phonebook`)
    setTimeout(() => {
      setMessage(null)
    },5000)
    
    setNewName({name: "",
number: ""})
  }).catch(error => {
    console.log(error)
    setMessage("Invalid input, Please try again")
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    }
    )
  
  
}

else {
  if(window.confirm(`${personObject.name} is already added to the Phone book. Replace the old number with the new one?`)){
    PhoneServices.update(currentName[0].id, personObject).then(returnedPerson => {
      const updatedPersons = Person.map(person => person.id !== returnedPerson.id ? person : returnedPerson);
      setPerson(updatedPersons);
      
    }).catch(error => {
      setMessage(`${personObject.name} has already been deleted`);
      setTimeout(() => setMessage(null),5000)
    })
  }
}

  

  }

  const PersonToShow = Person?.filter(person => 
    person.name.toLocaleLowerCase().startsWith(filterSearch.toLocaleLowerCase()))


const Delete = (id) =>{ 

  
const phone = Person.find((person) => person.id === id);
if (window.confirm(`Are you sure you want to delete ${phone.name}`) ) 
{
  PhoneServices.deleteOne(id).then((response) => {
    const updatedPersons = Person.filter(person => person.id !== phone.id);
    setPerson(updatedPersons)
    setMessage(`${phone.name} successfully deleted`);
  });
  

  setTimeout(() => {
    setMessage(null)
  },5000)
  
}
};



  return (<AppStyle> 
  
  <H2>Phonebook</H2>
  <Notification message={message}/>
  <Filter onChange={inputOnchange}/>


<Form onSubmit={addPerson}> 
<div>   <Input label= "Name" value={newName.name} type= "text"
 onChange={(e) => setNewName({...newName, name: e.target.value})}/></div>  

<Input label= "Number" type= "number" value={newName.number} 
 onChange = {(e) => setNewName({...newName, number: e.target.value})}/>
 
</Form>

<h2>Numbers</h2>

      {PersonToShow?.map((person) =>
      <Phone key={person.id} person={person}> <Button Delete={() => Delete(person.id)}/> </Phone>

      )}
  
  
  </AppStyle>
  );
}

export default App;
