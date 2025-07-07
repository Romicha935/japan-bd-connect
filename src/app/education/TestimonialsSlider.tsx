"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import test1 from '../../../public/Tanveer-Hasan-9.png'
import test2 from '../../../public/AikoTanaka.png'
import test3 from '../../../public/mahmudul.jpg'

const testimonials = [
  {
    name: "Tanvir Hasan",
    title: "Student at Kyoto University",
    comment:
      "This platform helped me a lot to understand the admission process in Japan. The scholarship information was really useful!",
    image: test1
  },
  {
    name: "Aiko Tanaka",
    title: "Japanese Language Instructor",
    comment:
      "Great initiative to bridge Japan and Bangladesh! The cultural content is very informative and beautifully designed.",
    image: test2
  },
  {
    name: "Mahmudul Islam",
    title: "Remote Software Engineer",
    comment:
      "I found a remote job in Japan using the resources shared here. Thanks for the amazing work!",
    image: test3
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="py-20 px-4 bg-[#f3f4f6] dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12" data-aos="fade-up">
        What Our Users Say
      </h2>

      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center min-h-[300px] flex flex-col justify-center items-center transition-all hover:shadow-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 max-w-2xl">
                  “{item.comment}”
                </p>
                <h4 className="text-xl font-semibold text-blue-700">{item.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
