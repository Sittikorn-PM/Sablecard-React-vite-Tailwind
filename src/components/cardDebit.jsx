import React from 'react'

import Debit1 from '../assets/Img/Debit1.png.png'
import Debit2 from '../assets/Img/Debit2.png.png'
function cardDebit() {
  return (
    <>
    <div className='bg-black flex justify-end items-end pt-24 px-12'>
        <img src={Debit2} alt="" className='md:w-2/5 w-36' />
    </div>  
    <div className='bg-white flex md:px-32 pt-24 justify-between '>
        <img src={Debit1} alt=" " className='md:w-2/5 w-36'/>
        <p className='md:text-4xl text-md m-auto md:mt-32'>Get a bank account & <br />debit card <span className='text-[rgb(111,219,212)]'>in five minutes.</span> </p>
    </div>
    </>
  )
}

export default cardDebit
