"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../public/gallery/remotejobBanner.jpeg'

const Banner = () => {
  return (
      <section className='w-full relative h-screen  overflow-hidden rounded-xl shadow-md mb-10'>
        <Image src={banner} alt='Technology' fill className='object-cover brightness-75'/>
          <div className='absolute flex flex-col justify-center items-center p-8 text-white text-center '>
          <h1 className='text-4xl md:text-5xl md:pl-20 justify-center items-center pt-40  md:pt-44 sm:w-full  font-extrabold mb-4 drop-shadow-lg '>Work from Bangladesh for Japanese Companies</h1>
        <p className='max-w-xl text-lg md:text-xl drop-shadow-md'>Explore cross-border job opportunities between Japan & Bangladesh. </p>
</div>
      </section>
  )
}

export default Banner