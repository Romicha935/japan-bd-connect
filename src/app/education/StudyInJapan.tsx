"use client"
import React, { useEffect } from 'react'

import studyInjapan from '../../../public/studyinJapan.jpeg'
import Image from 'next/image'
import Aos from 'aos'

const StudyInJapan = () => {
    useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true,
             easing: "ease-in-out",
        })
    },[])
  return (
    <section className='py-16 px-6 bg-white'>
       <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-16'>
        {/* Image */}
        <div data-aos='fade-up-left' className='w-full md:w-1/2 hover:scale-105 hover:shadow-xl'>
            <Image src={studyInjapan} alt='Study In Japan' className='w-full h-full object-cover rounded-xl hover:scal-105' />
        </div>
        {/* text */}
        <div data-aos='fade-down-right' className='w-full md:w-1/2 hover:shadow-xl px-5'>
            <h2 className='text-3xl font-bold text-blue-600 mb-4'>Study In Japan for Bangladeshi Students</h2>
            <p className='text-gray-700 mb-4'>  Japan has become one of the top destinations for Bangladeshi students seeking high-quality education in a technologically advanced environment. From scholarships to top universities — Japan offers diverse opportunities for Bangladeshis.</p>
              <ul className="list-disc pl-5 space-y-2 mb-3 text-gray-700">
                        <li>
                            <span className='font-semibold'>🎓 Scholarships:</span> MEXT (Japanese Government), JASSO, and university-specific scholarships available for Bangladeshi students.
                        </li>
                        <li>
                            <span className='font-semibold'>🌏 Language Preparation:</span> Japanese Language Schools in Dhaka and Tokyo provide JLPT-based training.
                        </li>
                        <li>
                            <span className='font-semibold'>🏫 Top Universities:</span> University of Tokyo, Kyoto University, Osaka University — offering international programs.
                        </li>
                        <li>
                            <span className='font-semibold'>📋 Admission Requirements:</span> Academic transcripts, Statement of Purpose, JLPT/NAT Test (optional for English programs).
                        </li>
                        <li>
                            <span className='font-semibold'>📌 Visa Process:</span> Apply through the Embassy of Japan in Bangladesh with a valid Certificate of Eligibility (CoE).
                        </li>
                    </ul>

        </div>
       </div>
    </section>
  )
}

export default StudyInJapan