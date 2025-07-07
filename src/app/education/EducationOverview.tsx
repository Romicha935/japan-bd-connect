"use client"
import Aos from 'aos'
import React, { useEffect } from 'react'

const EducationOverview = () => {
    useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true
        })
    },[])
  return (
    <section className='py-16 px-6 bg-gray-50'>
      <h2 data-aos='fade-down' className='text-4xl font-bold text-center text-blue-600 mb-10'>Education Systems Overview</h2>
      <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
        {/* japan */}
        <div data-aos='fade-left' className='bg-white rounded-md p-4 hover:shadow-xl shadow hover:scale-105 transition'>
          <h3 className='text-2xl font-bold hover:text-blue-500 mb-5'>Japan</h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>6 years primary, 3 years junior high, 3 years high school</li>
            <li>Top universities like Tokyo University, Kyoto University</li>
            <li>Highly disciplined and structured curriculum</li>
            <li>High focus on STEM & research</li>
            <li>Japanese language proficiency (JLPT) required</li>
          </ul>
        </div>
        {/* bangladesh */}
        <div data-aos='fade-right' className='bg-white rounded-md p-4 hover:shadow-xl shadow hover:scale-105 transition'>
          <h3 className='text-2xl font-bold hover:text-blue-500 mb-5'>Bangladesh</h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>5 years primary, 5 years secondary, 2 years higher secondary</li>
            <li>Top universities like BUET, DU, NSU</li>
            <li>General, Madrasah, and English medium streams</li>
            <li>Focus on academic results & theory-based learning</li>
            <li>English/Bangla medium, no foreign language required</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EducationOverview