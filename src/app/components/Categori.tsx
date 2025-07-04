"use client"
import Link from 'next/link'
import React from 'react'
import { FaBriefcase, FaGlobeAsia, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'
import { motion } from 'framer-motion';


const Categori = () => {
  const categories  = [
    {
      title:'Culture',
      discription:'Explore the blend of Bangladeshi and Japanese traditions.',
      icon:<FaGlobeAsia/>,
      link: '/culture'
    },
    {
      title:'Technology',
      discription:'Discover the latest innovations and collaborations in tech.',
      icon:<FaLaptopCode/>,
      link: '/technology'
    },
    {
      title:'Education',
      discription:'Find study opportunities, language courses, and scholarships.',
      icon:<FaGraduationCap/>,
      link: '/education'
    },
    {
      title:'Remote Jobs',
      discription:'Search remote jobs that connect Japan and Bangladesh.',
      icon:<FaBriefcase/>,
      link: '/remote-jobs'
    },
  ]
    
  return (
    <section className='py-16 px-6 bg-gray-50'>
      <h1 className='text-3xl font-bold text-center text-blue-600 mb-4'>Explore Our Categories</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-10'>
        {categories.map((cat,idx)=> (
          <motion.div key={idx} className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300'
           initial={{opacity:0, x:-100}}
            whileInView={{opacity:1,x:-1}}
             transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1] // iOS-like bezier easing
              }}
          >
           <div className='flex justify-center mb-4 text-2xl'>{cat.icon}</div>
           <h3 className='text-xl font-semibold text-blue-700 mb-2'>{cat.title}</h3>
           <p className='text-gray-600 text-sm mb-4'>{cat.discription}</p>
           <Link href={cat.link} className='inline-block text-blue-600 font-medium text-sm hover:underline'>Learn More</Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Categori