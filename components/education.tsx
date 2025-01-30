"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import {motion} from "framer-motion"

export default function Education() {
    const {ref}=useSectionInView("Education",0.8)
  return (
    
    <motion.section ref={ref} id="education" className='scroll-mt-28 mb-28'initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} >
        <SectionHeading>My education</SectionHeading>
    {/* <div className="flex justify-center  pt-20 w-100 "> */}
    <div>

      <ul>
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className=" text-gray-500 font-medium">Jan 2023 - Dec 2024</p>
            <p className="mt-2  text-lg font-medium">Master&apos;s of Science in Computer Science <br></br>University Of Texas at Arlington</p>
          </div>
        </li>
        
        <li className="relative flex items-baseline gap-6 pb-5">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className=" text-gray-500 font-medium">Aug 2018 - Jul 2022</p>
            <p className="mt-2  text-lg font-medium">Bachelor of Engineering in Computer Science and Engineering<br></br>Visvesvaraya Technological University</p>
          </div>
        </li>
      </ul>
    </div>
  </motion.section>
  )
}
