"use client";
import React from 'react';
import Image from 'next/image';
import contactImg from '../../../public/gallery/contact.jpg'; // তোমার background image

const ContactSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src={contactImg}
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* 🔹 Contact Form */}
      <div className="absolute inset-0 z-20 right-0 flex items-center justify-end  px-4">
        <div className="bg-blue-50 bg-opacity-90 backdrop-blur-lg p-8 md:p-12 rounded-2xl max-w-xl w-full shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
