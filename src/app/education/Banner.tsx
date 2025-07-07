"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../public/educationBanner.jpg'

const Banner = () => {
  return (
      <section className='w-full relative h-screen  overflow-hidden rounded-xl shadow-md mb-10'>
        <Image src={banner} alt='Technology' fill className='object-cover brightness-75'/>
          <div className='absolute flex flex-col justify-center items-center py-20 px-20 mt-10 md:mx-0 text-white text-center '>
          <h1 className='text-7xl  justify-center text-center items-center md:pt-32 font-extrabold mb-4 drop-shadow-lg '>Learn. Connect. Grow Together.</h1>
        <p className='max-w-xl text-lg md:text-xl drop-shadow-md'>Explore educational paths between Japan and Bangladesh.</p>
</div>
      </section>
  )
}

export default Banner