import axios from 'axios';
import React ,{ useEffect, useState } from 'react'



export default function Login() {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [send, setsend] = useState(false);
    useEffect(() => {
      
    axios.post("https://jsonplaceholder.typicode.com/users" ,{
        username   : username ,
        email   : email 
    }
       
      ).then(res => console.log(res))
    
    }, [send])
    

  return (
    
    <div>
        <input type="text" placeholder='name' onChange={(Event)=>setusername(Event.target.value)}/>
        <input type="password" placeholder='password' onChange={(Event)=>setemail (Event.target.value)}/>
        <button onClick={()=>setsend(!send)}>log in</button>
    </div>
  )
}


