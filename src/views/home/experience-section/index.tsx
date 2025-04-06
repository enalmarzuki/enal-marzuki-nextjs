import Tabs from '@/components/Tabs';
import { COMPANY, EXPERIENCES } from '@/constant';
import React, { useCallback, useState } from 'react';
import * as motion from 'motion/react-client';

const ExperienceSection = () => {
  const [currentTab, setCurrentTab] = useState<string>(COMPANY.AGIT);

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <motion.div
      id='experience'
      className='w-12/12 md:w-19/12 mx-auto grid grid-cols-12 lg:w-10/12 xl:w-[1000px]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className='hf col-span-12 flex items-center justify-center font-sans text-2xl font-semibold text-gray-200'>
        <p className='text-center text-2xl font-semibold md:mb-4'>
          Experiences
        </p>
      </div>
      <div className='col-span-12 mt-4 h-[500px]'>
        <div className='mx-auto p-4'>
          <div className='w-12/12 grid grid-cols-12 font-mono'>
            <Tabs
              menu={EXPERIENCES}
              currentActive={currentTab}
              onChange={handleTab}
            />

            {currentTab === COMPANY.AGIT && (
              <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
                <div>
                  <div className='flex flex-col'>
                    <h4 className='mb-2 flex text-lg font-bold'>
                      Frontend Co-Team Leader
                    </h4>
                    <p className='roboto-mono text-base font-semibold'>
                      PT. Astra Graphia Information Technology (AGIT)
                    </p>
                    <p className='roboto-mono text-sm'>Jan 2023 - Present</p>
                  </div>
                  <div className='mt-4'>
                    <ul>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Assist Frontend Leaders to Manage Tasks
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Review Frontend Developer's code so that it is
                          in accordance with the standards in the project
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Created several features using ReactJS, MobX as
                          state management, and GraphQL as a service.
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Implemented and customized Ant Design
                          components as the UI we used.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentTab === COMPANY.VIRTUAL_SPIRIT && (
              <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
                <div>
                  <div className='flex flex-col'>
                    <h4 className='mb-2 flex text-lg font-bold'>
                      Frontend Developer
                    </h4>
                    <p className='roboto-mono text-base font-semibold'>
                      Virtual Spirit Technology Sdn. Bhd.
                    </p>
                    <p className='roboto-mono text-sm'>Nov 2022 - Sep 2024</p>
                  </div>
                  <div className='mt-4'>
                    <ul>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Create several features using NextJS, Zustand
                          as state management, and TailwindCSS.
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Create some reusable components
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentTab === COMPANY.KOMPAS_GRAMEDIA && (
              <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
                <div>
                  <div className='flex flex-col'>
                    <h4 className='mb-2 flex text-lg font-bold'>
                      Frontend Developer
                    </h4>
                    <p className='roboto-mono text-base font-semibold'>
                      Kompas Gramedia
                    </p>
                    <p className='roboto-mono text-sm'>Jan 2023 - Jun 2023</p>
                  </div>
                  <div className='mt-4'>
                    <ul>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Contribute to the Web Reader project, create
                          components and perform API integration using Restful
                          APIs.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentTab === COMPANY.CARAKDE && (
              <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
                <div>
                  <div className='flex flex-col'>
                    <h4 className='mb-2 flex text-lg font-bold'>
                      Frontend Developer
                    </h4>
                    <p className='roboto-mono text-base font-semibold'>
                      PT Carakde Solusi Informatika
                    </p>
                    <p className='roboto-mono text-sm'>Mar 2021 - Jan 2022</p>
                  </div>
                  <div className='mt-4'>
                    <ul>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Involved in several projects and collaborated
                          with the backend team and UI/UX Designers.
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; I was responsible for creating features on the
                          admin dashboard.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentTab === COMPANY.HUKUM_DIGITAL && (
              <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
                <div>
                  <div className='flex flex-col'>
                    <h4 className='mb-2 flex text-lg font-bold'>
                      Frontend Developer (Intern)
                    </h4>
                    <p className='roboto-mono text-base font-semibold'>
                      PT Hukum Digital Indonesia
                    </p>
                    <p className='roboto-mono text-sm'>Jan 2021 - Mar 2021</p>
                  </div>
                  <div className='mt-4'>
                    <ul>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Design and Create website hukumdigital.com
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Convert design to code using ReactJS and
                          TailwindCss
                        </span>
                      </li>
                      <li>
                        <span className='mb-2 flex items-start font-sans text-white/70'>
                          &bull; Integration RestAPI that has been created by
                          the backend team
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
