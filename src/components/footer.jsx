import React from 'react'
import Ig from '../assets/Img/ig.png'
import Tw from '../assets/Img/tw.png'
import Fb from '../assets/Img/fb.png'
import Yt from '../assets/Img/yt.png'
import Tt from '../assets/Img/tt.png'


function footter() {
  return (
    <div className='bg-black md:h-screen pt-28 md:p-28 p-7'>
      <div className='md:flex md:space-y-0 justify-between space-y-12'>
        <div className='space-y-4 md:w-[30%]'>
            <p className='text-white font-medium text-3xl'>Sable Credit</p>
            <p className='text-white font-extralight text-lg'>Sable ONE Credit</p>
            <p className='text-white font-extralight text-lg'>Credit Score <span className='text-[rgb(64,234,223)]'>Coming Soon</span></p>
            <p className='text-white font-medium text-3xl'>Sable Credit</p>
            <p className='text-white font-medium text-3xl'>App</p>
            <p className='text-white font-medium text-3xl'>Learn</p>
            <p className='text-white font-extralight text-lg'>FAQs</p>
        </div>
        <div className=' space-y-4 md:w-[50%]'>
            <p className='text-white font-medium text-4xl'>Contact</p>
            <p className='text-white font-extralight text-lg'>Email: help@sablecard.com</p>
            <p className='text-white font-extralight text-lg'>Location: New York, NY</p>
        </div>
        <div className=' space-y-4 md:w-[20%]'>
            <p className='text-white font-medium text-8xl'>Sable.</p>
        </div>
      </div>
      <div className=' md:mt-0 md:flex mt-12 md:space-y-0 space-y-5 justify-between items-end'>
          <div className='md:w-[30%]'>
            <p className='text-white font-extralight text-lg'>About Sable</p>
          </div>
          <div className='md:w-[50%] flex space-x-6 '>
            <img src={Ig} alt="" />
            <img src={Tw} alt="" />
            <img src={Fb} alt="" />
            <img src={Yt} alt="" />
            <img src={Tt} alt="" />
          </div>
          <div className='md:w-[20%]'>
            <p className='text-white text-[12px]'>© Sable Money Inc, all rights reserved.</p>
          </div>
        </div>
        <hr className='mt-20'/>
        <p className=' my-6 text-[rgb(115,117,123)] text-[10px]'>Privacy policy | Terms and conditions</p>
        <p className='my-2 w-3/5 text-[rgb(115,117,123)] text-[10px]'>*Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.
        Sable account is FDIC-insured up to $250,000 per depositor through Coastal Community Bank, Member FDIC.
        **If you are not a U.S. citizen, you can apply with your passport and U.S. Visa. Please note: you must submit an SSN once you receive one. If you are a U.S. citizen, SSN is required to open a bank account.
        *** Double cashback bonus (through 12/2022)</p>
        <p className=' indent-4 text-[rgb(115,117,123)] text-[10px]'>Please see www.sablecard.com/terms-and-conditions#creditrnb for terms and conditions. Some exclusions apply.</p>
        <p className=' indent-4 text-[rgb(115,117,123)] text-[10px]'>Please see www.sablecard.com/terms-and-conditions for terms and conditions.</p>
        <p className=' indent-4 text-[rgb(115,117,123)] text-[10px]'>This benefit is provided by MasterCard. Benefits are subject to terms, conditions and limitations, including limitations on the amount of coverage. Please see the terms and conditions.</p>
        <p className=' indent-4 text-[rgb(115,117,123)] text-[10px]'>Sable estimated annual value</p>
        <p className=' indent-4 text-[rgb(115,117,123)] text-[10px]'>Sable product comparisons</p>
        <p className='my-2 w-3/5 text-[rgb(115,117,123)] text-[10px]'>† Sable Remittance Best Rate Guarantee Terms</p>
    </div>
  )
}

export default footter
