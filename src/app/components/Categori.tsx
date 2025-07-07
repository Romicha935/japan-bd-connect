"use client"
import Aos from 'aos'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaBriefcase, FaGlobeAsia, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'



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
    
  useEffect(()=>{
    Aos.init({
      duration:1200,

    })
  },[])
  return (
    <section className='py-16 px-6 bg-gray-50'>
      <h1 className='text-3xl font-bold text-center text-blue-600 mb-4'>Explore Our Categories</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-10'>
        {categories.map((cat,idx)=> (
          <div data-aos='fade-right' data-aos-delay={idx * 100} key={idx} className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>
           <div className='flex justify-center mb-4 text-2xl'>{cat.icon}</div>
           <h3 className='text-xl font-semibold text-blue-700 mb-2'>{cat.title}</h3>
           <p className='text-gray-600 text-sm mb-4'>{cat.discription}</p>
           <Link href={cat.link} className='inline-block text-blue-600 font-medium text-sm hover:underline'>Learn More</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categori