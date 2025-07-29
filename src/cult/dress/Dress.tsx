"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import jpDress from '../../../../public/japandres.jpg'
import bdDress from '../../../../public/bddress.jpg'
import AOS from 'aos'

const Dress = () => {
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:true
        })
    },[])
  return (
     <section className='py-16 px-6 bg-white'>
                <h2 className='text-3xl font-bold text-center text-blue-600 mb-10' data-aos='fade-up'>Traditional Dress of Japan & Bangladesh</h2>
               
                   
                {/* japan */}
                   <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
                   <div className='w-full lg:w-1/2' data-aos='fade-right' >
                    <Image src={jpDress} alt='Japan dress'  className='rounded shadow-md hover:scale-105 object-cover  w-full h-80'/>
                   </div>
                   <div className='w-full md:w-1/2' data-aos='fade-left' >   
                      <h2 className='text-2xl text-blue-800 font-bold mb-2'>JP Japan</h2>
                      <p className='text-gray-700 text-justify mb-2'>   Traditional Japanese clothing includes the iconic Kimono, Yukata (worn in summer), and Hakama. These dresses are often made from silk and feature elaborate designs. Kimonos are still worn on cultural festivals and weddings.
              </p>
                      
                
        
                   </div>
                   </div>
                    {/* Bangladesh */}
                   <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
                   
                   <div className='w-full md:w-1/2' data-aos='fade-right' >   
                      <h2 className='text-2xl text-blue-800 font-bold mb-2'> Bangladesh</h2>
                      <p className='text-gray-700 text-justify mb-2'> In Bangladesh, traditional dresses include saree for women and panjabi, lungi, or kurta for men. The sarees are often colorful and made from cotton or silk. People wear traditional outfits on cultural days, religious events, and weddings.
                         </p>
                    </div>
                    <div className='w-full lg:w-1/2' data-aos='fade-left' >
                    <Image src={bdDress} alt='Japan Flag' className='rounded shadow-md object-cover hover:scale-105  w-full h-80'  />
                   </div>
                   </div>
    
                
            </section>
  )
}

export default Dress