"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'


export default function Contact() {
  const {ref}=useSectionInView("Contact")

  return (
    
    <motion.section ref={ref} id="contact" className='scroll-mt-28  mb-100 sm:mb-60 w-[min(100%,38rem)]' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-black text-center">
        Please contact me at{" "}
        <a className="underline" href="mailto:saarthakmudigere@gmail.com">
          saarthakmudigere@gmail.com
        </a>.
      </p>
        
    </motion.section>
  )
}
