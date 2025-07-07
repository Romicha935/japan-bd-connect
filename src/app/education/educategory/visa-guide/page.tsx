"use client";
import React from 'react';

const VisaGuide = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">📄 Student Visa & Immigration Guide</h1>

      <p className="text-gray-700 mb-4">
        International students need a valid visa to study in Japan. Here’s a guide to the entire process.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🪪 Visa Requirements</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
        <li>Valid passport</li>
        <li>Certificate of Eligibility (COE)</li>
        <li>University Admission Letter</li>
        <li>Financial proof (bank statements, sponsor letter)</li>
        <li>Passport-size photographs</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🏢 Visa Application Process</h2>
      <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
        <li>University in Japan applies for your COE</li>
        <li>After COE approval, collect documents</li>
        <li>Visit Japanese Embassy in Bangladesh</li>
        <li>Submit documents and attend interview (if required)</li>
        <li>Receive visa (takes around 1–3 weeks)</li>
      </ol>

      <p className="text-gray-700">
        Visa fees are around ¥3,000–¥6,000. Visa is typically valid for 1 year and renewable.
      </p>
    </section>
  );
};

export default VisaGuide;
