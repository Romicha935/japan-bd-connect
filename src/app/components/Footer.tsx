 "use client"
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-gray-800 py-10 text-white'>
      <div className='max-w-7xl mx-auto gap-6 px-6 grid grid-cols-1 md:grid-cols-4 '>
        <div className=''>
          <h3 className='text-xl font-semibold mb-3'>Nippomn-BD Connect</h3>
          <p className='text-sm'>Bridging culture, technology, education, and careers between Bangladesh and Japan.</p>
        </div>
        <div>
          <h4 className='font-semibold mb-2'>Quick Links</h4>
          <ul className='text-sm space-y-2'>
            <li><Link href='/' className='hover:underline'>Home</Link></li>
            <li><Link href='/culture' className='hover:underline'>Culture</Link></li>
            <li><Link href='/education' className='hover:underline'>Education</Link></li>
            <li><Link href='/technology' className='hover:underline'>Technology</Link></li>
            <li><Link href='/remote-jobs' className='hover:underline'>Remote Jobs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold mb-2'>Resources</h4>
          <ul className='text-sm space-y-2'>
            <li><Link href='/faq' className='hover:underline'>FAQ</Link></li>
            <li><Link href='/contact' className='hover:underline'>Contact</Link></li>
            <li><Link href='/blog' className='hover:underline'>Blog</Link></li>
           
          </ul>
        </div>
        <div>
          <h4 className='font-semibold mb-2'>Fllow Us</h4>
          <ul className='text-sm space-y-2 cursor-pointer'>
            <li><a href='https://web.facebook.com/romicha.parvin.2024' target='_blank' rel='noopener noreferrer' className='hover:underline hover:cursor-pointer'>Facebook</a></li>
            <li ><a href='https://www.linkedin.com/in/romicha-parvin-402a16352/' target='_blank' rel='noopener noreferrer' className='hover:underline'>LinkedIn</a></li>
            <li><a href='https://github.com/Romicha935' target='_blank' rel='noopener noreferrer' className='hover:underline cur'>Github</a></li>
           
           
          </ul>
        </div>
      </div>
    </footer>
  )
}
