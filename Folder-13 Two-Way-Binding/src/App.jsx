import React from 'react'

const App = () => {

  const submithandler=()=>{
    e.preventDefault()
    console.log("Form Submitted")

  }
  return (
    <div>
    <form onSubmit={(e)=>{
      submithandler(e)
    }}>
      <input type="text" placeholder='Enter your name'></input>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App
