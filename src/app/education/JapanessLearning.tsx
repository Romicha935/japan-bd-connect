"use client"
import React, { useEffect } from 'react'
import JpLanguageLearning from '../../../public/jplanguageLearning.jpg'
import Image from 'next/image'
import Aos from 'aos'

const JapanessLearning = () => {
     useEffect(()=>{
            Aos.init({
                duration:1200,
                once:true,
                 easing: "ease-in-out",
            })
        },[])
  return (
    <section data-aos='zoom-in' className='py-16 px-6 bg-gray-50'>
     <div className='max-w-7xl mx-auto bg-white p-4 flex flex-col md:flex-row gap-10' >
       

         {/* text */}
         <div  className='w-full md:w-1/2 px-3'>
          <h2 className='text-3xl font-bold mb-4'>Learn Japanese Language In Bnagladesh</h2>
          <p className='text-gray-700 mb-4'>With growing job opportunities in Japan, many Bangladeshis are now learning the Japanese language. From JLPT exam preparation to spoken Japanese — several institutes are offering structured courses.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><span className='font-semibold'>Top Institutes:</span> Daffodil Institute of Language, NDC Language Club, Mirpur Japanese Center</li>
            <li><span className='font-semibold'>Courses:</span> JLPT N5 to N1, spoken courses, Japanese for jobs</li>
            <li><span className='font-semibold'>Job Opportunities:</span> Skills in Japanese can lead to remote jobs, interpreter roles, or higher studies</li>
            <li><span className='font-semibold'>Mode:</span> Onsite + Online options available</li>
            <li><span className='font-semibold'>Certification:</span> JLPT or NAT Test certified</li>
          </ul>
         </div>
          {/* image */}
         <div className='w-full md:w-1/2'>
            <Image className='w-full h-full object-cover hover:scale-105 rounded-md' src={JpLanguageLearning} alt='japan language course'/>
         </div>
     </div>
    </section>
  )
}

export default JapanessLearning