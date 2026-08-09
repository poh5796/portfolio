export const profile = {
  name: 'Poh Hong Chin',
  title: 'Software Engineer',
  tagline:
    'Building shared platforms, cloud systems, and product experiences that scale under real traffic.',
  phone: '+60 17 679 2579',
  email: 'poh5796@hotmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/hcpoh' },
    { label: 'GitHub', href: 'https://github.com/poh5796' },
    { label: 'Website', href: 'https://hcpoh.space' },
    {
      label: 'Steam',
      href: 'https://steamcommunity.com/profiles/76561198038488815/',
    },
    {
      label: 'Spotify',
      href: 'https://open.spotify.com/user/poh5796',
    },
  ],
}

export const steam = {
  persona: 'hush',
  url: 'https://steamcommunity.com/profiles/76561198038488815/',
  gamesUrl: 'https://steamcommunity.com/profiles/76561198038488815/games/?tab=all',
  steamId: '76561198038488815',
  level: 11,
  gamesOwned: 28,
  memberSince: 'February 22, 2011',
  avatar:
    'https://avatars.fastly.steamstatic.com/509d9f149f37889f697bcbdf38a1354e487029d7_full.jpg',
  games: [
    {
      name: 'Dota 2',
      appId: 570,
      hours: '4,983',
      lastPlayed: '8 Aug',
      accent: 'var(--coral)',
    },
    {
      name: "Sid Meier's Civilization VI",
      appId: 289070,
      hours: '152',
      lastPlayed: '2 Mar',
      accent: 'var(--cyan)',
    },
    {
      name: 'Hollow Knight',
      appId: 367520,
      hours: '31',
      lastPlayed: '2 Mar',
      accent: 'var(--lime)',
    },
  ],
}

export const spotify = {
  persona: 'hcpoh',
  url: 'https://open.spotify.com/user/poh5796',
  avatar: 'https://i.scdn.co/image/ab6775700000ee855d931f667a26b59892eb3ab6',
  genres: [
    { label: 'Mandarin', tone: 'coral' },
    { label: 'J/K Pop', tone: 'pink' },
    { label: 'English', tone: 'cyan' },
    { label: 'OST', tone: 'lime' },
    { label: 'Michael Jackson', tone: 'yellow' },
  ],
  highlightPlaylist: {
    name: 'Your All-Time Top Songs',
    id: '37i9dQZF1CKMFBxUbxRIAg',
    note: 'Spotify wrap of most-played tracks',
  },
  playlists: [
    {
      name: 'English',
      id: '6KqdjOqFfTk9tn8DijM5yJ',
      tracks: 1095,
      accent: 'var(--cyan)',
    },
    {
      name: 'Mandarin',
      id: '2mvrx8Ccd4D83NxN1cDUzj',
      tracks: 417,
      accent: 'var(--coral)',
    },
    {
      name: 'JK Pop',
      id: '01F5Hs3TFx9lFedeM7giHd',
      tracks: 187,
      accent: 'var(--pink)',
    },
    {
      name: 'OST',
      id: '54j4AznstSPVoYTNVoqlit',
      tracks: 91,
      accent: 'var(--lime)',
    },
    {
      name: 'mj',
      id: '0DVKyrGn77HdCctrUaXRfC',
      tracks: 58,
      accent: 'var(--yellow)',
    },
  ],
}

