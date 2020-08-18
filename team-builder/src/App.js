import React, {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuid } from "uuid";
import Member from "./Member";
import FormTeam from './FormTeam'



const initialMemberList = [
  {
    id: uuid(),
    name: 'Yvette',
    email: 'yvette@yvette.com',
    role: 'frontend',
  },
]

const initialFormValues = {
  name: '', 
  email: '',
  role:'',
} // an object 

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMemberList})
}

const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id:uuid(), name, email, role }
  return Promise.resolve({ status:200, success: true, data: newMember})
}

function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm =()=> {
    const member = {
      name: formValues.name.trim(), 
      email: formValues.email.trim(),
      role: formValues.role,
    }
  

  // if(!member.username || !member.email) return

  fakeAxiosPost('fake.com', member)
    .then(res => {
      setMembers([...members, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>{
      setFormValues(initialFormValues)
    })
  }

useEffect(() => {
  fakeAxiosGet('fakeapi.com')
  .then(res => setMembers(res.data))
},[])

  return (
    <div className="App">
      <header className="App-header">   
          <h1>Team Builder App</h1>
          <FormTeam
          values={formValues}
          update={updateForm}
          submit={submitForm}
          />

        {members.map(member =>{
          return (
            <Member key={member.id} details={member}></Member>
          )
        })}
      </header>
    </div>
  );
}

export default App;
