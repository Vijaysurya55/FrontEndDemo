import React, { createContext, useState } from 'react'
import { useContext } from 'react'
// import { nameContext } from './App'
import { colorContext } from './App'
const Stomach = (props) => {
  let[bgcolor,setColor]=useState("white")
  let[txtcolor,setColor1]=useState("black")
  let color=useContext(colorContext);
  function handleClick(){
    // setColor((bgcolor)=>(bgcolor == 'white' ? color.bg : 'white'));
    // setColor1((txtcolor)=>(txtcolor == 'black'? color.txt : 'black'))
    if(bgcolor=="white"&&txtcolor=="black"){
      setColor(color.bg)
      setColor1(color.txt)
    }
    else{
      setColor("white")
      setColor1("black")
    }
  }
  // let val=useContext(nameContext)
  return (
    <div><h1 style={{backgroundColor:bgcolor,color:txtcolor}}>Stomach</h1>
    {/* <h1>Need:{val.name} and age:{val.age}</h1> */}
    <button onClick={handleClick}>Click to change color</button>
    {/* <h1>Need:{props.name}</h1> */}
    </div>
  )
}

export default Stomach