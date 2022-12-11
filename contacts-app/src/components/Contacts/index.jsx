import {useState,useEffect} from 'react'
import List from '../List';
import Form from '../Form';
import './style.css';
function Contacts() {

const [contacts,setContacts]=useState([
  {
    fullname: 'ahmet',
    phoneNumber:'121212'
  },
  {
    fullname: 'mehmet',
    phoneNumber:'345677'
  },
  {
    fullname: 'ayse',
    phoneNumber:'676936'
  }
])
useEffect(()=>{

    console.log(contacts);
},[contacts])

  return (
    <div id='container'>
        <h1 id='contacts'> Contacts</h1>
        <List contacts={contacts} setContacts={setContacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;