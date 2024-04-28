import Link from 'next/link'
import React, { useState } from 'react'
import { BsCaretUp, BsCaretUpFill,BsCaretDownFill } from 'react-icons/bs'
import { FaUpDown } from 'react-icons/fa6'

type linkType={
    title:string,
    link:string,
    isCaret?:boolean
}
export default function MenuLink(props:linkType) {

    
  return (
    <div className='flex items-center gap-2'>
      <Link href={props.link}>{props.title}</Link>

      {props.isCaret && <div>
      <BsCaretDownFill className='w-3'/>
      </div>}
      
      
    </div>
  )
}
