import React from "react"
export default function Child({change}) {
    return (
        <div>
        <button onClick={()=>change(prev => prev+1)}>Click</button>
       
        </div>
    
      
    )
  }
  