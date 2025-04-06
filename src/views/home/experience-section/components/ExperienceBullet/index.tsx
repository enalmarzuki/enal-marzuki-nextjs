import React, { PropsWithChildren } from 'react';

const ExperienceBullet = ({ children }: PropsWithChildren) => {
  return (
    <div className='mb-2 flex items-start'>
      <span className='pr-2'>&bull;</span>
      <p className='font-sans text-white/70'>{children}</p>
    </div>
  );
};

export default ExperienceBullet;
