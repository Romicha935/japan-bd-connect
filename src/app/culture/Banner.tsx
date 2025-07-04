 "use client"
import React from 'react'
import bannerImg from '../../../public/cultureBanner.jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-[400px] md:h-[500px] w-full mb-5'>
        <Image src={bannerImg} alt='Culture banner' layout='fill' objectFit='cover' className='brightness-75'/>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>Celebreating cultures of Japan & Bangladesh</h1>
        <p className='max-w-2xl text-base md:text-base-lg'>          Discover the beauty of two diverse nations through food, traditions, festivals, and values.</p>
      </div>
    </div>
  )
}

export default Banner