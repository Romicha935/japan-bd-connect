"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import JapanAgri from '../../../../public/japanAgri.jpg'
import bdAgri from '../../../../public/bdAgri.jpg'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Agriculture = () => {
   useEffect(()=>{
     AOS.init({
      duration:800,
      once:true
     })

   },[])
  return (
     <section className='py-16 px-6 bg-white'>
            <h2 className='text-3xl font-bold text-center text-blue-600 mb-10 pt-10' data-aos='fade-up'>Agriculture in Japan & Bangladesh</h2>
           
               
            {/* japan */}
               <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
               <div className='w-full lg:w-1/2' data-aos='fade-right' >
                <Image src={JapanAgri} alt='Japan Flag'width={400} height={400} className='rounded shadow-md hover:scale-105 object-cover'/>
               </div>
               <div className='w-full md:w-1/2' data-aos='fade-left' >   
                  <h2 className='text-2xl text-blue-800 font-bold mb-2'>JP Japan</h2>
                  <p className='text-gray-700 text-justify mb-2'>  Japanese agriculture emphasizes advanced technology and high efficiency. Due to limited arable land, farmers have adopted innovative methods such as vertical farming, hydroponics, and automation. Rice remains the staple crop, but vegetables, fruits, and flowers are also cultivated using smart farming techniques. Government policies and research institutions actively support sustainable practices and food security.
          </p>
                  
            
    
               </div>
               </div>
                {/* Bangladesh */}
               <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
               <div className='w-full lg:w-1/2' data-aos='fade-right' >
                <Image src={bdAgri} alt='Japan Flag'width={400} height={400} className='rounded shadow-md hover:scale-105 object-cover'  />
               </div>
               <div className='w-full md:w-1/2' data-aos='fade-left' >   
                  <h2 className='text-2xl text-blue-800 font-bold mb-2'> Bangladesh</h2>
                  <p className='text-gray-700 text-justify mb-2'> Agriculture is the backbone of Bangladesh’s economy, employing a large portion of the population. The country produces rice, jute, tea, sugarcane, vegetables, and fruits. Although most farming is still traditional and labor-intensive, modern techniques such as irrigation systems, hybrid seeds, and agricultural machinery are gradually being introduced. Government and NGOs are working together to increase productivity and ensure food security.
                     </p>
        
                  
            
    
               </div>
               </div>

            
        </section>
  )
}

export default Agriculture