'use client';

import { motion } from 'motion/react';
import { GlowCard } from './GlowCard';
import { SectionLabel } from './SectionLabel';
import { SKILLS } from '@/constant';

export const SkillsSection = () => {
  return (
    <section id='skills' className='relative py-32 md:py-48'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-4xl'>
            My skills &amp; services
          </h2>
          <p className='mt-3 max-w-2xl text-base text-slate-400'>
            I specialise in building performant, accessible interfaces with
            modern tooling. I&apos;m comfortable owning features end-to-end.
          </p>
        </motion.div>

        {/* Skills marquee */}
        <div className='relative mt-10 overflow-hidden'>
          {/* Fade edges */}
          <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950 to-transparent' />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='flex w-max gap-3'
          >
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <div
                key={`${skill}-${i}`}
                className='shrink-0 rounded-xl border border-slate-800/60 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors duration-300 hover:border-emerald-500/40 hover:text-emerald-300'
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills grid */}
        <div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3'>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <GlowCard className='px-4 py-3'>
                <div className='flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-xs text-emerald-400'>
                    ▸
                  </span>
                  <span className='text-sm font-medium text-slate-200'>
                    {skill}
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
