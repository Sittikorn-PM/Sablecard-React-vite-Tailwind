import React from 'react';
import Frame from '../assets/Img/Frame.png';

const Comments = [
  { point: 4.8, name: 'E Berhe', detail: 'The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!' },
  { point: 4.5, name: 'K Oiwake', detail: 'Amazing to hear how Sable has made a difference for immigrants in the US! 🙌 Your positive experience speaks volumes about their commitment and support. Kudos to Sable for making banking easier and more accessible!' },
  { point: 5.0, name: 'K Keng', detail: 'It’s wonderful to see such glowing feedback! 🌟 Sable truly seems to be a game-changer for immigrants, providing exceptional service. Thank you for sharing your positive experience—Sable deserves all the praise!' },
  { point: 2.8, name: 'P Mai', detail: 'Thanks for sharing your positive experience! 🎉 It’s great to see Sable making such a strong impact in the banking world for immigrants. Your feedback is a great reminder of the difference they’re making. Keep up the excellent work, Sable!' },
  { point: 1.8, name: 'O Wen', detail: 'Sable sounds like an incredible resource for immigrants! 💯 Your positive review highlights their dedication to providing excellent service. It’s always great to hear such heartfelt gratitude. Well done, Sable!' },
  // ทำซ้ำรายการ
  { point: 4.8, name: 'E Berhe', detail: 'The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!' },
  { point: 4.5, name: 'K Oiwake', detail: 'Amazing to hear how Sable has made a difference for immigrants in the US! 🙌 Your positive experience speaks volumes about their commitment and support. Kudos to Sable for making banking easier and more accessible!' },
  { point: 5.0, name: 'K Keng', detail: 'It’s wonderful to see such glowing feedback! 🌟 Sable truly seems to be a game-changer for immigrants, providing exceptional service. Thank you for sharing your positive experience—Sable deserves all the praise!' },
  { point: 2.8, name: 'P Mai', detail: 'Thanks for sharing your positive experience! 🎉 It’s great to see Sable making such a strong impact in the banking world for immigrants. Your feedback is a great reminder of the difference they’re making. Keep up the excellent work, Sable!' },
  { point: 1.8, name: 'O Wen', detail: 'Sable sounds like an incredible resource for immigrants! 💯 Your positive review highlights their dedication to providing excellent service. It’s always great to hear such heartfelt gratitude. Well done, Sable!' },
];

function CommentSlide() {
  return (
    <div className='h-[40rem] pt-14 bg-black overflow-hidden '>
        <div className='flex animate-scrollComments'>
          {Comments.concat(Comments).map((comment, index) => (
            <div key={index} className='flex-none w-[30rem] h-80 space-x-10'>
              <div className='text-white text-5xl p-14'>{comment.point}</div>
              <div className='bg-[rgb(28,28,30)] h-auto p-12 rounded-2xl'>
                <div className='flex space-x-6 items-start'>
                  <img src={Frame} alt="Frame" className='h-12 w-12' />
                  <p className='text-white text-2xl h-32 overflow-auto'>{comment.detail}</p>
                </div>
                <p className='text-white mt-16 ml-12'>
                  <span className='text-[rgb(64,234,223)] text-2xl mr-3'>___</span>{comment.name}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default CommentSlide;
