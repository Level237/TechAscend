import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { FaFacebookF, FaThreads, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <section>
 <div className='flex px-10 py-5 max-sm:flex-col max-sm:gap-6 max-sm:mx-0 justify-between mx-[6rem]'>
      <div className='w-56'>
      <Image 
            src="/logo.png"
            width="60"
            height="60"
            alt="logo tech ascend cameroon"
            />
      </div>
      <div className='flex max-sm:flex-col max-sm:gap-12 justify-between gap-1 flex-1'>
      <div className='flex flex-col gap-4'>
        <div>
        <h2 className='text-white font-bold'>For Companies</h2>
        </div>
        <div>
            <Link href="" className='text-white'>Enterprise</Link>
        </div>
        <div>
            <Link href="" className='text-white'>How It Works</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Browse Talent</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Request a Quote</Link>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
        <h2 className='text-white font-bold'>For Talent</h2>
        </div>
        <div>
            <Link href="" className='text-white'>For Technologists</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Techascend Learning<br/> Community
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Find jobs
</Link>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
        <h2 className='text-white font-bold'>Our Services</h2>
        </div>
        <div>
            <Link href="" className='text-white'>Job Fairs
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Skill workshops
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Networking events
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Mentorship programs
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Programs
</Link>
        </div>
        
      </div>
      <div className='flex flex-col gap-4'>
        <div>
        <h2 className='text-white font-bold'>Why TechAscend</h2>
        </div>
        <div>
            <Link href="" className='text-white'>About Us
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Blog
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Resources
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Customer Stories
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Careers
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Contact HQ
</Link>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
        <h2 className='text-white font-bold'>Login</h2>
        </div>
        <div>
            <Link href="" className='text-white'>Client login
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Talent login
</Link>
        </div>
        <div>
            <Link href="" className='text-white'>Student login
</Link>
        </div>
      </div>
      </div>
      
    </div>
    <div className='flex items-center flex-col gap-4 '>
    
    <div>
        <div className='flex items-center max-sm:mx-5 max-sm:mt-5 gap-3'>
        <Input type='email' placeholder='Your email'/>
        <Button className='bg-[#ffcc00] px-12 max-sm:px-3 max-sm:text-sm font-bold rounded-full text-lg  text-black'>Subscribe</Button>
        </div>
   
    </div>
    <div className=''>
    <div className='max-sm:flex gap-5 hidden  text-white mr-0'>
<div><FaFacebookF/></div>
<div><FaTwitter/></div>
<div><BsLinkedin/></div>
<div><BsInstagram/></div>
<div><FaYoutube/></div>
<div><FaThreads/></div>
</div>
    </div>
   
    <Separator className='bg-gray-600' />
<div className='flex items-center max-sm:flex-col gap-36 max-sm:gap-3 justify-between'>
    <div className='flex max-sm:flex-col items-center gap-3'>
    <div>
    <p className='text-white'>© 2024 TechAscend. All rights reserved.</p>
</div>
<div>
    <span className='text-white'>Privacy Policy
</span>
</div>
<div>
    <span className='text-white'>Terms of Service
</span>
</div>
<div>
    <span className='text-white'>Cookies Preference
</span>
</div>
<div>
    <span className='text-white'>Cookies Policy
</span>
</div>
    </div>
<div className='flex gap-5 max-sm:hidden  text-white mr-0'>
<div><FaFacebookF/></div>
<div><FaTwitter/></div>
<div><BsLinkedin/></div>
<div><BsInstagram/></div>
<div><FaYoutube/></div>
<div><FaThreads/></div>
</div>
</div>
    </div>
    </section>
   
  )
}
