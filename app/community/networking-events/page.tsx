import { Button } from '@/components/ui/button'
import { MessageCircle, MoveRight, NotebookText, Timer } from 'lucide-react'
import React from 'react'
import { WiDayFog } from 'react-icons/wi'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
export default function page() {
  return (
    <div className='bg-white pb-10'>
      <section className={`relative mx-10 max-sm:mt-[5rem] mt-[5rem]  max-sm:w-full max-sm:mx-0 max-sm:py-4 h-[68vh] bg-center bg-cover bg-[url('/mentor.webp')] `}>
        <div className="flex items-center  justify-center absolute inset-0 bg-[#003366] w-100 opacity-[0.9]">
          
        </div>
        <div className="absolute inset-0 flex items-center flex-col gap-5 max-sm:gap-3 justify-center">
        <h2 className="text-2xl max-sm:text-xl text-white font-bold"> Unlock Tech Riches in 2024</h2>
        
        <div>
          <h2 className='text-white text-xl max-sm:text-lg max-sm:text-center'>Join Ascend Talk 24.0: Unveil the Highest Earning Careers in Tech!</h2>
        </div>
        <div>
          <h2 className='text-white text-xl max-sm:text-xl max-sm:text-center'>Location: Bolo89, Douala(Akwa North), CMR</h2>
        </div>
        <div>
          <h2 className='text-white max-sm:text-xl text-xl max-sm:text-center'>Sat Feb 03 2024 14:00:00 GMT+0100 (West Africa Standard Time)</h2>
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
        <section className='mx-60 max-sm:mx-0 mt-5 border-[#00000075] pb-24 mb-24 border rounded-xl '>
        <div className='mt-5'>
          <h2 className="text-black text-3xl font-bold text-center">Events</h2>
        </div>
        <div className='flex flex-col max-sm:mx-5 items-center mx-36 justify-center'>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Recents Events</AccordionTrigger>
        <AccordionContent>
         Not Available
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>March</AccordionTrigger>
        <AccordionContent>
         Not Available
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger> February</AccordionTrigger>
        <AccordionContent>
        <div className='flex justify-center'>
          
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger> January</AccordionTrigger>
        <AccordionContent>
          Not Available
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <div className='mt-5'>
<Button className='bg-[#003366]'>More Events</Button>
    </div>
        </div>
        
        </section>
       <div className='mt-5'>
        <h3 className='text-center text-2xl font-bold'>Community Stories</h3>
        <div className='mt-12 max-sm:grid-cols-1 max-sm:mx-12 mx-36 gap-5 grid grid-cols-2'>
        <div className="bg-white border-[#00000075] border hover:bg-[#95c6fd] transition-all rounded-lg shadow-md p-4">
      <div className="flex flex-col gap-3 justify-center items-center ">
        
        
        <div className=''>
          
          <MessageCircle className='text-[#003366] fill-[#003366]'/>
        </div>
        <p className="mt-1 italic text-center text-[0.9rem]">
      My journey with TechAscend has been transformative.<br/> The community support is unparalleled.
      </p>
      <div>
        <h2 className='text-center text-md font-bold'>Emily Tan</h2>
      </div>
      </div>
      
    </div>
    <div className="bg-white hover:bg-[#95c6fd] border-[#00000075] border transition-all rounded-lg  shadow-md p-4">
      <div className="flex flex-col gap-3 justify-center items-center ">
        
        
        <div className=''>
          
          <MessageCircle className='text-[#003366] fill-[#003366]'/>
        </div>
        <p className="mt-1 italic text-center text-[0.9rem]">
      My journey with TechAscend has been transformative.<br/> The community support is unparalleled.
      </p>
      <div>
        <h2 className='text-center text-md font-bold'>Emily Tan</h2>
      </div>
      </div>
      
    </div>
        </div>
       </div>
    </div>
  )
}
