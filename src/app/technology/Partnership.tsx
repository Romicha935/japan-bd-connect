"use client"
import Aos from 'aos'
import React, { useEffect } from 'react'

const Partnership = () => {
    useEffect(()=>{
    Aos.init({
        duration:1200,
        once:true
    })
    },[])
  return (
    <section className='py-16 px-6 bg-blue-50'>
      <h2 data-aos='fade-right' className='text-3xl font-extrabold text-blue-600 mb-10 pl-10'>  Joint Projects & Ongoing Tech Initiatives</h2>
      <div className='grid md:grid-cols-2 gap-10 max-w-7xl mx-auto' data-aos='fade-left'>
         {/* overview  */}
        <div className='bg-white shadow-md rounded-xl p-6'>

        <h3 className='text-xl font-semibold text-blue-500 mb-5'>Strong Bilateral Partnership</h3>
        <p>Japan and Bangladesh have been strengthening ties in ICT and innovation. Through investments, knowledge transfer, and joint training programs, both countries are working to enhance digital capacity and economic growth.</p>
        </div>
         {/* Example card  */}
        <div className='bg-white shadow-md rounded-xl p-6'>

        <h3 className='text-xl font-semibold text-blue-500 mb-5'>Ongoing Initiatives</h3>
          <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
            <li>JICA-funded ICT training projects in Dhaka.</li>
            <li>Bangladeshi freelancers working with Japanese companies remotely.</li>
            <li>Bangladesh-Japan IT Connect Conference (held annually).</li>
            <li>Software outsourcing partnerships with firms in Tokyo & Osaka.</li>
          </ul>
       
        </div>
        
      </div>
    </section>
  )
}

export default Partnership