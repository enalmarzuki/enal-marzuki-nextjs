import SectionTitle from '@/components/SectionTitle';
import { SKILLS } from '@/constant';
import { motion } from 'motion/react';

const AboutSection = () => {
  return (
    <div
      id='about'
      className='relative mb-80 grid grid-cols-12 items-center justify-center gap-4 px-4 md:px-6 lg:px-10'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
        className='col-span-12 lg:md:col-span-7'
      >
        <div className='flex flex-col gap-2.5'>
          <SectionTitle>About Me</SectionTitle>
          <p className='leading-6 text-gray-300'>
            Hello my name is Marzuki, I am from Indonesia and I have been
            working as a Frontend Developer for more than 3 years and as someone
            who works in technology, I like to learn something new to support my
            work.
          </p>
          <p className='leading-6 text-gray-300'>
            I have used to React as daily programming language for building an
            application. And until now i have been involved in several projects
            like Project Management Platform, Automotive and etc.
          </p>
          <p className='leading-6 text-gray-300'>
            Some of the technologies that I am currently proficient in include:
          </p>
        </div>
        <div className='mt-3 grid grid-flow-col grid-rows-3 gap-1'>
          {SKILLS.map((skill) => (
            <p key={skill} className='text-gray-300'>
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
        className='order-first col-span-12 mb-4 md:mb-0 lg:order-last lg:col-span-5 lg:col-start-9'
      >
        <div className='flex justify-center'>
          <div className='relative flex h-[418px] w-fit items-center justify-center overflow-hidden rounded-lg'>
            <img src='/me.JPG' alt='enal.jpg' className='h-full flex-none' />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
