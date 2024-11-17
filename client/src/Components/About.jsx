import React from 'react';

function About() {
  return (
    <div id='about' className='w-full py-10 px-5 sm:py-20 sm:px-20 bg-lime-500 text-black'>
      <h1 className='font-mono text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight tracking-tighter'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis voluptatem expedita quos nesciunt,
        asperiores dicta eligendi reiciendis distinctio
        fugit fugiat nisi ea commodi, laudantium
        ipsum saepe tenetur accusamus cum neque.
      </h1>
      <div className='w-full flex gap-5 border-t-[1px] mt-10 sm:mt-20 border-lime-900'></div>
      <div className='w-full flex flex-col lg:flex-row gap-5 mt-5'>
        <div className='w-full lg:w-1/2 text-[4vw] sm:text-[2.5vw] md:text-[2vw]'>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi pariatur quae rem esse laudantium, ut quo dicta quibusdam ea sunt mollitia aut ratione voluptatibus porro eum facere consequatur, consequuntur aperiam?lor vele 
            Aut, accusantium ipsam ducimus amet eos voluptatibus blanditiis veniam adipisci, incidunt, iure quae reiciendis nesciunt labore officia vitae doloribus illo nihil maxime vero fugiat. Nulla et quisquam ratione nam cum.
          </h1>
        </div>
        <div className='w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-lime-900 rounded-3xl'></div>
      </div>
    </div>
  );
}

export default About;
