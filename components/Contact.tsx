import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function Contact() {
  return (
    <div className='mt-3 bg-white w-[38rem] px-5 py-7 rounded-2xl'>
        <form action="">

            <div className='flex flex-col gap-2 mb-5'>
            <Label className='text-[#003366] font-bold' htmlFor="email">Name</Label>
      <Input type="text" placeholder="Your name" />
            </div>
            <div className='flex flex-col gap-2 mb-5'>
            <Label className='text-[#003366] font-bold' htmlFor="email">Email</Label>
      <Input type="text" placeholder="Your Email" />
            </div>
            <div className='flex flex-col gap-2'>
            <Label className='text-[#003366] font-bold' htmlFor="email">Message</Label>
            <Textarea placeholder="Type your message here." />
            </div>
            <div className='mt-5 flex justify-center'>
                <Button className='bg-[#ffcc00] text-black'>Send Us a Message</Button>
            </div>
        </form>
      
    </div>
  )
}
