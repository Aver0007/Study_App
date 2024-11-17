import React from 'react'

function Pause({onClick}) {
  return (
    <div>
        <button className="p-7 bg-zinc-500 w-[80px] h-[80px] text-7xl text-black rounded-full hover:bg-blue-600" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>

      </button> 
    </div>
  )
}

export default Pause