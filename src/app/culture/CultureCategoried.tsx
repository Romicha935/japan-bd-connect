"use client"
import Image from 'next/image';
import React, { useEffect } from 'react'
import FlagImg from '../../../public/flagImg.jpg'
import FoodImg from '../../../public/food.jpg'
import ReligionImg from '../../../public/religion.jpg'
import AgricultureImg from '../../../public/Agriculture.jpg'
import DressImg from '../../../public/dress.jpg'
import FestivalsImg from '../../../public/festivals.jpg'
import Link from 'next/link';
import AOS from 'aos';


const data = [
  {
    title: 'National Flags',
    slug: 'flag',
    image: FlagImg,
    description: 'Explore the flags of Japan and Bangladesh with meaning and history.',
  },
  {
    title: 'Traditional Food',
    slug: 'food',
    image: FoodImg,
    description: 'Discover traditional dishes from Japan and Bangladesh.',
  },
  {
    title: 'Religion & Beliefs',
    slug: 'religion',
    image: ReligionImg,
    description: 'Learn about the religions practiced in both countries.',
  },
  {
    title: 'Agriculture',
    slug: 'agriculture',
    image: AgricultureImg,
    description: 'Explore farming practices and crops of Japan and Bangladesh.',
  },
  {
    title: 'Cultural Dress',
    slug: 'dress',
    image: DressImg,
    description: 'See traditional clothing styles of both nations.',
  },
  {
    title: 'Festivals',
    slug: 'festivals',
    image: FestivalsImg,
    description: 'Enjoy the vibrant festivals celebrated in Japan and Bangladesh.',
  },
];
const CultureCategoried = () => {
  useEffect(()=>{
    AOS.init(
        {
            duration:1000,
            once:true
        }
    )
  },[])
  return (
    <section className='py-14 px-6 bg-gray-50'>
        <h2 className='text-5xl mb-8 pl-20 font-bold text-blue-600' data-aos='fade-up'>Explore culture Topics</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {data.map((item,idx)=> (
                <Link key={idx} href={`/culture/${item.slug}`} >
                <div  className='bg-white shadow-md rounded-xl  overflow-hidden hover:shadow-lg transition-all duration-300' data-aos='fade-right' data-aos-delay={idx * 15}>
                    <Image src={item.image} alt={item.title} width={500} height={300} className='w-full h-48 object-cover' />
                 <div className='p-5'>
                    <h3 className=' font-bold text-xl text-blue-500 mb-4'>{item.title}</h3>
                    <p className='text-gray-600 text-sm mb-2'>{item.description}</p>
                    <span className='text-blue-500 text-sm hover:underline cursor-pointer'>Read More </span>
                 </div>
                </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default CultureCategoried