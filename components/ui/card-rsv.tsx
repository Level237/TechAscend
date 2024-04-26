import React from 'react'
import { Button } from './button'
import { X } from 'lucide-react'

export default function CardRsv() {
  return (
    <div className='bg-[#003366] h-[87px] mt-12  flex justify-between px-10 items-center gap-3 '>
      <div className='flex justify-center items-center text-white gap-16'>
        <div>
          <span>Unlock Tech Riches in 2024</span>
        </div>
        <div>
          <span>location: Bolo89, Douala(Akwa North), CMR</span>
        </div>
        <div>
          <span>Sat Feb 03 2024 14:00:00 GMT+0100</span>
        </div>
        <div>
          <Button className='bg-[#ffcc00] px-12 rounded-full text-lg font-light text-black'>RSVP</Button>
        </div>
      </div>
      <div className='text-white cursor-pointer'>
        <X/>
      </div>
    </div>
  )
}
