import React, { useState } from 'react';
import '../index.css';
import TextBrand from '../assets/Img/svg2.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navbar =[
    { href:'/' , name:'CREDIT' },
    { href:'/' , name:'DEBIT' },
    { href:'/' , name:'APP' },
    { href:'/' , name:'LEARN' },
  ]

  return (
    <div className='flex flex-col h-screen bg-bgheader bg-cover bg-center p-12'>
      <div className='w-full h-14 flex justify-end items-center'>
        <div className='bg-white w-44 h-12 rounded-full'></div>
      </div>
      <div className='relative w-full h-14 mt-5'>
        <a href='/' className='text-white font-extrabold text-5xl'>Sable.</a>
        {/* Toggle Menu */}
        <div className='md:hidden absolute right-0 top-0 flex items-center'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>

        {/* Main Menu */}
        <ul className='hidden absolute inset-0 md:flex justify-center items-center space-x-12'>
          {Navbar.map((Navbar,index) =>(
            <li key={index}>
              <a href={Navbar.href} className='text-white hover:text-[rgb(64,234,223)]'>{Navbar.name}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          } fixed top-0 right-0 w-2/3 h-full bg-black text-white flex flex-col items-start p-8 space-y-6 transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className='flex justify-end w-full'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {Navbar.map((Navbar,index) => (
            <li key={index}>
              <a href={Navbar.href} className='hover:text-[rgb(64,234,223)]'>{Navbar.name}</a>
            </li>
          ))}
        </div>
      </div>
      <div className=' mt-12 space-y-5 '>
            <p className='text-white text-6xl text-center'>The fastest, most</p>
            <p className='text-white text-6xl text-center'>Premium path to</p>
            <p className='text-white text-6xl font-bold text-center'>financial freedom</p>
      </div>
      <a href='/' className='w-40 h-20 text-sm m-auto mt-8 rounded-full flex justify-center items-center bg-[rgb(64,234,223)]'>EXPLORE</a>
      <div className='flex space-x-5 mt-auto'>
        <img src={TextBrand} className='' alt='' />
        <p className='text-white text-xs'>
          Banking services provided by Coastal Community Bank,
          <br />
          Member FDIC, pursuant to license by Mastercard International Inc.
        </p>
      </div>
    </div>
  );
}

export default Header;
