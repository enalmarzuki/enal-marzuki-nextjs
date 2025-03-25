'use client';
import { useState } from 'react';

import Navbar from '@/components/Navbar';
import AnimatedImage from '@/components/AnimatedImage';
import HeroSection from './hero-section';
import { SKILLS } from '@/constant';
import AboutSection from './about-section/about';

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
          <AboutSection />
        </div>
      )}
    </>
  );
};

export default HomeView;
