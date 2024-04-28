import React from 'react'
import { Button } from './ui/button'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <section>
<div className='grid grid-cols-4 max-sm:grid-cols-1 mt-6 mb-6 gap-6 '>
      <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex ">
        <div className='flex-1'>
        <Image src="/logo.png"
          alt="Avatar" width={50} height={50}  className=" flex-1 rounded-full mr-2"/>
        </div>
        
        <div className='flex flex-col w-3/4'>
          <div className='flex gap-1'>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
          </div>
          <p className="font-bold text-[#003366]">Sophie Williams</p>
          <p className="text-gray-600 text-[0.7rem]">
            Product Manager at InnovateTech
          </p>
        </div>
      </div>
      <p className="mt-1 text-[0.9rem]">
        Attending TechAscend events has dramatically expanded my
        professional network and provided me with invaluable insights.
      </p>
      <Link
        href="/read-more"
        className="text-blue-500 hover:underline mt-2 block"
      >
        Read More →
      </Link>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex ">
        <div className='flex-1'>
        <Image src="/logo.png"
          alt="Avatar" width={50} height={50}  className=" flex-1 rounded-full mr-2"/>
        </div>
        
        <div className='flex flex-col w-3/4'>
          <div className='flex gap-1'>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
          </div>
          <p className="font-bold text-[#003366]">James Smith</p>
          <p className="text-gray-600 text-[0.7rem]">
          Senior Developer at CodeWorks
          </p>
        </div>
      </div>
      <p className="mt-1 text-[0.9rem]">
      The quality of speakers and content at TechAscend is top-notch. It{`'`}s been instrumental in keeping ou...
      </p>
      <Link
        href="/read-more"
        className="text-blue-500 hover:underline mt-2 block"
      >
        Read More →
      </Link>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex ">
        <div className='flex-1'>
        <Image src="/logo.png"
          alt="Avatar" width={50} height={50}  className=" flex-1 rounded-full mr-2"/>
        </div>
        
        <div className='flex flex-col w-3/4'>
          <div className='flex gap-1'>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00]  w-3'/>
          </div>
          <p className="font-bold text-[#003366]">Emma Johnson</p>
          <p className="text-gray-600 text-[0.7rem]">
          CTO at NextGen Solutions
          </p>
        </div>
      </div>
      <p className="mt-1 text-[0.9rem]">
      Every TechAscend event is a learning opportunity. The interactive sessions and workshops have given ...
      </p>
      <Link
        href="/read-more"
        className="text-blue-500 hover:underline mt-2 block"
      >
        Read More →
      </Link>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex ">
        <div className='flex-1'>
        <Image src="/logo.png"
          alt="Avatar" width={50} height={50}  className=" flex-1 rounded-full mr-2"/>
        </div>
        
        <div className='flex flex-col w-3/4'>
          <div className='flex gap-1'>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
            <StarIcon className='text-[#ffcc00] fill-current w-3'/>
          </div>
          <p className="font-bold text-[#003366]">Lucas Martinez</p>
          <p className="text-gray-600 text-[0.7rem]">
          Entrepreneur & Tech Enthusiast
          </p>
        </div>
      </div>
      <p className="mt-1 text-[0.9rem]">
      TechAscend{`'`}s community is vibrant and supportive. It{`'`}s the perfect place to share ideas and collabor...
      </p>
      <Link
        href="/read-more"
        className="text-blue-500 hover:underline mt-2 block"
      >
        Read More →
      </Link>
    </div>
    </div>
    <div className='flex justify-center'>
    <Button className="bg-[#ffcc00] mt-2 px-12 py-4 rounded-3xl text-black" >View More</Button>
    </div>

    </section>
    
  )
}
