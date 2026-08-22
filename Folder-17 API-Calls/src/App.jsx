import React from 'react'
import axios from 'axios'

const App = () => {

  // const getdata=async()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response)
  // }
  const getData= async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(response)
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default App
