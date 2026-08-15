import React from 'react'
 
const App = () => {

  const btnclicked=()=>{
    console.log("The Button Is Clicked")
  }
  const mouseEnter=()=>{
    console.log("Mouse Enter")
  }
  const inputChanging=()=>{
    console.log("User is typing")
  }
  return (
    <div>
      <h1>Hello Guys</h1>
      <button onMouseEnter={mouseEnter} onDoubleClick={btnclicked}>Change USer</button>

      <input type='text' placeholder='Enter your name' onChange={function(){
        console.log(inputChanging())
      }}/>
    </div>
  )
}

export default App
