"use client";
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import shakilImg from '../../../public/Tanveer-Hasan-9.png';
import fatemaImg from '../../../public/Tanveer-Hasan-9.png';
import tanvirImg from '../../../public/Tanveer-Hasan-9.png';
import sadiaImg from '../../../public/Tanveer-Hasan-9.png';

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
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">🌟 Success Stories</h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {stories.map((story, index) => (
            <div key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
                <Image
                  src={story.image}
                  alt={story.name}
                  className="rounded-lg shadow-md object-cover"
                  width={160}
                  height={160}
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">{story.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{story.role}</p>
                  <p className="text-gray-700 text-sm">{story.story}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

// Custom arrow components
function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} right-2 z-10`}
      onClick={onClick}
    >
      ➡️
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} left-2 z-10`}
      onClick={onClick}
    >
      ⬅️
    </div>
  );
}

export default SuccessStories;