export const experience = [
  {
    company: '**AirAsia**',
    role: 'Software Engineer',
    period: 'Jul 2024 – Current',
    accent: 'var(--yellow)',
    points: [
      'Architected core Shared Platform security libraries across 4 engineering pillars for **Project Mirage** ($300M PSS transformation), designing a zero-latency in-memory authorization system using typed Enums to eliminate cross-service network overhead on multi-million daily API requests.',
      'Re-architected APAC cabin crew recruitment platform (RedHire)—cutting event staffing by **50%** and scaling to **1,000+ candidates/day**—by engineering GCP Vertex AI resume screening pipelines and deprecating Typesense for native Firestore.',
      'Architected NavTech middleware while utilizing Server-Sent Events (SSE) and NavBlue SOAP APIs with GCP Cloud Run; slashed API latency by **95% (10s to <500ms)** and eliminated timeouts on 3,000+ row datasets while mentoring 2 junior engineers.',
      'Architected backend ingestion for Cross-Border Intermodal Transport (Flight+Bus to SG via JHB), orchestrating Cloud Scheduler and Cloud Tasks queues to sync constrained MOVE inventory APIs (daily & T-2h pre-departure) for driver app passenger onboarding.',
      'Engineered **PULSE**, a Kubernetes licensing micro-daemon orchestrating 2-minute heartbeat validations and external server synchronization to enforce active software licensing across all application modules.',
      'Spearheaded Next.js/NestJS modernization for 24,000+ users, delivering the mobile-responsive UI milestone **1 month ahead of schedule** while building a reusable schema-driven component library.',
      'Accelerated QA validation across complex Project Mirage Central Management Console (CMC) forms by developing a schema-driven test automation tool using Zod to synthesize valid mock data payloads.',
    ],
  },
  {
    company: '**Synorex**',
    role: 'Fullstack Developer',
    period: 'Aug 2023 – Mar 2024',
    accent: 'var(--cyan)',
    points: [
      'Slashed legacy API latency from timeout to **sub-300ms page loads** for datasets exceeding 10,000 records by engineering server-side offset pagination and DataTables integration.',
      'Eliminated production downtime caused by manual file overwrites by replacing legacy FTP releases with Git-based CI/CD pipelines.',
    ],
  },
  {
    company: '**SWS IT Solution**',
    role: 'Frontend Developer',
    period: 'Sep 2022 – Mar 2023',
    accent: 'var(--coral)',
    points: [
      'Eliminated orphaned payment states across multi-provider gateways (iPay88, PayPal) by designing asynchronous webhook reconciliation paired with client-side status polling.',
      'Eliminated session hijacking risks and forced user re-logins by engineering silent JWT token rotation and session persistence handlers via Angular HttpInterceptors.',
    ],
  },
]

export const projects = [
  {
    name: '**Bazaar4U**',
    period: 'Nov 2025',
    accent: 'var(--lime)',
    description:
      'Architected a B2B procurement PWA featuring a custom multi-attribute search query combining PostGIS geospatial filtering, Trigram Fuzzy Matching, and trending metadata into a single optimized SQL statement.',
  },
  {
    name: '**Earnback**',
    period: 'Aug 2025',
    accent: 'var(--pink)',
    description:
      'Accelerated MLM financial report generation by **60%+** using Recursive SQL CTEs while ensuring ACID transaction integrity across User, Merchant, and Admin modules for refunds and commission distributions.',
  },
]

export const certifications = [
  {
    name: '**Google Cloud Certified – Professional Cloud Architect**',
    year: '2026',
  },
  {
    name: '**ITIL 4 Foundation – IT Service Management**',
    year: '2025',
  },
]

export const education = {
  school: '**University Malaysia Sarawak**',
  period: 'Sept 2018 – Aug 2022',
  degree:
    'Bachelor of Computer Science (Software Engineering) – **First Class Honours (CGPA: 3.75)**',
}

export const technical = [
  {
    label: 'Languages',
    items: 'TypeScript, JavaScript (ES6+), SQL, Python, PHP',
  },
  {
    label: 'Cloud & Architecture',
    items:
      'Google Cloud Platform (Cloud Run, Cloud Tasks, Vertex AI), Kubernetes, Docker, Microservices, CI/CD',
  },
  {
    label: 'Backend, Security & Ops',
    items:
      'NestJS, Node.js, Express.js, Laravel, PostgreSQL, MySQL, RBAC/RLAC, ITIL 4',
  },
  {
    label: 'Frontend & Testing',
    items:
      'Next.js, React Native (Expo), Vue.js, HTML5/CSS3, Tailwind CSS, Zod, Git, Artillery, Selenium',
  },
]
