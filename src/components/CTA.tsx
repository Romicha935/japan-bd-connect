import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='py-20 bg-blue-500 text-center text-white'>
        <div className='max-w-xl mx-auto px-6'>
            <h2 className='text-3xl font-bold md:text-4xl mb-4'>Ready to Connect Japan & Bangladesh? </h2>
            <p className='text-sm md:text-base mb-6'>Join Thousands of learner, job speakers, and dreamers today</p>
            <Link href='/contact' className='bg-white text-blue-600 px-6 py-2 text-xl rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition'>Get Started</Link>
        </div>
    </section>
  )
}

export default CTA