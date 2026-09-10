import React from 'react'
import { useState } from 'react';



const App = () => {
  let [title, settitle] = React.useState('');
let [desc, setdesc] = React.useState('');

const[task, setTask]= React.useState([])

  const Formhandler = (e) => {
    e.preventDefault();

    const copyTask=[...task]
    copyTask.push({title,desc})
    setTask(copyTask)

    console.log(title,desc);   
    settitle('')
    setdesc('')
  }
  

  return (
    <div className='h-screen lg:flex bg-black text-white '>
   <form onSubmit={(e) =>{ Formhandler(e)}} className='flex flex-col items-start p-10 gap-6 lg:w-1/2 '>
        <h1 className='font-bold text-3xl'>Add Notes</h1>
        <input 
          type='text' 
          placeholder='Enter Notes Heading' 
          value={title}
          onChange={(e) => {settitle(e.target.value)}}
          className='w-full rounded border-2 py-2 px-5 '
        />
        <textarea 
          placeholder='Enter Details' 
          value={desc}
          onChange={(e)=>{setdesc(e.target.value)}}
          className='w-full rounded border-2 py-2 px-5 h-30 '
         
        />
        <button className='bg-white active:scale-95 hover:bg-gray-300 text-black w-full font-semibold py-2 px-5 rounded '>Add Note</button>
        </form>

        <div className='h-full overflow-auto items-start justify-start lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='font-bold text-3xl'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap mt-5'>
        {task.map(function(elem,idx){
          return<div key={idx} className='relative h-50 w-40 rounded-xl py-8 px-4 bg-cover bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMfoQPHaEQUaRnnM6E--12-wgzEyykngXQF88B0aluQ&s=10")] text-black p-5 '>
            <h2></h2>
            <h3 className='font-bold leading-tight text-xl'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.desc}</p>

          </div>


        })}
        </div>
          
        </div>

    </div>
  )
}

export default App
