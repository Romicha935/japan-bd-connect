"use client"
import React from 'react'
import japanFood from '../../../public/JapanFood.jpg'
import bdFood from '../../../public/bdfood.jpg'
import Image from 'next/image'

const Food = () => {
  return (
   <section className='py-16 px-6 space-y-20'>
    <h1 className='text-5xl text-center text-blue-800'>Food Culture Japan & Bangladesh</h1>
       {/* japan img food */}
        <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className='md:w-1/2'>
                <Image src={japanFood} alt='Japanes Food' className='rounded-lg shadow-lg w-full'/>
            </div>
            <div className='lg:w-1/2 italic'>
                <h2 className='text-3xl font-bold text-blue-700 mb-4'>Japanes Food Culture</h2>
                <p className='text-gray-700 text-justify leading-relaxed'><span className='text-2xl text-blue-600 italic '>J</span>apanese cuisine is deeply rooted in tradition and seasonality. The food reflects a deep respect for ingredients, 
  emphasizing natural flavors with minimal use of spices. Popular dishes like <strong>sushi</strong>, 
  <strong>sashimi</strong>, <strong>ramen</strong>, and <strong>tempura</strong> are internationally loved.
  Meals are typically served with rice, miso soup, pickled vegetables, and grilled fish. <br /><br /><br />
  Aesthetics are crucial — every dish is carefully presented, reflecting the Japanese philosophy of harmony and balance. 
  Traditional meals like <em>kaiseki</em> offer a multi-course culinary journey rooted in Zen principles.
          </p>
            </div>
        </div>
       {/* Bangladesh img food */}
        <div className='flex flex-col lg:flex-row items-center gap-10'>
           
            <div className='lg:w-1/2 italic'>
                <h2 className='text-3xl font-bold text-blue-700 mb-4'>Japanes Food Culture</h2>
                <p className='text-gray-700 text-justify leading-relaxed'><span className='text-4xl text-blue-600 italic '>B</span>angladeshi cuisine is vibrant, flavorful, and rich in tradition. Food is a central part of culture and hospitality, 
  often served in large portions for sharing with family and guests. A typical meal includes <strong>rice</strong>, 
  <strong>dal (lentils)</strong>, various <strong>vegetable curries</strong>, and spicy <strong>meat or fish dishes</strong>.
  <br /><br /><br />
  The iconic <em>Hilsha (Ilish)</em> fish, <strong>Kacchi Biryani</strong>, <strong>Shutki (dried fish)</strong>, 
  and traditional sweets like <strong>Rasgulla</strong> and <strong>Mishti Doi</strong> are widely loved.
  Street food like <em>Fuchka, Chotpoti,</em> and <em>Jhalmuri</em> reflect the country’s passion for bold flavors.

          </p>
            </div>
             <div className='md:w-1/2'>
                <Image src={bdFood} alt='BD Food' className='rounded-lg shadow-lg w-full'/>
            </div>
        </div>
   </section>
  )
}

export default Food