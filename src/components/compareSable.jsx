import React from 'react';
import CompareDebit from '../assets/Img/compareDebit.png.png';
import CompareDebit2 from '../assets/Img/CompareDebit2.png.png';

function CompareSable() {
  const rows = [
    ['', <img src={CompareDebit} alt="Compare Debit" />, <img src={CompareDebit2} alt="Compare Debit 2" />],
    ['No monthly fees or minimum balance', <i className="fi fi-sr-check text-white text-xl"></i>, <i className="fi fi-sr-check text-white text-xl"></i>],
    ['Deposits FDIC insured up to $250,000', <i className="fi fi-sr-check text-white text-xl"></i>, <i className="fi fi-sr-check text-white text-xl"></i>],
    ['Rewards, cash back & card perks', <i className="fi fi-sr-check text-white text-xl"></i>, <i className="fi fi-sr-check text-white text-xl"></i>],
    ['Send checks & transfer money for free', <i className="fi fi-sr-check text-white text-xl"></i>, <i className="fi fi-sr-check text-white text-xl"></i>],
    ['Build credit history from Day 1', <i className="fi fi-sr-check text-white text-xl"></i>, <i className="fi fi-rs-lock"></i>],
    ['No credit check required for sign up', <i className="fi fi-sr-check text-white text-xl"></i>, <i className="fi fi-rs-lock"></i>],
    ['Cost per year', <div className='text-4xl'>$0<span className='text-[12px] text-slate-500'>/year</span></div>, <div className='text-4xl'>$0<span className='text-[12px] text-slate-500'>/year</span></div>],
    ['', <a href='/' className='flex justify-center items-center text-black w-52 h-12 rounded-full  bg-[rgb(64,234,223)] '>GET CREDIT $ DEBIT</a>, <a href='/' className='flex justify-center items-center text-black w-32 h-12 rounded-full bg-[rgb(64,234,223)] '>GET DEBIT</a>],
  ];

  return (
    <div className='bg-black h-auto'>
      <p className='text-white md:text-8xl text-4xl py-32 '>Compare Sable . Compare Sable</p>
      <div className="overflow-x-auto md:px-24 px-2">
        <table className="min-w-full ">
          <thead>
            <tr>
              {rows[0].map((header, headerIndex) => (
                <th key={headerIndex} className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 text-sm text-white border-t border-[rgb(28,28,30)]">
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareSable;
