'use client';

import NavbarV2 from '@/components/NavbarV2';
import { EMAIL, SKILLS, SOCIAL_MENU, WORKS } from '@/constant';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Shipped', value: 10, suffix: '+' },
  { label: 'Companies Helped', value: 5, suffix: '+' },
];

// const tools = [
//   'Next.js',
//   'React',
//   'TypeScript',
//   'Tailwind CSS',
//   'Zustand',
//   'MobX',
//   'React Query',
//   'GraphQL',
//   'REST API',
//   'Git & GitHub',
//   'Figma',
//   'Vercel',
// ];

const testimonials = [
  {
    quote:
      'Enal consistently delivers clean, maintainable code and collaborates very well with the team.',
    name: 'Senior Engineer',
    role: 'Virtual Space (Testimonial placeholder)',
  },
  {
    quote:
      'He quickly understands product requirements and translates them into intuitive user interfaces.',
    name: 'Product Manager',
    role: 'AGIT (Testimonial placeholder)',
  },
  {
    quote:
      'Working with Enal has been a smooth experience from planning to deployment.',
    name: 'Founder',
    role: 'Startup Client (Testimonial placeholder)',
  },
];

const faqs = [
  {
    question: 'What type of work are you open to?',
    answer:
      'I’m open to full-time roles, contract work, and selected freelance projects focused on frontend development with React and Next.js.',
  },
  {
    question: 'What is your typical tech stack?',
    answer:
      'My go-to stack is Next.js, React, TypeScript, Tailwind CSS, and a state management library like Zustand or MobX, depending on the project needs.',
  },
  {
    question: 'Do you work with design tools?',
    answer:
      'Yes. I am comfortable working with Figma handoff and collaborate closely with designers to keep the implementation faithful to the design.',
  },
  {
    question: 'Are you available for remote work?',
    answer:
      'Yes, I am fully set up for remote collaboration across time zones using modern tools for communication and project management.',
  },
];

const EXPERIENCE_ITEMS = [
  {
    id: 'agit',
    title: 'Frontend Team Leader',
    companyLine:
      'PT. Astra Graphia Information Technology (AGIT) · Indonesia · Full-time',
    period: 'Jan 2023 - Present',
    bullets: [
      'Led breaking down new feature requests into detailed tickets with clear functional and technical requirements.',
      'Managed and tracked team tasks to keep the development workflow organized and efficient.',
      'Reviewed frontend code to maintain coding standards and architectural consistency.',
      'Built and enhanced features using ReactJS, MobX, GraphQL and customized Ant Design components.',
      'Developed reusable components to improve development efficiency and UI consistency.',
    ],
  },
  {
    id: 'virtual-spirit',
    title: 'Frontend Developer – VirtualSpace Platform',
    companyLine: 'Virtual Spirit Technology Sdn. Bhd. · Remote',
    period: 'Nov 2022 - Sep 2024',
    bullets: [
      'Developed and maintained core task management features on the VirtualSpace Platform, ensuring scalability and reliable workflows.',
      'Optimized task list performance through better rendering and data handling for a smoother user experience.',
      'Implemented real-time task updates using AnyCable for seamless live collaboration.',
      'Contributed to form builder and storage modules for flexible dynamic forms and content management.',
      'Helped refine the chat feature by fixing UI issues and polishing the interaction details.',
    ],
  },
  {
    id: 'gramedia',
    title: 'Frontend Developer',
    companyLine: 'Kompas Gramedia · Indonesia',
    period: 'Jan 2023 - Jun 2023',
    bullets: [
      'Contributed to a Web Reader application with a responsive and intuitive user experience.',
      'Built and maintained reusable components for consistency and efficient development.',
      'Integrated frontend features with RESTful APIs for smooth communication with backend services.',
    ],
  },
  {
    id: 'carakde',
    title: 'Frontend Developer',
    companyLine: 'PT Carakde Solusi Informatika · Indonesia',
    period: 'Mar 2021 - Jan 2022',
    bullets: [
      'Developed and maintained multiple web projects like Pondok Vaksin and Praktek Dr. Bob with user-friendly interfaces.',
      'Integrated frontend with backend services using RESTful APIs for reliable data flow.',
      'Created reusable components to streamline development and keep the UI consistent.',
    ],
  },
  {
    id: 'hukum-digital',
    title: 'Frontend Developer (Intern)',
    companyLine: 'PT Hukum Digital Indonesia · Indonesia · Internship',
    period: 'Jan 2021 - Mar 2021',
    bullets: [
      'Designed and developed the HukumDigital.com website from scratch with a clean, user-friendly interface.',
      'Translated UI/UX designs into high-quality ReactJS and TailwindCSS implementation.',
      'Collaborated with backend engineers to integrate RESTful APIs for dynamic content and smooth data flow.',
    ],
  },
];

