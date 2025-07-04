"use client"
import React, { useEffect } from 'react'
import {bdPlaces} from '../../../../src/data/bdPlace'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'

const BDPlace = () => {
    useEffect(()=>{
            AOS.init({
                duration:800,
                once:true
            })
        },[])
  return (
    <section className='bg-white py-16 px-4 '>
        <h2 className='text-3xl font-bold text-blue-600 pl-20 mb-9'>Top Tourist Places in Bangladesh</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto p-4 '>
           {bdPlaces.map((place,idx)=>(
            <div key={idx} className='bg-gray-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition p-4 hover:scale-105'data-aos='fade-right' data-aos-delay={idx * 100}>
                <Image src={place.image} alt={place.title} width={500} height={300} className='w-full h-48 object-cover'/>
                <h3 className='text-xl font-bold hover:scale-100 text-blue-600 mb-2'>{place.title}</h3>
                <p className='text-sm text-gray-700 mb-2'>{place.shortDesc}</p>

                <Link href={`/culture/${place.slug}`} className='text-sm text-blue-600 hover:underline'>
                <button className='bg-gradient-to-r bg-blue-500  to-bg-purple-500 px-4 py-2 text-white rounded-md w-full cursor-pointer border-2 hover:scal-105 hover:bg-white hover:text-black'>Details</button>
                </Link>
            </div>
           ))}
        </div>
    </section>
  )
}

export default BDPlace