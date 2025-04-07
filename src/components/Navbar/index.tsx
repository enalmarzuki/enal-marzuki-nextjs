'use client';
import IcClose from '@/assets/icons/ic-close';
import IcHamburger from '@/assets/icons/ic-hamburger';
import { NAVBAR_MENU, SOCIAL_MENU } from '@/constant';
import { useToggle } from '@/hooks/useToggle';
import cx from 'classnames';
import { motion } from 'motion/react';
import NavbarIcon from './NavbarIcon';
import NavbarTitle from './NavbarTitle';
import Image from 'next/image';
import Link from 'next/link';
import useIsInitialRender from '@/hooks/useIsInitialRender';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: VoidFunction;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const isInitialRender = useIsInitialRender();

  return (
    <div className='md:hidden'>
      <motion.div
        className={cx('fixed top-0 z-30 m-4 flex rounded-full bg-white p-3', {
          'flex-col px-4 py-5 backdrop-blur-sm': isOpen,
          'cursor-pointer items-center justify-center': !isOpen,
        })}
        initial={{ width: '2.5rem', height: '2.5rem' }}
        animate={
          isInitialRender
            ? undefined
            : isOpen
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
        <nav>
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
              <Link href='#home' passHref>
                <div className='flex h-fit items-center gap-1.5'>
                  <NavbarIcon />
                  <NavbarTitle />
                </div>
              </Link>
              <IcClose
                className='size-6 cursor-pointer stroke-white'
                onClick={onToggle}
              />
            </motion.div>
          )}

          {!isOpen && (
            <motion.div className='flex size-8 items-center justify-center rounded-full'>
              <IcHamburger className='size-6 stroke-black' onClick={onToggle} />
            </motion.div>
          )}
        </nav>

        {isOpen && (
          <div className='mt-6'>
            <motion.div
              className='relative z-20 flex flex-col gap-4'
              initial='hidden'
              animate='visible'
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
                <Link passHref href={`#${item.key}`} key={item.key}>
                  <motion.div
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
                  </motion.div>
                </Link>
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
                  <Image
                    src={social.src}
                    alt={social.description}
                    width={32}
                    height={32}
                    className='cursor-pointer'
                    loading='lazy'
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, onToggle] = useToggle();

  return (
    <nav>
      <MobileMenu isOpen={isOpen} onToggle={onToggle} />

      <div className='background-circle fixed z-10 hidden w-full py-4 md:flex md:px-4 lg:px-10'>
        <motion.div
          animate={{
            top: [10, 0],
            opacity: [0, 1],
          }}
          className='relative flex h-fit w-full items-center justify-between'
        >
          <Link href='#home' passHref>
            <div className='flex h-fit cursor-pointer items-center gap-1.5'>
              <NavbarIcon />
              <NavbarTitle />
            </div>
          </Link>

          <div className='flex gap-8'>
            {NAVBAR_MENU.map((item) => (
              <Link passHref href={`#${item.key}`} key={item.key}>
                <motion.div
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
                </motion.div>
              </Link>
            ))}
          </div>
          <div className='flex gap-4'>
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
                <Image
                  src={social.src}
                  alt={social.description}
                  width={32}
                  height={32}
                  className='cursor-pointer'
                  loading='lazy'
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
