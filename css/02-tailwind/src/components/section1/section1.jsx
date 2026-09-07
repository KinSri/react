import React from 'react'
import Navbar from './navbar'
import Pagecontent from './Pagecontent'


const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      <Navbar/>
      <Pagecontent users={props.users}/>
      
    </div>
  )
}

export default Section1
