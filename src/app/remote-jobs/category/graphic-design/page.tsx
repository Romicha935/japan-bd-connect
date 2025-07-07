"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../../../public/gallery/remotejobBanner.jpeg'

const GraphicDesignDetails = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <Image src={banner} alt="Graphic Design" className="w-full h-72 object-cover rounded-xl shadow mb-6" />

      <h1 className="text-4xl font-bold text-blue-700 mb-4">🎨 Graphic Design</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Graphic design is a visual communication skill that is widely in demand for marketing, branding, and user interface design.
        Japanese companies often outsource creative work like logo design, poster creation, and UI/UX design.
        Tools like Adobe Photoshop, Illustrator, Figma, and Canva are must-haves.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">✨ Key Tasks</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Design logos, banners, brochures, and packaging</li>
        <li>Create UI/UX mockups for apps or websites</li>
        <li>Work with global clients using tools like Figma and Adobe Suite</li>
        <li>Get paid per project or monthly contract</li>
      </ul>

      <div className="mt-10 flex justify-between items-center">
        <a href="/remote-jobs" className="text-blue-600 underline">← Back to Remote Jobs</a>
        <a href="https://www.fiverr.com/" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Apply Now
        </a>
      </div>
    </section>
  )
}

export default GraphicDesignDetails
