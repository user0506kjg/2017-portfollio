import { enProjects } from './projects/en';
import type { Content } from './types';

export const en: Content = {
  profile: {
    name: 'Ruan Victor Cabral De Lima',
    initial: 'R',
    given: 'Ruan Victor',
    family: 'Cabral De Lima',
    role: 'Senior AI & Python Software Engineer',
    roleFull: 'Senior AI & Python Software Engineer | AI Trainer & LLM Expert',
    tagline: 'AI Architecture, LLM Integration & Intelligent Systems',
    heroLead: 'AI Software',
    heroRest: 'Engineering for Production',
    heroBlurb:
      'I design and build production-ready AI applications, autonomous agents, and automation solutions using Python and modern AI technologies — from technical design through to deployment and optimisation.',
    summary:
      "I'm a Senior AI & Python Software Engineer specialising in AI architecture, LLM integration, and the development of intelligent software systems. I design and build production-ready AI applications, autonomous agents, and automation solutions using Python and modern AI technologies.",
    summaryCont:
      'My expertise includes LLM orchestration, RAG pipelines, API design, backend architecture, and integrating AI capabilities into existing business systems. I take a pragmatic, engineering-led approach to solving complex technical challenges, with a strong focus on system reliability, scalability, security, and maintainability. From technical design through to deployment and optimisation, I build robust AI solutions that deliver measurable business value.',
  },

  nav: { home: 'Home', about: 'About', expertise: 'Expertise', projects: 'Projects' },

  ui: {
    skipToContent: 'Skip to content',
    languageLabel: 'Language',
    homeAria: 'home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    availability: 'Available for Senior AI Engineering Work',
    viewWork: 'View Work',
    myBackground: 'My Background',
    allWork: 'All Work',
    fullBackground: 'Full background',
    exploreExpertise: 'Explore My Expertise',
    seeTheWork: 'See The Work',
    seeMyWork: 'See My Work',
    myExpertise: 'My Expertise',
    backHome: 'Back Home',
    current: 'Current',
    opensInNewTab: 'opens in a new tab',
    opensEmployerSite: "opens the employer's website in a new tab",
    footerExplore: 'Explore',
    footerMore: 'More',
    rightsReserved: 'All rights reserved.',
    nothingHereTitle: 'Nothing here yet',
    nothingHereBody:
      'No work in this category is published on this site yet. Check back, or take a look at the other categories.',

    homeAboutLead: 'About',
    homeAboutAccent: 'Me',
    homeApproachHeading: 'Engineering-led AI development',
    homeCoreStack: 'Core Stack',
    homeUniversity: 'University of Cambridge',
    homeDegrees: 'MPhil in Advanced Computer Science · BA in Computer Science',
    homeWorkLead: 'Selected',
    homeWorkAccent: 'Work',
    homeWorkSubtitle:
      'Case studies drawn from production systems I have designed and shipped across three engineering roles.',
    homeCtaLeadAccent: 'Build',
    homeCtaLeadRest: 'something intelligent',
    homeCtaBody:
      'Whether you need an LLM integrated into an existing product, an agent workflow to automate a multistep process, or a backend built to carry it — I can take it from technical design through to production.',
    homeWhyLead: 'Why Work',
    homeWhyAccent: 'With Me',
    homeWhySubtitle:
      'How I approach building AI systems that have to survive contact with production.',

    aboutEyebrow: 'About',
    aboutApproachLead: 'My',
    aboutApproachAccent: 'Approach',
    aboutPragmatic: 'Pragmatic Engineering',
    aboutSpecialise: 'What I Specialise In',
    aboutSpecialiseItems: [
      'LLM orchestration and integration into existing business systems',
      'Retrieval-augmented generation (RAG) pipelines and semantic search',
      'Autonomous agent workflows and process automation',
      'Backend architecture, API design, and data pipelines',
      'Evaluating and hardening model output for production use',
    ],
    aboutExperienceLead: 'Professional',
    aboutExperienceAccent: 'Experience',
    aboutExperienceSubtitle:
      'Nine years building AI-enabled applications, backend services, and system integrations.',
    aboutEducationAccent: 'Education',
    aboutCtaLead: 'Currently open to',
    aboutCtaAccent: 'new work',
    aboutCtaBody:
      'If you have an AI system to design, a backend to build, or a process worth automating, the work on this site is the best measure of how I would approach it.',

    expertiseLead: 'Technical',
    expertiseAccent: 'Expertise',
    expertiseSubtitle: 'Six areas I work across, from model integration down to the database.',
    processLead: 'How I',
    processAccent: 'Work',
    processSubtitle:
      'The delivery lifecycle I follow, from first conversation to ongoing maintenance.',
    expertiseCtaLead: 'This stack, applied to',
    expertiseCtaAccent: 'real systems',
    expertiseCtaBody:
      "Every capability above is drawn from production work, not side projects. Here's what that looked like in practice.",

    projectsLead: 'Selected',
    projectsAccent: 'Work',
    projectsSubtitle:
      'Case studies built from production systems and delivered client work. Each card notes where it comes from.',
    projectsCtaLead: 'Where this',
    projectsCtaAccent: 'came from',
    projectsCtaBody:
      'Nine years across three engineering roles, from AI integration work through to backend architecture. The full record is on the about page.',

    notFoundTitle: 'Page Not Found',
    notFoundHeading: 'Signal lost',
    notFoundBody:
      'That page does not exist, or it has moved. The work and the background are both still here.',
  },

  meta: {
    homeDescription:
      'Senior AI & Python Software Engineer specialising in AI architecture, LLM integration, and intelligent software systems.',
    aboutTitle: 'About',
    aboutDescription:
      'Background, professional experience, and education of a Senior AI & Python Software Engineer.',
    expertiseTitle: 'Expertise',
    expertiseDescription:
      'Technical expertise across AI & LLMs, agent orchestration, backend engineering, data, frontend, and engineering practice.',
    projectsTitle: 'Work',
    projectsDescription:
      'Case studies in RAG pipelines, AI agent workflows, LLM evaluation, backend services, e-commerce, CMS builds, and Android apps.',
  },

  stats: [
    { value: 9, suffix: '+', label: 'Years Experience' },
    { value: 3, suffix: '', label: 'Engineering Roles' },
    { value: 2, suffix: '', label: 'Cambridge Degrees' },
    { value: 40, suffix: '+', label: 'Technologies' },
  ],

  coreStack: [
    'Python',
    'OpenAI API',
    'LangChain',
    'LangGraph',
    'FastAPI',
    'Django',
    'PostgreSQL',
    'React',
    'Next.js',
    'TypeScript',
    'Redis',
    'MCP',
  ],

  skillGroups: [
    {
      icon: 'fas fa-brain',
      title: 'AI & LLMs',
      blurb:
        'Designing and integrating large language model capabilities into production software, with a focus on output reliability and consistency.',
      items: [
        'OpenAI API & prompt engineering',
        'RAG, embeddings & semantic search',
        'Function calling & structured outputs',
        'LLM evaluation & vector databases',
      ],
    },
    {
      icon: 'fas fa-diagram-project',
      title: 'AI Agents & Orchestration',
      blurb:
        'Building autonomous agent workflows that coordinate models, tools, and external services to automate multistep processes.',
      items: [
        'LangGraph & LlamaIndex',
        'Agent orchestration & tool integration',
        'Workflow automation',
        'Model Context Protocol (MCP)',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Engineering',
      blurb:
        'Architecting backend services and APIs that are reliable, secure, and maintainable under real production load.',
      items: [
        'Python, FastAPI & Django',
        'REST API design & integration',
        'Authentication & request validation',
        'Asynchronous processing & Node.js',
      ],
    },
    {
      icon: 'fas fa-database',
      title: 'Data & Storage',
      blurb:
        'Modelling, storing, and moving data — from relational schema design through to vector search and processing pipelines.',
      items: [
        'PostgreSQL, MySQL & MongoDB',
        'Redis & vector search',
        'Data pipelines & preprocessing',
        'Query optimisation',
      ],
    },
    {
      icon: 'fas fa-code',
      title: 'Frontend',
      blurb:
        'Building the interfaces that make AI systems usable, with a modern typed React toolchain.',
      items: [
        'React & Next.js',
        'TypeScript & JavaScript',
        'Component architecture',
        'API-driven UIs',
      ],
    },
    {
      icon: 'fas fa-screwdriver-wrench',
      title: 'Tools & Practice',
      blurb:
        'The engineering discipline around the code: testing, system design, and the tooling that keeps delivery predictable.',
      items: [
        'Git & automated testing',
        'API testing & system design',
        'SaaS development',
        'Airtable & Slack integrations',
      ],
    },
  ],

  experience: [
    {
      title: 'Senior AI Software Engineer',
      company: 'Together AI',
      period: '07/2023 — Present',
      location: 'Remote, London, United Kingdom',
      current: true,
      bullets: [
        'Designed and developed LLM-powered applications using OpenAI APIs, Python, and modern AI integration frameworks.',
        'Built AI agent workflows integrating external APIs, databases, and business tools to automate multistep processes.',
        'Implemented prompt engineering techniques, structured outputs, and function calling to improve response consistency and application reliability.',
        'Developed backend services and data-processing pipelines to support AI-driven applications and real-time integrations.',
        'Designed retrieval-augmented generation (RAG) workflows connecting language models to external knowledge sources for context-aware responses.',
        'Evaluated LLM outputs for relevance, accuracy, consistency, and instruction adherence, refining prompts and workflows based on test results.',
        'Contributed to system architecture, API design, error handling, and integration testing to improve maintainability and production readiness.',
        'Collaborated with stakeholders to translate business requirements into technical specifications and practical AI solutions.',
      ],
    },
    {
      title: 'Python Backend Developer',
      company: 'Poolside',
      period: '11/2020 — 06/2023',
      location: 'Remote, London, United Kingdom',
      current: false,
      bullets: [
        'Developed and maintained Python backend services and REST APIs supporting web applications and third-party integrations.',
        'Designed relational database schemas and optimised queries using PostgreSQL and MySQL to support reliable data access.',
        'Built data-processing pipelines to validate, transform, and organise information for application features and downstream services.',
        'Integrated external APIs and business systems, implementing authentication, request validation, error handling, and logging.',
        'Developed automated tests to validate API behaviour, identify regressions, and improve software reliability.',
        'Improved application performance and maintainability through code refactoring, database optimisation, and reusable backend components.',
        'Supported application deployment, troubleshooting, and ongoing maintenance across development and production environments.',
        'Worked with frontend developers and other stakeholders to define API contracts and deliver end-to-end application functionality.',
      ],
    },
    {
      title: 'AI Developer & Integration Engineer',
      company: 'Thinking Machines Lab',
      period: '02/2017 — 10/2020',
      location: 'Remote, London, United Kingdom',
      current: false,
      bullets: [
        'Developed AI-enabled application features using Python and language-model APIs, integrating model capabilities into existing software workflows.',
        'Built API integrations connecting web applications, databases, and third-party business tools.',
        'Designed automated workflows to streamline repetitive business processes and coordinate interactions between external services.',
        'Implemented Python and Django backend components, REST endpoints, and PostgreSQL database integrations.',
        'Developed and refined prompts and evaluated model responses against task requirements, documenting failure cases and identifying opportunities for improvement.',
        'Created test scenarios to assess response quality, output consistency, and integration behaviour across representative inputs.',
        'Implemented data validation, exception handling, and logging to improve integration reliability and simplify debugging.',
        'Coordinated requirements gathering, technical design, implementation, testing, deployment, and ongoing maintenance.',
        'Documented system architecture, API behaviour, and integration procedures to support maintainability and future development.',
      ],
    },
  ],

  education: [
    {
      degree: 'MPhil in Advanced Computer Science',
      school: 'University of Cambridge',
      period: '2019 — 2020',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: 'BA in Computer Science',
      school: 'University of Cambridge',
      period: '2016 — 2019',
      icon: 'fas fa-user-graduate',
    },
  ],

  differentiators: [
    {
      icon: 'fas fa-compass-drafting',
      title: 'Engineering-Led Approach',
      text: 'A pragmatic, engineering-led approach to complex technical challenges — design decisions are driven by constraints and evidence, not novelty.',
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'Reliability & Security',
      text: 'A strong focus on system reliability, scalability, security, and maintainability, with validation, exception handling, and logging built in from the start.',
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Full Delivery Lifecycle',
      text: 'From requirements gathering and technical design through implementation, testing, deployment, and ongoing maintenance.',
    },
    {
      icon: 'fas fa-brain-circuit',
      title: 'Depth in AI Integration',
      text: 'Specialised in LLM orchestration, RAG pipelines, and integrating AI capabilities into existing business systems rather than greenfield demos.',
    },
    {
      icon: 'fas fa-people-arrows',
      title: 'Stakeholder Translation',
      text: 'Experienced at translating business requirements into technical specifications and practical AI solutions people actually use.',
    },
    {
      icon: 'fas fa-book-open',
      title: 'Documented & Maintainable',
      text: 'System architecture, API behaviour, and integration procedures documented to support maintainability and future development.',
    },
  ],

  process: [
    {
      step: '01',
      icon: 'fas fa-comments',
      title: 'Discovery',
      text: 'Requirements gathering with stakeholders, translating business goals into technical specifications and a clear definition of done.',
    },
    {
      step: '02',
      icon: 'fas fa-sitemap',
      title: 'Technical Design',
      text: 'System architecture, API contracts, data modelling, and error-handling strategy agreed before implementation begins.',
    },
    {
      step: '03',
      icon: 'fas fa-code-branch',
      title: 'Build & Evaluate',
      text: 'Iterative implementation with automated tests, API testing, and structured evaluation of model outputs against task requirements.',
    },
    {
      step: '04',
      icon: 'fas fa-rocket',
      title: 'Deploy & Maintain',
      text: 'Deployment across environments, performance and query optimisation, documentation, troubleshooting, and ongoing maintenance.',
    },
  ],

  filters: {
    all: 'All',
    ai: 'AI & LLMs',
    backend: 'Backend',
    data: 'Data',
    ecommerce: 'E-commerce',
    wordpress: 'WordPress',
    android: 'Android',
    fullstack: 'Full-stack',
  },

  categories: {
    'AI & LLMs': 'AI & LLMs',
    'AI Agents': 'AI Agents',
    Backend: 'Backend',
    Data: 'Data',
    Integration: 'Integration',
    'E-commerce': 'E-commerce',
    WordPress: 'WordPress',
    'Static Site': 'Static Site',
    Webflow: 'Webflow',
    'Web App': 'Web App',
    'AI Platform': 'AI Platform',
    Web3: 'Web3',
    Agency: 'Agency',
    'Headless CMS': 'Headless CMS',
    Fintech: 'Fintech',
    'Next.js': 'Next.js',
    'SaaS Platform': 'SaaS Platform',
    Android: 'Android',
  },

  projects: enProjects,
};
