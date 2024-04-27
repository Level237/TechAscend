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
    exit={{ opacity:0, transition: {duration: 0.5}}}
    className='bg-[#003366] h-[87px] mt-12  flex justify-between px-10 items-center gap-3 '>
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
        <X onClick={() => dispatch(hidden())}/>
      </div>
    </motion.div>)}
    </AnimatePresence>
     </>
   
  )
}
