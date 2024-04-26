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
    <div className='mt-6 grid grid-cols-4 gap-[2rem] mb-6'>
      <div>
    <Card className="w-[300px] max-h-[28rem]">
      <CardHeader className="bg-[url('/talks.webp')] bg-cover py-36">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-lg font-bold'>Skill Workshops</h2>
            </div>
            <div>
                <span>Hands-on workshops to enhance your skills and knowledge.</span>
            </div>
            <div>
            <Button className="flex gap-2" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[300px] max-h-[28rem]">
      <CardHeader className="bg-[url('/wkshop.webp')] bg-cover py-36">
       
      </CardHeader>
      <CardContent>
       <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-lg font-bold'>Skill Workshops</h2>
            </div>
            <div>
                <span>Hands-on workshops to enhance your skills and knowledge.</span>
            </div>
            <div>
            <Button className="flex gap-2" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[300px] max-h-[28rem]">
      <CardHeader className="bg-[url('/networking.webp')] bg-cover py-36">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-lg font-bold'>Skill Workshops</h2>
            </div>
            <div>
                <span>Hands-on workshops to enhance your skills and knowledge.</span>
            </div>
            <div>
            <Button className="flex gap-2" variant="ghost">See more<MoveRight/></Button>
            </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className="w-[300px] max-h-[28rem]">
      <CardHeader className="bg-[url('/mentor.webp')] bg-cover py-36">
       
      </CardHeader>
      <CardContent>
      <div className='flex flex-col mt-2 gap-2'>
            <div>
                <h2 className='text-black text-lg font-bold'>Skill Workshops</h2>
            </div>
            <div>
                <span>Hands-on workshops to enhance your skills and knowledge.</span>
            </div>
            <div>
            <Button className="flex gap-2" variant="ghost">See more<MoveRight/></Button>
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
