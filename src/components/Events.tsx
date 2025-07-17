"use client"
import React from 'react'

const Events = () => {
    const eventList = [
       {
      title: 'Japan-Bangladesh Language Exchange',
      date: 'July 20, 2025',
      desc: 'An interactive language meetup for cultural bonding.',
    },
    {
      title: 'Remote Job Readiness Webinar',
      date: 'Aug 4, 2025',
      desc: 'A practical session on preparing for remote jobs in Japan.',
    },
    ]
  return (
    <section className='bg-white py-16 px-4'>
       
            <h2 className='text-3xl font-bold md:text-4xl text-center text-blue-700 mb-10'>Upcoming Events & Webiners</h2>
             <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto '>
                {eventList.map((event,idx)=> (
                 <div key={idx} className='border border-blue-600 p-4 bg-gray-50 shadow-md rounded-md hover:scale-105 '>
                    <h3 className='text-xl font-semibold text-blue-800'>{event.title}</h3>
                    <p className='text-sm text-gray-500 '>{event.date}</p>
                    <p className='text-gray-600 mt-2'>{event.desc}</p>
                 </div>
                ))}
             </div>
    </section>
  )
}

export default Events