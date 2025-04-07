'use client';

import { useState } from 'react';

import AnimatedImage from '@/components/AnimatedImage';
import Navbar from '@/components/Navbar';
import { AnimatePresence, motion } from 'motion/react';
import AboutSection from './about-section/about';
import ExperienceSection from './experience-section';
import HeroSection from './hero-section';
import WorkSection from './work-section';
import WorkingWithMeSection from './working-with-me-section';
import GetInTouch from './get-in-touch-section';

const HomeView = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <>
      {/* Loading animation */}
      <AnimatePresence mode='wait'>
        {!hasAnimated && (
          <AnimatedImage
            key='loading'
            src='/ic-em.svg'
            alt='An SVG of an eye'
            onComplete={() => setHasAnimated(true)}
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {hasAnimated && (
          <motion.div
            key='main'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />

            <div className='container mx-auto'>
              <HeroSection />
              <AboutSection />
              <ExperienceSection />
              <WorkingWithMeSection />
              <WorkSection />
              <GetInTouch />
            </div>

            <div className='flex justify-center pb-8'>
              <p className='font-roboto text-xs'>©2025 - Enalmarzuki.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeView;
