import IcDownload from '@/assets/icons/ic-download';
import BackgroundBlob from '@/components/BackgroundBlob';
import { motion } from 'motion/react';
import React from 'react';

const HeroSection = () => {
  return (
    <div id='home' className='container mx-auto'>
      <div className='flex h-screen flex-col px-4'>
        <BackgroundBlob position='top-left' />
        <BackgroundBlob position='bottom-right' />

        <motion.div
          initial={{ opacity: 1, position: 'relative', top: 20 }}
          animate={{ opacity: [0, 1], top: 0 }}
          transition={{ duration: 1 }}
          className='flex h-[calc(100%_-_50px)] flex-col items-center justify-center'
        >
          <p className='roboto-mono mb-1 text-center text-xs md:mb-2.5 md:text-sm'>
            Hi 👋, my name is
          </p>
          <p className='text-center text-3xl font-semibold md:mb-2.5 md:text-5xl'>
            Marzuki R.
          </p>
          <p className='mb-2.5 text-center text-2xl font-semibold md:mb-4 md:text-5xl'>
            I’m a Frontend Developer
          </p>
          <p className='mb-5 max-w-[753px] text-center text-xs font-light leading-5 text-gray-300 md:text-sm md:leading-6'>
            I have been working as a Frontend Developer for more than 3 years, I
            excel in creating dynamic and visually appealing user interfaces
            using ReactJS. My work emphasizes clean, scalable code and optimized
            performance. I’m dedicated to delivering high-quality, thoroughly
            tested solutions that enhance the user experience.
          </p>

          <div className='group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-[#6c6c6c] px-4 py-3 backdrop-blur-sm'>
            <div className='absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/5 opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full group-hover:opacity-100'></div>
            <p className='text-xs md:text-base'>Download CV</p>
            <IcDownload className='size-4 md:size-5' />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
