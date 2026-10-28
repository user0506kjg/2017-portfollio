/**
 * Single source of truth for all site content.
 * Everything here is derived from JEAN-LUC_PINAS_Resume.pdf.
 *
 * NOTE: No contact information from the resume is included anywhere in this
 * project (no email address, phone number, or LinkedIn URL). Items marked
 * TODO are intentional placeholders for you to fill in.
 */

export const profile = {
  name: 'Jean-Luc Pinas',
  initial: 'J',
  shortName: 'Jean-Luc',
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
};


/** Counters — every figure below is verifiable from the resume. */
export const stats = [
  { value: 9, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Engineering Roles' },
  { value: 2, suffix: '', label: 'Cambridge Degrees' },
  { value: 40, suffix: '+', label: 'Technologies' },
];

/** Technology chips shown in the About section. */
export const coreStack = [
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
];

export const skillGroups = [
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
    items: ['React & Next.js', 'TypeScript & JavaScript', 'Component architecture', 'API-driven UIs'],
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
];

/**
 * Case studies built from documented resume achievements.
 * Each `source` field names the role the work comes from.
 */
export const projects = [
  {
    slug: 'rag-pipelines',
    category: 'AI & LLMs',
    tag: 'ai',
    image: 'rag-pipelines.jpg',
    alt: 'Shelves packed tight with books, standing in for an external knowledge corpus',
    title: 'Retrieval-Augmented Generation Pipelines',
    description:
      'Designed RAG workflows connecting language models to external knowledge sources, so responses are grounded in real organisational context rather than model memory alone.',
    tech: ['LangChain', 'Embeddings', 'Vector DBs', 'Semantic Search'],
    source: 'Senior AI Software Engineer, Together AI',
  },
  {
    slug: 'agent-workflows',
    category: 'AI Agents',
    tag: 'ai',
    image: 'agent-workflows.jpg',
    alt: 'A humanoid service robot, standing in for an autonomous software agent',
    title: 'Autonomous AI Agent Workflows',
    description:
      'Built agent workflows that integrate external APIs, databases, and business tools to automate multistep processes end to end, replacing manual handoffs between systems.',
    tech: ['LangGraph', 'Function Calling', 'MCP', 'Python'],
    source: 'Senior AI Software Engineer, Together AI',
  },
  {
    slug: 'llm-evaluation',
    category: 'AI & LLMs',
    tag: 'ai',
    image: 'llm-evaluation.jpg',
    alt: 'A glowing line chart rising across a dark field of data bars',
    title: 'LLM Evaluation & Prompt Reliability',
    description:
      'Evaluated model outputs for relevance, accuracy, consistency, and instruction adherence, then refined prompts and workflows against those test results to make application behaviour predictable.',
    tech: ['Prompt Engineering', 'Structured Outputs', 'Test Harnesses', 'OpenAI API'],
    source: 'Senior AI Software Engineer, Together AI',
  },
  {
    slug: 'backend-services',
    category: 'Backend',
    tag: 'backend',
    image: 'backend-services.webp',
    alt: 'Rows of illuminated server racks in a data centre aisle',
    title: 'Production Backend Services & REST APIs',
    description:
      'Developed and maintained Python backend services and REST APIs supporting web applications and third-party integrations, including deployment, troubleshooting, and ongoing maintenance.',
    tech: ['Python', 'FastAPI', 'Django', 'REST'],
    source: 'Python Backend Developer, Poolside',
  },
  {
    slug: 'data-pipelines',
    category: 'Data',
    tag: 'data',
    image: 'data-pipelines.jpg',
    alt: 'An array of hard disk drives and their controller boards',
    title: 'Data Pipelines & Schema Design',
    description:
      'Designed relational schemas and optimised queries across PostgreSQL and MySQL, and built pipelines that validate, transform, and organise information for application features and downstream services.',
    tech: ['PostgreSQL', 'MySQL', 'Redis', 'Data Pipelines'],
    source: 'Python Backend Developer, Poolside',
  },
  {
    slug: 'system-integration',
    category: 'Integration',
    tag: 'backend',
    image: 'system-integration.jpg',
    alt: 'A constellation of connected nodes linked into a network',
    title: 'Business System & API Integration',
    description:
      'Integrated external APIs and business systems with authentication, request validation, error handling, and logging — plus automated workflows coordinating interactions between external services.',
    tech: ['REST APIs', 'Airtable', 'Slack', 'Auth'],
    source: 'AI Developer & Integration Engineer, Thinking Machines Lab',
  },

  /* ----------------------------------------------------------------------
   * E-COMMERCE — four empty slots, ready for your content.
   *
   * Fill in `title`, `description` and `tech` for each. Everything else is
   * already wired: the images exist in src/assets/projects and the cards
   * render under the "E-commerce" filter tab.
   *
   * `source` is optional — add it (e.g. a client or employer) if the work
   * was done in a role, or leave it out for standalone projects.
   *
   * To swap an image, drop a file into src/assets/projects and point
   * `image` at its filename, updating `alt` to describe it.
   * -------------------------------------------------------------------- */
  {
    slug: 'ecommerce-1',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'ecommerce-1.jpg',
    alt: 'A payment card beside a laptop showing an online store',
    title: 'TODO: Project name',
    description:
      'TODO: Two or three sentences on what you built, the problem it solved, and the outcome.',
    tech: ['TODO', 'TODO', 'TODO'],
  },
  {
    slug: 'ecommerce-2',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'ecommerce-2.jpg',
    alt: 'An "Open" sign hanging in a shop window',
    title: 'TODO: Project name',
    description:
      'TODO: Two or three sentences on what you built, the problem it solved, and the outcome.',
    tech: ['TODO', 'TODO', 'TODO'],
  },
  {
    slug: 'ecommerce-3',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'ecommerce-3.jpg',
    alt: 'Racks of clothing arranged in a retail store',
    title: 'TODO: Project name',
    description:
      'TODO: Two or three sentences on what you built, the problem it solved, and the outcome.',
    tech: ['TODO', 'TODO', 'TODO'],
  },
  {
    slug: 'ecommerce-4',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'ecommerce-4.jpg',
    alt: 'A shopper carrying paper shopping bags',
    title: 'TODO: Project name',
    description:
      'TODO: Two or three sentences on what you built, the problem it solved, and the outcome.',
    tech: ['TODO', 'TODO', 'TODO'],
  },
];

/**
 * Filter tabs on /projects. A tab matches projects whose `tag` equals its `key`.
 *
 * NOTE: ecommerce, wordpress, android and fullstack currently match no entries
 * in `projects` below — nothing in the resume covers that work. The tabs render
 * and are clickable; until projects carry those tags they show an empty state.
 * To populate one, add a project with the matching `tag`.
 */
export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI & LLMs' },
  { key: 'backend', label: 'Backend' },
  { key: 'data', label: 'Data' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'wordpress', label: 'WordPress' },
  { key: 'android', label: 'Android' },
  { key: 'fullstack', label: 'Full-stack' },
];

export const experience = [
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
      'Designed relational database schemas and optimized queries using PostgreSQL and MySQL to support reliable data access.',
      'Built data-processing pipelines to validate, transform, and organize information for application features and downstream services.',
      'Integrated external APIs and business systems, implementing authentication, request validation, error handling, and logging.',
      'Developed automated tests to validate API behavior, identify regressions, and improve software reliability.',
      'Improved application performance and maintainability through code refactoring, database optimization, and reusable backend components.',
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
      'Created test scenarios to assess response quality, output consistency, and integration behavior across representative inputs.',
      'Implemented data validation, exception handling, and logging to improve integration reliability and simplify debugging.',
      'Coordinated requirements gathering, technical design, implementation, testing, deployment, and ongoing maintenance.',
      'Documented system architecture, API behavior, and integration procedures to support maintainability and future development.',
    ],
  },
];

export const education = [
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
];

/** "Why work with me" — drawn from the engineering values stated in the resume profile. */
export const differentiators = [
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
];

/** How I work — the delivery lifecycle described across all three roles. */
export const process = [
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
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projects', href: '/projects' },
];
