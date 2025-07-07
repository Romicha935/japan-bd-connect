"use client"
import Link from "next/link";
import React from "react";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaLanguage, FaUserShield, FaCode, FaBullhorn, FaLock } from "react-icons/fa";

const jobCategories = [
  {
    title: "Web Development",
    description: "Frontend, Backend, and Full Stack jobs using latest technologies.",
    icon: <FaCode className='text-3xl text-blue-600' />,
    link: "/remote-jobs/category/web-development",
  },
  {
    title: "Graphic Design",
    description: "Creative roles including logo, branding, and UI/UX design.",
    icon: <FaPaintBrush className='text-3xl text-pink-600' />,
    link: "/remote-jobs/category/graphic-design",
  },
  {
    title: "Digital Marketing",
    description: "Roles in SEO, social media marketing, and content creation.",
    icon: <FaBullhorn className='text-3xl text-green-600' />,
    link: "/remote-jobs/category/digital-marketing",
  },
  {
    title: "Translation & Language",
    description: "Jobs involving Japanese-English translation and subtitling.",
    icon: <FaLanguage className='text-3xl text-yellow-600' />,
    link: "/remote-jobs/category/translation",
  },
  {
    title: "Cybersecurity",
    description: "Remote security roles in network, app, and data protection.",
    icon: <FaLock className='text-3xl text-red-600' />,
    link: "/remote-jobs/category/cybersecurity",
  }
];

const PopularJobCategories = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">💼 Popular Job Categories</h2>
        <p className="text-gray-600">Explore top fields where Bangladeshi talents are working remotely for Japan.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jobCategories.map((cat, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left">
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{cat.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{cat.description}</p>
          <Link href={cat.link}>  <button className="text-sm text-white bg-blue-600 px-4 py-2 cursor-pointer rounded hover:bg-blue-800 transition">
              View Jobs
            </button></Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularJobCategories;
