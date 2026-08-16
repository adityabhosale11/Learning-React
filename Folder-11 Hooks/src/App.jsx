import React, { useState } from 'react'

const App = () => {

  const [num,setNum]=useState(0)

  const increase=()=>{
    console.log("Increase")
    setNum(num+1)
  }
  const decrease=()=>{
    console.log("Decrease")
    if(num===0){
      setNum(0)
    }
    else{
      setNum(num-1)
    }
  }
  const jump=()=>{
    console.log("Jump By 5")
    setNum(num+5)
  }
  return (
    <div className='main'>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump}>Jump By 5</button>
    </div>
  )
}

export default App
