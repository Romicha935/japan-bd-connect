"use client";
import Aos from "aos";
import React, { useEffect } from "react";

const WhyRemoteJobs = () => {
   useEffect(()=>{
      Aos.init({
        duration:1200,
        once:true
      })
    },[])
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          Why Remote Jobs?
        </h2>

        <div data-aos='zoom-in' className="grid md:grid-cols-2 gap-8">
          {/* Point 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🕒 Flexibility & Work-Life Balance
            </h3>
            <p className="text-gray-700">
              Remote jobs allow individuals to work from anywhere, balancing
              career and personal life better than ever before.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🌏 Access to Global Opportunities
            </h3>
            <p className="text-gray-700">
              Talents from Bangladesh can work with Japanese companies without
              relocating — gaining global exposure and higher income.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              💰 Cost Savings
            </h3>
            <p className="text-gray-700">
              No commuting or relocation needed. Both employers and employees
              save time and money.
            </p>
          </div>

          {/* Point 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🚀 Higher Productivity
            </h3>
            <p className="text-gray-700">
              Remote workers are often more focused and productive in their own
              space, leading to better output.
            </p>
          </div>

          {/* Point 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🤝 Japan-Bangladesh Collaboration
            </h3>
            <p className="text-gray-700">
              Skilled Bangladeshi professionals support Japanese tech sectors,
              creating strong international partnerships.
            </p>
          </div>

          {/* Point 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🔮 Future of Work
            </h3>
            <p className="text-gray-700">
              Remote work builds a tech-savvy, adaptive workforce ready for the
              modern global job market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRemoteJobs;
