import React from 'react'
import Rightcards from './rightcards'

const Rightcontent = (props) => {
  return (
    <div id="right" className='p-6 h-full w-2/3 rounded-xl overflow-x-auto flex flex-nowrap  gap-10 '>
     {props.users.map(function(elem,idx){
      return <Rightcards key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>

     })}
     
    </div>
  )
}

export default Rightcontent
