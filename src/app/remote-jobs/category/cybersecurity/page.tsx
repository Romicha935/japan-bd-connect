"use client"
import Image from 'next/image'
import React from 'react'
import banner from '../../../../../public/gallery/remotejobBanner.jpeg'

const CybersecurityDetails = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <Image src={banner} alt="Cybersecurity" className="w-full h-72 object-cover rounded-xl shadow mb-6" />

      <h1 className="text-4xl font-bold text-blue-700 mb-4">🛡️ Cybersecurity</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Cybersecurity experts protect companies from online threats and ensure data safety.
        The demand for skilled cybersecurity professionals is growing in both Japan and Bangladesh.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🔐 Key Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Network security monitoring and threat analysis</li>
        <li>Implementing firewalls and intrusion detection systems</li>
        <li>Conducting security audits and vulnerability assessments</li>
        <li>Incident response and recovery planning</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🛠️ Skills & Tools</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Knowledge of TCP/IP, VPN, and firewalls</li>
        <li>Familiarity with tools like Wireshark, Nessus, and Metasploit</li>
        <li>Understanding of compliance standards like ISO 27001, GDPR</li>
        <li>Ability to stay updated with latest security trends</li>
      </ul>

      <div className="mt-10 flex justify-between items-center">
        <a href="/remote-jobs" className="text-blue-600 underline">← Back to Remote Jobs</a>
        <a href="https://www.cybrary.it/" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Apply Now
        </a>
      </div>
    </section>
  )
}

export default CybersecurityDetails

