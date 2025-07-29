


"use client"
import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaRobot, FaCloud, FaGlobeAsia, FaMobileAlt, FaRecycle } from 'react-icons/fa'

const focusAreas = [
  {
    title: "Artificial Intelligence",
    icon: <FaRobot size={40} className="text-blue-600" />,
    description: "Explore how AI is transforming industries in both Bangladesh and Japan."
  },
  {
    title: "Cloud Computing",
    icon: <FaCloud size={40} className="text-purple-600" />,
    description: "Access to global cloud platforms is enabling scalable businesses."
  },
  {
    title: "Global IT Outsourcing",
    icon: <FaGlobeAsia size={40} className="text-green-600" />,
    description: "Bangladesh is becoming a hub for IT outsourcing, working closely with Japan."
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt size={40} className="text-pink-600" />,
    description: "Smartphone applications are revolutionizing user engagement in both nations."
  },
  {
    title: "Green Technology",
    icon: <FaRecycle size={40} className="text-teal-600" />,
    description: "Sustainable tech solutions are being implemented in agriculture and energy."
  },
]

const FocusAreas = () => {
    useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true
        })
    },[])
  return (
    <section className='py-16 px-6 bg-gray-50'>
      <h2 data-aos='fade-up'  className='text-4xl font-bold text-blue-600 pl-20 py-5'>Our Tech Focus</h2>
       <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'  >
        {focusAreas.map((item,index)=> (
            <div key={index} className='bg-white rounded-md shadow-md hover:shadow-lg p-6 text-center transition' data-aos='fade-right' data-aos-delay={ index * 100}>
                <div className='mb-4 flex justify-center'>{item.icon}</div>
                <h3 className='text-lg font-semibold text-gray-800 mb-3'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.description}</p>
            </div>
        ))}
       </div>
    </section>
  )
}

export default FocusAreas