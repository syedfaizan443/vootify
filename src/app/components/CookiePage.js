'use client'

import { useState, useEffect } from 'react';

const CookiePage = () => {
  const [showCookiePage, setShowCookiePage] = useState(false);

  const handleAccept = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookieAccepted', 'true');
    }
    setShowCookiePage(false);
  };

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const cookieAccepted = localStorage.getItem('cookieAccepted') === 'true';
      if (!cookieAccepted) {
        setShowCookiePage(true);
      }
    }
  }, []);

  if (!showCookiePage) {
    return null;
  }

  return (
    <div className='w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed flex justify-center items-center sticky-0'>
      <div className='h-[10rem] w-7/12 flex items-center justify-center bg-purple-950'>
        <div className='h-[5rem] flex flex-col mx-5 justify-center items-center'>
          <p className='text-white font-bold'>Our website uses cookies to improve your experience</p>
          <button className='h-[2rem] mt-5 bg-orange-500 py-6 px-12 text-2xl font-bold text-white flex justify-center items-center rounded-md' onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;
