// 'use-client';

import IcClose from '@/assets/icons/ic-close';
import IcHamburger from '@/assets/icons/ic-hamburger';
import { NAVBAR_MENU, SOCIAL_MENU } from '@/constant';
// import { NAVBAR_MENU, SOCIAL_MENU } from '@/constant';
import { useToggle } from '@/hooks/useToggle';
import cx from 'classnames';
import { AnimatePresence, motion, Variants } from 'motion/react';

// import { motion, Variants } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const NavbarIcon = () => {
  return (
    <motion.img
      src='/ic-em.svg'
      alt='An SVG of an eye'
      width={40}
      height={40}
      animate={{
        scale: [0, 1],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.5,
      }}
    />
  );
};

// const Navbar = () => {
//   const [isOpen, onToggle] = useToggle();

//   return (
//     <>
//       <motion.div
//         initial={{ width: '3rem', height: '3rem' }}
//         animate={
//           isOpen
//             ? { width: '75%', height: '100vh', opacity: 1 }
//             : { width: '3rem', height: '3rem', opacity: 1 }
//         }
//         transition={{ duration: 1, ease: 'easeInOut' }}
//         className={cx('fixed z-10 bg-white transition-all duration-1000', {
//           'top-0 flex flex-col bg-white/20 p-5': isOpen,
//           'm-4 flex h-fit w-fit items-center justify-center': !isOpen,
//         })}
//       >
//         {/* <div className='background-circle fixed inset-x-0 top-0 z-10 flex items-center justify-between px-28 py-5'> */}
//         <div
//           className={cx('z-10 flex items-center justify-between', {
//             '': !isOpen,
//             'mb-8': isOpen,
//           })}
//         >
//           {isOpen && (
//             <div className={cx('flex items-center gap-1.5')}>
//               <NavbarIcon />

//               <motion.p
//                 className='itim-regular text-xl'
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//               >
//                 EnalMarzuki.
//               </motion.p>
//             </div>
//           )}

//           <div
//             className={cx(
//               'z-10 flex size-7 cursor-pointer items-center justify-center rounded-full',
//               {
//                 '': !isOpen,
//               },
//             )}
//             onClick={onToggle}
//           >
//             {isOpen ? (
//               <IcClose className='size-7 stroke-white' />
//             ) : (
//               <IcHamburger className='size-7 stroke-black' />
//             )}
//           </div>
//         </div>

//         {isOpen && (
//           <>
//             <motion.div
//               animate={{
//                 opacity: [0, 1],
//               }}
//               className='z-20 flex flex-col gap-4'
//               // className='flex items-center gap-7'
//             >
//               {NAVBAR_MENU.map((item) => (
//                 <p
//                   key={item.key}
//                   className='cursor-pointer text-sm font-semibold'
//                 >
//                   {item.label}
//                 </p>
//               ))}
//             </motion.div>

