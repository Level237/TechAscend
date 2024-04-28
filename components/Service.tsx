import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import { Button } from './ui/button'

export default function Service() {
  return (
    <div className='mt-6 grid grid-cols-4 max-sm:mx-3 gap-[2rem] mb-6 max-sm:grid-cols-1'>
      <div >
    <Card className="w-[300px] max-h-[28rem] max-sm:w-full">
      <CardHeader className="bg-[url('/talks.webp')] bg-cover py-[8.5rem]">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-xl font-bold'>Ascend Talks</h2>
            </div>
            <div>
                <span className='text-gray-600'>Gain insights from industry experts and stay ahead in the tech world.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] font-bold text-lg" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[300px] max-h-[28rem] max-sm:w-full">
      <CardHeader className="bg-[url('/wkshop.webp')] bg-cover py-[8.5rem]">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-xl font-bold'>Skill Workshops</h2>
            </div>
            <div>
                <span className='text-gray-600'>Hands-on workshops to enhance your skills and knowledge.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] font-bold text-lg" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[300px] max-h-[28rem] max-sm:w-full">
      <CardHeader className="bg-[url('/networking.webp')] bg-cover py-[8.5rem]">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-xl font-bold'>Networking Events</h2>
            </div>
            <div>
                <span className='text-gray-600'>Connect with fellow developers and expand your professional network.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] font-bold text-lg" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[300px] max-h-[28rem] max-sm:w-full">
      <CardHeader className="bg-[url('/mentor.webp')] bg-cover object-cover py-[8.5rem]">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-xl font-bold'>Mentorship Program</h2>
            </div>
            <div>
                <span className='text-gray-600'>Get guidance from experienced mentors in the tech industry.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] font-bold text-lg" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}
