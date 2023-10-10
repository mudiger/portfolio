"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData, skillsData1, skillsData2, skillsData3, skillsData4, skillsData5 } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import {motion} from "framer-motion";

const fadeInAnimationVariants={
    initial:{
        opacity:0,
        y:100,
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
    transition:{
        delay:0.05*index
    },
}),
}

export default function Skills() {
    const {ref}=useSectionInView("Skills");
  return (
    <section ref={ref} id="skills"className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <p className='mb-5 text-center'>Programming langugages</p>
        <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800'>
            {
                skillsData.map((skill,index)=>(
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-3 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
        <br></br>
        <p className='mb-5 text-center'>Database and Servers</p>
        <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800'>
            {
                skillsData1.map((skill,index)=>(
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-3 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
        <br></br>
        <p className='mb-5 text-center'>Software Framework</p>
        <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800'>
            {
                skillsData2.map((skill,index)=>(
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-3 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
        <br></br>
        <p className='mb-5 text-center'>Web Development</p>
        <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800'>
            {
                skillsData3.map((skill,index)=>(
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-3 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
        <br></br>
        <p className='mb-5 text-center'>Containers or Cloud</p>
        <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800'>
            {
                skillsData4.map((skill,index)=>(
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-3 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
        <br></br>
        <p className='mb-5 text-center'>Tools</p>
        <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800'>
            {
                skillsData5.map((skill,index)=>(
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-3 py-2' key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>

    </section>
  )
}
