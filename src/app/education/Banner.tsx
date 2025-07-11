"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../public/educationBanner.jpg'

const Banner = () => {
  return (
    <section className='w-full relative h-screen overflow-hidden rounded-xl shadow-md mb-10'>
      <Image src={banner} alt='Education Banner' fill className='object-cover brightness-75' />

      <div className='absolute inset-0 flex flex-col justify-center items-center px-4 md:px-20 text-white text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight'>
          Learn. Connect. Grow Together.
        </h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl max-w-xl drop-shadow-md'>
          Explore educational paths between Japan and Bangladesh.
        </p>
      </div>
    </section>
  )
}

export default Banner
