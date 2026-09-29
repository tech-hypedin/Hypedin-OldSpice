'use client';

import React from 'react';

function RoadMap() {
  const phases = [
    {
      step: '01',
      title: 'Apply as a Creator',
      desc: 'Fill out the application form with your college, Instagram handle, and profile details to enlist in the program.',
    },
    {
      step: '02',
      title: 'Receive the Product',
      desc: 'Once selected, receive your exclusive Old Spice product package directly at your doorstep at zero cost.',
    },
    {
      step: '03',
      title: 'Shoot the Reel & Video',
      desc: 'Create and submit engaging Reel content following the provided brand brief and content guidelines.',
    },
    {
      step: '04',
      title: 'Get Rewarded',
      desc: 'Get recognized, earn your rewards, and feature across channels upon submission.',
    },
  ];

  return (
    <section 
      id='roadmap' 
      className="py-24 bg-neutral-50 border-y border-neutral-200 font-['Open_Sans']"
    >
      {/* Inline Font Injection - Independent Google Fonts Load */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          {/* <p className='text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2'>
            Operation Blueprint
          </p> */}
          <h2 className='text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-950'>
            How It Works
          </h2>
          <p className='mt-4 text-neutral-600 text-sm md:text-base'>
            Four simple steps to join the Old Spice Creator Contest and earn your rewards.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative'>
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className='relative p-6 sm:p-8 rounded-2xl bg-background border border-neutral-200 shadow-sm flex flex-col justify-between'
            >
              <div>
                <span className='text-5xl sm:text-6xl font-extrabold text-neutral-200 select-none block mb-4'>
                  {phase.step}
                </span>
                <h3 className='text-xl font-bold uppercase text-neutral-900 tracking-tight mb-3'>
                  {phase.title}
                </h3>
                <p className='text-sm text-neutral-600 leading-relaxed font-normal'>
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadMap;