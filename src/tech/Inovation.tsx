"use client"
import React, { useEffect } from 'react'
import metroImg from '../../../public/japanmetro.jpg'
import medicalImg from '../../../public/Japanmedical.jpg'
import agroImg from '../../../public/japanargutech.jpeg'
import Image from 'next/image'
import Aos from 'aos'

const innovations = [
  {
    title: "Metro Rail Technology",
    description: "Japan's advanced metro technology helped launch Dhaka Metro Rail, improving urban transportation.",
    image: metroImg
  },
  {
    title: "Medical Equipment & Health Projects",
    description: "Japanese companies are providing cutting-edge medical devices and hospital equipment in Bangladesh.",
    image: medicalImg
  },
  {
    title: "Smart Agriculture Tools",
    description: "Japanese agro-tech like drone irrigation and smart sensors are modernizing farming in rural areas.",
    image: agroImg
  },
];

const Inovation = () => {
    useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true
        })
    },[])
  return (
    <section className='py-16 px-6 bg-gray-50'>
        <h2 className='text-3xl font-extrabold text-blue-600 pl-10 mb-10' data-aos='fade-down'> Japanese Innovations Changing Lives in Bangladesh</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6'>
            {innovations.map((item,idx)=> (
                <div className='bg-white shadow-md overflow-hidden rounded-md transition hover:shadow-xl hover:scale-105' key={idx} data-aos='fade-up'>
                   <Image src={item.image} alt={item.title} className='w-full h-56 object-cover'/>
                   <div className='p-5 '>
                    <h3 className='text-blue-600 text-xl font-bold mb-2'>{item.title}</h3>
                    <p className='text-gray-700 text-sm'>{item.description}</p>
                   </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Inovation