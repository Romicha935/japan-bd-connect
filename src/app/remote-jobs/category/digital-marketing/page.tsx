"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../../../public/gallery/remotejobBanner.jpeg'

const DigitalMarketingDetails = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <Image src={banner} alt="Digital Marketing" className="w-full h-72 object-cover rounded-xl shadow mb-6" />

      <h1 className="text-4xl font-bold text-blue-700 mb-4">📣 Digital Marketing</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Digital marketing focuses on promoting businesses online. It includes SEO, social media marketing, content creation, and email marketing.
        Bangladeshi freelancers are frequently hired by Japanese startups and small businesses to handle online campaigns.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">📌 Skills Needed</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>SEO (Search Engine Optimization)</li>
        <li>Social media advertising (Facebook, Instagram, LinkedIn)</li>
        <li>Google Ads, Meta Ads Manager</li>
        <li>Email marketing using Mailchimp, Sendinblue</li>
        <li>Analytics and reporting</li>
      </ul>

      <div className="mt-10 flex justify-between items-center">
        <a href="/remote-jobs" className="text-blue-600 underline">← Back to Remote Jobs</a>
        <a href="https://www.peopleperhour.com/" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Apply Now
        </a>
      </div>
    </section>
  )
}

export default DigitalMarketingDetails
