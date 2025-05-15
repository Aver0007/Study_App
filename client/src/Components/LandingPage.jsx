import React, { useState } from 'react';
import TimerApp from './TimerApp';  
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [showTimerApp, setShowTimerApp] = useState(false);
  const Navigate = useNavigate();

  const startSession = () => {
    Navigate('/timer');
  };

  const exclusiveSession = () => {
    Navigate('/login');
  };

  return (
    <div id='landing' className='w-full min-h-screen bg-zinc-900 pt-1 flex flex-col justify-center items-center'>
      {showTimerApp ? (
        <TimerApp />
      ) : (
        <>
          {}
          <div className='text-structure mt-10 sm:mt-10 px-5 sm:px-20 text-center'>
            {["Track your", "Study journey", "EXCLUSIVELY"].map((item, index) => (
              <div key={index} className='masker'>
                <div className='w-fit flex justify-center items-center'>
                  <h1 className='uppercase text-[10vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] leading-none tracking-tighter font-semibold font-serif'>
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className='button mt-5 sm:mt-8 flex flex-col sm:flex-row justify-around items-center gap-5'>
            <div
              className='px-4 py-2 uppercase border-[1px] border-zinc-500 cursor-pointer hover:text-black hover:bg-amber-400 rounded-full transition duration-300'
              onClick={startSession}
            >
              Start a session
            </div>
            <div
              className='px-4 py-2 uppercase border-[1px] border-zinc-500 cursor-pointer hover:text-black hover:bg-amber-400 rounded-full transition duration-300'
              onClick={exclusiveSession}
            >
              Exclusive session
            </div>
          </div>
          <div className='border-t-[0.1px] border-x-zinc-800 mt-8 sm:mt-10 w-full'></div>
        </>
      )}
    </div>
  );
}

export default LandingPage;
