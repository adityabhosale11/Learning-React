import React from 'react'

const Student = (props) => {
  return (
    <div className='card'>
    <div className="img">
        <img src='https://i.pinimg.com/736x/d7/d0/1b/d7d01bdf9d7bbebbc3e68b5d6b181909.jpg'/>
    </div>
    <div className='info'>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Course: {props.course}</h2>
    </div>

    <div className="btn">
        <button>View Profile</button>
    </div>
    </div>
    
  )
}

export default Student
