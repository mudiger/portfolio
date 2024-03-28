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
        <p className='mb-3'>
        I&apos;m currently a <span className='font-medium'> Computer Science </span>{" "} Master&apos;s student at the <span className='font-medium'>University of Texas at Arlington</span>{" "} (UTA), driven by an unwavering passion for technology and innovation. My journey began when I embarked on as an Associate Software Engineer, which served as a catalyst for my deep fascination with the boundless opportunities offered by the field of computer science. Applying my skills to create impactful projects that push the limits of what is possible gives me a great deal of joy.
        </p>

        <p>
        Throughout my carreer, I&apos;ve meticulously cultivated my expertise across diverse domains, including <span className='font-medium'>Full Stack Web Development</span>, <span className='font-medium'>Artificial Intelligence</span>, and <span className='font-medium'>Machine Learning</span>.
        My commitment to knowledge expansion is unwavering, as I continually seek opportunities to broaden my horizons and deepen my proficiency in these areas.
        As I embark on the next chapter of my career, I am enthusiastic about applying my well-rounded skill set to real-world challenges and driving innovation in the world of technology. 
        </p>

    </motion.section>
  )
}