const AnimatedNumber = ({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frameId: number;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

export default function PortfolioV2Page() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <div className='min-h-screen bg-slate-900 text-slate-100'>
      <NavbarV2 />

      <motion.main
        id='hero'
        className='mx-auto flex max-w-5xl flex-col gap-32 px-4 pb-24 pt-28 md:px-6 lg:px-10'
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Hero */}
        <motion.section
          className='pt-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className='flex flex-col gap-8 rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800/60 md:p-8'>
            {/* Hero */}
            <div className='max-w-2xl'>
              <div className='mb-6 inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-3 py-2 text-[11px] text-slate-200 ring-1 ring-slate-700/70'>
                <span className='relative flex size-6 items-center justify-center overflow-hidden rounded-full bg-slate-800'>
                  <Image
                    src='/me.JPG'
                    alt='Photo of Enal Marzuki'
                    fill
                    className='object-cover'
                    sizes='24px'
                  />
                </span>
                <span className='size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.4)]' />
                <span className='uppercase tracking-[0.22em] text-slate-400'>
                  Available for freelance
                </span>
              </div>

              <h1 className='mb-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[40px]'>
                <span className='block text-slate-50'>
                  <span className='text-lime-400'>Enal Marzuki</span> is an
                  experienced
                </span>
                <span className='block text-slate-50'>
                  frontend developer who creates
                </span>
                <span className='block text-slate-400'>
                  high‑performing &amp; beautiful web apps.
                </span>
              </h1>

              <p className='mb-7 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base'>
                I craft fast, modern interfaces with React and Next.js, focusing
                on performance, maintainability, and smooth user journeys from
                first impression to final interaction.
              </p>

              <div className='flex flex-wrap items-center gap-3'>
                <a
                  href='/cv-marzuki-compressed.pdf'
                  download='cv-marzuki-compressed.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center rounded-full bg-lime-400 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-md shadow-lime-400/30 transition hover:bg-lime-300'
                >
                  Download CV
                  <span className='ml-2 text-base leading-none'>↗</span>
                </a>
                <button
                  type='button'
                  onClick={() => {
                    const el = document.getElementById('skills');
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const offset = rect.top + window.scrollY - 96;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }}
                  className='inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-slate-700/70 transition hover:bg-slate-800 hover:ring-slate-500'
                >
                  Scroll Down
                  <span className='flex size-5 items-center justify-center rounded-full bg-slate-800 text-xs'>
                    +
                  </span>
                </button>
              </div>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className='rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800/70'
            >
              <p className='text-xs font-medium uppercase tracking-[0.22em] text-slate-400'>
                Summary
              </p>
              <p className='mt-3 text-sm leading-relaxed text-slate-200'>
                With more than 3 years of experience, I&apos;ve helped teams
                ship production-ready interfaces for project management,
                automotive, and healthcare products, collaborating closely with
                designers, backend engineers, and stakeholders.
              </p>
              <p className='mt-3 text-xs leading-relaxed text-slate-400'>
                I care about small details, from motion and micro-interactions
                to clean, testable code that scales with the product.
              </p>
            </motion.div>

            {/* Stats */}
            <div className='grid gap-3 text-xs text-slate-300 sm:grid-cols-3'>
              {stats.map((item) => (
                <div
                  key={item.label}
                  className='rounded-xl bg-slate-900/80 p-3 ring-1 ring-slate-800/70'
                >
                  <p className='text-lg font-semibold text-lime-400'>
                    <AnimatedNumber value={item.value} suffix={item.suffix} />
                  </p>
                  <p className='mt-1 text-[11px] uppercase tracking-wide text-slate-400'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          className='mt-12 grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className='rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800/60 md:p-7'>
            <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
              About
            </p>
            <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
              A bit about me
            </h2>
            <p className='mt-3 text-sm leading-relaxed text-slate-300 md:text-base'>
              Hello, my name is Marzuki. I&apos;m from Indonesia and have been
              working as a Frontend Developer for more than 3 years. As someone
              who works in technology, I like to continuously learn new things
              that support my work.
            </p>
            <p className='mt-3 text-sm leading-relaxed text-slate-300 md:text-base'>
              I use React and Next.js as my daily tools to build web
              applications and have been involved in several projects such as
              project management platforms, automotive systems, and more.
            </p>
          </div>
          <div className='grid gap-3 rounded-3xl bg-slate-900/60 p-5 text-sm text-slate-200 ring-1 ring-slate-800/60 sm:grid-cols-2'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>
                Focus
              </p>
              <p className='mt-2'>
                Building performant, accessible, and visually polished frontends
                with clean architecture.
              </p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>
                Currently
              </p>
              <p className='mt-2'>
                Exploring new challenges where I can collaborate with strong
                product and engineering teams.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          className='mt-16 rounded-3xl bg-slate-900/60 p-6 md:p-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <header className='mb-6'>
            <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
              Work History
            </p>
            <div className='mt-2 flex flex-wrap items-baseline gap-2'>
              <h2 className='text-2xl font-semibold tracking-tight'>
                Where I&apos;ve worked
              </h2>
              {/* <a
                href='/cv-marzuki-compressed.pdf'
                download='cv-marzuki-compressed.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-medium text-emerald-300 underline decoration-emerald-500/60 underline-offset-4 hover:text-emerald-200'
              >
                Download my resume
              </a> */}
            </div>
            <p className='mt-2 max-w-2xl text-sm leading-relaxed text-slate-300'>
              Below is a summary of my professional experience across different
              companies and roles.
            </p>
          </header>

          <div className='relative mt-6 space-y-10 border-l border-slate-800/80'>
            {(showAllExperiences
              ? EXPERIENCE_ITEMS
              : EXPERIENCE_ITEMS.slice(
                  0,
                  EXPERIENCE_ITEMS.length > 2 ? 2 : EXPERIENCE_ITEMS.length,
                )
            ).map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: showAllExperiences ? index * 0.05 : index * 0.03,
                  ease: 'easeOut',
                }}
                className='relative pl-6'
              >
                <span className='absolute -left-[6px] top-1 flex size-3 items-center justify-center rounded-full border border-slate-900 bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.25)]' />
                <h3 className='text-sm font-semibold text-slate-50'>
                  {exp.title}
                </h3>
                <p className='text-xs font-medium text-slate-300'>
                  {exp.companyLine}
                </p>
                <p className='mt-1 text-xs text-slate-400'>{exp.period}</p>
                <ul className='mt-3 space-y-1.5 text-sm leading-relaxed text-slate-300'>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className='mt-6 flex justify-center'>
            <motion.button
              type='button'
              onClick={() => setShowAllExperiences((prev) => !prev)}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className='rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800'
            >
              {showAllExperiences ? 'Show Less' : 'Show All'}
            </motion.button>
          </div>
        </motion.section>

        {/* Skills & Tools */}
        <motion.section
          id='skills'
          className=''
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className='w-full rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800/60 md:p-8'>
            <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
              Skills
            </p>
            <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
              My skills &amp; services
            </h2>
            <p className='mt-3 text-sm leading-relaxed text-slate-300 md:text-base'>
              I specialise in building performant, accessible interfaces with
              modern tooling. I’m comfortable owning features end-to-end, from
              collaborating on requirements to deploying and monitoring in
              production.
            </p>

            <div className='mt-5 grid grid-cols-2 gap-3 text-sm text-slate-200 sm:grid-cols-3'>
              {SKILLS.map((skill) => (
                <div
                  key={skill}
                  className='rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
              Tools
            </p>
            <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
              Cutting-edge tools I use
            </h2>
            <p className='mt-3 text-sm leading-relaxed text-slate-300 md:text-base'>
              From design handoff to deployment, I use a stack that balances
              developer experience with long-term maintainability.
            </p>

            <div className='mt-5 grid grid-cols-2 gap-3 text-xs text-slate-200 sm:grid-cols-3'>
              {tools.map((tool) => (
                <div
                  key={tool}
                  className='rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2'
                >
                  {tool}
                </div>
              ))}
            </div>
          </div> */}
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          id='projects'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className='flex items-center justify-between gap-4'>
            <div>
              <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
                Projects
              </p>
              <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
                Featured work
              </h2>
            </div>
            <span className='rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300'>
              Selected projects
            </span>
          </div>

          <div className='mt-7 grid gap-6 md:grid-cols-3'>
            {WORKS.map((work) => (
              <article
                key={work.id}
                className='group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-5 shadow-xl shadow-black/40 transition hover:border-emerald-500/60 hover:bg-slate-900/80'
              >
                <div>
                  <p className='text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400'>
                    {work.link ? 'Live project' : 'Internal project'}
                  </p>
                  <h3 className='mt-2 text-base font-semibold text-slate-50 group-hover:text-emerald-300'>
                    {work.title}
                  </h3>
                  <p className='mt-2 line-clamp-4 text-xs leading-relaxed text-slate-300'>
                    {work.description}
                  </p>
                </div>

                <div className='mt-4 flex flex-wrap items-center gap-2'>
                  {work.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {work.link && (
                  <Link
                    href={work.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-4 inline-flex items-center text-xs font-medium text-emerald-300 transition group-hover:text-emerald-200'
                  >
                    Visit project
                    <span className='ml-1 text-base leading-none'>↗</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          id='testimonials'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
            Testimonials
          </p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
            What collaborators say
          </h2>
          <p className='mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base'>
            The quotes below are placeholders to represent the type of feedback
            I&apos;ve received from teammates and clients in past projects.
          </p>

          <div className='mt-6 grid gap-5 md:grid-cols-3'>
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className='rounded-2xl border border-slate-800 bg-slate-950/40 p-5'
              >
                <p className='text-sm leading-relaxed text-slate-200'>
                  “{t.quote}”
                </p>
                <figcaption className='mt-4 text-xs text-slate-400'>
                  <span className='block font-medium text-slate-100'>
                    {t.name}
                  </span>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        {/* FAQ & Contact */}
        <motion.section
          id='contact'
          className='grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-400'>
              Questions
            </p>
            <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
              Got any questions?
            </h2>
            <div className='mt-5 space-y-4'>
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className='group rounded-xl border border-slate-800 bg-slate-950/40 p-4'
                >
                  <summary className='cursor-pointer text-sm font-medium text-slate-100'>
                    {item.question}
                  </summary>
                  <p className='mt-2 text-xs leading-relaxed text-slate-300 md:text-sm'>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className='flex flex-col justify-between rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 p-6'>
            <div>
              <p className='text-xs font-medium uppercase tracking-[0.25em] text-emerald-300'>
                Contact
              </p>
              <h2 className='mt-3 text-2xl font-semibold tracking-tight'>
                Let&apos;s work together
              </h2>
              <p className='mt-3 text-sm leading-relaxed text-emerald-50/90 md:text-base'>
                I&apos;m currently open to new opportunities. If you&apos;re
                building something interesting and need a frontend developer,
                I&apos;d love to hear from you.
              </p>
            </div>

            <div className='mt-5 space-y-3 text-sm text-emerald-50/90'>
              <button
                type='button'
                onClick={() => window.open(`mailto:${EMAIL}`, '_blank')}
                className='flex w-full items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300'
              >
                Say hello
              </button>

              <div className='flex flex-wrap items-center gap-3 text-xs text-emerald-100/70'>
                {SOCIAL_MENU.map((social) => (
                  <a
                    key={social.key}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-slate-950/40 px-3 py-1.5 hover:border-emerald-300 hover:bg-slate-900/80'
                  >
                    <span className='capitalize'>{social.key}</span>
                    <span className='text-base leading-none'>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className='border-t border-slate-800 pt-6 text-xs text-slate-500'>
          <div className='flex flex-col items-center justify-between gap-3 md:flex-row'>
            <p>
              © {new Date().getFullYear()} Enal Marzuki. All rights reserved.
            </p>
            <p className='text-[11px]'>
              Designed &amp; built with React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}
