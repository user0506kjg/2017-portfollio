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
   *
   * The three blocks below record the batch each project arrived in, which is
   * why the order looks the way it does. They are NOT the filter tabs: `tag`
   * decides that, and it is set from what each site actually is, so the
   * `category` badge on a card and the tab it appears under always agree.
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
    // Also supplied in the Full-stack list, but it belongs here: every project
    // sits under exactly one filter, and the storefront is the better fit.
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
   * Three do not, so they are tagged `fullstack` rather than `wordpress`:
   *
   *   bertolla.com    static HTML + jQuery on Apache - no WordPress
   *   gulfmedtech.com redirects to klensvision.com, built in Webflow
   *   hivcarecascade  a static JSON-driven app, not a CMS
   * -------------------------------------------------------------------- */
  {
    slug: 'vibrantpharma',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'wp-vibrantpharma.jpg',
    alt: 'Laboratory glassware on a bench in a synthesis lab',
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
    alt: 'The interior of a residential garage door and its track mechanism',
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
    alt: 'The glass entrance of the Urogyn clinic in Stockholm',
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
    alt: 'The Pulse Santé software interface showing a patient record',
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
    alt: 'Two dentists in front of the Aesthetika Dental Studio signage',
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
    tag: 'fullstack',
    image: 'wp-bertolla.jpg',
    alt: 'Cover art for the Epic Battle orchestral trailer album by Ivan Bertolla',
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
    tag: 'fullstack',
    image: 'wp-klens.jpg',
    alt: 'A gloved hand holding a laparoscope during keyhole surgery',
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
    tag: 'fullstack',
    image: 'wp-cascade.jpg',
    alt: 'The CASCADE HIV care cascade database wordmark',
    title: 'CASCADE — HIV Care Cascade Database',
    description:
      'Research database from McMaster University holding 349 clinical trials and 74,375 participants from 1995 to 2023. Trials are filterable by income level, population, care setting and intervention type, with interactive trend charts and CSV or JSON export.',
    tech: ['JavaScript', 'JSON API', 'Data Viz', 'CSV Export'],
    source: 'hivcarecascade.com',
    href: 'https://hivcarecascade.com',
  },

  /* ----------------------------------------------------------------------
   * FULL-STACK BUILDS
   *
   * Same method as the sections above: titles and descriptions written from
   * each live site, stacks read off generator meta tags, asset paths and
   * response headers.
   *
   * These arrived as one Full-stack list, but ten of them turned out to be
   * something else once read, so they are tagged for what they are: eight
   * WordPress builds, two storefronts and four AI products. The rest stay
   * `fullstack`.
   *
   * Two of these are currently serving an empty response, so no imagery
   * could be taken from them and their cards carry a name panel instead —
   * see the notes on each and CREDITS.md.
   * -------------------------------------------------------------------- */
  {
    slug: 'jimeng',
    category: 'AI Platform',
    tag: 'ai',
    image: 'fs-jimeng.jpg',
    alt: 'The Jimeng AI brand mark over a generated portrait',
    title: 'Jimeng AI — Generative Image & Video Studio',
    description:
      'Chinese-language creative platform generating images and video from a prompt or a reference frame. Covers a short-drama studio, a multi-layer canvas with inpainting, outpainting and cutout, first-to-last frame control over motion, and credit-based tiers gating access to each model generation.',
    tech: ['React', 'SSR', 'Tengine', 'CDN'],
    source: 'jimeng.jianying.com',
    href: 'https://jimeng.jianying.com',
  },
  {
    slug: 'lialive',
    category: 'AI Agents',
    tag: 'ai',
    image: 'fs-lialive.jpg',
    alt: 'The LIA wordmark in gradient lettering on black',
    title: 'LIA — Conversational AI Voice Agent',
    description:
      'Voice-first agent handling sales, support, search and booking across web, mobile, WhatsApp, Instagram and in-store. Runs transactions end to end against live availability, negotiates and upsells, switches language mid-conversation, and hands over to a human with full context when it needs to.',
    tech: ['Next.js', 'React', 'Voice AI', 'Omnichannel'],
    source: 'lialive.ai',
    href: 'https://lialive.ai',
  },
  {
    slug: 'platformz',
    category: 'AI Agents',
    tag: 'ai',
    image: 'fs-platformz.jpg',
    alt: 'The Platformz banner reading Command Everything, Blueprint and Build Anything',
    title: 'Platformz — AI Business Blueprinting',
    description:
      'Platbot turns an idea or an operational problem into a costed delivery plan — requirements, scope, homepage concept, topology, timeline and estimated investment — issued as a blueprint PDF. Paths cover marketplaces, retail launches, international sales, AI agents and workflow automation.',
    tech: ['Next.js', 'React', 'LLM Agents', 'Cloudflare'],
    source: 'platformz.us',
    href: 'https://platformz.us/',
  },
  {
    slug: 'moonlitdev',
    category: 'Web3',
    tag: 'fullstack',
    image: 'fs-moonlit.jpg',
    alt: 'The MoonLit earnings panel showing a yield curve rising to $5.46k',
    title: 'MoonLit — DeFi Staking & Yield Dashboard',
    description:
      'Staking front-end quoting a 19.9% APY, with a wallet-connected dashboard for active stake, daily points and season rewards. Charts historical smart-contract APY, handles deposit and withdrawal, and runs a referral programme on top of the $MOON token incentives.',
    tech: ['React Router', 'Vite', 'Chart.js', 'Netlify'],
    source: 'moonlitdev.netlify.app',
    href: 'https://moonlitdev.netlify.app/',
  },
  {
    slug: 'dialedweb',
    category: 'Agency',
    tag: 'fullstack',
    image: 'fs-dialedweb.jpg',
    alt: 'A laptop on a plinth showing a Dialedweb client site for a drinks brand',
    title: 'Dialedweb — Web & Motion Studio',
    description:
      'Site for a studio selling premium web and motion work, where the portfolio is the argument: ten client builds play as inline video previews rather than screenshots, backed by named testimonials from the founders who commissioned them.',
    tech: ['Next.js', 'React', 'Video', 'Vercel'],
    source: 'dialedweb.com',
    href: 'https://www.dialedweb.com/',
  },
  {
    slug: 'waraqlabs',
    category: 'Agency',
    tag: 'fullstack',
    image: 'fs-waraqlabs.jpg',
    alt: 'The Waraq Labs monogram mark',
    title: 'Waraq Labs — Software Development Agency',
    description:
      'Pakistan-based development agency that argues its case against the usual outsourcing failures — slipped deadlines, fragile code, budgets overrun after signing — and answers each with weekly deliverables, CI/CD with real test coverage, and honest upfront estimates.',
    tech: ['Framer', 'Motion', 'CMS', 'Responsive'],
    source: 'waraqlabs.com',
    href: 'https://waraqlabs.com/',
  },
  {
    // Custom bundled frontend on nginx, reading from a WordPress install at
    // /asm_cp/ — headless rather than a themed WordPress site.
    slug: 'asmobius',
    category: 'Headless CMS',
    tag: 'fullstack',
    image: 'fs-asmobius.jpg',
    alt: 'A minimal concrete and glass interior from an Archi Site Mobius project',
    title: 'Archi Site Mobius — Architecture Portfolio',
    description:
      'Bilingual portfolio for a Tokyo architecture practice, presenting residences and villas including Park Mansion Minami Azabu and Sevens Villa Karuizawa. A hand-built bundled frontend renders the work while WordPress sits behind it purely as the editing surface.',
    tech: ['Headless WordPress', 'JavaScript', 'Nginx', 'Bilingual'],
    source: 'asmobius.co.jp',
    href: 'https://asmobius.co.jp/',
  },
  {
    slug: 'lazzaglobal',
    category: 'Fintech',
    tag: 'fullstack',
    image: 'fs-lazzaglobal.jpg',
    alt: 'The Lazza Global banner with crypto tokens over a dark globe',
    title: 'Lazza Global — AI Investment Platform',
    description:
      'Spanish-language investment platform pairing a fixed-income product quoted at 1% monthly with an AI-driven variable-income algorithm and live trading in crypto, equities and indices. Carries a market browser, portfolio view, side-by-side plan comparison and a back office for withdrawals and reporting.',
    tech: ['Framer', 'Motion', 'Trading UI', 'Cloudflare'],
    source: 'lazzaglobal.com',
    href: 'https://lazzaglobal.com',
  },
  {
    slug: 'hammerai',
    category: 'AI & LLMs',
    tag: 'ai',
    image: 'fs-hammerai.jpg',
    alt: 'The HammerAI wordmark and hammer icon on black',
    title: 'HammerAI — Private Character Chat',
    description:
      'Character chat and roleplay platform whose premise is privacy: models run either on the hosted servers or entirely on the user’s own machine through Ollama in the desktop app, so conversations need never leave it. Adds image generation, story writing, group chat, lorebooks and personas across desktop, iOS and web.',
    tech: ['Next.js', 'React', 'Ollama', 'Vercel'],
    source: 'hammerai.com',
    href: 'https://hammerai.com',
  },
  {
    slug: 'arkrayusa',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-arkrayusa.jpg',
    alt: 'Three GLUCOCARD Shine blood glucose meters with test strips',
    title: 'ARKRAY USA — Diagnostics Product Site',
    description:
      'US site for a global diabetes-care and clinical-diagnostics manufacturer, carrying the GLUCOCARD meter range, the Assure professional line and ADAMS and AUTION analysers. Supports clinicians with training, manuals, SDS downloads and a product locator, under a region selector spanning four continents.',
    tech: ['WordPress', 'Elementor Pro', 'WP Engine', 'Cloudflare'],
    source: 'arkrayusa.com',
    href: 'https://www.arkrayusa.com',
  },
  {
    slug: 'biancasantini',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'fs-biancasantini.jpg',
    alt: 'A handmade silver and stone earring worn by a model',
    title: 'Bianca Santini — Handmade Jewellery Store',
    description:
      'Brazilian storefront for handmade 925 silver jewellery set with natural stones and pearls, each gem credited to the Minas Gerais town it came from. Browsing runs by stone as well as by piece, with free shipping thresholds, interest-free instalments, insured tracked delivery and a one-year guarantee.',
    tech: ['Shopify', 'Liquid', 'Shopify CDN', 'Cloudflare'],
    source: 'biancasantini.com.br',
    href: 'https://biancasantini.com.br',
  },
  {
    slug: 'melosacilotto',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-melosacilotto.jpg',
    alt: 'A lawyer photographed in profile against a dark background',
    title: 'Melo Sacilotto — Hospital Tax Equivalence',
    description:
      'Campaign site for a Brazilian firm specialising in Equiparação Hospitalar, the 1995 benefit letting qualifying clinics be assessed as hospitals and cut federal tax by up to 70%. Sets out eligibility, the five-stage process from audit to monitoring, and the R$50m+ already recovered for clients.',
    tech: ['WordPress', 'Elementor', 'ElementsKit', 'PHP 8.2'],
    source: 'melosacilottoadv.com.br',
    href: 'https://melosacilottoadv.com.br/equiparacaohospitalar',
  },
  {
    slug: 'eventoirreplicavel',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-eventoirreplicavel.jpg',
    alt: 'The event host photographed seated in low key lighting',
    title: 'Irreplicável — Live Event Landing Page',
    description:
      'Single-purpose conversion page for a two-hour in-person immersion in Brazil, built around one dated event with check-in times, ticket purchase and card-brand trust marks. Leads on attendee testimonials and a structured promise ending in a 90-day action plan.',
    tech: ['WordPress', 'Elementor Pro', 'Royal Addons', 'Nginx'],
    source: 'eventoirreplicaveloficial.com.br',
    href: 'https://eventoirreplicaveloficial.com.br',
  },
  {
    // The domain currently returns an empty body on every path, so no site
    // imagery could be taken — this card carries a name panel instead.
    // Description written from the practice's indexed pages.
    slug: 'drajulianamattos',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-drajulianamattos.jpg',
    alt: 'A name panel reading Dra. Juliana Mattos over the site’s domain',
    title: 'Dra. Juliana Mattos — Orthodontics & Sleep',
    description:
      'Site for a Bahia dental practice working across orthodontics, Invisalign and sleep dentistry for snoring and apnoea, with treatment explainers published as an education-led blog to draw patients into consultation bookings.',
    tech: ['WordPress', 'Nginx', 'SEO Content', 'Responsive'],
    source: 'drajulianamattos.com',
    href: 'https://www.drajulianamattos.com/',
  },
  {
    slug: 'yurirocha',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-yurirocha.jpg',
    alt: 'The Yuri Rocha Advocacia monogram with a figure of Justice',
    title: 'Yuri Rocha Advocacia — Law Firm & Legal Blog',
    description:
      'Site for a law firm in Espírito Santo covering contracts, litigation, mediation and consumer banking claims. A steadily published blog explains rights such as usucapião, military allowances and improperly charged bank fees, turning search traffic into consultations.',
    tech: ['WordPress', 'Elementor Pro', 'Qi Addons', 'Nginx'],
    source: 'yurirocha.adv.br',
    href: 'https://yurirocha.adv.br/',
  },
  {
    slug: 'gruporesolucao',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-gruporesolucao.jpg',
    alt: 'An engineer working at an industrial electrical distribution panel',
    title: 'Grupo Resolução — Industrial Engineering',
    description:
      'Site for a São Paulo electrical engineering and facilities contractor of twenty years, covering low and medium voltage projects, industrial automation, photovoltaic installations, HVAC and NR-10, AVCB and CLCB compliance reporting. Every service page routes into a quote request.',
    tech: ['WordPress', 'Elementor', 'MetForm', 'LiteSpeed'],
    source: 'gruporesolucao.com.br',
    href: 'https://gruporesolucao.com.br',
  },
  {
    slug: 'nosdapolitica',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-nosdapolitica.jpg',
    alt: 'A community meeting in session, residents seated in a circle',
    title: 'Nós da Política — Civic Education Platform',
    description:
      'Independent Brazilian publication making public life legible: which tier of government decides what, how participatory budgeting actually works, and why women remain a minority in office despite being a majority at the ballot box. Combines a magazine-style blog with courses and free materials.',
    tech: ['WordPress', 'Elementor Pro', 'MetForm', 'PHP 8.2'],
    source: 'nosdapolitica.com.br',
    href: 'https://nosdapolitica.com.br',
  },
  {
    slug: 'rudderconsultoria',
    category: 'WordPress',
    tag: 'wordpress',
    image: 'fs-rudder.jpg',
    alt: 'A ship’s helm rendered as the Rudder Consultoria brand mark',
    title: 'Rudder Consultoria — Financial & Tax Strategy',
    description:
      'Site for a Brazilian consultancy working across financial, tax and corporate structuring — cash-flow organisation, debt restructuring, M&A support, tax reviews and succession planning — presented through outcome-led service pages that funnel into a strategic diagnostic booking.',
    tech: ['WordPress', 'Elementor Pro', 'Contact Form 7', 'Cloudflare'],
    source: 'rudderconsultoria.com.br',
    href: 'https://rudderconsultoria.com.br/',
  },
  {
    // The domain currently returns an empty body on every path, so no site
    // imagery could be taken — this card carries a name panel instead.
    // Description written from the store's indexed pages.
    slug: 'conexaotropical',
    category: 'E-commerce',
    tag: 'ecommerce',
    image: 'fs-conexaotropical.jpg',
    alt: 'A name panel reading Conexão Tropical over the site’s domain',
    title: 'Conexão Tropical — Brazilian Grocery Store',
    description:
      'Online store bringing Brazilian groceries and household brands to customers across Switzerland and Liechtenstein, run alongside a physical shop in Geneva with local delivery and prioritised shipping nationwide.',
    tech: ['PHP 8.1', 'LiteSpeed', 'E-commerce', 'Hostinger'],
    source: 'conexaotropical.com',
    href: 'https://conexaotropical.com',
  },
  {
    slug: 'vetdomus',
    category: 'Web App',
    tag: 'fullstack',
    image: 'fs-vetdomus.jpg',
    alt: 'The Vet Domus hospital building and its street signage',
    title: 'Vet Domus — 24h Veterinary Hospital',
    description:
      'Site for a 24-hour veterinary hospital in Pinheiros, São Paulo holding Cat Friendly Gold certification, which it earns with separate feline waiting, consulting and inpatient areas away from barking. Presents emergency care, surgery, digital imaging, an in-house laboratory, physiotherapy and 15+ specialities.',
    tech: ['React', 'Vite', 'Radix UI', 'Cloudflare'],
    source: 'vetdomus.com.br',
    href: 'https://vetdomus.com.br',
  },
  {
    slug: 'costalaw',
    category: 'Next.js',
    tag: 'fullstack',
    image: 'fs-costalaw.jpg',
    alt: 'The founder of Costa Law portrayed against a blurred office interior',
    title: 'Costa Law — Legal Tech Business Firm',
    description:
      'Trilingual site for a São Paulo business law firm, built around the DocuSign case study at its centre: eSignature, IAM, Maestro and Navigator replaced a process that had drawn five judicial rejections of digitally signed documents. Also covers M&A due diligence, governance and LGPD compliance.',
    tech: ['Next.js', 'React', 'i18n', 'Vercel'],
    source: 'costalaw.com.br',
    href: 'https://costalaw.com.br',
  },
  {
    slug: 'contabilissimo',
    category: 'Web App',
    tag: 'fullstack',
    image: 'fs-contabilissimo.jpg',
    alt: 'The Contabilíssimo hero promising fully digital accounting for e-commerce',
    title: 'Contabilíssimo — E-commerce Accounting SaaS',
    description:
      'Fully digital accounting service for Brazilian online sellers, connecting to Mercado Livre, Shopify and Nuvemshop to pull sales through and issue invoices automatically. Adds payroll and eSocial filing, tax planning and a ten-day migration from an existing accountant, behind an account with passkey sign-in.',
    tech: ['React', 'Vite', 'Supabase', 'Cloudflare'],
    source: 'contabilissimo.com.br',
    href: 'https://contabilissimo.com.br',
  },

  {
    // NOTE: the public marketing site runs WordPress + Elementor Pro behind
    // Cloudflare, but the card represents the platform rather than the
    // brochure, so the badge says SaaS Platform and it sits under Full-stack.
    // Switch `category` to 'WordPress' and `tag` to 'wordpress' if you would
    // rather this card stood for the site itself.
    slug: 'interakt',
    category: 'SaaS Platform',
    tag: 'fullstack',
    image: 'fs-interakt.jpg',
    alt: 'The Interakt hero showing a WhatsApp storefront conversation on a phone',
    title: 'Interakt — WhatsApp Business Platform',
    description:
      'Customer engagement platform used by 100,000+ businesses, built on the WhatsApp Business API and extending to Instagram, RCS and voice. Bundles a no-code chatbot builder, a WhatsApp-first sales CRM, a unified team inbox and campaign tooling — and when a WhatsApp message fails to deliver it falls back to RCS rather than losing the customer.',
    tech: ['WhatsApp Business API', 'RCS', 'Chatbot Builder', 'WordPress'],
    source: 'interakt.shop',
    href: 'https://www.interakt.shop/',
  },
  {
    slug: 'aleyaai',
    category: 'Agency',
    tag: 'fullstack',
    image: 'fs-aleyaai.jpg',
    alt: 'The AleyaAI brand banner reading “Your AI-first partner”',
    title: 'AleyaAI — AI Development & Automation Agency',
    description:
      'Agency building AI agents, chatbots, voice AI and WhatsApp automations for clients across the US, Gulf and Pakistan, organised as four practices covering strategy, design, build and growth. Sells on fixed scope and a two-to-four week launch, with human handover designed in and builds held to HIPAA and GDPR.',
    tech: ['Next.js', 'Vercel', 'n8n', 'LangChain'],
    source: 'aleyaai.com',
    href: 'https://www.aleyaai.com/',
  },

  /* ----------------------------------------------------------------------
   * ANDROID APPS
   *
   * Written from each Google Play listing: the long description for what the
   * app does, and the embedded JSON-LD for developer, rating and rating
   * count. Star ratings were current on 28/10/2026.
   *
   * The `tech` chips here are feature-level rather than framework-level. A
   * store listing does not reveal whether an app is Kotlin, Java or Flutter,
   * so nothing claims a framework — only capabilities the listing states
   * outright, such as Wild naming AWS Rekognition Face Liveness.
   *
   * Images are the Play Store screenshots, chosen by the site owner, shown at
   * the card's full width. `media: 'natural'` gives the panel whatever ratio
   * the asset has, so the panel shape is set by the crop in
   * scripts/android-shots.cjs — currently square. The raw screenshots are
   * 1:2.16, which at full width made these cards roughly twice the height of
   * every other one, so they are cropped to a square window positioned to keep
   * each caption and subject. Change SIDE/topFrac there to retune, or drop the
   * flag to return to the standard short panel. See CREDITS.md.
   * -------------------------------------------------------------------- */
  {
    slug: 'easy3p',
    category: 'Android',
    tag: 'android',
    image: 'and-easy3p.jpg',
    media: 'natural' as const,
    alt: 'An Easy3P store screenshot showing a joint couple profile',
    title: 'Easy3P — Couples & Singles Dating App',
    description:
      'Dating app that treats a couple as a single account, so two people can present and match from one profile. Swipe matching opens chat on mutual interest, alongside like and profile-visit analytics, member-created private events, and a VIP tier unlocking instant chat and recovery of passed profiles. Rated 4.1 across 5,300+ reviews.',
    tech: ['Android', 'Play Billing', 'Realtime Chat', 'Content Filtering'],
    source: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.mobidev.easy3p',
  },
  {
    slug: 'zynq',
    category: 'Android',
    tag: 'android',
    image: 'and-zynq.jpg',
    media: 'natural' as const,
    alt: 'The Zynq discovery screen showing a profile card with like and pass controls',
    title: 'Zynq — Modern Dating App',
    description:
      'Dating app built around user control over exposure. Location is approximate by design — distance is shown, exact coordinates never are, and the permission can be denied outright. Adds human-reviewed photo verification, blocking that dissolves an existing match, in-app account deletion, and Gold and Platinum tiers on top of a free plan. Carries no advertising.',
    tech: ['Android', 'Play Billing', 'Realtime Chat', 'Geolocation'],
    source: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.ezigboe.zynq',
  },
  {
    slug: 'wild',
    category: 'Android',
    tag: 'android',
    image: 'and-wild.jpg',
    media: 'natural' as const,
    alt: 'A Wild store graphic headed “Casual Fun”',
    title: 'Wild — Verified Singles Dating App',
    description:
      'Dating app whose differentiator is proving the person is real: AWS Rekognition Face Liveness verifies each profile, backed by AI scam detection and manual review. Adds intent-based search so long-term and casual searches do not collide, local meetup events, incognito browsing with photos released only to matches, and an SVIP tier for pre-match messaging. Rated 4.1 across 54,000+ reviews.',
    tech: ['Android', 'AWS Rekognition', 'Face Liveness', 'Play Billing'],
    source: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.free.hookup.dating.apps.wild',
  },
  {
    slug: 'csl',
    category: 'Android',
    tag: 'android',
    image: 'and-csl.jpg',
    media: 'natural' as const,
    alt: 'A CSL store graphic headed “Casual & Fun. For Everyone.” noting 50M downloads',
    title: 'CSL — Casual Dating App by Joyride',
    description:
      'Dating app from Joyride GmbH, the studio behind Jaumo, matching on stated intent rather than open-ended browsing. Privacy is the default rather than a setting: a profile can stay hidden from the user’s own phone contacts and photos stay private until released. Verified profiles and voice messaging throughout. Rated 4.5 across 338,000+ reviews — the most-reviewed app in this set.',
    tech: ['Android', 'Play Billing', 'Voice Messaging', 'Realtime Chat'],
    source: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.jaumo.casual',
  },
];

/**
 * Filter tabs on /projects. A tab matches projects whose `tag` equals its `key`.
 *
 * Every project carries exactly one `tag`, so it appears under exactly one tab.
 * If a project would fit two, pick the better fit rather than listing it twice.
 *
 * Every tab now matches at least one project, so the empty state in
 * projects.astro renders for none of them. It stays in place for whenever a
 * new filter is added ahead of the work that fills it.
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
