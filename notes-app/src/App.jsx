import React from 'react'

const App = () => {
  const Formhandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className='h-screen lg:flex bg-black text-white '>

      
      <form onSubmit={(e) =>{ Formhandler(e)}} className='flex flex-col items-start p-10 gap-6 lg:w-1/2 '>
        <h1 className='font-bold text-3xl'>Add Notes</h1>
       
        <input type='text' placeholder='Enter Notes Heading' className='w-full rounded border-2 py-2 px-5 '/>
        <textarea placeholder='Enter Details' className='w-full rounded border-2 py-2 px-5 h-30 '/>
        <button className='bg-white text-black w-full font-semibold py-2 px-5 rounded '>Add Note</button>
        </form>
        <div className='h-full overflow-auto lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='font-bold text-3xl'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap mt-5'>
        <div className='h-50 w-40 rounded-2xl bg-white'> </div>
        <div className='h-50 w-40 rounded-2xl bg-white'> </div>
        
         
        <div className='h-50  w-40 rounded-2xl bg-white'></div>
        </div>
          
        </div>

    </div>
  )
}

export default App
