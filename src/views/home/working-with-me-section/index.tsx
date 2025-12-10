'use client';

import IcEmail from '@/assets/icons/ic-email';
import IcDownload from '@/assets/icons/ic-download';
import ButtonIconWithLabel from '@/components/Button/ButtonIconWithLabel';
import SectionTitle from '@/components/SectionTitle';

import { motion } from 'motion/react';
import { EMAIL } from '@/constant';

const WorkingWithMeSection = () => {
  return (
    <motion.div
      className='mb-40 px-4 md:px-6 lg:px-10'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className='flex w-full flex-col items-center justify-between rounded-2xl bg-black/40 p-6 md:justify-center md:px-12 md:py-12 lg:flex-row lg:justify-between'>
        <div className='w-fit'>
          <SectionTitle className='w-fit'>
            Interested working with me?
          </SectionTitle>
        </div>
        <div className='mt-2 flex w-fit items-center gap-4 lg:mt-0'>
          <a
            href='/cv-marzuki-compressed.pdf'
            download='cv-marzuki-compressed.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ButtonIconWithLabel
              className='bg-transparent'
              iconLeft={<IcDownload className='size-5' />}
            >
              Download CV
            </ButtonIconWithLabel>
          </a>

          <ButtonIconWithLabel
            className=''
            iconLeft={<IcEmail className='size-5' />}
            onClick={() => window.open(`mailto:${EMAIL}`, '_blank')}
          >
            Email Me
          </ButtonIconWithLabel>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkingWithMeSection;
