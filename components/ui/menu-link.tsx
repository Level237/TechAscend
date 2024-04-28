
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCaretUp, BsCaretUpFill,BsCaretDownFill } from 'react-icons/bs'
import { FaUpDown } from 'react-icons/fa6'
import { Separator } from './separator'

type subTitle={
    title:string,
    link:string,
    isBlank:number
}
type linkType={
    title:string,
    link:string,
    isCaret?:boolean,
    sub?:subTitle[]
}
export default function MenuLink(props:linkType) {

    const [upCaret,setUpCaret]=useState(false)
    const [visible,setVisible]=useState(false)

    const handleClick=()=>{
        setUpCaret(!upCaret)
        setVisible(!visible)
    }
    
  return (
    <>
    <div className='flex flex-col relative'>
    <div className='flex items-center gap-2'>
      <Link href={props.link}>{props.title}</Link>

      {props.isCaret && <div>
      {upCaret ? <BsCaretUpFill className='w-3' onClick={handleClick}/> : <BsCaretDownFill className='w-3' onClick={handleClick}/>}
      
      </div>}
     
      
    </div>
    
    
    {visible && ( <ul className="z-30 mt-14  w-[11rem] max-h-[16rem] px-3 pb-4 rounded-md absolute mx-[-6rem]   border-none transition-all group-hover:block bg-[#003366] border  shadow-md">
    <div className='flex justify-center'>
        <div className='max-h-full '>
        <Separator orientation="vertical" className='w-[0.2rem]  text-white' />
        </div>
        
        <div>
        {props.sub?.map((sub,i)=>(
            <li key={i} className="mt-1 hover:bg-[#6699ff] px-3 py-3">
                {sub.isBlank===1 ?  <Link  target="_blank" href={sub.link}>{sub.title}</Link> :  <a   href={sub.link}>{sub.title}</a>}
               </li>
        ))}
        </div>
       
    </div>
        
        
       
      </ul>)}
    </div>
   
   
            
   
    
    
    </>
   
  )
}
