import React, { useState } from 'react';
import TimerApp from './TimerApp';  
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [showTimerApp, setShowTimerApp] = useState(false);

  const Navigate= useNavigate();

  const startSession=()=>{
    Navigate('/timer')

  }

  const exclusiveSession=()=>
    {
      Navigate('/login')
    }

  // const startSession = () => {
  //   setShowTimerApp(true);
  // };

  return (
    <div id='landing' className='w-full h-screen bg-zinc-900 pt-1'>
      {showTimerApp ? (
        <TimerApp />
      ) : (
        <>
          <div className='text-structure mt-40 px-20'>
            {["Track your", "Study journey", "EXCLUSIVELY"].map((item, index) => (
              <div key={index} className='masker'>
                <div className='w-fit flex items-center'>
                  <h1 className='uppercase text-[7vw] leading-none tracking-tighter font-semibold font-serif'>{item}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className='button mt-10 flex justify-around items-center'>
            <div
              className='px-4 py-2 uppercase border-[1px] border-zinc-500 hover: cursor-pointer hover:text-black hover:bg-amber-400 rounded-full'
              onClick={startSession}
            >
              Start a session
            </div>
            <div className='px-4 py-2 uppercase border-[1px] hover:cursor-pointer hover:text-black hover:bg-amber-400 border-zinc-500 rounded-full'
            onClick={exclusiveSession}>
              Exclusive session
            </div>
          </div>
          <div className='border-t-[0.1px] border-x-zinc-800 mt-20'>
          </div>
        </>
      )}
    </div>
  );
}

export default LandingPage;
