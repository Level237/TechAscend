"use client"
import React from 'react'
import { useSelector } from 'react-redux';

export default function StartedBloc() {
    const isVisible = useSelector((state:any) => state.StartedSlice.isVisible);
  return (
    <>
    {isVisible && (
         <div className=' sticky overflow-scroll w-[100%] h-[100vh] bottom-0 bg-[#95c6fd]  z-[90]  inset-0 '>
         <div className=''>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, exercitationem? Facilis, possimus alias animi reiciendis eos distinctio error nam quas delectus porro corporis nesciunt perferendis. Cum animi ex recusandae veritatis.
         </div>
       </div>
    )}
    
    </>
   
  )
}
