import React, { useState } from "react";

export default function Navbar() {
  const [x,setx]=useState(0)
  const [y,sety]=useState(0)
  const [z,setz]=useState(0)
  return (
 <>
 count x: {x}
<button onClick={()=> setx(x+1)}>Inc</button>
<button onClick={()=> setx(x-1)}>Dec</button>
<br />
count y: {y}
<button onClick={()=> sety(y+1)}>Inc</button>
<button onClick={()=> sety(y-1)}>Dec</button>

<br />

count z: {z} is {(z%2==0)?'even':'odd'}
<button onClick={()=> setz(z+1)}>Inc</button>
<button onClick={()=> setz(z-1)}>Dec</button>























 </>
 
  
  )
 }
