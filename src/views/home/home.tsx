'use client';
import React, { useState } from 'react';

import * as motion from 'motion/react-client';
import Navbar from '@/components/Navbar';
import AnimatedImage from '@/components/AnimatedImage';
import HeroSection from './hero-section';
import { SKILLS } from '@/constant';

const HomeView = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <>
      {!hasAnimated && (
        <AnimatedImage
          src='/ic-em.svg'
          alt='An SVG of an eye'
          onComplete={() => setHasAnimated(true)}
        />
      )}

      {hasAnimated && <Navbar />}

      {hasAnimated && (
        <div className='container mx-auto'>
          <HeroSection />
          <div className='relative grid grid-cols-12 grid-rows-5 items-center justify-center gap-4 py-40 2xl:py-16'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className='col-span-6 row-span-5'
            >
              <div className='flex flex-col gap-2.5'>
                <p className='text-2xl font-semibold'>About Me</p>
                <p className='text-sm leading-6'>
                  Hello my name is Marzuki, I am from Indonesia and I have been
                  working as a Frontend Developer for more than 3 years and as
                  someone who works in technology, I like to learn something new
                  to support my work.
                </p>
                <p className='text-sm leading-6'>
                  I have used to React as daily programming language for
                  building an application. And until now i have been involved in
                  several projects like Project Management Platform, Automotive
                  and etc.
                </p>
                <p className='text-sm leading-6'>
                  Some of the technologies that I am currently proficient in
                  include:
                </p>
              </div>
              <div className='mt-3 grid grid-flow-col grid-rows-3 gap-1'>
                {SKILLS.map((skill) => (
                  <p key={skill} className='text-sm'>
                    &bull; {skill}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ margin: '-50px' }}
              className='col-span-5 col-start-9 row-span-5'
            >
              <div className='flex'>
                <div className='flex h-[418px] w-[320px] items-center justify-center bg-white/5'>
                  <p className='text-white/40'>Under Construction !</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeView;
