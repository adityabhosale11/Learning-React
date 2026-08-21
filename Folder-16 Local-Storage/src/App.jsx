import React from 'react'

const App = () => {

  localStorage.setItem('user','Aditya')
  localStorage.setItem('age','21')
  localStorage.removeItem('age')
  localStorage.clear()

  const user={
    user:"Aditya",
    age:21
  }
  localStorage.setItem(JSON.stringify(user))
  let data=localStorage.getItem(JSON.parse(user))
  console.log(JSON.parse(data))

  return (
    <div>
      
    </div>
  )
}

export default App
