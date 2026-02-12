export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  highlights: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string[];
  highlights: string[];
  technologies: string[];
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string[];
  highlights: string[];
}

export interface PersonalDetails {
  name: string;
  role: string;
  email: string;
  phone: string;
  socials: { label: string; link: string }[];
}

export const PERSONAL_DETAILS: PersonalDetails = {
  name: 'Poh Hong Chin',
  role: 'Software Engineer',
  email: 'poh5796@hotmail.com',
  phone: '+60 17-679 2579',
  socials: [{ label: 'LinkedIn', link: 'https://linkedin.com/in/hcpoh' }]
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'AirAsia',
    role: 'Software Engineer',
    period: 'Jul 2024 - Current',
    technologies: ['Next.js', 'NestJS', 'Google Cloud Run', 'Docker', 'GitHub Actions', 'React', 'Firestore', 'Zustand'],
    description: [
      'Architected the "Navtech Middleware" on Google Cloud Run, utilizing Server-Sent Events (SSE) to replace legacy polling mechanisms.',
      'Led the full-stack re-platforming of the "Allstars" Booking System (Legacy .NET to NestJS/Next.js), leading a team of 6.',
      'Implemented React Suspense patterns with SWR for efficient data fetching and conducted Artillery Load Testing to certify system stability under high concurrency.',
      'Mentored 2 junior engineers on API design patterns, Express.js best practices, and Cloud Scheduler error handling strategies, fostering a culture of code quality.',
      'Engineered the backend infrastructure for "Cross Border Bus" (KUL-SG), utilizing Google Cloud Tasks to orchestrate the synchronization of Flight Inventory REST APIs with Bus Manifests, ensuring real-time seat availability across distinct booking engines.',
      'Modernized the "Boarding Purchase" checkout module (Baggage/Seats) using Next.js, implementing Zustand for high-performance state management of Booking & SSR (Special Service Request) data.',
      'Integrated Feature Flags into the checkout flow, enabling granular control over regional product availability (e.g., RedCarpet Thailand) without requiring code rollbacks.',
      'Digitized the Global Cabin Crew Assessment process (RedHire) using React/Firestore, replacing manual workflows across SEA. Standardized hiring data for tens of thousands of candidates, significantly reducing operational overhead.'
    ],
    highlights: ['Reduced data retrieval latency by 80% (10s to <2s)', 'Re-platformed legacy .NET system to NestJS/Next.js', 'Certified system stability under high concurrency', 'Mentored 2 junior engineers', 'Zero downtime deployments']
  },
  {
    company: 'Synorex Sdn Bhd',
    role: 'Fullstack Developer',
    period: 'Aug 2023 - Mar 2024',
    technologies: ['Laravel', 'SQL', 'PHP', 'CodeIgniter', 'jQuery', 'Chart.js'],
    description: [
      'Optimized hierarchical data retrieval for an MLM-structured user base by implementing Recursive Common Table Expressions (CTEs) in SQL, reducing report generation time for complex downline trees.',
      'Maintained the financial transaction integrity of a 3-module ecosystem (User/Merchant/Admin), implementing ACID-compliant transaction blocks (Laravel) to handle refunds and commission distributions securely.',
      'Reduced API response time by 70% (10s to <3s) by refactoring legacy endpoints to use Server-Side Pagination (DataTables), minimizing network payload by 99% for datasets exceeding 10,000 records.',
      'Deprecated error-prone FTP deployments by championing the adoption of Git version control and establishing a CI/CD pipeline, eliminating production downtime caused by manual file overwrites.',
      'Engineered a custom ERP (PHP/CodeIgniter, jQuery) for a mining client (400+ staff), implementing in-memory data processing algorithms for Fleet and Payroll management on a legacy, non-relational schema.',
      'Developed interactive dashboards using Chartjs.',
      'Redesigned the Org Chart architecture using recursive algorithms for dynamic tree traversal and decoupled hierarchy dependencies (Person vs. Role), preventing data corruption during staff promotions.'
    ],
    highlights: ['70% reduction in API response time (10s to <3s)', '99% reduction in network payload', 'Handled datasets exceeding 10,000 records', 'Supported 400+ staff', 'Eliminated production downtime']
  },
  {
    company: 'SWS IT Solution Sdn Bhd',
    role: 'Frontend Developer',
    period: 'Sep 2022 - Mar 2023',
    technologies: ['Ionic', 'Angular', 'RxJS', 'CSS Animations'],
    description: [
      'Architected a hybrid PWA using Ionic/Angular, utilizing RxJS Observables to orchestrate complex state flows and REST API integration within a multi-step obituary wizard by implementing CSS animations for template rendering.',
      'Engineered a secure JWT authentication flow using Angular HttpInterceptors to manage automatic token rotation (Silent Refresh) and session persistence, eliminating security risks associated with long-lived access tokens.',
      'Implemented multi-provider payment integration (iPay88, PayPal), designing a resilient client-side polling strategy to synchronize UI state with backend asynchronous webhooks, ensuring transactional consistency.',
      'Led the technical feasibility analysis and prototyping of AI-driven media features (Deep Nostalgia), validating Product-Market Fit for animated portrait generation as a core value proposition.'
    ],
    highlights: ['Validated Product-Market Fit for AI features', 'Implemented multi-provider payment integration', 'Orchestrated complex state flows with RxJS']
  }
];

export const PROJECTS: Project[] = [
  {
    name: 'Bazaar4u',
    technologies: ['Next.js', 'PostgreSQL', 'PostGIS', 'Docker', 'GitHub Actions', 'Google Cloud Run'],
    description: [
      'Architected a B2B procurement PWA (Next.js/PostgreSQL) with a custom relevance ranking algorithm, fusing Geospatial filtering (PostGIS), Trigram Fuzzy Matching, and "Trending" metadata into a single optimized SQL query.',
      'Designed a flexible relational schema to handle Dynamic Pricing Variants for bulk purchasing, supporting complex tiered pricing logic for commercial-grade inventory.',
      'Established a Containerized CI/CD pipeline using Docker, GitHub Actions, and Google Cloud Run, achieving fully automated zero-downtime deployments from design to production.'
    ],
    highlights: ['Zero-downtime deployments', 'Optimized SQL query for relevance ranking', 'Complex tiered pricing logic']
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'University Malaysia Sarawak',
    degree: 'Bachelor of Computer Science with Honours (Software Engineering)',
    period: 'Sep 2018 - Aug 2022',
    description: ['Achieved First Class Honour with CGPA of 3.75 (6 times Dean’s List award)'],
    highlights: ['CGPA 3.75', 'First Class Honour', '6 times Dean’s List award']
  }
];

export const SKILLS = ['GCP', 'React Native', 'Python', 'Docker', 'Framer Motion', 'Selenium', 'Payload CMS', 'ITIL', 'Business Ethics', 'Time Management'];
