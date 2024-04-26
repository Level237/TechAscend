import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex px-10 py-5 justify-between mx-[6rem]'>
      <div className='w-56'>
      <Image 
            src="/logo.png"
            width="60"
            height="60"
            alt="logo tech ascend cameroon"
            />
      </div>
      <div className='flex justify-between gap-1 flex-1'>
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
  )
}
