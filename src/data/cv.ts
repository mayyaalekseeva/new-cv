export const profile = {
  name: 'Maiia Alekseeva',
  location: 'Lisbon, Portugal',
  email: 'maaya.alexeeva@gmail.com',
  github: 'https://github.com/mayyaalekseeva',
  linkedin: 'https://www.linkedin.com/in/maiia-alekseeva',
  // Shows the "open to new roles" badge in the hero. Set to false to hide it.
  openToWork: true,
  cv: [
    { label: 'English', lang: 'en', href: '/Maiia_Alekseeva_Product_Engineer_CV.pdf' },
    { label: 'Русский', lang: 'ru', href: '/Maiia_Alekseeva_Product_Engineer_CV_RU.pdf' },
  ],
};

export const experience = [
  {
    company: 'Transneft Technologies',
    role: 'Frontend Developer',
    period: 'Sep 2024 — now',
    start: '2024-09',
    points: [
      'Helped establish reusable frontend patterns for an enterprise oil transportation reference-data platform and served as the main frontend engineer for a period; reviewed a junior colleague’s PRs and worked with backend engineers on evolving domain rules. Major functional areas passed customer acceptance',
      'Graph-binding workflows for network vertices and edges with reusable React Hook Form and Yup validation, dependent field resets, duplicate-relationship checks and domain-specific exceptions',
      'Source, target and difference views for reference-data versions, and reusable search and filtering across data-heavy tables',
      'A configurable rotation pivot for a Konva.js screen editor; contributed to a Kafka service-management UI in a small team',
    ],
    cases: [
      {
        title: 'Forms that know the network',
        problem:
          'Binding vertices and edges of the network graph involves dependent fields and validation rules that change with the type of unit, product and node.',
        did: 'Built the binding forms: dependent fields that reset correctly, conditional validation for internal and external nodes, duplicate-edge checks, and reusable Yup schemas, hooks and components.',
        result: 'Complex domain rules live in shared schemas and components instead of being repeated form by form.',
        stack: ['React Hook Form', 'Yup', 'Ant Design'],
      },
      {
        title: 'Filtering without a server',
        problem: 'Large tables came from APIs with different data shapes, and the backend had no server-side filtering.',
        did: 'Built reusable client-side search and filters (global, quick and per-column) that work across different table data.',
        result: 'Tables share one filtering toolkit instead of each screen getting its own.',
        stack: ['React', 'TypeScript', 'Ant Design'],
      },
      {
        title: 'What changed between versions',
        problem: 'Reference data is versioned, and users needed to see what changed between two versions.',
        did: 'Built the comparison interface (source, target, difference, empty states) and handled version-dependent queries and graph state with TanStack Query.',
        result: 'Source, target and the difference are visible in one view.',
        stack: ['TanStack Query', 'React'],
      },
      {
        title: 'Rotating around the right point',
        problem:
          'A graphical screen editor needed precise rotation of rectangles, triangles, lines and polylines around a point the user chooses.',
        did: 'Added a configurable rotation pivot using the Konva API directly: moving the pivot doesn’t shift the shape, moving the shape carries the pivot along, and hiding and showing it keeps its position.',
        result: 'Precise rotation for all four shape types, with geometry handled per type.',
        stack: ['Konva.js', 'MobX', 'TypeScript'],
      },
    ],
    stack: ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'Konva', 'MobX'],
  },
  {
    company: 'AMMC Group',
    role: 'Frontend Developer',
    period: 'Sep 2023 — Aug 2024',
    start: '2023-09',
    end: '2024-08',
    points: [
      'Owned the frontend of branching resident-card application journeys for different applicant types: conditional steps, validation and submission',
      'Drove the redesign of key public-facing screens, profiles and navigation; turned incomplete requirements into usable flows together with stakeholders',
      'Handled a selective production release with git cherry-pick and initiated team-wide commit-message conventions',
      'On a railway supplier marketplace: onboarding and document workflows, first Jest tests and Husky pre-commit checks',
    ],
    cases: [
      {
        title: 'A form that rebuilds its own steps',
        problem:
          'Resident card applications differ by who applies: citizen, student or schoolchild, with or without a representative, through different banks. Operators also file applications for residents.',
        did: 'Built the multi-step form around a step graph recalculated from applicant type, bank and representative. Split it into citizen, operator and shared steps, and normalized the data on submit into one FormData payload with files.',
        result: 'One form covers every applicant type and both citizen and operator flows.',
        stack: ['Next.js', 'Redux Saga', 'Ant Design'],
      },
      {
        title: 'A new look in four weeks',
        problem: 'The portal’s main screens needed new designs, on a codebase inherited from another agency and built on Ant Design.',
        did: 'Moved card pages, profile, news, menu, navigation, header and footer to the new designs: 42 commits, +6,089 / −3,783 lines, using SCSS modules and scoped Ant Design overrides.',
        result: 'Key user-facing screens redesigned without replacing the component library.',
        stack: ['Next.js', 'Ant Design', 'SCSS Modules'],
      },
      {
        title: 'A release picked commit by commit',
        problem: 'A production release had to include only some of the changes, but the team’s commit messages didn’t say what each commit did.',
        did: 'Went through the history and diffs by hand, assembled the release with git cherry-pick, and showed the manager what poor commit hygiene was costing the team.',
        result: 'The team adopted mandatory commit-message conventions.',
        stack: ['Git'],
      },
      {
        title: 'Supplier side of a B2B marketplace',
        problem: 'On a railway marketplace, suppliers needed to sign up, manage their company page and handle buyer claims.',
        did: 'Built supplier onboarding with role-based steps and validation, supplier pages (data, documents, dashboard, orders), and claims with chat and file uploads. Set up Jest and a pre-commit hook running lint and tests.',
        result: 'Supplier flows in place, and every commit runs lint and tests before it lands.',
        stack: ['Next.js', 'MUI', 'react-query', 'Jest'],
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Ant Design', 'Redux Saga', 'WebSockets'],
  },
  {
    company: 'Bars Group',
    role: 'Frontend Developer',
    period: 'Jan 2023 — Aug 2023',
    start: '2023-01',
    end: '2023-08',
    points: [
      'Fixed virtualized-table rendering issues across 12 screens of a public-sector program management platform by extending a shared Ant Design table wrapper and correcting row-state and scrolling behavior',
      'Permission-, workflow-state- and hierarchy-dependent editing rules; fixed document-row identity and unsaved-changes issues across parallel legacy modules',
    ],
    cases: [
      {
        title: 'One fix, twelve screens',
        problem: 'Rendering broke in a virtualized Ant Design table used on 12 screens.',
        did: 'Traced the defect to memoized table configuration in the shared table wrapper and added an option there to refresh it, instead of patching each screen.',
        result: 'All 12 screens fixed in one place.',
        stack: ['React', 'Ant Design'],
      },
      {
        title: 'Who can edit this cell?',
        problem:
          'In hierarchical tables of results and checkpoints, what a user may edit depends on their role, the row level, the year and locks set on the server.',
        did: 'Implemented the rules: parent vs. leaf rows, year-based locks, server lock flags and permission-gated overrides, applied across parallel card implementations.',
        result: 'Editing follows the business rules cell by cell, not all-or-nothing per table.',
        stack: ['React', 'GraphQL', 'Apollo'],
      },
      {
        title: 'Rows that refused to be edited',
        problem: 'Newly added rows in document cards could not be edited.',
        did: 'Found that the reducer confused server, copied and unsaved rows, fixed how rows are identified and applied the fix to the parallel card implementations.',
        result: 'New rows are editable in every card.',
        stack: ['React', 'TypeScript'],
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Ant Design', 'GraphQL'],
  },
  {
    company: 'Orion Innovation',
    role: 'Full-stack Developer',
    period: 'Mar 2021 — Jan 2023',
    start: '2021-03',
    end: '2023-01',
    points: [
      'Patient-facing React features for Natera (US healthcare diagnostics), plus Node.js service-layer logic, GraphQL resolvers and API endpoints',
      'Wistia video integration built from scratch: localized content, async player setup, playback events and a GraphQL order update',
      'Package-version validation in a multi-stage GitLab CI merge-request pipeline for a shared React component library',
      'Reusable React components shared across healthcare apps, with tests; contributed to email and SMS authentication',
    ],
    cases: [
      {
        title: 'Video inside the patient journey',
        problem: 'The patient portal needed educational videos in English and Spanish inside the order flow.',
        did: 'Built the Wistia integration from scratch: async embed and player setup, progress tracking, end and skip events, custom controls, localized video IDs, and the watched percentage passed to a GraphQL order mutation.',
        result: 'Patients watch localized videos without leaving the portal.',
        stack: ['React', 'Wistia API', 'GraphQL'],
      },
      {
        title: 'No release without a version bump',
        problem: 'Several apps depended on a shared component library, and its version sometimes wasn’t raised before merging.',
        did: 'Agreed on the approach with the architect, wrote a Bash script that requires the package.json version in a merge request to be higher than in main, not just different, and added it to the existing GitLab CI pipeline.',
        result: 'A merge request without a proper version bump fails the check.',
        stack: ['Bash', 'GitLab CI'],
      },
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'GitLab CI'],
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
    tag: 'independent product · live',
    description:
      'A trilingual (RU · EN · PT) publication about food and places that I build and run. Telegram posts flow into an admin inbox with duplicate detection, LLM-assisted drafting and translation run on Together API, places come in from Google Places, images live on Cloudflare R2, and Vercel Cron keeps everything in sync.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel', 'Cloudflare R2'],
  },
];

export const skills = [
  { group: 'Core', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  {
    group: 'Frontend',
    items: ['Ant Design', 'Material UI', 'React Hook Form', 'Yup', 'Redux', 'MobX', 'TanStack Query', 'Konva.js'],
  },
  { group: 'Backend & APIs', items: ['Node.js', 'GraphQL', 'REST', 'Prisma', 'PostgreSQL', 'WebSockets'] },
  {
    group: 'Testing & tooling',
    items: ['Jest', 'React Testing Library', 'Storybook', 'GitLab CI', 'Bash', 'Git', 'Vite', 'Nx', 'Lighthouse'],
  },
  { group: 'AI & integrations', items: ['LLM APIs', 'Together API', 'Cursor', 'Claude', 'Google Places API'] },
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
