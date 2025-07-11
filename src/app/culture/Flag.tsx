import Image from 'next/image'
import React from 'react'
 import japanFlag from '../../../public/japanFlag.jpg'
    import bdFlag from '../../../public/bdFlag.jpg'
const Flag = () => {
   
  return (
    <section className='py-16 px-6 bg-white'>
        <h2 className='text-3xl font-bold text-center text-blue-600 mb-10'>National Flag & Anthems</h2>
       
           
            {/* Bangladesh */}
           <div className='flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto mb-16'>
           
           <div className='w-full md:w-1/2'>   
              <h2 className='text-2xl text-red-600 font-bold mb-2'>BD Bangladesh</h2>
              <p className='text-gray-700 text-justify mb-2'>The national flag of Bangladesh features a red circle on a green background. The red circle represents the blood of freedom fighters and the green symbolizes the lush landscape of the country.</p>
              <p className='font-medium mb-1'>🎵 National Anthem: <em>Amar Sonar Bangla</em></p>
          <p className='text-sm text-gray-600'>Written by Nobel laureate Rabindranath Tagore, this anthem reflects love and pride for the motherland.</p>
        

           </div>
           <div className='w-full lg:w-1/2'>
            <Image src={bdFlag} alt='Japan Flag' width={400} height={400} className='rounded shadow-md'/>
           </div>
           </div>
           
            {/* japan */}
           <div className='flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-16'>
           <div className='w-full lg:w-1/2'>
            <Image src={japanFlag} alt='Japan Flag'width={400} height={400} className='rounded shadow-md'/>
           </div>
           <div className='w-full md:w-1/2'>   
              <h2 className='text-2xl text-red-600 font-bold mb-2'>JP Japan</h2>
              <p className='text-gray-700 text-justify mb-2'>The national flag of Japan is known as the <strong>Nisshōki</strong> or <strong>Hinomaru</strong>, meaning “circle of the sun.” It symbolizes the rising sun and is a strong representation of Japanese heritage.</p>
              <p className='font-medium mb-1'>🎵 National Anthem: <em>Kimigayo</em></p>
          <p className='text-sm text-gray-600'>One of the worlds oldest and shortest national anthems, expressing the longevity of the emperors reign.</p>
        

           </div>
           </div>
        
    </section>
  )
}

export default Flag