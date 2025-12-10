'use client';
import { motion } from 'motion/react';

import SectionTitle from '@/components/SectionTitle';

import ButtonIconWithLabel from '@/components/Button/ButtonIconWithLabel';
import { EMAIL } from '@/constant';

const GetInTouch = () => {
  return (
    <div id='contact' className='container mx-auto'>
      <div className='flex h-fit flex-col pb-60 pt-40'>
        <motion.div
          initial={{ opacity: 1, position: 'relative', top: 20 }}
          animate={{ opacity: [0, 1], top: 0 }}
          transition={{ duration: 1 }}
          className='flex h-[calc(100%_-_50px)] flex-col items-center justify-center px-2'
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <p className='my-5 max-w-[753px] text-center text-base font-light leading-6 text-gray-300 md:text-base'>
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <ButtonIconWithLabel
            className='!w-fit bg-transparent'
            onClick={() => window.open(`mailto:${EMAIL}`, '_blank')}
          >
            Say Hello
          </ButtonIconWithLabel>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
