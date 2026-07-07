'use client';

import { EMAIL, SOCIAL_MENU } from '@/constant';
import cx from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { faqs } from '../data';

export const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id='contact'
      className='relative overflow-hidden border-slate-900 py-32 md:py-48'
    >
      {/* Shifting visual glow backgrounds */}
      <div className='pointer-events-none absolute -bottom-48 -left-48 size-[600px] rounded-full bg-emerald-500/[0.03] blur-[150px]' />
      <div className='pointer-events-none absolute -right-48 top-12 size-[500px] rounded-full bg-lime-500/[0.02] blur-[130px]' />

      <div className='relative mx-auto max-w-7xl px-4 md:px-6 lg:px-10'>
        <div className='grid items-start gap-12 md:grid-cols-[1.4fr_1fr]'>
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className='flex flex-col gap-3'>
              <SectionLabel>Questions</SectionLabel>
              <h2 className='mt-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-5xl'>
                Got any questions?
              </h2>
              <p className='mt-1 max-w-lg text-sm leading-relaxed text-slate-400'>
                Find answers to common inquiries about my work availability,
                typical stack, design collaboration, and setup.
              </p>
            </div>

            <div className='mt-10 space-y-4'>
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={item.question}
                    className={cx(
                      'group relative overflow-hidden rounded-2xl border bg-slate-950/40 backdrop-blur-md transition-all duration-300',
                      isOpen
                        ? 'border-emerald-500/30 bg-slate-900/10 shadow-lg shadow-emerald-500/5'
                        : 'border-slate-800/80 hover:border-slate-700/60 hover:bg-slate-900/10',
                    )}
                  >
                    {/* Highlight border line on active/expanded state */}
                    {isOpen && (
                      <div className='absolute bottom-0 left-0 top-0 w-[3.5px] rounded-l-2xl bg-gradient-to-b from-emerald-400 to-lime-400' />
                    )}

                    <button
                      type='button'
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className='flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-200'
                    >
                      <span
                        className={cx(
                          'text-sm font-semibold tracking-wide transition-colors duration-200',
                          isOpen
                            ? 'text-white'
                            : 'text-slate-300 group-hover:text-white',
                        )}
                      >
                        {item.question}
                      </span>

                      <div
                        className={cx(
                          'flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                          isOpen
                            ? 'rotate-180 border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                            : 'border-slate-800 bg-slate-950/60 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200',
                        )}
                      >
                        <svg
                          className='size-3.5 transition-transform duration-300'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2.5'
                            d={isOpen ? 'M18 12H6' : 'M12 6v12M6 12h12'}
                          />
                        </svg>
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <div className='border-t border-slate-900/60 px-5 pb-5 pt-4 text-xs font-normal leading-relaxed text-slate-400 sm:text-sm'>
                        {item.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            className='self-start md:sticky md:top-28'
          >
            <div className='relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/90 p-6 shadow-2xl backdrop-blur-xl md:p-8'>
              {/* Background animated overlay glow */}
              <div className='pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-lime-500/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100' />

              <div className='relative space-y-6'>
                {/* Availability Status Badge */}
                <div className='flex items-center justify-between'>
                  <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400'>
                    <span className='relative flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500'></span>
                    </span>
                    Available for projects
                  </div>
                  <div className='font-mono text-xs text-slate-500'>v3.0</div>
                </div>

                <div>
                  <h3 className='bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent'>
                    Let&apos;s work together
                  </h3>
                  <p className='mt-3 text-sm leading-relaxed text-slate-400'>
                    I&apos;m currently open to new opportunities. If you&apos;re
                    building something interesting and need a frontend
                    developer, I&apos;d love to hear from you.
                  </p>
                </div>

                {/* Actions (Email Primary CTA + Copy Button) */}
                <div className='flex flex-col gap-3 pt-2 xl:flex-row'>
                  <motion.button
                    type='button'
                    onClick={() => window.open(`mailto:${EMAIL}`, '_blank')}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30 hover:brightness-110'
                  >
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    Say hello
                  </motion.button>

                  <motion.button
                    type='button'
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className='flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-3.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-900/60'
                  >
                    <AnimatePresence mode='wait'>
                      {copiedEmail ? (
                        <motion.span
                          key='copied'
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className='flex items-center gap-1.5 text-emerald-400'
                        >
                          <svg
                            className='h-4 w-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                          Copied!
                        </motion.span>
                      ) : (
                        <motion.span
                          key='copy'
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className='flex items-center gap-1.5'
                        >
                          <svg
                            className='h-4 w-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                            />
                          </svg>
                          Copy email
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>

                {/* Social Hub Section */}
                <div className='border-t border-slate-800/80 pt-6'>
                  <div className='mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500'>
                    Connect with me
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    {SOCIAL_MENU.map((social) => {
                      const isLinkedIn =
                        social.key.toLowerCase() === 'linkedin';
                      return (
                        <a
                          key={social.key}
                          href={social.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/social flex items-center gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/30 px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/40 hover:text-emerald-400'
                        >
                          {isLinkedIn ? (
                            <svg
                              className='h-5 w-5 text-slate-400 transition-colors group-hover/social:text-emerald-400'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                            </svg>
                          ) : (
                            <svg
                              className='h-5 w-5 text-slate-400 transition-colors group-hover/social:text-emerald-400'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z'
                              />
                            </svg>
                          )}
                          <span className='text-xs font-semibold capitalize tracking-wider'>
                            {social.key}
                          </span>
                          <span className='ml-auto text-[10px] text-slate-500 transition-colors group-hover/social:text-emerald-400'>
                            ↗
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
