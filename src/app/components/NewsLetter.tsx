  "use client"
import React from 'react'

const NewsLetter = () => {
  return (
     <section className='py-16 px-6 bg-blue-50'>
        <div className='max-w-xl text-center mx-auto'>
            <h2 className='text-3xl font-bold text-blue-700 mb-4'>Stay Updated</h2>
            <p className='text-gray-600 mb-6'>Subscribe to the latest updates on culture , education , and remote jobs</p>
            <form action="" className='flex flex-col sm:flex-row gap-4 justify-center'>
                <input type="email" className='border border-gray-300 px-4 py-2 rounded-md w-full sm:w-2/3 focus:outline-blue-300 ' placeholder='Enter Your Email' />
                <button type='submit' className='bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-500 transition hover:scale-110 cursor-pointer'>Subscribe</button>
            </form>
        </div>
     </section>
  )
}

export default NewsLetter