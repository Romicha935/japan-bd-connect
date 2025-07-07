"use client"
import React from 'react'

const resources = [
  {
    title: 'MEXT Scholarship Info',
    link: 'https://www.studyinjapan.go.jp/en/planning/scholarship/',
    desc: 'Government-funded scholarship for international students wishing to study in Japan.',
  },
  {
    title: 'JASSO Support Guide',
    link: 'https://www.jasso.go.jp/en/',
    desc: 'Student support including admission, accommodation, and scholarships.',
  },
  {
    title: 'Remote Work Guide - Japan',
    link: 'https://www.remotework-japan.com/',
    desc: 'Practical tips and job platforms for finding remote jobs in Japan.',
  },
  {
    title: 'Upwork - Freelance Platform',
    link: 'https://www.upwork.com/',
    desc: 'Freelance marketplace where you can work remotely with international clients.',
  },
  {
    title: 'ProZ - Translation Jobs',
    link: 'https://www.proz.com/',
    desc: 'Platform for language professionals and freelance translators.',
  },
];

const HelpfulResources = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">📚 Helpful Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((r, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-blue-600 mb-1">{r.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{r.desc}</p>
              <a href={r.link} target="_blank" className="text-blue-500 text-sm underline">Visit Resource</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HelpfulResources;
