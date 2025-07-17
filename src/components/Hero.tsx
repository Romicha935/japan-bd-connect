'use client';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../public/hero1.jpg'
import banner2 from '../../public/hero2.jpg'
import banner3 from '../../public/technology.png'
import Slider from 'react-slick';
import Image from 'next/image';


const slides = [
  {
    src:banner1,
    title:'Expolor Japanees Culture',
   subtext: 'From tradition to technology, embrace Japan’s vibrant lifestyle.',
  },
    
  {
    src: banner2,
    title: 'Discover Bangladeshi Heritage',
    subtext: 'Innovation, education and a rich cultural identity.',
  },
  {
    src: banner3,
    title: 'Work Without Borders',
    subtext: 'Find global remote jobs and connect both worlds digitally.',
  },

]

const Hero = () => {
  const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speeds:800,
      slidesToShow:1,
      slidesToScroll:1,
       autoplaySpeed: 2000    
  }
  return (
    <section className='w-full pt-2 h-[80vh] relative'>
      <Slider {...settings}>
        {slides.map((slide,index)=> ( 
          <div key={index} className='relative overflow-hidden w-full h-[80vh]'>
            <Image src={slide.src} alt={slide.title} className='brightness-[0.6]' layout='fill' objectFit='cover' priority/>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
              <h1 className='text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>{slide.title}</h1>
              <p className='text-gray-200 text-lg max-w-2xl drop-shadow-md'>{slide.subtext}</p>
              <button className='bg-blue-600 text-white px-6 py-2 mt-4 hover:bg-white hover:text-blue-600 hover:scale-105 text-2xl shadow-2xl rounded hover:border-2 '>Explore Now</button>
            </div>
          </div>

        ))}
      </Slider>
    </section>
  )
}

export default Hero