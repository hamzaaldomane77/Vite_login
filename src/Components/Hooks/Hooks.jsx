import React, { useEffect, useState } from 'react'

import Login from '../Child/login';
import UseRef from '../Child/UseRf';
export default function HOOKS( ) {
   
const [number  , setnumber] = useState(0);
const [show, setshow] = useState(false);

useEffect(() => {
  console.log(number)
 
}, [number]);
return(
  <div>
  {/* <button onClick={() =>setnumber(number+1) }>Click</button> */}
  <p>{number}</p>
<Login />
    <UseRef />
</div>
)
   
  
}
