import Tabs from '@/components/Tabs';
import { COMPANY, EXPERIENCES } from '@/constant';
import React, { useCallback, useState } from 'react';
import * as motion from 'motion/react-client';
import AgitSection from './components/Agit';
import VirtualSpirit from './components/VirtualSpirit';
import Gramedia from './components/Gramedia';
import Carakde from './components/Carakde';
import HukumDigital from './components/HukumDigital';

const ExperienceSection = () => {
  const [currentTab, setCurrentTab] = useState<string>(COMPANY.AGIT);

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <motion.div
      id='experience'
      className='mx-auto grid grid-cols-12 py-40 lg:w-10/12 xl:w-[1200px] 2xl:py-16'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className='col-span-12 flex h-fit items-center justify-center font-sans text-2xl font-semibold text-gray-200'>
        <p className='text-center text-2xl font-semibold'>Experiences</p>
      </div>
      <div className='col-span-12 mt-4 min-h-[500px]'>
        <div className='mx-auto p-4'>
          <div className='w-12/12 grid grid-cols-12 font-mono'>
            <Tabs
              menu={EXPERIENCES}
              currentActive={currentTab}
              onChange={handleTab}
            />

            <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
              <div>
                {currentTab === COMPANY.AGIT && <AgitSection />}
                {currentTab === COMPANY.VIRTUAL_SPIRIT && <VirtualSpirit />}
                {currentTab === COMPANY.KOMPAS_GRAMEDIA && <Gramedia />}
                {currentTab === COMPANY.CARAKDE && <Carakde />}
                {currentTab === COMPANY.HUKUM_DIGITAL && <HukumDigital />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
