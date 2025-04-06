import IcDownload from '@/assets/icons/ic-download';
import { a } from 'motion/react-client';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonCTAProps {
  title: string;
}

const ButtonCTA: React.FC<ButtonCTAProps> = (props) => {
  return (
    <a
      href='/cv-marzuki-compressed.pdf'
      download='cv-marzuki-compressed.pdf'
      target='_blank'
      rel='noopener noreferrer'
    >
      <button className='group relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl border border-[#6c6c6c] px-4 py-3 backdrop-blur-sm md:w-fit'>
        <div className='absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/5 opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full group-hover:opacity-100'></div>
        <p className='text-center md:text-base'>{props.title}</p>
        <IcDownload className='size-4 md:size-5' />
      </button>
    </a>
  );
};

export default ButtonCTA;
