import {Link ,NavLink} from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'


function Users() {

  const [users,setUsers]=useState([])
  const  [isLoading,setLaoading]=useState(true)

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=> setUsers(res.data)).finally(()=> setLaoading(false))
  },[])



  let activeStyle = {
    textDecoration: "none",
    color: 'red',
    padding:'5px',
  };
  
  let activeClassName = "underline";

  return (

    <div>
        <h1 className='Users'>Users</h1>
        {
           isLoading&& <h1>Loading...</h1>
        }
        <ul>
          {
            users.map((user)=>(
              <li key={user.id}>
                
                <NavLink 
                  style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                  to={`/user/${user.id}`}>{user.name}</NavLink>
              </li>
            ))
          }
            <li>
            </li>
        </ul>

        
    </div>
  )
}

export default Users