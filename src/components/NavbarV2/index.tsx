'use client';

import cx from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { key: 'hero', label: 'Home' },
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Projects' },
  { key: 'testimonials', label: 'Testimonials' },
  { key: 'contact', label: 'Contact' },
];

const NavbarV2 = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const offset = rect.top + window.scrollY - 96; // approx navbar height
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        y: scrolled ? -6 : 0,
        scale: scrolled ? 0.98 : 1,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className='fixed inset-x-0 top-0 z-30 flex justify-center px-4 pt-5 md:px-6 lg:px-10'
    >
      <div
        className={cx(
          'flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl md:px-6',
          scrolled
            ? 'border-slate-800/80 bg-slate-900/95'
            : 'border-slate-700/70 bg-slate-900/80',
        )}
      >
        {/* Brand */}
        <button
          type='button'
          onClick={() => handleScroll('hero')}
          className='flex items-center gap-2'
        >
          <span className='flex size-7 items-center justify-center rounded-full bg-slate-900/90 shadow-sm shadow-black/40 ring-1 ring-slate-700/80'>
            <Image
              src='/ic-em.svg'
              alt='Enal Marzuki logo'
              width={24}
              height={24}
              className='object-contain'
            />
          </span>
          <div className='flex flex-col leading-tight'>
            <span className='text-xs font-medium text-slate-100'>
              Enal Marzuki
            </span>
            <span className='text-[11px] text-slate-400'>
              Frontend Developer
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className='hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex'>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type='button'
              onClick={() => handleScroll(item.key)}
              className='rounded-full px-2 py-1 text-slate-300 transition hover:text-emerald-300'
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className='flex items-center gap-3'>
          <div className='hidden items-center gap-2 md:flex'>
            <motion.a
              href='https://github.com/enalmarzuki'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='flex size-8 items-center justify-center rounded-full bg-slate-900/90 shadow-sm shadow-black/40 ring-1 ring-slate-700/80 transition-colors hover:bg-slate-800'
              aria-label='Open GitHub profile'
            >
              <Image
                src='/ic-github.svg'
                alt='GitHub icon'
                width={18}
                height={18}
                className='opacity-80 transition-opacity hover:opacity-100'
              />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/marzuki-r'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='flex size-8 items-center justify-center rounded-full bg-slate-900/90 shadow-sm shadow-black/40 ring-1 ring-slate-700/80 transition-colors hover:bg-slate-800'
              aria-label='Open LinkedIn profile'
            >
              <Image
                src='/ic-linkedin.svg'
                alt='LinkedIn icon'
                width={18}
                height={18}
                className='opacity-80 transition-opacity hover:opacity-100'
              />
            </motion.a>
          </div>

          <button
            type='button'
            onClick={handleToggle}
            className='inline-flex size-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-100 hover:border-slate-500 md:hidden'
            aria-label='Toggle navigation'
          >
            <span className='sr-only'>Open navigation</span>
            <span
              className={cx(
                'relative block h-[1px] w-4 transform rounded-full bg-slate-100 transition-all duration-200',
                open && 'translate-y-[5px] rotate-45',
              )}
            />
            <span
              className={cx(
                'relative block h-[1px] w-4 transform rounded-full bg-slate-100 transition-all duration-200',
                open ? '-translate-y-[5px] -rotate-45' : 'mt-[5px]',
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className='absolute left-0 right-0 top-[72px] px-4 md:hidden'
          >
            <div className='mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-950/95 p-4 shadow-xl shadow-black/50 backdrop-blur-xl'>
              <nav className='flex flex-col gap-2 text-sm font-medium text-slate-100'>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    type='button'
                    onClick={() => handleScroll(item.key)}
                    className='rounded-xl px-3 py-2 text-left hover:bg-slate-900/80'
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className='mt-4 flex w-full items-center justify-center gap-3'>
                <motion.a
                  href='https://github.com/enalmarzuki'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.97 }}
                  className='flex size-10 items-center justify-center rounded-full bg-slate-900/90 shadow-sm shadow-black/40 ring-1 ring-slate-700/80 transition-colors hover:bg-slate-800'
                  aria-label='Open GitHub profile'
                >
                  <Image
                    src='/ic-github.svg'
                    alt='GitHub icon'
                    width={20}
                    height={20}
                    className='opacity-80 transition-opacity hover:opacity-100'
                  />
                </motion.a>

                <motion.a
                  href='https://www.linkedin.com/in/marzuki-r'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.97 }}
                  className='flex size-10 items-center justify-center rounded-full bg-slate-900/90 shadow-sm shadow-black/40 ring-1 ring-slate-700/80 transition-colors hover:bg-slate-800'
                  aria-label='Open LinkedIn profile'
                >
                  <Image
                    src='/ic-linkedin.svg'
                    alt='LinkedIn icon'
                    width={20}
                    height={20}
                    className='opacity-80 transition-opacity hover:opacity-100'
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavbarV2;
