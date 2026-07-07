/* ─────────────────────────── Data ─────────────────────────── */

export const startYear = 2021;
export const currentYear = new Date().getFullYear();
export const yearsOfExperience = currentYear - startYear;

export const stats = [
  {
    label: 'Years Experience',
    value: yearsOfExperience,
    suffix: '+',
    icon: '◆',
  },
  { label: 'Projects Shipped', value: 10, suffix: '+', icon: '▲' },
  { label: 'Companies Helped', value: 5, suffix: '+', icon: '●' },
];

export const EXPERIENCE_ITEMS = [
  {
    id: 'agit',
    title: 'Frontend Team Leader',
    company: 'PT. Astra Graphia Information Technology (AGIT)',
    location: 'Indonesia · Full-time',
    period: 'Jan 2023 - Present',
    color: 'emerald',
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
    company: 'Virtual Spirit Technology Sdn. Bhd.',
    location: 'Remote',
    period: 'Nov 2022 - Sep 2024',
    color: 'lime',
    bullets: [
      'Developed and maintained core task management features on the VirtualSpace Platform.',
      'Optimized task list performance through better rendering and data handling.',
      'Implemented real-time task updates using AnyCable for seamless live collaboration.',
      'Contributed to form builder and storage modules for flexible dynamic forms.',
      'Helped refine the chat feature by fixing UI issues and polishing interactions.',
    ],
  },
  {
    id: 'gramedia',
    title: 'Frontend Developer',
    company: 'Kompas Gramedia',
    location: 'Indonesia',
    period: 'Jan 2023 - Jun 2023',
    color: 'emerald',
    bullets: [
      'Contributed to a Web Reader application with a responsive and intuitive user experience.',
      'Built and maintained reusable components for consistency and efficient development.',
      'Integrated frontend features with RESTful APIs for smooth communication with backend services.',
    ],
  },
  {
    id: 'carakde',
    title: 'Frontend Developer',
    company: 'PT Carakde Solusi Informatika',
    location: 'Indonesia',
    period: 'Mar 2021 - Jan 2022',
    color: 'lime',
    bullets: [
      'Developed and maintained multiple web projects like Pondok Vaksin and Praktek Dr. Bob.',
      'Integrated frontend with backend services using RESTful APIs for reliable data flow.',
      'Created reusable components to streamline development and keep the UI consistent.',
    ],
  },
  {
    id: 'hukum-digital',
    title: 'Frontend Developer (Intern)',
    company: 'PT Hukum Digital Indonesia',
    location: 'Indonesia · Internship',
    period: 'Jan 2021 - Mar 2021',
    color: 'emerald',
    bullets: [
      'Designed and developed the HukumDigital.com website from scratch.',
      'Translated UI/UX designs into high-quality ReactJS and TailwindCSS implementation.',
      'Collaborated with backend engineers to integrate RESTful APIs for dynamic content.',
    ],
  },
];

export const testimonials = [
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

export const faqs = [
  {
    question: 'What type of work are you open to?',
    answer:
      "I'm open to full-time roles, contract work, and selected freelance projects focused on frontend development with React and Next.js.",
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
