 "use client"

import Image from 'next/image'
import React from 'react'
import img1 from "../../../public/story.jpg"
import img2 from "../../../public/story2.jpg"
import img3 from "../../../public/story3.jpg"

const SuccessStorys = () => {
    const stories = [
        
 {
      name: 'Amina Rahman',
      role: 'Frontend Developer in Tokyo',
      desc: 'Through Nippon-BD Connect, I landed a remote internship that turned into a full-time job in Japan.',
      img: img1
    },
    {
      name: 'Hiro Tanaka',
      role: 'Bangla Language Learner',
      desc: 'I connected with amazing people from Bangladesh and now I’m learning Bangla to work with them better.',
      img: img2
    },
    {
      name: 'Rezaul Karim',
      role: 'Scholarship Winner',
      desc: 'I found a scholarship for a Japanese language course and started my journey in Japan.',
      img: img3
    }
  
        
    ]
  return (
    <section className='bg-gray-100 py-20 px-6'>
        <h2 className='text-3xl font-bold text-blue-700 text-center mb-12'>Succcess Stories</h2>
        <div className='grid md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {stories.map((story,idx)=> (
                <div key={idx}  className='bg-white rounded-xl shadow-md text-center p-6'>
                    <Image className='w-20 h-20 mx-auto rounded-full mb-4 object-cover' src={story.img} alt={story.name} />
                    <h3 className='text-lg font-bold text-blue-600'>{story.name}</h3>
                    <p className='text-gray-500 text-sm mb-3'>{story.role}</p>
                    <p className='text-gray-600 text-sm'>{story.desc}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default SuccessStorys