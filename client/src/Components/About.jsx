import React from 'react';
import clockImage from './clock.jpg'; // Make sure this path is correct

function About() {
  return (
    <div id='about' className='w-full py-10 px-5 sm:py-20 sm:px-20 bg-lime-500 text-black'>
      <h1 className='font-mono text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight tracking-tighter'>
        STUDY TRACKER is a website that tracks a user's study sessions personally to help track one's productivity and eventually to keep track of everyday working hours.
      </h1>
      <div className='w-full flex gap-5 border-t-[1px] mt-10 sm:mt-20 border-lime-900'></div>
      <div className='w-full flex flex-col lg:flex-row gap-5 mt-5'>
        <div className='w-full lg:w-1/2 text-[4vw] sm:text-[2.5vw] md:text-[2vw]'>
          <h1>
            One can either log in to get personalized saved sessions and track them or just begin a session anytime, anywhere. This website makes user experience easy and interactive, ensuring that users can effortlessly manage their activities.
            The streamlined process allows for quick access to working hours and scheduling of sessions, catering to the user's convenience. Users can customize their sessions, making it easier to stay organized and focused. The platform's versatility means that, you can seamlessly integrate your sessions into your daily routine.
          </h1>
        </div>
        <div className='w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-lime-900 rounded-3xl'>
          <img src={clockImage} alt='clock image' className='h-full w-full object-cover rounded-3xl' />
        </div>
      </div>
    </div>
  );
}

export default About;
