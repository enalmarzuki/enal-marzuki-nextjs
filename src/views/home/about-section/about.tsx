import { SKILLS } from '@/constant';
import * as motion from 'motion/react-client';

const AboutSection = () => {
  return (
    <div
      id='about'
      className='relative grid grid-cols-12 items-center justify-center gap-4 px-4 py-40 2xl:py-16'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
        className='col-span-12 md:col-span-6'
      >
        <div className='flex flex-col gap-2.5'>
          <p className='text-2xl font-semibold'>About Me</p>
          <p className='text-sm leading-6'>
            Hello my name is Marzuki, I am from Indonesia and I have been
            working as a Frontend Developer for more than 3 years and as someone
            who works in technology, I like to learn something new to support my
            work.
          </p>
          <p className='text-sm leading-6'>
            I have used to React as daily programming language for building an
            application. And until now i have been involved in several projects
            like Project Management Platform, Automotive and etc.
          </p>
          <p className='text-sm leading-6'>
            Some of the technologies that I am currently proficient in include:
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
        className='order-first col-span-12 mb-4 md:order-last md:col-span-5 md:col-start-9 md:mb-0'
      >
        <div className='flex'>
          <div className='flex h-[418px] w-full items-center justify-center bg-white/5 md:w-[320px]'>
            <p className='text-white/40'>Under Construction !</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
