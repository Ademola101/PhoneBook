import {useState} from "react"
import Phone from "./components/Phone";

function App() {

  const [Person, setPerson] = useState([ { name: 'Arto Hellas', number: "000234567" }
]) 
    
  

  const [newName, setNewName] = useState( {name: "", number:""})
  
  const addPerson = (e) => {
    e.preventDefault()

    
  const personObject = {
  name: newName.name,
  number: newName.number
};
const currentName = Person.filter((person) => person.name === personObject.name)

if (currentName.length === 0) {
  setPerson(Person.concat(personObject))
}

else{
  alert(`${personObject.name} already exist in the Phonebook`)
}

  


  }
  return (<> 
  
  <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName.name} onChange={(e) => { console.log(e.target.value); setNewName({...newName, name: e.target.value}); }} />
        </div>
        <div>

          Number: <input value={newName.number} onChange = {(e) => setNewName({...newName, number: e.target.value})}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {Person.map((person) =>
      <Phone key={person.id} person={person}/>

      )}
  
  
  </>
  );
}

export default App;
