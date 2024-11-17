import React from 'react'
import {motion} from "framer-motion";

function Marquee() {
  return (
    <div className='w-full pt-3 py-3 bg-green-800'>
       <div className='text gap-10 tracking-tighter border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden  border-zinc-300'>
        <motion.h1  initial={{x:0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}} className='text-[10vw] leading-none font-mono font-semibold uppercase py-2'>
          Study-Tracker
          </motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}} className='text-[10vw] leading-none font-mono font-semibold uppercase py-2'>
            Study-Tracker
          </motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}} className='text-[10vw] leading-none font-mono font-semibold uppercase py-2'>
            Study-Tracker
          </motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:10}} className='text-[10vw] leading-none font-mono font-semibold uppercase py-2'>
            Study-Tracker
          </motion.h1>
        
       </div>
    </div>
  )
}

export default Marquee

// import React from 'react';
// import {motion} from "framer-motion";

// function Marquee() {
//   return (
//     <div className='w-full py-20 bg-green-800'>
//       <div className='text border-t-2 border-b-2 flex overflow-hidden gap-10 border-zinc-300'>
//         <motion.h1  initial={{x:0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[10vw] leading-none font-mono font-semibold uppercase py-2'>
//           Study Tracker
//         </motion.h1>
//         <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[10vw] leading-none font-mono font-semibold uppercase py-2'>
//           Study Tracker
//         </motion.h1>
//       </div>
//     </div>
//   );
// }

// export default Marquee;


