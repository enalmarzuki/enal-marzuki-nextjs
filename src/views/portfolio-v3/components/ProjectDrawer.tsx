'use client';

import ImageSlider from '@/components/ImageSlider';
import { WORKS } from '@/constant';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';

type Work = (typeof WORKS)[number];

interface ProjectDrawerProps {
  selectedProject: Work | null;
  onClose: () => void;
}

export const ProjectDrawer = ({
  selectedProject,
  onClose,
}: ProjectDrawerProps) => {
  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md'
          />

          {/* Slide-out Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-xl flex-col border-l border-slate-800/80 bg-slate-950/95 shadow-2xl outline-none backdrop-blur-sm'
          >
            {/* Drawer Header */}
            <div className='flex items-center justify-between border-b border-slate-800/50 bg-slate-950/20 px-6 py-5 md:px-8'>
              <span className='rounded-full border border-slate-700/20 bg-slate-800/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400'>
                {selectedProject.link ? '◉ Live Project' : '◎ Internal Project'}
              </span>
              <button
                onClick={onClose}
                className='flex size-9 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900 text-slate-400 transition-all hover:bg-slate-800 hover:text-slate-200'
                aria-label='Close drawer'
              >
                ✕
              </button>
            </div>

            {/* Drawer Content */}
            <div className='flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8'>
              <h3 className='text-2xl font-bold leading-tight text-slate-100 md:text-3xl'>
                {selectedProject.title}
              </h3>

              {/* Screenshots ImageSlider */}
              {selectedProject.screenshots &&
                selectedProject.screenshots.length > 0 && (
                  <div className='relative mt-6 h-[250px] w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950 shadow-lg md:h-[320px]'>
                    <ImageSlider images={selectedProject.screenshots} />
                  </div>
                )}

              <div className='mt-8 space-y-6'>
                <div>
                  <h4 className='text-xs font-semibold uppercase tracking-wider text-emerald-400'>
                    About the project
                  </h4>
                  <p className='mt-3 text-sm leading-relaxed text-slate-300 md:text-base'>
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className='text-xs font-semibold uppercase tracking-wider text-emerald-400'>
                    Technologies used
                  </h4>
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-xl border border-slate-800/60 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            {selectedProject.link && (
              <div className='border-t border-slate-800/50 bg-slate-950/50 px-6 py-6 md:px-8'>
                <Link
                  href={selectedProject.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.01] hover:shadow-emerald-500/30'
                >
                  Visit Live Website ↗
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
