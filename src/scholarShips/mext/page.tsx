"use client"
import React from 'react';

const MextScholarshipPage = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">🇯🇵 MEXT Scholarship for Bangladeshi Students</h1>

      <p className="text-gray-700 mb-6">
        The MEXT (Monbukagakusho) Scholarship is a prestigious program by the Japanese government 
        that provides full financial support to international students, including those from Bangladesh, 
        who wish to pursue undergraduate, masters, or doctoral degrees in Japan.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📌 Types of MEXT Scholarships</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Undergraduate Students</li>
        <li>Research Students (Masters / PhD)</li>
        <li>Teacher Training Students</li>
        <li>Japanese Studies Students</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🎓 Benefits</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Full tuition fees waived</li>
        <li>Monthly allowance (¥117,000 to ¥144,000 depending on course)</li>
        <li>Airfare to & from Japan</li>
        <li>Accommodation assistance</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📄 Eligibility Criteria</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Must be a Bangladeshi citizen</li>
        <li>Strong academic background</li>
        <li>Under 35 years old (for most programs)</li>
        <li>Willingness to learn Japanese (for some programs)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📝 How to Apply</h2>
      <ol className="list-decimal pl-6 text-gray-700 mb-6">
        <li>Visit the website of the Japanese Embassy in Bangladesh</li>
        <li>Check the current MEXT scholarship announcements</li>
        <li>Download the application form</li>
        <li>Submit required documents (transcripts, certificates, medical form, etc.)</li>
        <li>Attend written exam & interview</li>
      </ol>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📍 Helpful Links</h2>
      <ul className="pl-6 text-blue-600 underline space-y-2">
        <li><a href="https://www.bd.emb-japan.go.jp/itpr_en/00_000060.html" target="_blank">Japan Embassy Bangladesh – MEXT Scholarship</a></li>
        <li><a href="https://www.studyinjapan.go.jp/en/" target="_blank">Study in Japan Official Website</a></li>
      </ul>
    </section>
  );
};

export default MextScholarshipPage;
