'use client';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../../public/hero1.jpg'
import banner2 from '../../../public/hero2.jpg'
import banner3 from '../../../public/technology.png'
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
      slidesToScroll:1
  }
  return (
    <section>
      <Slider {...settings}>
        {slides.map((slide,index)=> (
          <div key={index}>
            <Image src={slide.src} alt={slide.title} className='' layout='fill' objectFit='cover'/>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Hero