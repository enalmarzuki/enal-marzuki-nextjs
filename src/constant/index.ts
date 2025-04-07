const EMAIL = 'enalmarzuki07@gmail.com';

const NAVBAR_MENU = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'about',
    label: 'About',
  },
  {
    key: 'experience',
    label: 'Experience',
  },
  {
    key: 'works',
    label: 'Works',
  },
  {
    key: 'contact',
    label: 'Contact',
  },
];

const SOCIAL_MENU = [
  {
    key: 'linkedin',
    link: 'https://www.linkedin.com/in/marzuki-r',
    src: '/ic-linkedin.svg',
    description: 'Visit my LinkedIn Profile',
  },
  {
    key: 'github',
    link: 'https://github.com/enalmarzuki',
    src: '/ic-github.svg',
    description: 'Visit my Github Profile',
  },
];

const SKILLS = [
  'NextJS',
  'React',
  'Typescript',
  'TailwindCSS',
  'Ant Design',
  'Zustand',
  'Mobx',
  'Restful API',
  'Graphql',
];

const COMPANY = {
  AGIT: 'AGIT',
  VIRTUAL_SPIRIT: 'Virtual Spirit',
  KOMPAS_GRAMEDIA: 'Kompas Gramedia',
  CARAKDE: 'Carakde',
  HUKUM_DIGITAL: 'Hukum Digital',
};

const EXPERIENCES = [
  COMPANY.AGIT,
  COMPANY.VIRTUAL_SPIRIT,
  COMPANY.KOMPAS_GRAMEDIA,
  COMPANY.CARAKDE,
  COMPANY.HUKUM_DIGITAL,
];

const VIRTUAL_SPACE_PROJECT_SCREENSHOTS = [
  '/projects/virtualspace/vs-1.png',
  '/projects/virtualspace/vs-2.png',
  '/projects/virtualspace/vs-3.png',
  '/projects/virtualspace/vs-4.png',
  '/projects/virtualspace/vs-5.png',
];

const CARAKDE_PROJECT_SCREENSHOTS = [
  '/projects/carakde/carakde-1.png',
  '/projects/carakde/carakde-2.png',
  '/projects/carakde/carakde-3.png',
  '/projects/carakde/carakde-4.png',
  '/projects/carakde/carakde-5.png',
];

const AGIT_PROJECT_SCREENSHOTS = [
  '/projects/agit/agit-1.png',
  '/projects/agit/agit-2.png',
];

const WORKS = [
  {
    id: 1,
    title: 'Sistem Terintegrasi Astra Motor (STAR)',
    link: null,
    screenshots: AGIT_PROJECT_SCREENSHOTS,
    description:
      'Collaborated in refining feature requests into detailed tickets, managed team tasks for smoother workflows, and conducted code reviews to uphold coding standards. Built and enhanced application features using ReactJS, MobX, and GraphQL, while customizing Ant Design components and developing reusable UI elements to ensure consistency and efficiency.',
    techStack: ['React', 'Ant Design', 'Mobx', 'GraphQL'],
  },
  {
    id: 2,
    title: 'Virtual Space',
    link: 'https://virtualspace.ai/',
    screenshots: VIRTUAL_SPACE_PROJECT_SCREENSHOTS,
    description:
      'Contributed to several modules of the VirtualSpace Platform, including task management, chat, form builder, project management, and storage module. Optimizing task management features and supporting the development and maintenance of others module.',
    techStack: [
      'React',
      'Next',
      'Tailwind Css',
      'Zustand',
      'React Query',
      'Pubnub',
      'Anycable',
    ],
  },
  {
    id: 3,
    title: 'Pondok Vaksin',
    link: null,
    screenshots: CARAKDE_PROJECT_SCREENSHOTS,
    description:
      'Worked on multiple web projects, including Pondok Vaksin and Praktek Dr. Bob, focusing on building intuitive user interfaces, integrating RESTful APIs, and developing reusable components to ensure consistent and efficient frontend development.',
    techStack: [
      'React',
      'Tailwind Css',
      'Redux',
      'React Hook Form',
      'Google Maps API',
    ],
  },
];

export { EMAIL, NAVBAR_MENU, SOCIAL_MENU, SKILLS, COMPANY, EXPERIENCES, WORKS };
