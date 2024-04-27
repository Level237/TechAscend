import { Button } from '@/components/ui/button'
import { MoveRight, NotebookText, Timer } from 'lucide-react'
import React from 'react'
import { WiDayFog } from 'react-icons/wi'

export default function page() {
  return (
    <div className='bg-white'>
      <section className={`relative mx-10 h-[68vh] bg-center bg-cover bg-[url('/mentor.webp')] `}>
        <div className="flex items-center  justify-center absolute inset-0 bg-[#003366] w-100 opacity-[0.7]">
          
        </div>
        <div className="absolute inset-0 flex items-center flex-col gap-5 justify-center">
        <h2 className="text-2xl text-white font-bold"> Unlock Tech Riches in 2024</h2>
        <div>
          <h2 className='text-white text-xl'>Join Ascend Talk 24.0: Unveil the Highest Earning Careers in Tech!</h2>
        </div>
        <div>
          <h2 className='text-white text-xl'>Location: Bolo89, Douala(Akwa North), CMR</h2>
        </div>
        <div>
          <h2 className='text-white text-xl'>Sat Feb 03 2024 14:00:00 GMT+0100 (West Africa Standard Time)</h2>
        </div>
        <div>
          <h2 className='text-red-500 text-md'>Time’s up!
</h2>
        </div>
        <div>
          <Button className='bg-[#ffcc00] text-base border-white text-black border-[1px] rounded-2xl px-7' variant="default">View Details<MoveRight/></Button>
        </div>
        </div>
        
        </section>
        <section className='mx-60 mt-5 border-[#00000075] pb-24 border rounded-xl '>
        <div className='mt-5'>
          <h2 className="text-black text-3xl font-bold text-center">Past Events</h2>
        </div>
        <div className='mt-5 flex items-center justify-center'>
          <div className=''>
            <NotebookText className='text-3xl'/>
          </div>
          <h2 className="text-[#003366] font-bold text-xl text-center">Unlock Tech Riches in 2024</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className=''>
            <WiDayFog className='text-3xl'/>
          </div>
          <h2 className="text-[#003366] font-bold text-sm text-center">03 Feb 2024 </h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className=''>
            <Timer className='text-3xl'/>
          </div>
          <h2 className="text-[#003366] font-bold text-sm text-center">14:00:00 GMT+0100 (West Africa Standard Time)</h2>
        </div>
        </section>
       
    </div>
  )
}
