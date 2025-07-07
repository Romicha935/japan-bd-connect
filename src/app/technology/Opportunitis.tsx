"use client"
import Aos from 'aos'
import React, { useEffect } from 'react'

const Opportunitis = () => {
   useEffect(()=>{
          Aos.init({
              duration:1200,
              once:true
          })
      },[])
  return (
    <section className='py-16 px-6 bg-white'>
  <div data-aos='fade-right' className='max-w-5xl mx-auto '>
       <h2 className='text-3xl font-extrabold text-blue-600 mb-8 '> Opportunities for Youth in the Tech Industry</h2>
     <p className='text-gray-700 text-lg  mb-10'>With the rise of global tech collaboration, Bangladeshi youth now have immense opportunities in fields like software engineering, AI, robotics, and cybersecurity.</p>

     <ul className='list-disc list-inside text-gray-600 space-y-3 text-base'>
          <li><span className='font-medium text-blue-700'>Freelancing & Remote Jobs:</span> Japan-based companies are hiring Bangladeshi developers remotely.</li>
          <li><span className='font-medium text-blue-700'>Scholarships & Internships:</span> Japanese universities offer tech scholarships for Bangladeshi students.</li>
          <li><span className='font-medium text-blue-700'>Startup Culture:</span> Tech startups in Bangladesh are collaborating with Japanese investors.</li>
          <li><span className='font-medium text-blue-700'>IT Park Expansion:</span> Government initiatives are boosting the local tech ecosystem.</li>
        </ul>
  </div>
     <div>
        
     </div>
    </section>
  )
}

export default Opportunitis