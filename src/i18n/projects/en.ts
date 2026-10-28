import type { ProjectText } from '../types';

/** English card words, keyed by slug. Structure lives in src/data/projects.ts. */
export const enProjects: Record<string, ProjectText> = {
  'rag-pipelines': {
    title: 'Retrieval-Augmented Generation Pipelines',
    description:
      'Designed RAG workflows connecting language models to external knowledge sources, so responses are grounded in real organisational context rather than model memory alone.',
    alt: 'Shelves packed tight with books, standing in for an external knowledge corpus',
    source: 'Senior AI Software Engineer, Together AI',
  },
  'agent-workflows': {
    title: 'Autonomous AI Agent Workflows',
    description:
      'Built agent workflows that integrate external APIs, databases, and business tools to automate multistep processes end to end, replacing manual handoffs between systems.',
    alt: 'A humanoid service robot, standing in for an autonomous software agent',
    source: 'Senior AI Software Engineer, Together AI',
  },
  'llm-evaluation': {
    title: 'LLM Evaluation & Prompt Reliability',
    description:
      'Evaluated model outputs for relevance, accuracy, consistency, and instruction adherence, then refined prompts and workflows against those test results to make application behaviour predictable.',
    alt: 'A glowing line chart rising across a dark field of data bars',
    source: 'Senior AI Software Engineer, Together AI',
  },
  'backend-services': {
    title: 'Production Backend Services & REST APIs',
    description:
      'Developed and maintained Python backend services and REST APIs supporting web applications and third-party integrations, including deployment, troubleshooting, and ongoing maintenance.',
    alt: 'Rows of illuminated server racks in a data centre aisle',
    source: 'Python Backend Developer, Poolside',
  },
  'data-pipelines': {
    title: 'Data Pipelines & Schema Design',
    description:
      'Designed relational schemas and optimised queries across PostgreSQL and MySQL, and built pipelines that validate, transform, and organise information for application features and downstream services.',
    alt: 'An array of hard disk drives and their controller boards',
    source: 'Python Backend Developer, Poolside',
  },
  'system-integration': {
    title: 'Business System & API Integration',
    description:
      'Integrated external APIs and business systems with authentication, request validation, error handling, and logging — plus automated workflows coordinating interactions between external services.',
    alt: 'A constellation of connected nodes linked into a network',
    source: 'AI Developer & Integration Engineer, Thinking Machines Lab',
  },
  'theayurved': {
    title: 'The Ayurved — Ayurvedic Products Store',
    description:
      'Online storefront for a W-GMP and ISO certified Ayurvedic manufacturer in Haridwar, selling herbal supplements such as Hepato Care, Triphala and Ojas alongside Panchakarma therapy and consultation bookings, with shipping, payment and returns policies and RuPay checkout.',
    alt: 'A person meditating in dense green forest at sunrise',
  },
  'onlymassage': {
    title: 'Onlymassage — Wellness Booking Marketplace',
    description:
      'Two-sided marketplace for booking massage, physiotherapy and spa treatments. Customers search by service and date across eight treatment categories; practitioners onboard through a separate professional portal. Multi-language, with accounts for both sides of the market.',
    alt: 'A massage therapist treating a client, under the Onlymassage logo',
  },
  'secretspa': {
    title: 'Secret Spa — At-Home Beauty Booking',
    description:
      'London\'s at-home beauty and wellness booking platform. Customers book DBS-checked, trade-tested therapists for hair, nails, massage, facials, waxing, IV drips and aesthetics between 6am and 10pm, with therapist ratings, live tracking, loyalty points and gift cards.',
    alt: 'Manicured hands at a laptop beside a beauty portrait, in Secret Spa branding',
  },
  'dogsushi': {
    title: 'DogSushi — Steam Game Discovery',
    description:
      'Installable progressive web app for finding PC games, surfacing Steam ratings, reviews and personalised recommendations. Built as a client-rendered single-page app with offline-capable install and a dark-first interface.',
    alt: 'The DogSushi logo, a shiba inu styled as a sushi roll',
  },
  'vibrantpharma': {
    title: 'Vibrant Pharma — Chemistry CRO Catalogue',
    description:
      'Site and product catalogue for a Canadian contract research organisation in Brantford, Ontario, offering custom synthesis, medicinal and process chemistry. Visitors search catalogue compounds by name, category, catalogue number, CAS or MDL number and order through a WooCommerce cart.',
    alt: 'Laboratory glassware on a bench in a synthesis lab',
  },
  'goprogarage': {
    title: 'Go Pro Garage Door — Florida Service Site',
    description:
      'Lead-generation site for a Florida garage door repair and installation company, built to turn local search traffic into phone calls. Service pages, a project gallery and call-to-action blocks throughout, with Google Site Kit wired in for search and analytics reporting.',
    alt: 'The interior of a residential garage door and its track mechanism',
  },
  'urogyn': {
    title: 'Urogyn — Stockholm Specialist Clinic',
    description:
      'Swedish-language site for one of Stockholm’s leading urology, gynaecology and urotherapy practices. Presents treatment areas and clinician profiles, and routes patients to the right specialist, built on a lightweight Hello Elementor base for speed.',
    alt: 'The glass entrance of the Urogyn clinic in Stockholm',
  },
  'pulsesante': {
    title: 'Pulse Santé — Healthcare SaaS Marketing Site',
    description:
      'French marketing site for an all-in-one management platform (PSDM) used by home healthcare providers and medical equipment suppliers. Product and feature pages lead to demo requests, on a bespoke theme rather than a page builder.',
    alt: 'The Pulse Santé software interface showing a patient record',
  },
  'aesthetika': {
    title: 'Aesthetika Dental Studio — Private Dental Practice',
    description:
      'Site for a private dental practice in Kingston upon Thames covering check-ups, hygiene, Invisalign and implants. Treatment pages carry social proof from 250+ Google reviews, with WP Rocket handling caching and asset optimisation on a media-heavy build.',
    alt: 'Two dentists in front of the Aesthetika Dental Studio signage',
  },
  'bertolla': {
    title: 'Ivan Bertolla — Composer Portfolio',
    description:
      'Official site for an Australian composer, guitarist and producer whose production music scores major events. A lean, hand-built presence showcasing the catalogue and credits, with no CMS behind it.',
    alt: 'Cover art for the Epic Battle orchestral trailer album by Ivan Bertolla',
  },
  'klens': {
    title: 'Klens — Surgical Device Launch Site',
    description:
      'Product site for a single-use device, co-developed with Mayo Clinic, that cleans a laparoscope lens without withdrawing it from the patient. Frames the clinical problem with cited evidence and converts surgeons and health systems into enquiries.',
    alt: 'A gloved hand holding a laparoscope during keyhole surgery',
  },
  'cascade': {
    title: 'CASCADE — HIV Care Cascade Database',
    description:
      'Research database from McMaster University holding 349 clinical trials and 74,375 participants from 1995 to 2023. Trials are filterable by income level, population, care setting and intervention type, with interactive trend charts and CSV or JSON export.',
    alt: 'The CASCADE HIV care cascade database wordmark',
  },
  'jimeng': {
    title: 'Jimeng AI — Generative Image & Video Studio',
    description:
      'Chinese-language creative platform generating images and video from a prompt or a reference frame. Covers a short-drama studio, a multi-layer canvas with inpainting, outpainting and cutout, first-to-last frame control over motion, and credit-based tiers gating access to each model generation.',
    alt: 'The Jimeng AI brand mark over a generated portrait',
  },
  'lialive': {
    title: 'LIA — Conversational AI Voice Agent',
    description:
      'Voice-first agent handling sales, support, search and booking across web, mobile, WhatsApp, Instagram and in-store. Runs transactions end to end against live availability, negotiates and upsells, switches language mid-conversation, and hands over to a human with full context when it needs to.',
    alt: 'The LIA wordmark in gradient lettering on black',
  },
  'platformz': {
    title: 'Platformz — AI Business Blueprinting',
    description:
      'Platbot turns an idea or an operational problem into a costed delivery plan — requirements, scope, homepage concept, topology, timeline and estimated investment — issued as a blueprint PDF. Paths cover marketplaces, retail launches, international sales, AI agents and workflow automation.',
    alt: 'The Platformz banner reading Command Everything, Blueprint and Build Anything',
  },
  'moonlitdev': {
    title: 'MoonLit — DeFi Staking & Yield Dashboard',
    description:
      'Staking front-end quoting a 19.9% APY, with a wallet-connected dashboard for active stake, daily points and season rewards. Charts historical smart-contract APY, handles deposit and withdrawal, and runs a referral programme on top of the $MOON token incentives.',
    alt: 'The MoonLit earnings panel showing a yield curve rising to $5.46k',
  },
  'dialedweb': {
    title: 'Dialedweb — Web & Motion Studio',
    description:
      'Site for a studio selling premium web and motion work, where the portfolio is the argument: ten client builds play as inline video previews rather than screenshots, backed by named testimonials from the founders who commissioned them.',
    alt: 'A laptop on a plinth showing a Dialedweb client site for a drinks brand',
  },
  'waraqlabs': {
    title: 'Waraq Labs — Software Development Agency',
    description:
      'Pakistan-based development agency that argues its case against the usual outsourcing failures — slipped deadlines, fragile code, budgets overrun after signing — and answers each with weekly deliverables, CI/CD with real test coverage, and honest upfront estimates.',
    alt: 'The Waraq Labs monogram mark',
  },
  'asmobius': {
    title: 'Archi Site Mobius — Architecture Portfolio',
    description:
      'Bilingual portfolio for a Tokyo architecture practice, presenting residences and villas including Park Mansion Minami Azabu and Sevens Villa Karuizawa. A hand-built bundled frontend renders the work while WordPress sits behind it purely as the editing surface.',
    alt: 'A minimal concrete and glass interior from an Archi Site Mobius project',
  },
  'lazzaglobal': {
    title: 'Lazza Global — AI Investment Platform',
    description:
      'Spanish-language investment platform pairing a fixed-income product quoted at 1% monthly with an AI-driven variable-income algorithm and live trading in crypto, equities and indices. Carries a market browser, portfolio view, side-by-side plan comparison and a back office for withdrawals and reporting.',
    alt: 'The Lazza Global banner with crypto tokens over a dark globe',
  },
  'hammerai': {
    title: 'HammerAI — Private Character Chat',
    description:
      'Character chat and roleplay platform whose premise is privacy: models run either on the hosted servers or entirely on the user’s own machine through Ollama in the desktop app, so conversations need never leave it. Adds image generation, story writing, group chat, lorebooks and personas across desktop, iOS and web.',
    alt: 'The HammerAI wordmark and hammer icon on black',
  },
  'arkrayusa': {
    title: 'ARKRAY USA — Diagnostics Product Site',
    description:
      'US site for a global diabetes-care and clinical-diagnostics manufacturer, carrying the GLUCOCARD meter range, the Assure professional line and ADAMS and AUTION analysers. Supports clinicians with training, manuals, SDS downloads and a product locator, under a region selector spanning four continents.',
    alt: 'Three GLUCOCARD Shine blood glucose meters with test strips',
  },
  'biancasantini': {
    title: 'Bianca Santini — Handmade Jewellery Store',
    description:
      'Brazilian storefront for handmade 925 silver jewellery set with natural stones and pearls, each gem credited to the Minas Gerais town it came from. Browsing runs by stone as well as by piece, with free shipping thresholds, interest-free instalments, insured tracked delivery and a one-year guarantee.',
    alt: 'A handmade silver and stone earring worn by a model',
  },
  'melosacilotto': {
    title: 'Melo Sacilotto — Hospital Tax Equivalence',
    description:
      'Campaign site for a Brazilian firm specialising in Equiparação Hospitalar, the 1995 benefit letting qualifying clinics be assessed as hospitals and cut federal tax by up to 70%. Sets out eligibility, the five-stage process from audit to monitoring, and the R$50m+ already recovered for clients.',
    alt: 'A lawyer photographed in profile against a dark background',
  },
  'eventoirreplicavel': {
    title: 'Irreplicável — Live Event Landing Page',
    description:
      'Single-purpose conversion page for a two-hour in-person immersion in Brazil, built around one dated event with check-in times, ticket purchase and card-brand trust marks. Leads on attendee testimonials and a structured promise ending in a 90-day action plan.',
    alt: 'The event host photographed seated in low key lighting',
  },
  'drajulianamattos': {
    title: 'Dra. Juliana Mattos — Orthodontics & Sleep',
    description:
      'Site for a Bahia dental practice working across orthodontics, Invisalign and sleep dentistry for snoring and apnoea, with treatment explainers published as an education-led blog to draw patients into consultation bookings.',
    alt: 'A name panel reading Dra. Juliana Mattos over the site’s domain',
  },
  'yurirocha': {
    title: 'Yuri Rocha Advocacia — Law Firm & Legal Blog',
    description:
      'Site for a law firm in Espírito Santo covering contracts, litigation, mediation and consumer banking claims. A steadily published blog explains rights such as usucapião, military allowances and improperly charged bank fees, turning search traffic into consultations.',
    alt: 'The Yuri Rocha Advocacia monogram with a figure of Justice',
  },
  'gruporesolucao': {
    title: 'Grupo Resolução — Industrial Engineering',
    description:
      'Site for a São Paulo electrical engineering and facilities contractor of twenty years, covering low and medium voltage projects, industrial automation, photovoltaic installations, HVAC and NR-10, AVCB and CLCB compliance reporting. Every service page routes into a quote request.',
    alt: 'An engineer working at an industrial electrical distribution panel',
  },
  'nosdapolitica': {
    title: 'Nós da Política — Civic Education Platform',
    description:
      'Independent Brazilian publication making public life legible: which tier of government decides what, how participatory budgeting actually works, and why women remain a minority in office despite being a majority at the ballot box. Combines a magazine-style blog with courses and free materials.',
    alt: 'A community meeting in session, residents seated in a circle',
  },
  'rudderconsultoria': {
    title: 'Rudder Consultoria — Financial & Tax Strategy',
    description:
      'Site for a Brazilian consultancy working across financial, tax and corporate structuring — cash-flow organisation, debt restructuring, M&A support, tax reviews and succession planning — presented through outcome-led service pages that funnel into a strategic diagnostic booking.',
    alt: 'A ship’s helm rendered as the Rudder Consultoria brand mark',
  },
  'conexaotropical': {
    title: 'Conexão Tropical — Brazilian Grocery Store',
    description:
      'Online store bringing Brazilian groceries and household brands to customers across Switzerland and Liechtenstein, run alongside a physical shop in Geneva with local delivery and prioritised shipping nationwide.',
    alt: 'A name panel reading Conexão Tropical over the site’s domain',
  },
  'vetdomus': {
    title: 'Vet Domus — 24h Veterinary Hospital',
    description:
      'Site for a 24-hour veterinary hospital in Pinheiros, São Paulo holding Cat Friendly Gold certification, which it earns with separate feline waiting, consulting and inpatient areas away from barking. Presents emergency care, surgery, digital imaging, an in-house laboratory, physiotherapy and 15+ specialities.',
    alt: 'The Vet Domus hospital building and its street signage',
  },
  'costalaw': {
    title: 'Costa Law — Legal Tech Business Firm',
    description:
      'Trilingual site for a São Paulo business law firm, built around the DocuSign case study at its centre: eSignature, IAM, Maestro and Navigator replaced a process that had drawn five judicial rejections of digitally signed documents. Also covers M&A due diligence, governance and LGPD compliance.',
    alt: 'The founder of Costa Law portrayed against a blurred office interior',
  },
  'contabilissimo': {
    title: 'Contabilíssimo — E-commerce Accounting SaaS',
    description:
      'Fully digital accounting service for Brazilian online sellers, connecting to Mercado Livre, Shopify and Nuvemshop to pull sales through and issue invoices automatically. Adds payroll and eSocial filing, tax planning and a ten-day migration from an existing accountant, behind an account with passkey sign-in.',
    alt: 'The Contabilíssimo hero promising fully digital accounting for e-commerce',
  },
  'interakt': {
    title: 'Interakt — WhatsApp Business Platform',
    description:
      'Customer engagement platform used by 100,000+ businesses, built on the WhatsApp Business API and extending to Instagram, RCS and voice. Bundles a no-code chatbot builder, a WhatsApp-first sales CRM, a unified team inbox and campaign tooling — and when a WhatsApp message fails to deliver it falls back to RCS rather than losing the customer.',
    alt: 'The Interakt hero showing a WhatsApp storefront conversation on a phone',
  },
  'aleyaai': {
    title: 'AleyaAI — AI Development & Automation Agency',
    description:
      'Agency building AI agents, chatbots, voice AI and WhatsApp automations for clients across the US, Gulf and Pakistan, organised as four practices covering strategy, design, build and growth. Sells on fixed scope and a two-to-four week launch, with human handover designed in and builds held to HIPAA and GDPR.',
    alt: 'The AleyaAI brand banner reading “Your AI-first partner”',
  },
  'easy3p': {
    title: 'Easy3P — Couples & Singles Dating App',
    description:
      'Dating app that treats a couple as a single account, so two people can present and match from one profile. Swipe matching opens chat on mutual interest, alongside like and profile-visit analytics, member-created private events, and a VIP tier unlocking instant chat and recovery of passed profiles. Rated 4.1 across 5,300+ reviews.',
    alt: 'An Easy3P store screenshot showing a joint couple profile',
  },
  'zynq': {
    title: 'Zynq — Modern Dating App',
    description:
      'Dating app built around user control over exposure. Location is approximate by design — distance is shown, exact coordinates never are, and the permission can be denied outright. Adds human-reviewed photo verification, blocking that dissolves an existing match, in-app account deletion, and Gold and Platinum tiers on top of a free plan. Carries no advertising.',
    alt: 'The Zynq discovery screen showing a profile card with like and pass controls',
  },
  'wild': {
    title: 'Wild — Verified Singles Dating App',
    description:
      'Dating app whose differentiator is proving the person is real: AWS Rekognition Face Liveness verifies each profile, backed by AI scam detection and manual review. Adds intent-based search so long-term and casual searches do not collide, local meetup events, incognito browsing with photos released only to matches, and an SVIP tier for pre-match messaging. Rated 4.1 across 54,000+ reviews.',
    alt: 'A Wild store graphic headed “Casual Fun”',
  },
  'csl': {
    title: 'CSL — Casual Dating App by Joyride',
    description:
      'Dating app from Joyride GmbH, the studio behind Jaumo, matching on stated intent rather than open-ended browsing. Privacy is the default rather than a setting: a profile can stay hidden from the user’s own phone contacts and photos stay private until released. Verified profiles and voice messaging throughout. Rated 4.5 across 338,000+ reviews — the most-reviewed app in this set.',
    alt: 'A CSL store graphic headed “Casual & Fun. For Everyone.” noting 50M downloads',
  },
};
