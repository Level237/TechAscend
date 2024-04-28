import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { open } from '@/store/store';
import MenuLink from './ui/menu-link';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
    <header className="w-[100%] sticky   z-[30]    border-b-[0.1px]  border-[#5134173a] top-0  py-4 px-4 sm:px-10 dark:bg-transparent  bg-[#003366]  font-[sans-serif] min-h-[90px]">
      <section className="flex  flex-wrap items-center  max-lg:gap-y-6 justify-between">
      <div className="w-[180px]">
            <Image 
            src="/logo.png"
            width="60"
            height="60"
            alt="logo tech ascend cameroon"
            />
      
        </div>
        <div className='flex-1'>
      <ul className='flex  max-lg:hidden text-white text-[1rem] gap-[3rem] cursor-pointer items-center'>
        <li><MenuLink title={'home'} link={''} isCaret={false}/></li>
        <li><MenuLink title={'Community'} link={''} isCaret={true}/></li>
        <li><MenuLink title={'Programs'} link={''} isCaret={true}/></li>
        <li> <MenuLink title={'Career Readliness'} link={''} isCaret={true}/></li>
        <li> <MenuLink title={'About us'} link={''} isCaret={false}/></li>
        <li> <MenuLink title={'Contact Us'} link={''} isCaret={false}/></li>
        <li>
          <Button onClick={()=>dispatch(open())} className='bg-transparent text-base border-white border-[1px] rounded-2xl px-7' >Get Started</Button>
        </li>
        <li><MenuLink title={'Login'} link={''} isCaret={true}/></li>
      </ul>
       </div>
       <div>
       <button  id="toggle" className='lg:hidden ml-auto'>
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
       </div>
      </section>
    </header>
    </>
    
  )
}