//             <motion.div
//               animate={{
//                 opacity: [0, 1],
//               }}
//               className='mt-5 flex items-center gap-2.5'
//               // className='flex items-center gap-2.5'
//             >
//               {SOCIAL_MENU.map((social) => (
//                 <a
//                   key={social.key}
//                   href={social.link}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
//                   <img
//                     src={social.src}
//                     alt={social.description}
//                     className='cursor-pointer'
//                   />
//                 </a>
//               ))}
//             </motion.div>
//           </>
//         )}
//       </motion.div>
//     </>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  const [isOpen, onToggle] = useToggle();

  return (
    <>
      <div className='md:hidden'>
        <motion.div
          className={cx('fixed top-0 z-10 m-4 flex rounded-full bg-white p-3', {
            'flex-col px-4 py-5 backdrop-blur-sm': isOpen,
            'cursor-pointer items-center justify-center': !isOpen,
          })}
          initial={{ width: '2.5rem', height: '2.5rem' }}
          animate={
            isOpen
              ? {
                  margin: [16, 0, 0, 0],
                  borderRadius: ['50%', 0, 0, 0],
                  height: ['3rem', '3rem', '100%', '100%'],
                  width: ['3rem', '3rem', '3rem', '15rem'],
                  backgroundColor: [
                    'rgb(255 255 255)',
                    'rgb(0 0 0 / 0.2)',
                    'rgb(0 0 0 / 0.4)',
                    'rgb(0 0 0 / 0.5)',
                  ],
                }
              : {
                  margin: [16, 0, 0, 0].reverse(),
                  borderRadius: ['50%', 0, 0, 0].reverse(),
                  height: ['2.5rem', '2.5rem', '100%', '100%'].reverse(),
                  width: ['2.5rem', '2.5rem', '2.5rem', '15rem'].reverse(),
                  backgroundColor: [
                    'rgb(255 255 255)',
                    'rgb(0 0 0 / 0.9)',
                    'rgb(0 0 0 / 0.7)',
                    'rgb(0 0 0 / 0.5)',
                  ].reverse(),
                }
          }
          transition={{
            duration: 1,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 1],
          }}
        >
          <div className=''>
            {isOpen && (
              <motion.div
                animate={{
                  top: [10, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  delay: 1,
                }}
                className='relative flex h-fit w-full items-center justify-between'
              >
                <div className={cx('flex h-fit items-center gap-1.5')}>
                  <NavbarIcon />

                  <motion.p
                    className='itim-regular text-xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    EnalMarzuki.
                  </motion.p>
                </div>
                <IcClose
                  className='size-6 cursor-pointer stroke-white'
                  onClick={onToggle}
                />
              </motion.div>
            )}

            {!isOpen && (
              <motion.div className='flex size-8 items-center justify-center rounded-full'>
                <IcHamburger
                  className='size-6 stroke-black'
                  onClick={onToggle}
                />
              </motion.div>
            )}
          </div>

          {isOpen && (
            <div className='mt-6'>
              <motion.div
                className='relative z-20 flex flex-col gap-4'
                initial='hidden'
                animate='visible'
                // className='flex items-center gap-7'
                variants={{
                  visible: {
                    transition: {
                      delayChildren: 1,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {NAVBAR_MENU.map((item) => (
                  <motion.p
                    key={item.key}
                    className='cursor-pointer text-sm font-semibold'
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    {item.label}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          )}
          {isOpen && (
            <div className='mt-6'>
              <motion.div
                className='relative z-20 flex items-center gap-2'
                initial='hidden'
                animate='visible'
                // className='flex items-center gap-7'
                variants={{
                  visible: {
                    transition: {
                      delayChildren: 2,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {SOCIAL_MENU.map((social) => (
                  <motion.a
                    key={social.key}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cursor-pointer text-sm font-semibold'
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      src={social.src}
                      alt={social.description}
                      className='cursor-pointer'
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>

      <div className='background-circle fixed z-10 hidden w-full p-4 md:flex'>
        <motion.div
          animate={{
            top: [10, 0],
            opacity: [0, 1],
          }}
          className='relative flex h-fit w-full items-center justify-between'
        >
          <div className={cx('flex h-fit items-center gap-1.5')}>
            <NavbarIcon />

            <motion.p
              className='itim-regular text-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              EnalMarzuki.
            </motion.p>
          </div>

          <div className='flex gap-8'>
            {NAVBAR_MENU.map((item) => (
              <motion.p
                key={item.key}
                className='cursor-pointer text-sm font-semibold'
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                {item.label}
              </motion.p>
            ))}
          </div>
          <div className='flex gap-8'>
            {SOCIAL_MENU.map((social) => (
              <motion.a
                key={social.key}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer text-sm font-semibold'
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src={social.src}
                  alt={social.description}
                  className='cursor-pointer'
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   const [isOpen, onToggle] = useToggle();

//   const variantsContainer: Variants = {
//     initial: {
//       width: '3rem',
//       height: '3rem',
//     },
//     fullHeight: {
//       height: '100vh',
//       transition: {
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//     expandWidth: {
//       width: '15rem',
//       backgroundColor: ['rgb(255 255 255)', 'rgb(0 0 0 / 0.5)'],
//       transition: {
//         delay: 0.5,
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//     minimizeWidth: {
//       width: '3rem',
//       height: '100vh',
//       transition: {
//         delay: 2,
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//     shrinkHeight: {
//       height: '3rem',
//       backgroundColor: ['rgb(0 0 0 / 0.5)', 'rgb(255 255 255)'],
//       alignItems: 'center',
//       transition: {
//         delay: 2.5, // Tunggu width mengecil dulu sebelum height mengecil
//         duration: 0.5,
//         ease: 'easeInOut',
//         staggerChildren: 0.2,
//         when: 'afterChildren',
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial='initial'
//       animate={
//         isOpen
//           ? ['fullHeight', 'expandWidth']
//           : ['minimizeWidth', 'shrinkHeight']
//       }
//       // animate={['fullHeight', 'expandWidth']}
//       variants={variantsContainer}
//       className={cx(
//         'fixed z-10 flex cursor-pointer justify-center bg-white p-4',
//         {
//           'backdrop-blur-sm': isOpen,
//           // 'items-center': !isOpen,
//         },
//       )}
//     >
//       <AnimatePresence>
//         <motion.div
//           animate={{
//             top: [10, 0],
//             opacity: [0, 1],
//           }}
//           exit={{
//             top: [0, 10],
//             opacity: [1, 0],
//           }}
//           className={cx('relative flex h-fit items-center justify-between', {
//             'w-fit': !isOpen,
//             'w-full': isOpen,
//           })}
//         >
//           <motion.div
//             variants={{
//               visible: {
//                 y: [10, 0],
//                 opacity: [0, 1],
//                 display: 'flex',
//                 transition: {
//                   delay: 2,
//                 },
//               },
//               hidden: {
//                 display: 'none',
//                 y: [0, 10],
//                 opacity: [1, 0],
//               },
//             }}
//             initial='hidden'
//             animate={isOpen ? 'visible' : 'hidden'}
//             exit='hidden'
//             className={cx('flex h-fit items-center gap-1.5')}
//           >
//             <NavbarIcon />

//             <motion.p
//               className='itim-regular text-xl'
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               EnalMarzuki.
//             </motion.p>
//           </motion.div>

//           <IcClose
//             className={cx('size-6 cursor-pointer stroke-white', {
//               hidden: !isOpen,
//             })}
//             onClick={onToggle}
//           />

//           <motion.div
//             animate={{
//               opacity: [0, 1],
//               scale: [0, 1],
//             }}
//             transition={{
//               delay: 2,
//               staggerChildren: 0.2,
//               when: 'afterChildren',
//             }}
//             className={cx(
//               'flex size-8 items-center justify-center rounded-full',
//               {
//                 hidden: isOpen,
//               },
//             )}
//           >
//             <IcHamburger className='size-6 stroke-black' onClick={onToggle} />
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Navbar;
