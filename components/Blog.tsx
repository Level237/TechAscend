import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

export default function Blog() {
  return (
    <div className='grid grid-cols-4 max-sm:grid-cols-1 mt-6 gap-[3rem]  max-sm:mx-5'>
      <div className='w-[300px] '>
    <Card className="w-full rounded-xl">
      <CardHeader className="bg-[url('/hero1.webp')] bg-cover h-36 rounded-t-xl relative">
       <div className='px-3 py-1 absolute top-5 bg-white rounded-xl'>
        <span className='font-bold text-sm'>
        29 Nov
        </span>

       </div>
      </CardHeader>
      <CardContent>
       <div className='flex flex-col mt-2 gap-2'>
        <div className='mt-3'>
          <h2 className='text-gray-500'>Events</h2>
        </div>
            <div>
                <h2 className='text-black text-lg font-bold'>3 Best Practices for Keeping Your Event Clients Happy</h2>
            </div>
            <div>
                <span className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] text-lg font-bold" variant="ghost">Read Blog<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div className='w-[300px]'>
    <Card className="w-full rounded-xl ">
      <CardHeader className="bg-[url('/hero3.webp')] bg-cover bg-bottom h-[10rem] rounded-t-xl relative">
       <div className='px-3 py-1 absolute top-5 bg-white rounded-xl'>
        <span className='font-bold text-sm'>
        15 Mar
        </span>

       </div>
      </CardHeader>
      <CardContent>
       <div className='flex flex-col mt-2 gap-2'>
        <div className='mt-3'>
          <h2 className='text-gray-500'>Conference</h2>
        </div>
            <div>
                <h2 className='text-black text-md font-bold'>Adding a New Digital Dimension to Your Next Special Event</h2>
            </div>
            <div>
                <span className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] text-lg font-bold" variant="ghost">Read Blog<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div className='w-[300px]'>
    <Card className="w-full rounded-xl ">
      <CardHeader className="bg-[url('/hero2.webp')] bg-cover h-36 rounded-t-xl relative">
       <div className='px-3 py-1 absolute top-5 bg-white rounded-xl'>
        <span className='font-bold text-sm'>
        29 Nov
        </span>

       </div>
      </CardHeader>
      <CardContent>
       <div className='flex flex-col mt-2 gap-2'>
        <div className='mt-3'>
          <h2 className='text-gray-500'>Marketing</h2>
        </div>
            <div>
                <h2 className='text-black text-md font-bold'>West Elm At Evantor 2023 + Room Makeover Competition!</h2>
            </div>
            <div>
                <span className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] text-lg font-bold" variant="ghost">Read Blog<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div className='w-[300px]'>
    <Card className="w-full rounded-xl ">
      <CardHeader className="bg-[url('/hero1.webp')] bg-cover h-36 rounded-t-xl relative">
       <div className='px-3 py-1 absolute top-5 bg-white rounded-xl'>
        <span className='font-bold text-sm'>
        29 Nov
        </span>

       </div>
      </CardHeader>
      <CardContent>
       <div className='flex flex-col mt-2 gap-2'>
        <div className='mt-3'>
          <h2 className='text-gray-500'>Events</h2>
        </div>
            <div>
                <h2 className='text-black text-lg font-bold'>3 Best Practices for Keeping Your Event Clients Happy</h2>
            </div>
            <div>
                <span className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt.</span>
            </div>
            <div>
            <Button className="flex gap-2 text-[#003366] text-lg font-bold" variant="ghost">Read Blog<MoveRight/></Button>
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
