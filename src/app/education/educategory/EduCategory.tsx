

"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sudent from '../../../../public/student-life.jpeg'
import admision from '../../../../public/admisionProccess.jpg'
import visa from '../../../../public/Visa-Immigration-Guide.jpg'
import Aos from 'aos';

const cards = [
  {
    title: 'Student Life in Japan',
    description: 'Explore what it’s like to be a student in Japan — lifestyle, housing, part-time jobs, and more.',
    image: sudent,
    link: '/education/educategory/student-life'
  },
  {
    title: 'Admission Process',
    description: 'Understand the step-by-step university admission process in Japan.',
    image: admision,
    link: '/education/educategory/admission-process'
  },
  {
    title: 'Visa & Immigration Guide',
    description: 'Learn about the student visa process, documents required, and embassy info.',
    image: visa,
    link: '/education/educategory/visa-guide'
  }
];

const EduCategoryCards = () => {
    useEffect(()=>{
        Aos.init({
            duration:1200,
            once:true
        })
    },[])
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-10" data-aos='fade-down'>Explore Key Topics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div data-aos='fade-right' data-aos-delay={index * 100} key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5">
            <Image src={card.image} alt={card.title} width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">{card.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{card.description}</p>
            <Link href={card.link}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EduCategoryCards;
