'use client';
import Badge from '@/components/Badge';
import ImageSlider from '@/components/ImageSlider';
import SectionTitle from '@/components/SectionTitle';
import { WORKS } from '@/constant';
import { motion } from 'motion/react';
import ProjectLink from './components/ProjectLink';
import cx from 'classnames';

const WorkSection = () => {
  return (
    <motion.div
      id='works'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      className='mb-40 px-4 py-40 md:px-6 lg:px-10'
    >
      <SectionTitle>Some Things I've Built</SectionTitle>
      {WORKS.map((work, index) => (
        <div
          key={work.id}
          className='mb-40 mt-4 flex flex-col gap-8 lg:w-full lg:flex-row'
        >
          <div
            className={cx({
              'lg:order-2': index % 2 === 0,
            })}
          >
            <div className={cx('mb-4 lg:mb-0 lg:hidden')}>
              <ProjectLink href={work.link}>{work.title}</ProjectLink>
            </div>
            <div
              className={cx(
                'h-[280px] md:h-[400px] lg:h-[300px] lg:w-full xl:h-[350px] xl:w-[600px]',
                {
                  'lg:order-2': index % 2 === 0,
                },
              )}
            >
              <ImageSlider images={work.screenshots} />
            </div>
          </div>
          <div className='flex-1'>
            <div className={cx('hidden lg:block')}>
              <ProjectLink href={work.link}>{work.title}</ProjectLink>
            </div>

            <p className='leading-6 text-gray-300'>{work.description}</p>
            <div>
              <p className='mb-2 mt-4 font-roboto text-base leading-6 text-gray-300'>
                Tech Stack :
              </p>
              <div className='flex flex-wrap items-center gap-2'>
                {work.techStack.map((item, idx) => (
                  <Badge key={idx}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default WorkSection;
