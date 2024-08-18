import React from 'react';

import Foods from '../assets/Img/foods.svg.png'
import Amazon from '../assets/Img/amazon.svg.png'
import Spotify from '../assets/Img/spotify.svg.png'
import Netflix from '../assets/Img/netflix.svg.png'
import Uber from '../assets/Img/uber.svg.png'
import Ubereats from '../assets/Img/ubereats.svg.png'

function favoriteBrands() {
  const images = [
    { src: Foods, alt: 'Foods' },
    { src: Spotify, alt: 'Spotify' },
    { src: Amazon, alt: 'Amazon' },
    { src: Foods, alt: 'Foods' },
    { src: Netflix, alt: 'Netflix' },
    { src: Spotify, alt: 'Spotify' },
    { src: Amazon, alt: 'Amazon' },
    { src: Foods, alt: 'Foods' },
  ];
  const images2 = [
    { src: Netflix, alt: 'Netflix' },
    { src: Uber, alt: 'Uber' },
    { src: Ubereats, alt: 'Ubereats' },
    { src: Foods, alt: 'Foods' },
    { src: Uber, alt: 'Uber' },
    { src: Netflix, alt: 'Netflix' },
    { src: Ubereats, alt: 'Ubereats' },
    { src: Netflix, alt: 'Netflix' },
  ];
  return (
    <div className=' lg:flex flex-wrap'>
      <div className='bg-[rgb(28,28,30)] w-full lg:w-1/2 border border-black flex justify-center items-center'>
        <div className='m-20 '>
          <div className='text-neutral-400 hover:text-white'>
            <hr className='my-8' />
            <p className='text-3xl '>Earn 2% cash back on<br/> favorite brands</p>
            <br/>
            <p>Earn 2%1 cash back on favorite brands, 1%1 cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more.</p>
          </div>
          <div className='text-neutral-400 hover:text-white'>
            <hr className='my-8' />
            <p className='text-3xl '>Moving to the U.S.? No SSN required</p>
            <br/>
            <p>Start building credit before you even enter the country. Sign up with your international address, passport & visa instead**.</p>
          </div>
          <div className='text-neutral-400 hover:text-white'>
            <hr className='my-8' />
            <p className='text-3xl '>Get help from a real person</p>
            <br/>
            <p>When you’ve got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs.</p>
          </div>
        </div>
      </div>
      <div className=' bg-slate-200 w-full lg:w-1/2 border-transparent'>
        <div className="flex justify-center items-center space-x-12">
          <div className="overflow-hidden h-screen relative">
            <div className="space-y-8 animate-scroll1">
              {images.concat(images).map((image, index) => (
                <div key={index} className="md:w-52 md:h-52 w-32 h-32 bg-white flex justify-center items-center rounded-3xl">
                  <img src={image.src} alt={image.alt} className='md:w-3/5 w-2/5 ' />
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden h-screen relative">
            <div className="space-y-8 animate-scroll2">
              {images2.concat(images2).map((image2, index) => (
                <div key={index} className="md:w-52 md:h-52 w-32 h-32 bg-white flex justify-center items-center rounded-3xl">
                  <img src={image2.src} alt={image2.alt} className='md:w-3/5 w-2/5 ' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default favoriteBrands;
