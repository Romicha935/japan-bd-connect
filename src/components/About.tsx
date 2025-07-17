import React from 'react'
import about from '../../public/about.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <section className='py-16 px-6 bg-white flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto'>
        <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold text-blue-600 mb-4'>About Nippon-BD Connect</h2>
            <p className='text-gray-700 text-lg'> Nippon-BD Connect is a bridge between Bangladesh and Japan, focusing on cultural exchange, education, technology collaboration, and remote work opportunities. Our goal is to connect people and build meaningful careers across borders.</p>
        </div>

        {/* image part */}
        <div className='md:w-1/2'>
            <Image className='rounded-xl shado-md w-full object-cover' src={about} alt="Bangladesh Japan Collaboration" />
        </div>

    </section>
  )
}

export default About