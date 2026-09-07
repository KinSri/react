import React from 'react'

const Rightcardscontent = (props) => {
  return (
     <div className="h-full w-full top-0 left-0 absolute p-4 flex flex-col justify-between">
        <h2 className='bg-white h-12 text-xl font-semibold w-12 rounded-full flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className="text-black text-xs mb-8 font-semibold leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab
            velit saepe tempore praesentium quae rem qui fugit animi, aliquam
            quam minus laboriosam, ipsa dolores?
          </p>

          <div>
            <button  className='text-white px-4 py-2  rounded-full' style={{ backgroundColor: props.color }}>
              {props.tag}
            </button>
          </div>
        </div>
      </div>
  )
}

export default Rightcardscontent
