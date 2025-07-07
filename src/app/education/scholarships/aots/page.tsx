"use client"
import React from 'react';

const AotsPage = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">🤝 AOTS Scholarship</h1>

      <p className="text-gray-700 mb-6">
        AOTS (The Association for Overseas Technical Cooperation and Sustainable Partnerships) provides 
        training programs and scholarships to foster industrial human resources.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🌏 Program Highlights</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Technical training for engineers & business professionals</li>
        <li>Opportunities to work with Japanese companies</li>
        <li>Focused on industrial and management skills</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">💰 Benefits</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Training expenses covered</li>
        <li>Accommodation and food expenses</li>
        <li>Flight and travel cost support</li>
      </ul>
       {/* Apply Section */}
      <section className="mt-10 p-6 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-semibold mb-3">How to Apply</h2>
        <p>To apply for this scholarship, visit the official website and fill out the application form.</p>

        <a
          href="https://www.aots.jp/en/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Apply Now
        </a>
      </section>

     
    </section>
  )
}

export default AotsPage;
