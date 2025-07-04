"use client"
import React, { useEffect } from 'react'
import japanReligion from '../../../../public/japanreligion.jpg'
import bdReligion from '../../../../public/bdReligion.jpg'
import Image from 'next/image'
import AOS from 'aos'

const Religion = () => {
    useEffect(()=>{
    AOS.init(
        {
            duration:1200,
            easing:'ease-in-out',
            once:true
        }
    )
    },[])
  return (
    <section className='py-16 px-5 max-w-7xl mx-auto'>
     <h1 className='text-3xl font-bold text-purple-700 text-center mb-10' data-aos='fade-up'>Religions in Japan & Bnagladesh</h1>

     <div className='flex flex-col-reverse md:flex-row gap-0 items-center'>
        <div className='w-full md:w-1/2  ' data-aos='fade-right' data-aos-delay='300'>
            <h2 className='text-2xl font-bold text-gray-800'>Japan</h2>
            <p className='text-gray-700 pr-4'>Japan is primarily influenced by Shinto and Buddhism. Temples and shrines are part of daily life.
            Seasonal festivals often have deep spiritual significance.</p>
        </div>
        <div data-aos='fade-left'>
            <Image src={japanReligion} alt='japan Religion'  className='w-full h-full rounded-xl shadow-md object-cover hover:scale-105'/>
        </div>
     </div>

     <div className='flex flex-col-reverse md:flex-row gap-0 items-center '>
         <div className='md:w-1/2 ' data-aos='fade-right'>
            <Image data-aos='fade-right'  src={bdReligion} alt='japan Religion' className='w-full h-full rounded-xl shadow-md object-cover hover:scale-105'/>
        </div>
        <div className='w-full md:w-1/2 pl-8' data-aos='fade-left'>
            <h2 className='text-2xl font-bold text-gray-800'>Bangladesh</h2>
            <p className='text-gray-700 '>  Bangladesh is predominantly Muslim, with Hinduism, Buddhism, and Christianity as minorities.
            Religion plays a strong cultural role with vibrant celebrations like Eid and Durga Puja.</p>
        </div>
       
     </div>
    </section>
  )
}

export default Religion