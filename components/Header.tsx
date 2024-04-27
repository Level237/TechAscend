import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { hide } from '@/store/store';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="w-[100%] sticky  z-[30]    border-b-[0.1px]  border-[#5134173a] top-0  py-4 px-4 sm:px-10 dark:bg-transparent  bg-[#003366]  font-[sans-serif] min-h-[90px]">
      <section className="flex fle flex-wrap items-center gap-x-2 max-lg:gap-y-6 justify-between">
      <div className="w-[180px]">
            <Image 
            src="/logo.png"
            width="60"
            height="60"
            alt="logo tech ascend cameroon"
            />
      
        </div>
        <div className='flex-1'>
      <ul className='flex text-white text-[1rem] gap-[3.5rem] cursor-pointer items-center'>
        <li>Home</li>
        <li>Community</li>
        <li>Programs</li>
        <li>Career Readliness</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>
          <Button onClick={()=>dispatch(hide())} className='bg-transparent text-base border-white border-[1px] rounded-2xl px-7' >Get Started</Button>
        </li>
        <li>Login</li>
      </ul>
       </div>
      </section>
    </header>
  )
}
