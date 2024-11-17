import React from 'react'

function BackButton({onClick}) {
    return (
        <button className="flex items-center space-x-2 mt-20 bg-white text-black rounded-lg px-4 py-2 " onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="ml-auto">Back</span>
        </button>
      );
}

export default BackButton;