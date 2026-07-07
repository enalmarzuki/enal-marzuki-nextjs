'use client';

import cx from 'classnames';
import { motion } from 'motion/react';
import { useState } from 'react';
import { GlowCard } from './GlowCard';
import { SectionLabel } from './SectionLabel';
import { EXPERIENCE_ITEMS } from '../data';

export const ExperienceSection = () => {
  const [expandedExp, setExpandedExp] = useState<string | null>(
    EXPERIENCE_ITEMS[0].id,
  );

  return (
    <section
      id='experience'
      className='relative flex min-h-screen flex-col justify-center border-slate-900/60 py-20 md:py-28'
    >
      {/* Animated gradient orbs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className='absolute -left-40 top-10 size-[600px] rounded-full bg-emerald-500/[0.04] blur-[140px]'
        />
        <motion.div
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute -right-20 bottom-10 size-[500px] rounded-full bg-lime-400/[0.03] blur-[120px]'
        />
      </div>

      {/* Grid pattern matching About and Hero */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className='relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20'>
        <div className='grid gap-12 lg:grid-cols-12 lg:items-start'>
          {/* Column 1: Intro & Career Highlight Card (5 cols) */}
          <div className='space-y-6 lg:col-span-5'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-4'
            >
              <SectionLabel>Experience</SectionLabel>
              <h2 className='text-3xl font-bold tracking-tight text-slate-100 md:text-5xl'>
                Where I&apos;ve{' '}
                <span className='animate-shimmer bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent'>
                  worked.
                </span>
              </h2>

              {/* Thin animated line matching Hero & About */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className='h-px w-full origin-left bg-gradient-to-r from-slate-700/60 to-transparent'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-base leading-relaxed text-slate-400 md:text-lg'
            >
              <p>
                Below is a timeline of my professional journey, building modern
                web applications, leading frontend teams, and collaborating with
                cross-functional partners.
              </p>
            </motion.div>

            {/* Decorative "Key Summary" card inspired by About's style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='group relative w-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-md transition-all duration-700 hover:border-slate-700/80'
              >
                {/* Decorative corner markers */}
                <div className='absolute -left-2 -top-2 size-4 border-l border-t border-emerald-500/40 transition-all duration-500 group-hover:-left-3 group-hover:-top-3 group-hover:border-emerald-400/80' />
                <div className='absolute -right-2 -top-2 size-4 border-r border-t border-emerald-500/40 transition-all duration-500 group-hover:-right-3 group-hover:-top-3 group-hover:border-emerald-400/80' />
                <div className='absolute -bottom-2 -left-2 size-4 border-b border-l border-emerald-500/40 transition-all duration-500 group-hover:-bottom-3 group-hover:-left-3 group-hover:border-emerald-400/80' />
                <div className='absolute -bottom-2 -right-2 size-4 border-b border-r border-emerald-500/40 transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3 group-hover:border-emerald-400/80' />

                <h3 className='mb-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500'>
                  // Career Highlights
                </h3>
                <div className='space-y-4'>
                  {[
                    {
                      icon: '🌟',
                      label: 'Current Role',
                      val: 'Frontend Team Lead @ AGIT',
                    },
                    {
                      icon: '👥',
                      label: 'Leadership',
                      val: 'Task delegation & Code reviews',
                    },
                    {
                      icon: '⚙️',
                      label: 'Tech Focus',
                      val: 'React / Next.js / TypeScript',
                    },
                  ].map((h, i) => (
                    <div key={i} className='flex items-center gap-3'>
                      <span className='text-lg'>{h.icon}</span>
                      <div className='min-w-0 flex-1'>
                        <span className='block font-mono text-[10px] uppercase tracking-wider text-slate-600'>
                          {h.label}
                        </span>
                        <span className='block truncate text-xs font-semibold text-emerald-400'>
                          {h.val}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Column 2: Accordion Timeline (7 cols) */}
          <div className='relative mt-10 space-y-4 lg:col-span-7 lg:mt-0'>
            {/* Vertical timeline connector line */}
            <div className='pointer-events-none absolute bottom-6 left-[29px] top-6 hidden w-0.5 bg-gradient-to-b from-slate-800 via-slate-800 to-transparent md:block' />

            {EXPERIENCE_ITEMS.map((exp, index) => {
              const isOpen = expandedExp === exp.id;
              const themeColor = exp.color === 'lime' ? 'lime' : 'emerald';

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <GlowCard
                    className={cx(
                      'transition-all duration-300',
                      isOpen &&
                        (themeColor === 'lime'
                          ? 'ring-1 ring-lime-500/20'
                          : 'ring-1 ring-emerald-500/20'),
                    )}
                  >
                    <button
                      type='button'
                      onClick={() => setExpandedExp(isOpen ? null : exp.id)}
                      className='flex w-full items-start gap-4 p-5 text-left md:items-center md:p-6'
                    >
                      {/* Timeline dot */}
                      <div className='relative z-10 flex size-5 shrink-0 items-center justify-center'>
                        <span
                          className={cx(
                            'flex size-3 items-center justify-center rounded-full transition-all duration-300',
                            isOpen
                              ? themeColor === 'lime'
                                ? 'bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.5)]'
                                : 'bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                              : 'bg-slate-700',
                          )}
                        />
                      </div>

                      <div className='min-w-0 flex-1'>
                        <div className='flex flex-col gap-1 md:flex-row md:items-center md:gap-3'>
                          <h3
                            className={cx(
                              'text-sm font-semibold transition-colors md:text-base',
                              isOpen
                                ? themeColor === 'lime'
                                  ? 'text-lime-300'
                                  : 'text-emerald-300'
                                : 'text-slate-200',
                            )}
                          >
                            {exp.title}
                          </h3>
                          <span className='hidden text-slate-700 md:inline'>
                            ·
                          </span>
                          <span className='text-xs font-medium text-slate-400 md:text-sm'>
                            {exp.company}
                          </span>
                        </div>
                        <div className='mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500'>
                          <span>{exp.location}</span>
                          <span>·</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-1 shrink-0 text-sm text-slate-500 md:mt-0'
                      >
                        ▾
                      </motion.span>
                    </button>

                    {/* Expandable content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <div className='border-t border-slate-800/50 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pl-[52px]'>
                        <ul className='space-y-2.5'>
                          {exp.bullets.map((bullet, bIndex) => (
                            <motion.li
                              key={bIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: isOpen ? 1 : 0,
                                x: isOpen ? 0 : -10,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: isOpen ? bIndex * 0.05 : 0,
                              }}
                              className='flex gap-3 text-sm leading-relaxed text-slate-300'
                            >
                              <span
                                className={cx(
                                  'mt-2 size-1.5 shrink-0 rounded-full',
                                  themeColor === 'lime'
                                    ? 'bg-lime-500/50'
                                    : 'bg-emerald-500/50',
                                )}
                              />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
