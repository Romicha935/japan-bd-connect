"use client"
import Aos from 'aos'
import React, { useEffect } from 'react'

const Impact = () => {
     useEffect(()=>{
        Aos.init({
          duration:1200,
    
        })
      },[])
  return (
      <section data-aos='zoom-in' className='bg-blue-50 py-16 text-center'>
        <h2 className='text-3xl font-bold text-blue-600 mb-8'>Our Impact</h2>
        <div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-blue-800 text-lg font-semibold'>
            <div>
                <p>500+</p>
                <p>Job Seekers Connected</p>
            </div>
            <div>
                <p>120+</p>
                <p>Culture Events Shared</p>
            </div>
            <div>
                <p>80+</p>
                <p>Tech Projects Posted</p>
            </div>
            
            <div>
                <p>100+</p>
                <p>Study Abroad Resources</p>
            </div>
        </div>
      </section>
  )
}

export default Impact