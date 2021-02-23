import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import axios from './axios';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}



export default function App() {
  
  const [teamMembers, setTeamMembers] = useState([]);
  
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, 
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newFriend = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newFriend.name || !newFriend.email || !newFriend.role){
      return;
    }
    axios.post('fakeapi.com', newFriend)
      .then((res) => {
        console.log(res);
        setTeamMembers([...teamMembers, res.data])
      })
      .catch((err) => {
        console.log(err);
      })
      setFormValues(initialFormValues);
  }

  return (
    <div className="container">
      <h1>Team Member Form</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {teamMembers.map((tm) => {
        return <TeamMember key={tm.id} details={tm}/>
      })}
    </div>
  );
}
