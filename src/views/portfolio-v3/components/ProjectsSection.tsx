'use client';

import { WORKS } from '@/constant';
import { motion } from 'motion/react';
import Link from 'next/link';
import { GlowCard } from './GlowCard';
import { SectionLabel } from './SectionLabel';

type Work = (typeof WORKS)[number];

interface ProjectsSectionProps {
  onSelectProject: (work: Work) => void;
}

export const ProjectsSection = ({ onSelectProject }: ProjectsSectionProps) => {
  return (
    <section id='projects' className='relative py-32 md:py-48'>
      <div className='pointer-events-none absolute right-0 top-1/4 size-[500px] rounded-full bg-lime-400/5 blur-[120px]' />

      <div className='relative mx-auto max-w-7xl px-4 md:px-6 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='flex flex-wrap items-end justify-between gap-4'
        >
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-4xl'>
              Featured work
            </h2>
          </div>
          <span className='rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300'>
            {WORKS.length} Selected projects
          </span>
        </motion.div>

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {WORKS.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <GlowCard
                onClick={() => onSelectProject(work)}
                className='flex h-full flex-col p-5 md:p-6'
              >
                {/* Header */}
                <div className='mb-4 flex items-center justify-between'>
                  <span className='rounded-full bg-slate-800/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400'>
                    {work.link ? '◉ Live' : '◎ Internal'}
                  </span>
                  {work.link && (
                    <Link
                      href={work.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      className='flex size-7 items-center justify-center rounded-lg bg-slate-800/40 text-xs text-slate-400 transition-colors hover:bg-emerald-500/20 hover:text-emerald-300'
                    >
                      ↗
                    </Link>
                  )}
                </div>

                {/* Content */}
                <h3 className='text-lg font-semibold text-slate-100 transition-colors group-hover:text-emerald-300'>
                  {work.title}
                </h3>
                <p className='mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-400'>
                  {work.description}
                </p>

                {/* Tech stack */}
                <div className='mt-5 flex flex-wrap gap-2 border-t border-slate-800/50 pt-4'>
                  {work.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className='rounded-lg bg-slate-800/40 px-2.5 py-1 text-[11px] font-medium text-slate-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
