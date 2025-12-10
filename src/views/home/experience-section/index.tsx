'use client';
import Tabs from '@/components/Tabs';
import { COMPANY, EXPERIENCES } from '@/constant';
import { useCallback, useState } from 'react';

import SectionTitle from '@/components/SectionTitle';
import { AnimatePresence, motion } from 'motion/react';
import AgitSection from './components/Agit';
import Carakde from './components/Carakde';
import Gramedia from './components/Gramedia';
import HukumDigital from './components/HukumDigital';
import VirtualSpirit from './components/VirtualSpirit';

const ExperienceSection = () => {
  const [currentTab, setCurrentTab] = useState<string>(COMPANY.AGIT);

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <motion.div
      id='experience'
      className='mx-auto mb-40 grid grid-cols-12 pt-40 md:px-6 lg:w-10/12 lg:px-0 xl:w-[1200px]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className='col-span-12 mb-4 flex h-fit items-center justify-center font-sans text-2xl font-semibold text-gray-200'>
        <SectionTitle className='text-center'>Where I've worked</SectionTitle>
      </div>
      <div className='col-span-12 min-h-[500px]'>
        <div className='mx-auto p-4 md:p-0'>
          <div className='w-12/12 grid grid-cols-12'>
            <Tabs
              menu={EXPERIENCES}
              currentActive={currentTab}
              onChange={handleTab}
            />

            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTab}
                className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  {currentTab === COMPANY.AGIT && <AgitSection />}
                  {currentTab === COMPANY.VIRTUAL_SPIRIT && <VirtualSpirit />}
                  {currentTab === COMPANY.KOMPAS_GRAMEDIA && <Gramedia />}
                  {currentTab === COMPANY.CARAKDE && <Carakde />}
                  {currentTab === COMPANY.HUKUM_DIGITAL && <HukumDigital />}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
