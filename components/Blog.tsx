import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

export default function Blog() {
  return (
    <div className='grid grid-cols-4 mt-6 gap-[3rem]'>
      <div className='w-[300px] '>
    <Card className="w-full rounded-xl ">
      <CardHeader className="bg-[url('/hero1.webp')] bg-cover h-36 rounded-t-xl ">
       
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
    <div className='w-[300px]'>
    <Card className="w-full rounded-xl">
      <CardHeader className="bg-[url('/hero1.webp')] bg-cover h-36 rounded-t-xl">
       
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
    <div className='w-[300px]'>
    <Card className="w-full">
      <CardHeader className="bg-[url('/hero1.webp')] bg-cover h-36">
       
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
    <div className='w-[300px]'>
    <Card className="w-full">
      <CardHeader className="bg-[url('/hero1.webp')] bg-cover h-36">
       
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
