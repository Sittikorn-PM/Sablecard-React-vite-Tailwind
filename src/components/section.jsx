import React from 'react'

import Phone from '../assets/Img/phone.png'
import Card from '../assets/Img/card.png'
import Campass from '../assets/Img/compass.png'
import Champ from '../assets/Img/champ.png'
import World from '../assets/Img/world.png'
import Brand1 from '../assets/Img/brand1.svg.png'
import Brand2 from '../assets/Img/brand2.svg.png'
import Brand3 from '../assets/Img/brand3.svg.png'
import Brand4 from '../assets/Img/brand4.svg.png'

function section() {
  return (
    <>
    <section className='bg-[rgb(28,28,30)] w-full h-auto p-12'>
      <div className='md:mb-32 md-0 relative'>
        <p className='text-center text-sm mt-11 text-[rgb(111,219,212)]'>400,000 ACCOUNTS & COUNTING</p>
        <p className='text-center text-4xl font-semibold text-white m-6'>No hidden fees. No credit checks.<br/>No more barriers to building credit.</p>
      <img src={Phone} alt="" className=' md:absolute md:top-12 relative ' />
          <div className='md:flex flex-wrap justify-between items-center md:my-24 '>
            <div>
                <img src={Card} alt="" />
                <p className='w-56 text-white text-xl font-semibold'>Get a secured credit card and bank account in 5 minutes.</p>
                <p className='w-64 text-slate-500'>No credit history, credit check, or minimum deposit required.</p>
            </div>
            <div className='text-right flex flex-col items-end'>
                <img src={Campass} alt="" />
                <p className='w-56 text-white text-xl font-semibold mt-4'>Build your U.S. credit</p>
                <p className='w-56 text-slate-500'>We believe in forming positive habits. Build your U.S. credit with Sable</p>
            </div>
          </div>
          <div className='md:flex flex-wrap justify-between items-center  '>
            <div>
                <img src={Champ} alt="" />
                <p className='w-56 text-white text-xl font-semibold'>The only premium card for building credit.</p>
                <p className='w-64 text-slate-500'>2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!</p>
            </div>
            <div className='text-right flex flex-col items-end'>
                <img src={World} alt="" />
                <p className='w-56 text-white text-xl font-semibold mt-4'>Bank like a global citizen with Sable.</p>
                <p className='w-56 text-slate-500'>Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.</p>
            </div>
          </div>
        </div>
    </section>
      <div className=' bg-[rgb(28,28,30)] w-full h-auto md:pt-36 pb-24 '>
        <hr className='w-3/4 m-auto mb-14' />
          <div className='flex justify-between items-center'>
              <img src={Brand2} alt="" className='md:w-44 w-14' />
              <img src={Brand1} alt="" className='md:w-44 w-14' />
              <img src={Brand3} alt="" className='md:w-44 w-14' />
              <img src={Brand4} alt="" className='md:w-44 w-14' />
          </div>
      </div>
    </>
  )
}

export default section
