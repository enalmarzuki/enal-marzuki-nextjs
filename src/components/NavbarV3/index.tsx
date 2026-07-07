'use client';

import { EMAIL } from '@/constant';
import cx from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV_DESCRIPTIONS: Record<string, string> = {
  hero: 'Back to top / Intro',
  about: 'My story & stack',
  experience: 'Work experience',
  skills: 'Tech stack & tools',
  projects: 'Featured work',
  contact: 'Get in touch',
};

const NAV_ITEMS = [
  { key: 'hero', label: 'Home', icon: '01' },
  { key: 'about', label: 'About', icon: '02' },
  { key: 'experience', label: 'Experience', icon: '03' },
  { key: 'skills', label: 'Skills', icon: '04' },
  { key: 'projects', label: 'Projects', icon: '05' },
  { key: 'contact', label: 'Contact', icon: '06' },
];

const NavbarV3 = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Check if we are at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;
      if (isAtBottom) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].key);
        return;
      }

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.key);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offset = rect.top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop floating dock */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: scrolled ? -32 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='fixed inset-x-0 top-12 z-50 hidden justify-center px-4 md:flex'
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? 'rgba(2, 6, 23, 0.7)'
              : 'rgba(2, 6, 23, 0)',
            backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
            borderColor: scrolled
              ? 'rgba(30, 41, 59, 0.8)'
              : 'rgba(30, 41, 59, 0)',
            paddingTop: scrolled ? '12px' : '8px',
            paddingBottom: scrolled ? '12px' : '8px',
            paddingLeft: scrolled ? '32px' : '16px',
            paddingRight: scrolled ? '32px' : '16px',
          }}
          className='flex items-center gap-8 rounded-full border border-transparent transition-all duration-500'
        >
          {/* Nav items */}
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type='button'
              onClick={() => handleScroll(item.key)}
              className={cx(
                'relative font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300',
                activeSection === item.key
                  ? 'text-emerald-400'
                  : 'text-slate-500 hover:text-slate-300',
              )}
            >
              <span className='relative z-10'>{item.label}</span>
              {activeSection === item.key && (
                <span className='absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-emerald-500/40' />
              )}
            </button>
          ))}
        </motion.div>
      </motion.header>

      {/* Mobile navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:hidden'
      >
        <div
          className={cx(
            'flex w-full items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-500',
            scrolled || open
              ? 'border-slate-800 bg-slate-950/95 shadow-xl shadow-black/40'
              : 'border-slate-800/40 bg-slate-950/50',
          )}
        >
          <button
            type='button'
            onClick={() => handleScroll('hero')}
            className='group flex items-center gap-2'
          >
            <span className='flex size-7 items-center justify-center rounded-lg border border-slate-800/85 bg-slate-900/90 shadow-inner shadow-black/10 transition-transform duration-300 group-hover:scale-105'>
              <Image
                src='/ic-em.svg'
                alt='Enal Marzuki logo'
                width={14}
                height={14}
                className='object-contain brightness-[1.8] contrast-[1.2]'
              />
            </span>
            <span className='flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-slate-200 transition-colors group-hover:text-emerald-400'>
              EM
              <span className='relative flex size-1.5'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex size-1.5 rounded-full bg-emerald-500'></span>
              </span>
            </span>
          </button>

          <button
            type='button'
            onClick={handleToggle}
            className='inline-flex size-9 items-center justify-center rounded-full border border-slate-800/60 bg-slate-900/50 text-slate-100 transition-colors hover:bg-slate-800/60 active:scale-95'
            aria-label='Toggle navigation'
          >
            <div className='flex size-5 flex-col items-end justify-center gap-[5px]'>
              <span
                className={cx(
                  'h-[1.2px] rounded-full bg-slate-200 transition-all duration-300',
                  open ? 'w-5 translate-y-[6.2px] rotate-45' : 'w-5',
                )}
              />
              <span
                className={cx(
                  'h-[1.2px] rounded-full bg-slate-200 transition-all duration-300',
                  open ? 'w-0 opacity-0' : 'w-3.5',
                )}
              />
              <span
                className={cx(
                  'h-[1.2px] rounded-full bg-slate-200 transition-all duration-300',
                  open ? 'w-5 -translate-y-[6.2px] -rotate-45' : 'w-4',
                )}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className='fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md md:hidden'
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className='bg-slate-950/98 fixed inset-0 z-40 h-screen w-screen overflow-y-auto px-4 pb-8 pt-24 md:hidden'
            >
              {/* Decorative Mesh Gradients */}
              <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden'>
                <div className='absolute -right-40 -top-40 size-96 animate-pulse rounded-full bg-emerald-500/10 blur-[100px] duration-[8s]' />
                <div className='absolute -bottom-40 -left-40 size-96 animate-pulse rounded-full bg-blue-600/10 blur-[100px] duration-[12s]' />

                {/* Custom Tech Grid Overlay */}
                <div
                  className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-[0.03]'
                  style={{
                    maskImage:
                      'radial-gradient(circle at center, black, transparent 80%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, black, transparent 80%)',
                  }}
                />
              </div>

              <div className='relative z-10 mx-auto flex h-full max-w-md flex-col justify-between'>
                <nav className='mt-4 flex flex-col gap-2.5'>
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = activeSection === item.key;
                    return (
                      <motion.button
                        key={item.key}
                        type='button'
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 150,
                          damping: 18,
                          delay: i * 0.05,
                        }}
                        onClick={() => handleScroll(item.key)}
                        className={cx(
                          'group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300',
                          isActive
                            ? 'border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-300 shadow-[0_0_25px_-5px_rgba(16,185,129,0.06)]'
                            : 'border-transparent text-slate-400 hover:border-slate-800/50 hover:bg-slate-900/20 hover:text-slate-200',
                        )}
                      >
                        <div className='flex items-center gap-4'>
                          <span
                            className={cx(
                              'font-mono text-xs font-semibold tracking-wider transition-colors duration-300',
                              isActive
                                ? 'text-emerald-400'
                                : 'text-slate-600 group-hover:text-slate-400',
                            )}
                          >
                            {item.icon}
                          </span>
                          <div className='flex flex-col'>
                            <span
                              className={cx(
                                'font-mono text-sm font-bold uppercase tracking-widest transition-colors duration-300',
                                isActive
                                  ? 'text-emerald-200'
                                  : 'text-slate-200 group-hover:text-emerald-400',
                              )}
                            >
                              {item.label}
                            </span>
                            <span className='mt-0.5 font-sans text-[10.5px] tracking-wide text-slate-500'>
                              {NAV_DESCRIPTIONS[item.key]}
                            </span>
                          </div>
                        </div>

                        <div className='flex size-7 items-center justify-center rounded-full border border-slate-800/40 bg-slate-900/40 transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/10'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className={cx(
                              'transition-transform duration-300',
                              isActive
                                ? 'translate-x-0.5 text-emerald-400'
                                : 'text-slate-600 group-hover:translate-x-0.5 group-hover:text-emerald-400',
                            )}
                          >
                            <polyline points='9 18 15 12 9 6' />
                          </svg>
                        </div>
                      </motion.button>
                    );
                  })}
                </nav>

                <div className='mt-8 flex flex-col gap-5 border-t border-slate-900 pt-6'>
                  {/* Time & Availability Widget */}
                  <div className='flex items-center justify-between gap-4 rounded-2xl border border-slate-900/60 bg-slate-900/30 p-4'>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-mono text-[9px] uppercase tracking-widest text-slate-500'>
                        Makassar, Indonesia
                      </span>
                      <span className='font-mono text-xs font-semibold tabular-nums text-slate-300'>
                        {time || '12:00:00 AM'} (WIB)
                      </span>
                    </div>
                    <div className='flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-3.5 py-1'>
                      <span className='relative flex size-2'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                        <span className='relative inline-flex size-2 rounded-full bg-emerald-500'></span>
                      </span>
                      <span className='font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400'>
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Social & Contact Row */}
                  <div className='flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-2'>
                      <a
                        href='https://github.com/enalmarzuki'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex size-10 items-center justify-center rounded-xl border border-slate-800/60 bg-slate-900/50 text-slate-400 transition hover:border-slate-700/60 hover:bg-slate-900 hover:text-slate-200 active:scale-95'
                      >
                        <Image
                          src='/ic-github.svg'
                          alt='GitHub icon'
                          width={18}
                          height={18}
                          className='opacity-70 group-hover:opacity-100'
                        />
                      </a>
                      <a
                        href='https://www.linkedin.com/in/marzuki-r'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex size-10 items-center justify-center rounded-xl border border-slate-800/60 bg-slate-900/50 text-slate-400 transition hover:border-slate-700/60 hover:bg-slate-900 hover:text-slate-200 active:scale-95'
                      >
                        <Image
                          src='/ic-linkedin.svg'
                          alt='LinkedIn icon'
                          width={18}
                          height={18}
                          className='opacity-70 group-hover:opacity-100'
                        />
                      </a>
                    </div>

                    <a
                      href={`mailto:${EMAIL}`}
                      className='flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 font-mono text-[11px] font-bold tracking-wider text-slate-950 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-400 active:scale-95'
                    >
                      <span>LET'S TALK</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='11'
                        height='11'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='3.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <line x1='22' y1='2' x2='11' y2='13' />
                        <polygon points='22 2 15 22 11 13 2 9 22 2' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarV3;
