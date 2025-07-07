"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../../../public/gallery/remotejobBanner.jpeg'

const TranslationLanguageDetails = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <Image src={banner} alt="Translation & Language" className="w-full h-72 object-cover rounded-xl shadow mb-6" />

      <h1 className="text-4xl font-bold text-blue-700 mb-4">🌐 Translation & Language Services</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Translation and language services are vital for cross-border business and cultural exchange.
        Many Japanese companies hire Bangladeshi freelancers for document translation, interpretation, and localization services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🗣️ Common Tasks</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Document translation (Japanese-English-Bengali)</li>
        <li>Website and software localization</li>
        <li>Live interpretation for meetings and conferences</li>
        <li>Proofreading and editing in multiple languages</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🔧 Tools & Skills</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>CAT tools like SDL Trados, MemoQ</li>
        <li>Fluency in Japanese, English, and Bengali</li>
        <li>Excellent communication skills</li>
        <li>Understanding of cultural nuances</li>
      </ul>

      <div className="mt-10 flex justify-between items-center">
        <a href="/remote-jobs" className="text-blue-600 underline">← Back to Remote Jobs</a>
        <a href="https://www.proz.com/" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Apply Now
        </a>
      </div>
    </section>
  )
}

export default TranslationLanguageDetails
