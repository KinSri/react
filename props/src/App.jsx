import React from 'react'
import Card from './componets/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="aman" age={24} img="https://plus.unsplash.com/premium_photo-1783394326767-5104b53dba6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyN3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
       <Card user="navya" age={18} img="https://images.unsplash.com/photo-1785374849458-e29e3926b487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      
      
    </div>
  )
}

export default App
