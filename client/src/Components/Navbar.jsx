import React from 'react'

function Navbar() {
  return (
    <div className=' z-[999] w-full py-10 px-20 font-mono flex justify-between items-center'>
      <div className='logo text-5xl '>
       Study Tracker
      </div>
      <div id='links' className='links flex gap-10'>
       <a href='#about' className='text-lg capitalize font-semibold'>About us</a>
       <a href='#landing' className='text-lg capitalize font-semibold'>Start Session</a>
       <a href='#motivation' className='text-lg capitalize font-semibold'>Motivation 101</a>

      </div>
    </div>
  )
}

export default Navbar