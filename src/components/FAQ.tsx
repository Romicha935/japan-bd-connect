"use client"
import React, { useState } from 'react'

  const faqData = [
  {
    question: "How do I apply for a remote job?",
    answer: "Go to the Remote Jobs section and click on the listings. Apply directly using the links provided."
  },
  {
    question: "Is Japanese language required?",
    answer: "Basic Japanese can help, but many remote jobs only require English."
  },
  {
    question: "Are the programs free?",
    answer: "Some are free, and others may require registration or payment. Each will be clearly labeled."
  },
]
const FAQ = () => {
     const [openIndex,setOpenIndex ] = useState<number | null>(null) 
     const toggle = (idx:number) => {
        setOpenIndex(openIndex === idx ? null:idx)
     }
  return (
     <section className='bg-gray-100 py-16 px-4 '>
       <h2 className='text-3xl md:text-4xl font-bold mb-7 text-blue-600 text-center'>Frequently Asked Question</h2>
       <div className='max-w-3xl mx-auto space-y-4'>
        {faqData.map((faq,idx)=> (
            <div key={idx} className='bg-white rounded-md shadow-md p-5'>
                <button onClick={()=> toggle(idx)} className='w-full text-left font-semibold text-blue-700 cursor-pointer'>{faq.question}</button>
                {openIndex === idx && (
                    <p className='mt-2 text-gray-500'>{faq.answer}</p>
                ) }
            </div>
        ))}
       </div>
     </section>
  )
}

export default FAQ