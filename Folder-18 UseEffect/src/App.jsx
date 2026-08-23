import React, { useEffect, useState } from 'react'

const App = () => {

  const [num,setNum]=useState(0)
  const [num1,setNum1]=useState(100)
  useEffect(()=>{
    console.log("button 1 is clicked")
  },[num])

  return (
    <div>
      <h1>Value Of Num Is :{num}</h1>
      <h1>Value Of Num1 Is :{num1}</h1>
      <button onClick={()=>{
        console.log('Clicked')

        setNum(num+1)
      }}>Button 1</button>
      <button onClick={()=>{
        console.log("Button 2 is clicked");
        setNum1(num1+100)
        
      }}>Button 2</button>
    </div>
  )
}

export default App
