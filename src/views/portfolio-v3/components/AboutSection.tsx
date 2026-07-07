'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionLabel } from './SectionLabel';
import { yearsOfExperience } from '../data';

export const AboutSection = () => {
  return (
    <section
      id='about'
      className='relative flex min-h-screen flex-col justify-center overflow-hidden border-slate-900/60 py-20 md:py-28'
    >
      {/* Animated gradient orbs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='absolute -right-40 top-20 size-[600px] rounded-full bg-emerald-500/[0.04] blur-[140px]'
        />
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute -left-20 bottom-10 size-[500px] rounded-full bg-lime-400/[0.03] blur-[120px]'
        />
      </div>

      {/* Grid pattern matching Hero */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className='relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20'>
        <div className='grid gap-12 lg:grid-cols-12 lg:items-center'>
          {/* Column 1: Image Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='order-2 flex justify-center lg:order-1 lg:col-span-5'
          >
            {/* Floating Wrapper to remove stiffness */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='group relative aspect-[4/5] w-full max-w-[420px] cursor-pointer'
            >
              {/* Layer 1: Background Offset Card (Tilted slightly to break rigidity) */}
              <div className='absolute inset-0 rotate-[-3deg] scale-[0.98] rounded-2xl border border-slate-800/60 bg-slate-950/20 transition-all duration-700 group-hover:rotate-0 group-hover:scale-100 group-hover:border-emerald-500/20' />

              {/* Layer 2: Main Image Card */}
              <div className='relative size-full rounded-2xl border border-slate-800 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-md transition-all duration-700 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:border-slate-700/80'>
                {/* Decorative corner markers that slide outward on hover */}
                <div className='absolute -left-2 -top-2 size-4 border-l border-t border-emerald-500/40 transition-all duration-500 group-hover:-left-3.5 group-hover:-top-3.5 group-hover:border-emerald-400/80' />
                <div className='absolute -right-2 -top-2 size-4 border-r border-t border-emerald-500/40 transition-all duration-500 group-hover:-right-3.5 group-hover:-top-3.5 group-hover:border-emerald-400/80' />
                <div className='absolute -bottom-2 -left-2 size-4 border-b border-l border-emerald-500/40 transition-all duration-500 group-hover:-bottom-3.5 group-hover:-left-3.5 group-hover:border-emerald-400/80' />
                <div className='absolute -bottom-2 -right-2 size-4 border-b border-r border-emerald-500/40 transition-all duration-500 group-hover:-bottom-3.5 group-hover:-right-3.5 group-hover:border-emerald-400/80' />

                {/* The Image Container */}
                <div className='relative size-full overflow-hidden rounded-xl bg-slate-950'>
                  <Image
                    src='/me.JPG'
                    alt='Photo of Enal Marzuki'
                    fill
                    className='object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0'
                    sizes='(max-width: 768px) 100vw, 420px'
                  />
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent' />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 2: Bio & Metadata (7 cols) */}
          <div className='order-1 space-y-6 lg:order-2 lg:col-span-7 lg:pl-4'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-4'
            >
              <SectionLabel>About</SectionLabel>
              <h2 className='text-3xl font-bold tracking-tight text-slate-100 md:text-5xl'>
                A developer focused on{' '}
                <span className='animate-shimmer bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent'>
                  details &amp; fidelity.
                </span>
              </h2>

              {/* Thin animated line matching Hero */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className='h-px w-full origin-left bg-gradient-to-r from-slate-700/60 to-transparent'
              />
            </motion.div>

            {/* Bio Prose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='space-y-4 text-base leading-relaxed text-slate-400 md:text-lg'
            >
              <p>
                Hello, my name is{' '}
                <span className='font-medium text-slate-200'>Marzuki</span>.
                I&apos;m from Indonesia and have been working as a{' '}
                <span className='font-semibold text-emerald-400'>
                  Frontend Developer
                </span>{' '}
                for more than {yearsOfExperience} years.
              </p>
              <p className='text-sm text-slate-500 md:text-base'>
                I use React and Next.js to craft high-performing web
                applications. I care about small details — from motion and
                micro-interactions to clean, testable code that scales with the
                product.
              </p>
            </motion.div>

            {/* Metadata 2x2 Grid (inspired by Hero stats and tech chips) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='grid grid-cols-2 gap-6 border-t border-slate-900 pt-6'
            >
              {[
                { label: '01 / ROLE', value: 'Frontend Lead' },
                { label: '02 / LOCATION', value: 'Indonesia' },
                { label: '03 / STACK', value: 'React / Next.js' },
                {
                  label: '04 / METRIC',
                  value: `${yearsOfExperience}+ Years Exp`,
                },
              ].map((item) => (
                <div key={item.label} className='space-y-1'>
                  <span className='block font-mono text-[10px] tracking-[0.2em] text-slate-600'>
                    {item.label}
                  </span>
                  <span className='block text-sm font-semibold text-emerald-400'>
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
