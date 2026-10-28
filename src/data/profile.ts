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
   * CLIENT WORK
   *
   * Titles, descriptions and tech stacks below were written from the live
   * sites: page content for what each product does, and response headers,
   * meta tags and asset paths for the stack. Nothing is inferred from the
   * resume. Verify anything you'd rather state differently.
   *
   * Images are each site's own brand asset (see CREDITS.md) — these are not
   * stock photos and are not CC0.
   * -------------------------------------------------------------------- */
  {
    slug: 'theayurved',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'theayurved.jpg',
    alt: 'A person meditating in dense green forest at sunrise',
    title: 'The Ayurved — Ayurvedic Products Store',
    description:
      'Online storefront for a W-GMP and ISO certified Ayurvedic manufacturer in Haridwar, selling herbal supplements such as Hepato Care, Triphala and Ojas alongside Panchakarma therapy and consultation bookings, with shipping, payment and returns policies and RuPay checkout.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP 8.3'],
    source: 'theayurved.in',
    href: 'https://theayurved.in/',
  },
  {
    slug: 'onlymassage',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'onlymassage.jpg',
    alt: 'A massage therapist treating a client, under the Onlymassage logo',
    title: 'Onlymassage — Wellness Booking Marketplace',
    description:
      'Two-sided marketplace for booking massage, physiotherapy and spa treatments. Customers search by service and date across eight treatment categories; practitioners onboard through a separate professional portal. Multi-language, with accounts for both sides of the market.',
    tech: ['Next.js', 'React', 'Node.js', 'Nginx'],
    source: 'onlymassage.io',
    href: 'https://onlymassage.io',
  },
  {
    slug: 'secretspa',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'secretspa.jpg',
    alt: 'Manicured hands at a laptop beside a beauty portrait, in Secret Spa branding',
    title: 'Secret Spa — At-Home Beauty Booking',
    description:
      "London's at-home beauty and wellness booking platform. Customers book DBS-checked, trade-tested therapists for hair, nails, massage, facials, waxing, IV drips and aesthetics between 6am and 10pm, with therapist ratings, live tracking, loyalty points and gift cards.",
    tech: ['Astro', 'Vercel', 'Vercel Blob', 'Wistia'],
    source: 'secretspa.co.uk',
    href: 'https://secretspa.co.uk',
  },
  {
    // NOTE: a game-discovery PWA rather than a storefront — nothing is sold
    // through it. Grouped under E-commerce as supplied; change `tag` to
    // 'fullstack' if you'd rather it sat elsewhere.
    slug: 'dogsushi',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'dogsushi.jpg',
    alt: 'The DogSushi logo, a shiba inu styled as a sushi roll',
    title: 'DogSushi — Steam Game Discovery',
    description:
      'Installable progressive web app for finding PC games, surfacing Steam ratings, reviews and personalised recommendations. Built as a client-rendered single-page app with offline-capable install and a dark-first interface.',
    tech: ['React', 'Vite', 'PWA', 'Vercel'],
    source: 'dogsushi.app',
    href: 'https://dogsushi.app/',
  },

  /* ----------------------------------------------------------------------
   * WORDPRESS & CMS SITES
   *
   * Stacks below were read off each live site (generator meta tags, theme
   * paths, response headers), not assumed. Five of the eight run WordPress.
   * Three do not, and their chips say what they actually run on:
   *
   *   bertolla.com    static HTML + jQuery on Apache - no WordPress
   *   gulfmedtech.com redirects to klensvision.com, built in Webflow
   *   hivcarecascade  a static JSON-driven app, not a CMS
   *
   * They are grouped here as supplied. Change `tag` on any of them if you'd
   * rather they sat under a different filter.
   * -------------------------------------------------------------------- */
  {
    slug: 'vibrantpharma',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'wp-vibrantpharma.jpg',
    alt: 'Vibrant Pharma project card',
    title: 'Vibrant Pharma — Chemistry CRO Catalogue',
    description:
      'Site and product catalogue for a Canadian contract research organisation in Brantford, Ontario, offering custom synthesis, medicinal and process chemistry. Visitors search catalogue compounds by name, category, catalogue number, CAS or MDL number and order through a WooCommerce cart.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP 8.1'],
    source: 'vibrantpharma.com',
    href: 'https://vibrantpharma.com/',
  },
  {
    slug: 'goprogarage',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'wp-goprogarage.jpg',
    alt: 'Go Pro Garage Door Service project card',
    title: 'Go Pro Garage Door — Florida Service Site',
    description:
      'Lead-generation site for a Florida garage door repair and installation company, built to turn local search traffic into phone calls. Service pages, a project gallery and call-to-action blocks throughout, with Google Site Kit wired in for search and analytics reporting.',
    tech: ['WordPress', 'Elementor', 'OceanWP', 'PHP 8.2'],
    source: 'goprogaragedoorservice.com',
    href: 'https://goprogaragedoorservice.com',
  },
  {
    slug: 'urogyn',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'wp-urogyn.jpg',
    alt: 'Urogyn project card',
    title: 'Urogyn — Stockholm Specialist Clinic',
    description:
      'Swedish-language site for one of Stockholm’s leading urology, gynaecology and urotherapy practices. Presents treatment areas and clinician profiles, and routes patients to the right specialist, built on a lightweight Hello Elementor base for speed.',
    tech: ['WordPress', 'Elementor', 'Hello Elementor', 'Nginx'],
    source: 'urogyn.se',
    href: 'https://urogyn.se',
  },
  {
    slug: 'pulsesante',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'wp-pulsesante.jpg',
    alt: 'Pulse Sante project card',
    title: 'Pulse Santé — Healthcare SaaS Marketing Site',
    description:
      'French marketing site for an all-in-one management platform (PSDM) used by home healthcare providers and medical equipment suppliers. Product and feature pages lead to demo requests, on a bespoke theme rather than a page builder.',
    tech: ['WordPress', 'Custom Theme', 'Apache', 'PHP 8.3'],
    source: 'pulse-sante.fr',
    href: 'https://pulse-sante.fr',
  },
  {
    slug: 'aesthetika',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'wp-aesthetika.jpg',
    alt: 'Aesthetika Dental Studio project card',
    title: 'Aesthetika Dental Studio — Private Dental Practice',
    description:
      'Site for a private dental practice in Kingston upon Thames covering check-ups, hygiene, Invisalign and implants. Treatment pages carry social proof from 250+ Google reviews, with WP Rocket handling caching and asset optimisation on a media-heavy build.',
    tech: ['WordPress', 'Avada', 'WP Rocket', 'Nginx'],
    source: 'aesthetikadentalstudio.co.uk',
    href: 'https://aesthetikadentalstudio.co.uk',
  },
  {
    // Static HTML + jQuery on Apache — no CMS.
    slug: 'bertolla',
    category: 'Static Site',
    tag: 'wordpress',
    image: 'wp-bertolla.jpg',
    alt: 'Ivan Bertolla project card',
    title: 'Ivan Bertolla — Composer Portfolio',
    description:
      'Official site for an Australian composer, guitarist and producer whose production music scores major events. A lean, hand-built presence showcasing the catalogue and credits, with no CMS behind it.',
    tech: ['HTML', 'CSS', 'jQuery', 'Apache'],
    source: 'bertolla.com',
    href: 'https://bertolla.com/',
  },
  {
    // gulfmedtech.com redirects to klensvision.com; built in Webflow.
    slug: 'klens',
    category: 'Webflow',
    tag: 'wordpress',
    image: 'wp-klens.jpg',
    alt: 'Klens project card',
    title: 'Klens — Surgical Device Launch Site',
    description:
      'Product site for a single-use device, co-developed with Mayo Clinic, that cleans a laparoscope lens without withdrawing it from the patient. Frames the clinical problem with cited evidence and converts surgeons and health systems into enquiries.',
    tech: ['Webflow', 'Cloudflare', 'Responsive', 'CMS'],
    source: 'gulfmedtech.com',
    href: 'https://gulfmedtech.com',
  },
  {
    // Static JSON-driven research app, not a CMS.
    slug: 'cascade',
    category: 'Web App',
    tag: 'wordpress',
    image: 'wp-cascade.jpg',
    alt: 'CASCADE HIV Care Cascade Database project card',
    title: 'CASCADE — HIV Care Cascade Database',
    description:
      'Research database from McMaster University holding 349 clinical trials and 74,375 participants from 1995 to 2023. Trials are filterable by income level, population, care setting and intervention type, with interactive trend charts and CSV or JSON export.',
    tech: ['JavaScript', 'JSON API', 'Data Viz', 'CSV Export'],
    source: 'hivcarecascade.com',
    href: 'https://hivcarecascade.com',
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
