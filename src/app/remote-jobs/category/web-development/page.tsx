"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../../../public/gallery/remotejobBanner.jpeg'

const WebDevelopmentDetails = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      {/* Banner */}
      <div className="mb-8">
        <Image src={banner} alt="Web Development" className="w-full h-72 object-cover rounded-xl shadow" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">🌐 Web Development</h1>

      {/* Description */}
      <p className="text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
        Web development is one of the most in-demand remote career paths. 
        You can work as a frontend, backend, or full-stack developer from anywhere in the world.
        Japanese companies are increasingly hiring Bangladeshi developers remotely through outsourcing firms or directly via job platforms.
        
        Skills in HTML, CSS, JavaScript, React, Next.js, Node.js, and MongoDB are highly valuable. 
        Understanding version control (Git/GitHub), REST APIs, and deployment platforms like Vercel or Netlify is a plus.
      </p>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">✨ Key Opportunities</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Work on international projects from Bangladesh</li>
        <li>Build frontend interfaces using React or Vue</li>
        <li>Create REST APIs and backend systems using Node.js or Django</li>
        <li>Deploy apps using Vercel, Netlify, or AWS</li>
        <li>Earn in USD or Japanese Yen</li>
        <li>Job roles: Frontend Dev, Backend Dev, Full Stack Dev</li>
      </ul>

      {/* Apply / Go Back */}
      <div className="mt-10 flex justify-between items-center">
        <a href="/remote-jobs" className="text-blue-600 underline">← Back to Remote Jobs</a>
        <a href="https://www.upwork.com/" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Apply Now
        </a>
      </div>
    </section>
  )
}

export default WebDevelopmentDetails
