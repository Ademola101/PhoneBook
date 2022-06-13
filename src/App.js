import {useState} from "react"
import Phone from "./components/Phone";

function App() {

  const [Person, setPerson] = useState([ { name: 'Arto Hellas' }
]) 
    
  

  const [newName, setNewName] = useState( "")
  
  const addPerson = (e) => {
    e.preventDefault()
  const personObject = {
  name: newName
};

  setPerson(Person.concat(personObject))
console.log(Person);

  }
  return (<> 
  
  <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => { console.log(e.target.value); setNewName(e.target.value); }} />
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
