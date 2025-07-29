"use client"
import AOS from 'aos'
import Image from 'next/image'
import React, { useEffect } from 'react'
import jpFestivals from '../../../../public/jpFesivals.jpg'
import bdFestivals from '../../../../public/bdFestivals.jpg'

const Fesivals = () => {
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:true
        })
    },[])
  return (
    <section className='py-16 px-6 bg-white pt-10'>
                    <h2 className='text-3xl font-bold text-center text-blue-600 mb-10' data-aos='fade-up'>Traditional Dress of Japan & Bangladesh</h2>
                   
                       
                    {/* japan */}
                       <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
                       <div className='w-full lg:w-1/2' data-aos='fade-right' >
                        <Image src={jpFestivals} alt='Japan dress'  className='rounded shadow-md hover:scale-105 object-cover  w-full h-80'/>
                       </div>
                       <div className='w-full md:w-1/2' data-aos='fade-left' >   
                          <h2 className='text-2xl text-blue-800 font-bold mb-2'>JP Japan</h2>
                          <p className='text-gray-700 text-justify mb-2'>  Japan celebrates many seasonal festivals such as **Hanami (Cherry Blossom Viewing)**, **Gion Matsuri**, and **Tanabata**. These festivals often include parades, traditional dress, fireworks, and are deeply rooted in Shinto and Buddhist traditions.
                  </p>
                          
                    
            
                       </div>
                       </div>
                        {/* Bangladesh */}
                       <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
                       
                       <div className='w-full md:w-1/2' data-aos='fade-right' >   
                          <h2 className='text-2xl text-blue-800 font-bold mb-2'> Bangladesh</h2>
                          <p className='text-gray-700 text-justify mb-2'>             Bangladesh hosts vibrant festivals like **Eid-ul-Fitr**, **Durga Puja**, **Pohela Boishakh (Bengali New Year)**, and **Independence Day**. These events bring people together and are celebrated with traditional music, food, colorful dress, and joy.

                             </p>
                        </div>
                        <div className='w-full lg:w-1/2' data-aos='fade-left' >
                        <Image src={bdFestivals} alt='Japan Flag' className='rounded shadow-md object-cover hover:scale-105  w-full h-80'  />
                       </div>
                       </div>
        
                    
                </section>
  )
}

export default Fesivals