"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import {motion} from "framer-motion"

export default function Experience() {
    const {ref}=useSectionInView("Experience",0.8)
  return (
    <motion.section ref={ref} id="experience" className='scroll-mt-28 mb-28'initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} >
        <SectionHeading>My experience</SectionHeading>
    <div>
      <ul>
          <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className=" text-gray-500 font-medium">Mar 2025 - Present</p>
            <p className="mt-2  text-lg font-medium">Software Engineer<br></br>Kaytics</p>
          </div>
        </li>
          
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className=" text-gray-500 font-medium">May 2024 - Dec 2024</p>
            <p className="mt-2  text-lg font-medium">Software Engineer<br></br>Nucor Corporation</p>
          </div>
        </li>
        
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className=" text-gray-500 font-medium">Sep 2021 - Dec 2022</p>
            <p className="mt-2  text-lg font-medium">Software Engineer<br></br>Dell Technologies</p>
          </div>
        </li>

        <li className="relative flex items-baseline gap-6 pb-5">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className=" text-gray-500 font-medium">Feb 2021 - Aug 2021</p>                                                                                                                            
            <p className="mt-2  text-lg font-medium">Software Engineer Intern<br></br>Trigent Software</p>
          </div>
        </li>
      </ul>
    </div>
  </motion.section>
  )
}
