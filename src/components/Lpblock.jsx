import React from 'react'

const Lpblock = ({image}) => {
  return (
    <div className='w-full h-full cursor-pointer flex justify-center items-center bg-cyan-400  transition-all duration-300 shadow-md hover:shadow-[0px_15px_20px_rgba(255,255,255,0.3)] '>
        <img src={image} className='w-full h-full object-cover' alt="" />
    </div>
  )
}

export default Lpblock
