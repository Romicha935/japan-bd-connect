"use client"

import Image from 'next/image'
import bdStartup from '../../../public/bdstartup.jpg'
import japanTech from '../../../public/robotik.jpg'
import { useEffect } from 'react'
import Aos from 'aos'
const stories = [
  {
    title: "Pathao – Bangladesh's Tech Pioneer",
    description:
      "Pathao is a leading digital platform offering ride-sharing, food delivery, and payment services. It’s one of the fastest-growing tech companies in South Asia.",
    image: bdStartup,
  },
  {
    title: "Japan’s Robotics Leadership",
    description:
      "Japan is globally recognized for its advancements in robotics. From healthcare robots to industrial automation, Japan continues to set the benchmark.",
    image: japanTech,
  },
]
const SuccessStorys = () => {
    useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true
        })
    },[])
  return (
    <section  className='py-16 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
            <h2 data-aos='fade-down' className='text-3xl font-extrabold text-blue-600 mb-7'>Tech Success Stories</h2>
            <div className='grid md:grid-cols-2 gap-10'>
                {stories.map((story,idx)=> (
                    <div data-aos='fade-right' key={idx} className='rounded-lg shadow-md hover:shadow-xl transition bg-white overflow-hidden'>
                        <Image src={story.image} alt='bd startup' className='w-full h-56 object-cover'/>
                        <div data-aos='fade-up' className='p-4'>
                            <h3 className='text-xl font-bold text-blue-500 mb-2'>{story.title}</h3>
                            <p className='text-gray-700 text-sm'>{story.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SuccessStorys