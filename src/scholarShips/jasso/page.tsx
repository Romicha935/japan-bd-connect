"use client"
import React from 'react';

const JassoScholarship = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">💼 JASSO Scholarship</h1>

      <p className="text-gray-700 mb-6">
        JASSO (Japan Student Services Organization) provides financial aid to international students 
        enrolled in Japanese universities, colleges, and vocational schools.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📌 Eligibility</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Must be an international student (non-Japanese)</li>
        <li>Enrolled at a university or language school in Japan</li>
        <li>Excellent academic record</li>
        <li>Financial need</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🎓 Scholarship Amount</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>¥48,000 per month for college/university students</li>
        <li>Provided for up to one year</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">How to Apply</h2>
<a
  href="https://www.jasso.go.jp/en/study_j/scholarships/index.html"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Apply for JASSO Scholarship
</a>
    </section>
  );
};

export default JassoScholarship;
