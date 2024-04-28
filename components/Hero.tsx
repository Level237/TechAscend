import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div>
       <div className="flex justify-center  mt-[7rem] max-sm:mx-[1.2rem] ">
        <div className="w-[607px]">
            <h1 className="max-w-xl text-[#003366] max-sm:leading-8 max-sm:mt-3 max-sm:text-[1.5rem] font-extrabold mb-4 text-[2.3rem] leading-10">Nurturing Tech Potential: The TechAscend Experience</h1>
            <p className="max-w-xl mb-6 mt-6 max-sm:text-[1.2rem] text-[#003366] text-[1.3rem] font-normal ">TechAscend empowers tech enthusiasts and professionals to excel in the rapidly evolving tech landscape. Our expert-led talks, hands-on workshops, and networking events are designed to foster innovation, skill development, and community engagement. Join us to transform your potential into success and be part of a community that values growth and achievement in the tech realm.</p>
            
            <Button className="Learn more text-lg px-12 py-7 bg-[#003366] rounded-3xl" >Learn more</Button>
        </div>
        <div className="flex-1 mt-5">
            <div className='w-full h-[23rem] bg-black rounded-3xl  '>
            <iframe className='rounded-xl' width={"100%"} height="100%" src="https://www.youtube.com/embed/tUP5S4YdEJo?si=BF9Yd2Cj6ms_Ya_W" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
            </div>
            
        </div>
    </div>
    </div>
  )
}
