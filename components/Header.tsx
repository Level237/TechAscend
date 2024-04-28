import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { open } from '@/store/store';
import MenuLink from './ui/menu-link';
import Link from 'next/link';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
    <header className="w-[100%] fixed   z-[900]    border-b-[0.1px]  border-[#5134173a] top-0  py-4 px-4 sm:px-10 dark:bg-transparent  bg-[#003366]  font-[sans-serif] min-h-[90px]">
      <section className="flex  flex-wrap items-center  max-lg:gap-y-6 justify-between">
      <div className="w-[180px]">
        <Link href={'/'}>
        <Image 
            src="/logo.png"
            width="60"
            height="60"
            alt="logo tech ascend cameroon"
            />
        </Link>
           
      
        </div>
        <div className='flex-1'>
      <ul className='flex  max-lg:hidden text-white text-[1rem] gap-[3rem] cursor-pointer items-center'>
        <li className='group' ><MenuLink title={'home'} link={''} isCaret={false}/></li>
        <li><MenuLink title={'Community'} link={''} isCaret={true} sub={[{
          title: 'Skill Workshops', link: 'https://tech-ascend.com/community/skill-Workshops',
          isBlank: 1
        },{
          title: 'Networking Events', link: 'community/networking-events',
          isBlank: 0
        },{
          title: 'Job Fairs', link: 'https://tech-ascend.com/community/job-fairs',
          isBlank: 1
        }]}/></li>
        <li><MenuLink title={'Programs'} link={''} isCaret={true} sub={[{
          title: 'Frontend', link: 'https://tech-ascend.com/programs/front-end',
          isBlank: 1
        },{
          title: 'Backend', link: 'https://tech-ascend.com/programs/back-end',
          isBlank: 1
        },{
          title: 'DevOps', link: 'https://tech-ascend.com/programs/devops',
          isBlank: 1
        },{
          title: 'Data Science', link: 'https://tech-ascend.com/programs/data-science',
          isBlank: 1
        }]}/></li>
        <li> <MenuLink title={'Career Readliness'} link={''} isCaret={true} sub={[{
          title: 'Jobs', link: 'https://tech-ascend.com/career/jobs',
          isBlank: 1
        },{
          title: 'Mentorship Programs', link: 'https://tech-ascend.com/career/mentorship-programs',
          isBlank:1
        },{
          title: 'Career Placement', link: 'https://tech-ascend.com/career/career-placement',
          isBlank: 1
        }]}/></li>
        <li> <MenuLink title={'About us'} link={''} isCaret={false}/></li>
        <li> <MenuLink title={'Contact Us'} link={''} isCaret={false}/></li>
        <li>
          <Button onClick={()=>dispatch(open())} className='bg-transparent text-base border-white border-[1px] rounded-2xl px-7' >Get Started</Button>
        </li>
        <li><MenuLink title={'Login'} link={''} isCaret={true} sub={[{
          title: 'For Clients', link: '',
          isBlank: 0
        },{
          title: 'For Talents', link: '',
          isBlank: 0
        },{
          title: 'For Students', link: '',
          isBlank: 0
        }]}/></li>
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
    <header className='bg-[#003366] z-[20]    fixed top-[1rem] h-full w-full left-0'>
    <section className="flex absolute  left-0 h-full w-full flex-wrap mt-[6rem] max-lg:gap-y-6 justify-center">
    <ul className='flex flex-col   text-white text-[1rem] gap-[1rem] cursor-pointer items-center'>
        <li className='group' ><MenuLink title={'home'} link={''} isCaret={false}/></li>
        <li><MenuLink title={'Community'} link={''} isCaret={true} sub={[{
          title: 'Skill Workshops', link: 'https://tech-ascend.com/community/skill-Workshops',
          isBlank: 1
        },{
          title: 'Networking Events', link: 'community/networking-events',
          isBlank: 0
        },{
          title: 'Job Fairs', link: 'https://tech-ascend.com/community/job-fairs',
          isBlank: 1
        }]}/></li>
        <li><MenuLink title={'Programs'} link={''} isCaret={true} sub={[{
          title: 'Frontend', link: 'https://tech-ascend.com/programs/front-end',
          isBlank: 1
        },{
          title: 'Backend', link: 'https://tech-ascend.com/programs/back-end',
          isBlank: 1
        },{
          title: 'DevOps', link: 'https://tech-ascend.com/programs/devops',
          isBlank: 1
        },{
          title: 'Data Science', link: 'https://tech-ascend.com/programs/data-science',
          isBlank: 1
        }]}/></li>
        <li> <MenuLink title={'Career Readliness'} link={''} isCaret={true} sub={[{
          title: 'Jobs', link: 'https://tech-ascend.com/career/jobs',
          isBlank: 1
        },{
          title: 'Mentorship Programs', link: 'https://tech-ascend.com/career/mentorship-programs',
          isBlank:1
        },{
          title: 'Career Placement', link: 'https://tech-ascend.com/career/career-placement',
          isBlank: 1
        }]}/></li>
        <li> <MenuLink title={'About us'} link={''} isCaret={false}/></li>
        <li> <MenuLink title={'Contact Us'} link={''} isCaret={false}/></li>
        <li>
          <Button onClick={()=>dispatch(open())} className='bg-transparent text-base border-white border-[1px] rounded-2xl px-7' >Get Started</Button>
        </li>
        <li><MenuLink title={'Login'} link={''} isCaret={true} sub={[{
          title: 'For Clients', link: '',
          isBlank: 0
        },{
          title: 'For Talents', link: '',
          isBlank: 0
        },{
          title: 'For Students', link: '',
          isBlank: 0
        }]}/></li>
      </ul>
</section>
    </header>
    </>
    
  )
}
