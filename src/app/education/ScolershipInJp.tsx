"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import mext from '../../../public/mextScholarship.jpeg'
import jasso from '../../../public/jassoScholarship.jpg'
import aots from '../../../public/AtosScholarship.jpeg'
import Aos from 'aos'

const scholarships = [
  {
    title: '🎓 MEXT Scholarship',
    description: 'Full government scholarship covering tuition, stipend, and travel costs.',
    slug: 'mext',
    image: mext
  },
  {
    title: '💼 JASSO Scholarship',
    description: 'Support for international students in Japan under exchange programs.',
    slug: 'jasso',
    image: jasso
  },
  {
    title: '🤝 AOTS Scholarship',
    description: 'Scholarship for technical training and corporate internships.',
    slug: 'aots',
    image: aots
  }
];

const ScholarshipPage = () => {
     useEffect(()=>{
          Aos.init({
              duration:1200,
              once:true
          })
      },[])
  return (
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Available Scholarships for Bangladeshi Students</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scholarships.map((item, idx) => (
          <Link data-aos='fade-left ' data-aos-delay={idx * 100} key={idx} href={`/education/scholarships/${item.slug}`}>
            <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
              <Image src={item.image} alt={item.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <span className="text-blue-500 text-sm hover:underline mt-3 inline-block">Read More</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ScholarshipPage;
