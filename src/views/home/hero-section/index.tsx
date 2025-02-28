import IcDownload from '@/assets/icons/ic-download';
import BackgroundBlob from '@/components/BackgroundBlob';
import { motion } from 'motion/react';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex h-screen flex-col'>
        <BackgroundBlob position='top-left' />
        <BackgroundBlob position='bottom-right' />

        <motion.div
          initial={{ opacity: 1, position: 'relative', top: 20 }}
          animate={{ opacity: [0, 1], top: 0 }}
          transition={{ duration: 1 }}
          className='flex h-[calc(100%_-_50px)] flex-col items-center justify-center gap-2.5'
        >
          <p className='roboto-mono text-center'>Hi 👋, my name is</p>
          <p className='text-center text-5xl font-semibold'>Marzuki R.</p>
          <p className='text-center text-5xl font-semibold'>
            I’m a Frontend Developer
          </p>
          <p className='mb-5 max-w-[753px] text-center text-sm font-light leading-6'>
            I have been working as a Frontend Developer for more than 3 years, I
            excel in creating dynamic and visually appealing user interfaces
            using ReactJS. My work emphasizes clean, scalable code and optimized
            performance. I’m dedicated to delivering high-quality, thoroughly
            tested solutions that enhance the user experience.
          </p>

          <div className='group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-[#6c6c6c] px-4 py-3 backdrop-blur-sm'>
            <div className='absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/5 opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full group-hover:opacity-100'></div>
            <p className='text-base'>Download CV</p>
            <IcDownload className='size-5' />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
