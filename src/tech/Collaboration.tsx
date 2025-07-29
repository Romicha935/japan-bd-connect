"use client"
import React from 'react'

import collaborationImg from '../../../public/collabration.jpg'
import Image from 'next/image'

const Collaboration = () => {
  return (
    <section className='py-16 px-6 bg-white'>
    <div className='flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-10'>
        <div className='w-full md:w-1/2' data-aos='fade-ight'>
             <Image src={collaborationImg} alt='Japan Bangladesh Collaboration' className='w-full rounde-xl shadow-lg hover:shadow'/>
        </div>
        <div className='w-full md:w-1/2' data-aos='fade-left'>
            <h2 className='text-3xl font-bold text-blue-600 mb-4'>Japan-Bangladesh Tech Collaboration</h2>
            <p className='text-gray-700 mb-4'>Japan and Bangladesh have formed strong partnerships in various technological sectors. Japan invests in Bangladesh’s ICT infrastructure, while Bangladeshi developers contribute to Japanese software and outsourcing needs.
</p>
            <p className='text-gray-700'>From smart city projects to AI-based solutions and robotics, both countries benefit from this cross-border innovation. Educational exchange programs and tech incubators are also enhancing this cooperation.</p>
        </div>
    </div>

    </section>
  )
}

export default Collaboration