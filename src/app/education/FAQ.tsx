"use client"
import React, { useState } from 'react';

const faqData = [
  {
    question: "How can I apply for a scholarship in Japan?",
    answer:
      "You can apply through official websites like MEXT or JASSO. Each has specific application timelines, requirements, and forms to fill.",
  },
  {
    question: "Do I need to know Japanese to study in Japan?",
    answer:
      "Many universities offer English-taught programs. However, basic Japanese (JLPT N5 or N4) is helpful for daily life.",
  },
  {
    question: "What is the student visa process for Japan?",
    answer:
      "You need a Certificate of Eligibility (COE) from the university, then apply at your local Japanese embassy with required documents.",
  },
  {
    question: "Are part-time jobs allowed for international students?",
    answer:
      "Yes. Students can work up to 28 hours per week with permission from the immigration office.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">❓ Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-gray-800 text-lg flex justify-between items-center"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
