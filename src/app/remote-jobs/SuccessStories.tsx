"use client";
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import shakilImg from '../../../public/gallery/storis3.jpg';
import fatemaImg from '../../../public/gallery/stories1.jpeg';
import tanvirImg from '../../../public/gallery/stories4.jpg';
import sadiaImg from '../../../public/gallery/stories2.jpeg';

const stories = [
  {
    name: 'Shakil Ahmed',
    role: 'Remote Web Developer',
    story: 'After completing a React course, Shakil started freelancing with Japanese clients through Upwork. Within 6 months, he became a full-time remote employee.',
    image: shakilImg,
  },
  {
    name: 'Fatema Islam',
    role: 'Translator & Content Writer',
    story: 'Fatema used her Japanese skills to get a remote job with a Tokyo-based language firm.',
    image: fatemaImg,
  },
  {
    name: 'Tanvir Hasan',
    role: 'Cybersecurity Analyst',
    story: 'Tanvir got certified in network security and now works remotely for a Japanese fintech company.',
    image: tanvirImg,
  },
  {
    name: 'Sadia Khatun',
    role: 'UI/UX Designer',
    story: 'Sadia learned Figma and started designing for Japanese startups via Fiverr.',
    image: sadiaImg,
  }
];

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
<section className="bg-blue-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">🌟 Success Stories</h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {stories.map((story, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
                <Image
                  src={story.image}
                  alt={story.name}
                  className="rounded-full h-44 w-44 shadow-md mb-4"
                  width={120}
                  height={120}
                />
                <h3 className="text-xl font-semibold text-blue-600">{story.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{story.role}</p>
                <p className="text-gray-700 text-base leading-relaxed">{story.story}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>  );
};



export default SuccessStories;
