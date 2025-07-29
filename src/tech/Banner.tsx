"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../public/technologyr.jpeg'

const Banner = () => {
  return (
      <section className='w-full relative h-screen  overflow-hidden rounded-xl shadow-md mb-10'>
        <Image src={banner} alt='Technology' fill className='object-cover brightness-75'/>
          <div className='absolute flex flex-col justify-center items-center p-8 text-white text-center '>
          <h1 className='text-3xl md:text-4xl lg:text-5xl justify-center items-center pt-40 md:pt-44 w-full  font-extrabold mb-4 drop-shadow-lg '>Empowering the Future with Cutting-Edge Technolog</h1>
        <p className='max-w-xl text-lg md:text-xl drop-shadow-md'>Stay updated on innovations, digital transformation, and technology collaboration between Japan and Bangladesh.</p>
</div>
      </section>
  )
}

export default Banner