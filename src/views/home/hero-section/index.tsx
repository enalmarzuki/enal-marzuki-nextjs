import IcDownload from '@/assets/icons/ic-download';
import BackgroundBlob from '@/components/BackgroundBlob';
import { motion } from 'motion/react';
import React from 'react';
import ButtonCTA from './components/ButtonCTA';

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
          className='flex h-[calc(100%_-_50px)] flex-col justify-center md:items-center'
        >
          <p className='roboto-mono mb-1 text-left text-xs md:mb-2.5 md:text-center md:text-sm'>
            Hi 👋, my name is
          </p>
          <p className='text-3xl font-semibold md:mb-2.5 md:text-center md:text-5xl'>
            Marzuki R.
          </p>
          <p className='mb-2.5 text-3xl font-semibold md:mb-4 md:text-center md:text-5xl'>
            I’m a Frontend Developer
          </p>
          <p className='mb-5 max-w-[753px] text-base font-light leading-6 text-gray-300 md:text-center md:text-base'>
            I have been working as a Frontend Developer for more than 3 years, I
            excel in creating dynamic and visually appealing user interfaces
            using ReactJS. My work emphasizes clean, scalable code and optimized
            performance. I’m dedicated to delivering high-quality, thoroughly
            tested solutions that enhance the user experience.
          </p>

          <ButtonCTA title='Download DV' />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
