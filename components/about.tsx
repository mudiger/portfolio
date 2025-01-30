"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const {ref}=useSectionInView("About",0.8);
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}} id="about">
        <SectionHeading>About me</SectionHeading>
        <p>
        I'm a Master’s graduate in Computer Science with a passion for <span className='font-medium'>Software Development</span>{" "} and <span className='font-medium'>DevOps.</span>{" "}
        My expertise includes <span className='font-medium'>full-stack development, automation, cloud computing (AWS, Azure), and CI/CD pipelines.</span>{" "}
        I enjoy building scalable solutions, optimizing workflows, and automating processes to improve efficiency.
        Always excited to learn and take on new challenges!
        </p>

    </motion.section>
  )
}
