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
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Collaborated in breaking down new feature requests into
                        detailed tickets, ensuring clear documentation of both
                        functional and technical requirements.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Managed and tracked team tasks to support an organized
                        and efficient development workflow.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Conducted code reviews for fellow Frontend Developers to
                        maintain coding standards and architectural consistency.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Built and enhanced features using
                        <span className='font-medium text-white'>
                          &nbsp;ReactJS&nbsp;
                        </span>
                        , with
                        <span className='font-medium text-white'>
                          &nbsp;MobX&nbsp;
                        </span>
                        for state management and
                        <span className='font-medium text-white'>
                          &nbsp;GraphQL&nbsp;
                        </span>
                        as the service layer.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Customized
                        <span className='font-medium text-white'>
                          &nbsp;Ant Design&nbsp;
                        </span>
                        components to meet specific design systems and
                        functional needs of the application.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Developed several reusable components to improve
                        development efficiency and maintain consistency across
                        the application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentTab === COMPANY.VIRTUAL_SPIRIT && (
              <div className='col-span-12 mt-5 font-sans text-gray-300 sm:col-span-9 sm:mt-0 md:col-span-9 lg:col-span-8 xl:col-span-9'>
                <div>
                  <div className='flex flex-col'>
                    <h4 className='mb-2 flex text-lg font-bold'>
                      Frontend Developer - VirtualSpace Platform
                    </h4>
                    <p className='roboto-mono text-base font-semibold'>
                      Virtual Spirit Technology Sdn. Bhd.
                    </p>
                    <p className='roboto-mono text-sm'>Nov 2022 - Sep 2024</p>
                  </div>
                  <div className='mt-4'>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Developed and maintained core task management features
                        on the
                        <span className='font-medium text-white'>
                          &nbsp;VirtualSpace Platform&nbsp;
                        </span>
                        , ensuring scalability and reliability across different
                        use case and efficient workflow.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Optimized the performance of the task list component by
                        implementing efficient rendering strategies and
                        improving data handling, resulting in a smoother user
                        experience.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Integrated real-time updates for the task management
                        system using
                        <span className='font-medium text-white'>
                          &nbsp;AnyCable&nbsp;
                        </span>
                        , enabling seamless live collaboration between users.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Built and maintained various components in the form
                        builder and storage modules, contributing to the
                        platform’s flexibility in creating dynamic forms and
                        managing user-generated content effectively.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Contributed to the chat feature by handling UI
                        adjustments and fixing minor bugs to improve user
                        experience and interface consistency.
                      </p>
                    </div>
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
                    <p className='mb-2 flex items-start font-sans text-white/70'>
                      <span className='pr-2'>&bull;</span>Contributed to the
                      development of a Web Reader application, focusing on
                      delivering a responsive and intuitive user experience.
                    </p>
                    <p className='mb-2 flex items-start font-sans text-white/70'>
                      <span className='pr-2'>&bull;</span>Developed and
                      maintained reusable components to ensure consistency,
                      scalability, and efficiency across the codebase.
                    </p>
                    <p className='mb-2 flex items-start font-sans text-white/70'>
                      <span className='pr-2'>&bull;</span>Integrated frontend
                      features with RESTful APIs, enabling seamless
                      communication with backend services and improving overall
                      app performance.
                    </p>
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
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Developed and maintained multiple web projects,
                        including Pondok Vaksin, Praktek Dr. Bob, and others,
                        focusing on delivering user-friendly and functional
                        interfaces.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Integrated frontend with backend services using RESTful
                        APIs, ensuring reliable and efficient data
                        communication.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Created and maintained reusable components for the
                        Pondok Vaksin project to streamline development and
                        maintain UI consistency.
                      </p>
                    </div>
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
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Designed and developed the HukumDigital.com website from
                        scratch, ensuring a clean and user-friendly interface.
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Converted UI/UX designs into high-quality code using
                        <span className='font-medium text-white'>
                          &nbsp;ReactJS&nbsp;
                        </span>
                        and
                        <span className='font-medium text-white'>
                          &nbsp;TailwindCSS.&nbsp;
                        </span>
                      </p>
                    </div>
                    <div className='mb-2 flex items-start'>
                      <span className='pr-2'>&bull;</span>
                      <p className='font-sans text-white/70'>
                        Collaborated with the backend team to integrate RESTful
                        APIs, ensuring seamless data flow and dynamic content
                        across the platform.
                      </p>
                    </div>
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
