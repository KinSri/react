import React from 'react'

const card = (props) => {
  return (
    <div>
        <div className="class">
        <img src={props.img} alt="Profile Image" />
        <h1>{props.user}</h1>
        <p>Hi i am {props.user} and i am {props.age} years old.</p>
        <button>View Profile</button>
      </div>
      
    </div>
  )
}

export default card
