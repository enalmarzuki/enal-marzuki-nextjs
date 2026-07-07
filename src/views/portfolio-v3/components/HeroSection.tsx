'use client';

import { motion } from 'motion/react';
import { AnimatedNumber } from './AnimatedNumber';
import { stats } from '../data';

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative flex min-h-screen flex-col justify-between overflow-hidden'
    >
      {/* Animated gradient orbs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className='absolute -left-40 top-0 size-[700px] rounded-full bg-emerald-500/[0.06] blur-[160px]'
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -90, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className='absolute -right-40 bottom-0 size-[600px] rounded-full bg-lime-400/[0.04] blur-[140px]'
        />
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.04] blur-[120px]'
        />
      </div>

      {/* Grid pattern */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Decorative corner markers */}
      <div className='pointer-events-none absolute left-8 top-12 hidden lg:block'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className='font-mono text-[10px] uppercase tracking-[0.3em] text-slate-700'
        >
          <div className='flex items-center gap-2'>
            <span className='inline-block size-1.5 rounded-full bg-emerald-500/40' />
            Portfolio 2026
          </div>
        </motion.div>
      </div>
      <div className='pointer-events-none absolute right-8 top-12 hidden lg:block'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className='text-right font-mono text-[10px] uppercase tracking-[0.3em] text-slate-700'
        >
          <div className='flex items-center gap-2'>
            Based in Indonesia
            <span className='inline-block size-1.5 rounded-full bg-emerald-500/40' />
          </div>
        </motion.div>
      </div>

      {/* Main hero content — full width */}
      <div className='relative flex flex-1 flex-col items-center justify-center px-6 pb-12 pt-8 md:px-12 md:pb-24'>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='mb-10'
        >
          <div className='inline-flex items-center gap-3 rounded-full border border-slate-800/40 bg-slate-900/40 px-5 py-2.5 text-xs shadow-2xl shadow-black/20 backdrop-blur-xl'>
            <span className='relative flex size-2'>
              <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' />
            </span>
            <span className='font-medium uppercase tracking-[0.2em] text-slate-500'>
              Open to work
            </span>
          </div>
        </motion.div>

        {/* Giant headline */}
        <div className='w-full max-w-6xl'>
          <motion.h1 className='text-center'>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='block text-5xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-6xl md:text-7xl lg:text-8xl'
            >
              Frontend Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-1 block text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl'
            >
              <span className='animate-shimmer bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent'>
                Enal Marzuki
              </span>
            </motion.span>
          </motion.h1>
        </div>

        {/* Animated horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className='my-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-slate-700/60 to-transparent'
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className='max-w-2xl text-center text-base leading-relaxed text-slate-400 md:text-lg'
        >
          I craft high-performing, visually stunning web applications with{' '}
          <span className='text-slate-300'>React</span> and{' '}
          <span className='text-slate-300'>Next.js</span> — obsessed with clean
          architecture, seamless interactions, and pixel-perfect execution.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className='mt-10 flex flex-wrap items-center justify-center gap-4'
        >
          <motion.a
            href='/cv-marzuki-compressed.pdf'
            download='cv-marzuki-compressed.pdf'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className='group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-xl shadow-emerald-500/20 transition-shadow duration-300 hover:shadow-emerald-500/40'
          >
            <span className='absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            <span className='relative'>Download CV</span>
            <span className='relative text-base leading-none'>↓</span>
          </motion.a>
          <motion.button
            type='button'
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const offset = rect.top + window.scrollY - 80;
              window.scrollTo({ top: offset, behavior: 'smooth' });
            }}
            className='inline-flex items-center gap-2.5 rounded-full border border-slate-700/40 bg-slate-900/40 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/60 hover:text-emerald-200'
          >
            Get in Touch
            <span className='text-base leading-none text-emerald-400'>→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom bar — stats + tech stack */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className='relative border-t border-slate-800/40 px-6 py-6 md:px-12'
      >
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          {/* Stats */}
          <div className='flex items-center gap-6 sm:gap-10'>
            {stats.map((item, i) => (
              <div
                key={item.label}
                className='flex items-center gap-6 sm:gap-10'
              >
                {i > 0 && <div className='h-8 w-px bg-slate-800/60' />}
                <div className='text-center md:text-left'>
                  <p className='text-2xl font-bold text-slate-100 sm:text-3xl'>
                    <AnimatedNumber value={item.value} suffix={item.suffix} />
                  </p>
                  <p className='text-[10px] font-medium uppercase tracking-[0.15em] text-slate-600'>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech chips */}
          <div className='flex flex-wrap items-center justify-center gap-2 md:justify-end'>
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'].map(
              (tech) => (
                <span
                  key={tech}
                  className='rounded-full border border-slate-800/40 bg-slate-900/30 px-3 py-1 text-[11px] font-medium text-slate-500 transition-colors duration-300 hover:border-emerald-500/30 hover:text-emerald-400'
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
