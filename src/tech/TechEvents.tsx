"use client"
import Aos from 'aos'
import React, { useEffect } from 'react'

const TechEvents = () => {
    const events = [
    {
      title: "Japan-Bangladesh Tech Summit 2024",
      date: "August 25, 2024",
      location: "Tokyo, Japan",
      description: "A collaborative summit highlighting tech exchange and startup partnerships between Japan and Bangladesh."
    },
    {
      title: "Dhaka Innovation Expo",
      date: "October 10, 2024",
      location: "Dhaka, Bangladesh",
      description: "A major tech exhibition showcasing Bangladeshi startups, robotics, and software innovations."
    },
    {
      title: "AI & Robotics Seminar",
      date: "December 15, 2024",
      location: "Osaka, Japan",
      description: "Experts from Japan and Bangladesh discuss the future of Artificial Intelligence and Robotics."
    },
  ]

   useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true
        })
    },[])
  return (
    <section className='py-16 px-6 bg-gray-50'>
        <div className='max-w-6xl mx-auto '>
            <h2 className='text-3xl font-extrabold text-blue-600 mb-10' data-aos='fade-up'>Upcoming Tech Events & Conferences</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {events.map((event,idx)=> (
                    <div key={idx} className='bg-white rounded-md shadow-md overflow-hidden transition p-6 hover:shadow-xl' data-aos='fade-down'>
                     <h3 className='text-xl font-bold text-blue-800 mb-4'>{event.title}</h3>
                     <p className='text-sm text-gray-600 mb-2'>{event.location}</p>
                     <p className='text-sm text-gray-600 mb-2'>{event.date}</p>
                     <p className='text-sm text-gray-700'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TechEvents