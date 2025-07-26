"use client";
import React from 'react';

const AdmissionProcess = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">📝 University Admission Process in Japan</h1>
      
      <p className="text-gray-700 mb-4">
        Applying to Japanese universities requires careful planning. Both undergraduate and postgraduate admissions are open to international students.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📌 Step-by-Step Process</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
        <li>Choose a university and program (English or Japanese medium)</li>
        <li>Check eligibility, entrance exam, and language requirements</li>
        <li>Prepare academic transcripts, certificates, SOP, and recommendation letters</li>
        <li>Take entrance exam (some programs may require online/in-person tests)</li>
        <li>Apply online or by post (some through JASSO or MEXT portal)</li>
        <li>Wait for offer letter and apply for Certificate of Eligibility (COE)</li>
        <li>Apply for Student Visa at Japanese Embassy</li>
      </ul>

      <p className="text-gray-700">
        Start preparing at least 6–12 months before your intended intake (April or October).
      </p>
    </section>
  );
};

export default AdmissionProcess;
