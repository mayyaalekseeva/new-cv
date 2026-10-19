export const profile = {
  name: 'Maiia Alekseeva',
  location: 'Lisbon, Portugal',
  email: 'maaya.alexeeva@gmail.com',
  github: 'https://github.com/mayyaalekseeva',
  linkedin: 'https://www.linkedin.com/in/maiia-alekseeva',
  // Shows the "open to new roles" badge in the hero. Set to false to hide it.
  openToWork: true,
  cv: [
    { label: 'English', lang: 'en', href: '/Maiia_Alekseeva_CV.pdf' },
    { label: 'Русский', lang: 'ru', href: '/Maiia_Alekseeva_CV_RU.pdf' },
  ],
};

export const experience = [
  {
    company: 'Transneft Technologies',
    role: 'Frontend Developer',
    period: 'Sep 2024 — now',
    start: '2024-09',
    points: [
      'Graph-based workflows for an oil transportation network system: vertices, edges and dynamic forms with conditional validation and business rules',
      'Reference data version comparison UI and advanced tables with custom sorting, filtering and editing',
      'Shipped an internal Kafka services management UI in 3 weeks on top of the company UI kit',
      'Added a rotation-point feature to a Konva-based visual form editor',
    ],
    stack: ['React', 'TypeScript', 'MobX', 'Konva', 'Ant Design'],
  },
  {
    company: 'AMMC Group',
    role: 'Frontend Developer',
    period: 'Sep 2023 — Aug 2024',
    start: '2023-09',
    end: '2024-08',
    points: [
      'Cut bundle size by 40% on a regional resident card portal, guided by Lighthouse audits',
      'Real-time status notifications over WebSockets and a multi-step application form with government services integration',
      'Built a marketplace from scratch and raised its test coverage from 0% to 70%',
      'Mentored two junior developers and halved their onboarding time',
    ],
    stack: ['Next.js', 'TypeScript', 'Redux Saga', 'SWR', 'WebSockets'],
  },
  {
    company: 'Bars Group',
    role: 'Frontend Developer',
    period: 'Jan 2023 — Aug 2023',
    start: '2023-01',
    end: '2023-08',
    points: [
      'Highly interactive editable tables for the Ministry of Finance budget process app',
      'Refactored legacy code and championed smaller pull requests, cutting review time by 20%',
    ],
    stack: ['Next.js', 'TypeScript', 'Ant Design'],
  },
  {
    company: 'Orion Innovation',
    role: 'Frontend Developer',
    period: 'Mar 2021 — Jan 2023',
    start: '2021-03',
    end: '2023-01',
    points: [
      'Full-stack work on a patient platform for Natera (US healthcare): patient portal, MFA by email and SMS, new GraphQL resolvers and endpoints',
      'Shared React component library in Storybook with automated versioning and releases',
      'Raised test coverage from 40% to 70% and cut API response times by 15%',
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Apollo', 'Storybook'],
  },
];

export const stats = [
  { value: '5+', label: 'years building for the web' },
  { value: '10+', label: 'years in specialty coffee' },
  { value: '2', label: 'coffee businesses launched' },
];

// Life before tech
export const coffee = {
  roles: [
    { title: 'Coffee consultant', detail: 'menus, equipment and launch plans for other cafés' },
    { title: 'Head barista', detail: 'ran the bar, trained and led the team' },
    { title: 'Brand barista', detail: 'represented a coffee brand at events and with partners' },
    { title: 'Café openings', detail: 'opened new coffee shops from an empty room to the first cup' },
    { title: 'Championships', detail: 'competed in the AeroPress Championship twice and in the Cup Tasters Championship' },
    { title: 'Championship judge', detail: 'judged regional coffee championships' },
  ],
  ventures: [
    {
      name: 'Temp Coffee',
      role: 'founder',
      url: 'https://tempcoffee.ru',
      description:
        'My own specialty coffee shop in Nizhny Novgorod: a roastery you can watch through the glass, all-day brunches, and a B2B side with wholesale coffee, turnkey cafés and barista training. Still open today.',
      funFact: 'some of the baristas I hired in 2018 still work there',
    },
    {
      name: 'Strelka Coffee',
      role: 'launched',
      url: 'https://strelkacoffee.ru',
      description:
        'A coffee roastery in Nizhny Novgorod, roasting since 2019. Today it supplies more than 4,000 cafés and restaurants across Russia.',
    },
  ],
};

export const projects = [
  {
    name: 'Table Fable',
    url: 'https://table-fable.com',
    tag: 'side project · live',
    description:
      'A trilingual (RU · EN · PT) publication about food and places, with recipes, reviews, events and articles. Telegram posts flow into an admin inbox, AI helps draft and translate, and a daily cron keeps everything in sync.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel', 'Cloudflare R2'],
  },
];

export const skills = [
  { group: 'Core', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['Ant Design', 'Material UI', 'Konva', 'MobX', 'Redux', 'Redux Saga', 'SWR'] },
  { group: 'Backend & APIs', items: ['Node.js', 'GraphQL', 'REST', 'Prisma', 'PostgreSQL', 'WebSockets'] },
  { group: 'Testing & tooling', items: ['Jest', 'React Testing Library', 'Storybook', 'Vite', 'Nx', 'Lighthouse', 'Git'] },
  { group: 'AI-assisted', items: ['Cursor', 'Claude', 'LLM APIs'] },
];

// Non-technical skills, shown apart from the tech stack in the toolbox
export const beyondCode = {
  group: 'beyond code',
  note: 'from running a coffee business',
  items: ['team management', 'systems thinking', 'process design'],
};

export const education = [
  { place: 'HSE University', detail: 'BSc, Science, Technology and Innovation Management and Policy', years: '2008 — 2012' },
  { place: 'Orion Innovation Learning Center', detail: 'Frontend development', years: '2020 — 2021' },
  { place: 'GeekBrains', detail: 'Frontend development', years: '2020 — 2021' },
];

export const languages = [
  { name: 'Russian', level: 'native' },
  { name: 'English', level: 'B2' },
  { name: 'Portuguese', level: 'A1, learning' },
];
