import React from 'react'
import Googleplay from '../assets/Img/googleplay.svg.png'
import Appstore from '../assets/Img/appstore.svg.png'

function DownLoad() {
  return (
    <div className='px-2 md:px-28 bg-black' >
      <div className="flex flex-col lg:flex-row justify-between bg-bgDownload bg-cover bg-center pt-40 rounded-3xl">
        <div className=' text-white flex flex-col justify-end p-8 md:pl-16 md:py-16'>
          <p className='text-xl md:text-3xl font-medium'>Join over<span className='text-3xl md:text-6xl mx-2 md:mx-4'>400,000</span>accounts</p>
          <p className='mt-4 md:w-96'>Download Sable: effortless, borderless banking for a more connected world.</p>
        </div>
        <div className='md:flex flex-wrap items-center md:items-end space-x-6 p-14'>
          <a href='/'><img src={Googleplay} alt="Google Play" className='w-40' /></a>
          <a href='/'><img src={Appstore} alt="App Store" className='w-40' /></a>
        </div>
      </div>
    </div>
  )
}

export default DownLoad
