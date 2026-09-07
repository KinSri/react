import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Pagecontent = (props) => {
  return (
    <div className='pb-16 pt-6 px-10 flex gap-10 h-[90vh] '>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
      
    </div>
  )
}

export default Pagecontent
