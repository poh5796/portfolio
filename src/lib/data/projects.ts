export interface Reflection {
  mistakes: string[];
  improvements: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  outcomes: string[];
  reflections?: Reflection;
}

export interface ProjectDetail {
  slug: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  companyUrl?: string; // Optional
  projects: ProjectItem[];
}

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: 'airasia',
    company: 'AirAsia',
    role: 'Software Engineer',
    period: 'Jul 2024 - Current',
    summary: 'Building high-performance backend systems and modernizing legacy applications for the aviation industry.',
    projects: [
      {
        name: 'Navtech Middleware',
        description: 'Architected a middleware on Google Cloud Run using Server-Sent Events (SSE) to replace legacy polling mechanisms for flight data.',
        techStack: ['Google Cloud Run', 'Server-Sent Events', 'Node.js'],
        outcomes: ['Reduced data retrieval latency by 80% (10s to <2s)', 'Efficiently handled large datasets (>3,000 rows)'],
        reflections: {
          mistakes: ['Initially underestimated the complexity of handling connection drops with SSE in a serverless environment.'],
          improvements: ['Implemented robust reconnection logic and state reconciliation to ensure data consistency.']
        }
      },
      {
        name: 'Allstars Booking System Re-platforming',
        description: 'Led the full-stack re-platforming of the internal booking system from Legacy .NET to NestJS/Next.js.',
        techStack: ['NestJS', 'Next.js', 'React Suspense', 'SWR'],
        outcomes: ['Modernized the tech stack for better maintainability', 'Certified system stability under high concurrency with Artillery Load Testing'],
        reflections: {
          mistakes: [],
          improvements: ['Could have adopted a monorepo structure earlier to share types between frontend and backend more easily.']
        }
      },
      {
        name: 'Cross Border Bus Backend',
        description: 'Engineered the backend infrastructure for synchronizing Flight Inventory REST APIs with Bus Manifests using Google Cloud Tasks.',
        techStack: ['Google Cloud Tasks', 'REST APIs', 'Node.js'],
        outcomes: ['Ensured real-time seat availability across distinct booking engines', 'Automated synchronization process']
      },
      {
        name: 'Boarding Purchase Module',
        description: 'Modernized the checkout module for Baggage and Seats using Next.js and Zustand.',
        techStack: ['Next.js', 'Zustand', 'Feature Flags'],
        outcomes: ['High-performance state management', 'Granular control over regional product availability via Feature Flags']
      },
      {
        name: 'RedHire (Cabin Crew Assessment)',
        description: 'Digitized the Global Cabin Crew Assessment process using React and Firestore.',
        techStack: ['React', 'Firestore'],
        outcomes: ['Standardized hiring data for tens of thousands of candidates', 'Significantly reduced operational overhead']
      }
    ]
  },
  {
    slug: 'synorex',
    company: 'Synorex Sdn Bhd',
    role: 'Fullstack Developer',
    period: 'Aug 2023 - Mar 2024',
    summary: 'Developed and optimized full-stack solutions for various clients, focusing on data integrity and performance.',
    projects: [
      {
        name: 'MLM Hierarchical Data Optimization',
        description: 'Optimized retrieval for an MLM-structured user base using Recursive Common Table Expressions (CTEs) in SQL.',
        techStack: ['SQL', 'Recursive CTEs'],
        outcomes: ['Reduced report generation time for complex downline trees'],
        reflections: {
          mistakes: ['Relied too heavily on application-level recursion initially.'],
          improvements: ['Moved logic to the database layer (CTEs) for massive performance gains.']
        }
      },
      {
        name: 'Financial Transaction System',
        description: 'Maintained financial transaction integrity for a 3-module ecosystem (User/Merchant/Admin) using ACID-compliant transaction blocks.',
        techStack: ['Laravel', 'SQL', 'ACID Transactions'],
        outcomes: ['Secure handling of refunds and commission distributions']
      },
      {
        name: 'API Performance Optimization',
        description: 'Refactored legacy endpoints to use Server-Side Pagination (DataTables).',
        techStack: ['PHP', 'DataTables'],
        outcomes: ['Reduced API response time by 70% (10s to <3s)', 'Minimized network payload by 99% for large datasets']
      },
      {
        name: 'Deployment Pipeline Modernization',
        description: 'Deprecated FTP deployments by establishing a CI/CD pipeline with Git.',
        techStack: ['Git', 'CI/CD'],
        outcomes: ['Eliminated production downtime from manual errors']
      },
      {
        name: 'Custom ERP for Mining Client',
        description: 'Engineered a custom ERP for Fleet and Payroll management on a legacy, non-relational schema.',
        techStack: ['PHP', 'CodeIgniter', 'jQuery', 'Chart.js'],
        outcomes: ['Implemented in-memory data processing algorithms', 'Developed interactive dashboards']
      }
    ]
  },
  {
    slug: 'sws-it',
    company: 'SWS IT Solution Sdn Bhd',
    role: 'Frontend Developer',
    period: 'Sep 2022 - Mar 2023',
    summary: 'Specialized in frontend development for hybrid PWAs and complex UI state management.',
    projects: [
      {
        name: 'Obituary Wizard PWA',
        description: 'Architected a hybrid PWA using Ionic/Angular with complex state flows.',
        techStack: ['Ionic', 'Angular', 'RxJS', 'CSS Animations'],
        outcomes: ['Orchestrated complex state flows with RxJS Observables', 'Implemented CSS animations for template rendering'],
        reflections: {
          mistakes: ['Over-complicated some RxJS streams making them hard to debug.'],
          improvements: ['Simplified streams and added better logging/error handling.']
        }
      },
      {
        name: 'Secure JWT Auth Flow',
        description: 'Engineered a secure authentication flow with automatic token rotation (Silent Refresh).',
        techStack: ['Angular', 'JWT', 'HttpInterceptors'],
        outcomes: ['Eliminated security risks of long-lived access tokens', 'Ensured session persistence']
      },
      {
        name: 'Resilient Payment Integration',
        description: 'Implemented multi-provider payment integration (iPay88, PayPal) with client-side polling.',
        techStack: ['iPay88', 'PayPal', 'Polling Strategy'],
        outcomes: ['Ensured transactional consistency via webhook synchronization']
      },
      {
        name: 'AI-Driven Media Features',
        description: 'Prototyped AI-driven media features (Deep Nostalgia) for animated portrait generation.',
        techStack: ['AI', 'Prototyping'],
        outcomes: ['Validated Product-Market Fit']
      }
    ]
  },
  {
    slug: 'bazaar4u',
    company: 'Bazaar4u',
    role: 'Key Project',
    period: 'Project',
    summary: 'A B2B procurement PWA with advanced search and pricing logic.',
    projects: [
      {
        name: 'B2B Procurement PWA',
        description: 'Architected a B2B procurement PWA with custom relevance ranking and dynamic pricing.',
        techStack: ['Next.js', 'PostgreSQL', 'PostGIS', 'Trigram Matching'],
        outcomes: ['Optimized SQL query for relevance ranking (Geospatial + Fuzzy Matching + Trending)', 'Supported complex tiered pricing logic']
      },
      {
        name: 'Containerized CI/CD',
        description: 'Established a fully automated zero-downtime deployment pipeline.',
        techStack: ['Docker', 'GitHub Actions', 'Google Cloud Run'],
        outcomes: ['Zero-downtime deployments from design to production']
      }
    ]
  }
];
