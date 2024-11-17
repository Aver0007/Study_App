import React from 'react';
import moo1 from './moo1.jpg';
import moo2 from './moo2.jpg';

function Card() {
  return (
    <div id='motivation' className='w-full flex flex-col py-10 sm:py-20 bg-zinc-900'>
      <div className='w-full px-5 sm:px-20 border-b-[1px] pb-2 border-zinc-700'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight'>
          MOTIVATION 101
        </h1>
      </div>
      <div className='px-5 sm:px-20'>
        <div className='cards w-full flex flex-col lg:flex-row gap-10 mt-10'>
          <div className='cardContainer w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[75vh]'>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={moo1}
                alt='motivation'
              />
            </div>
          </div>

          <div className='cardContainer w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[75vh]'>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={moo2}
                alt='motivation'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
