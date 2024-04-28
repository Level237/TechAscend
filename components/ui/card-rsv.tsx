"use client"
import React from 'react'
import { Button } from './button'
import { X } from 'lucide-react'
import {  useDispatch, useSelector } from 'react-redux';
import { hidden } from '@/store/store';
import { AnimatePresence,motion } from 'framer-motion'

export default function CardRsv() {
  const isVisible = useSelector((state:any) => state.RsvpSlice.isVisible);
  const dispatch = useDispatch();
  return (
    <>
    
    <AnimatePresence>
    {isVisible && (<motion.div
    initial={{ opacity:0}}
    animate={{opacity:1 }}
    transition={{ duration:1.5 }}
    exit={{ opacity:0, transition: {duration: 0.5}}}
    className='bg-[#003366] max-sm:relative  max-sm:w-full max-sm:h-[12rem] max-sm:justify-center max-sm:gap-1   h-[87px] mt-12  flex justify-between px-10 items-center gap-3 '>
     <div className='text-white cursor-pointer max-sm:block max-lg:hidden max-sm:absolute max-sm:top-2 max-sm:right-2'>
        <X onClick={() => dispatch(hidden())}/>
      </div>
      <div className='flex justify-center max-sm:flex-col items-center max-sm:gap-1 max-sm:justify-center max-sm:items-center text-white gap-16'>
        <div className='max-sm:flex max-sm:justify-between '>
          <div  className='max-sm:text-center max-sm:flex-1'>
          <span className=''>Unlock Tech Riches in 2024</span>
          </div>
          
          
        </div>
        <div className='max-sm:text-center'>
          <span >location: Bolo89, Douala(Akwa North), CMR</span>
        </div>
        <div>
          <span>Sat Feb 03 2024 14:00:00 GMT+0100</span>
        </div>
        <div>
          <Button className='bg-[#ffcc00] px-12 rounded-full text-lg font-light text-black'>RSVP</Button>
        </div>
      </div>
      <div className='text-white cursor-pointer max-sm:hidden'>
        <X onClick={() => dispatch(hidden())}/>
      </div>
    </motion.div>)}
    </AnimatePresence>
     </>
   
  )
}
