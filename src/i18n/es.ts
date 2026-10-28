import { esProjects } from './projects/es';
import type { Content } from './types';

export const es: Content = {
  profile: {
    name: 'Ruan Victor Cabral De Lima',
    initial: 'R',
    given: 'Ruan Victor',
    family: 'Cabral De Lima',
    role: 'Ingeniero Sénior de Software de IA y Python',
    roleFull: 'Ingeniero Sénior de Software de IA y Python | Formador de IA y Experto en LLM',
    tagline: 'Arquitectura de IA, Integración de LLM y Sistemas Inteligentes',
    heroLead: 'Ingeniería de Software',
    heroRest: 'de IA para Producción',
    heroBlurb:
      'Diseño y construyo aplicaciones de IA listas para producción, agentes autónomos y soluciones de automatización con Python y tecnologías modernas de IA, desde el diseño técnico hasta el despliegue y la optimización.',
    summary:
      'Soy Ingeniero Sénior de Software de IA y Python, especializado en arquitectura de IA, integración de LLM y desarrollo de sistemas de software inteligentes. Diseño y construyo aplicaciones de IA listas para producción, agentes autónomos y soluciones de automatización con Python y tecnologías modernas de IA.',
    summaryCont:
      'Mi experiencia abarca la orquestación de LLM, los pipelines de RAG, el diseño de APIs, la arquitectura de backend y la integración de capacidades de IA en sistemas de negocio ya existentes. Adopto un enfoque pragmático y guiado por la ingeniería para resolver retos técnicos complejos, con especial atención a la fiabilidad, la escalabilidad, la seguridad y la mantenibilidad. Del diseño técnico al despliegue y la optimización, construyo soluciones de IA robustas que aportan valor medible al negocio.',
  },

  nav: { home: 'Inicio', about: 'Sobre mí', expertise: 'Especialidades', projects: 'Proyectos' },

  ui: {
    skipToContent: 'Saltar al contenido',
    languageLabel: 'Idioma',
    homeAria: 'página de inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    backToTop: 'Volver arriba',
    availability: 'Disponible para Trabajos Sénior de Ingeniería de IA',
    viewWork: 'Ver Proyectos',
    myBackground: 'Mi Trayectoria',
    allWork: 'Todos los Proyectos',
    fullBackground: 'Trayectoria completa',
    exploreExpertise: 'Explora Mis Especialidades',
    seeTheWork: 'Ver los Proyectos',
    seeMyWork: 'Ver Mis Proyectos',
    myExpertise: 'Mis Especialidades',
    backHome: 'Volver al Inicio',
    current: 'Actual',
    opensInNewTab: 'se abre en una pestaña nueva',
    opensEmployerSite: 'abre el sitio de la empresa en una pestaña nueva',
    footerExplore: 'Explorar',
    footerMore: 'Más',
    rightsReserved: 'Todos los derechos reservados.',
    nothingHereTitle: 'Aquí todavía no hay nada',
    nothingHereBody:
      'Aún no se ha publicado ningún trabajo de esta categoría en el sitio. Vuelve más adelante o echa un vistazo a las otras categorías.',

    homeAboutLead: 'Sobre',
    homeAboutAccent: 'Mí',
    homeApproachHeading: 'Desarrollo de IA guiado por la ingeniería',
    homeCoreStack: 'Stack Principal',
    homeUniversity: 'University of Cambridge',
    homeDegrees: 'Máster en Ciencias de la Computación Avanzadas · Grado en Ciencias de la Computación',
    homeWorkLead: 'Proyectos',
    homeWorkAccent: 'Destacados',
    homeWorkSubtitle:
      'Casos de estudio de sistemas en producción que he diseñado y entregado a lo largo de tres puestos de ingeniería.',
    homeCtaLeadAccent: 'Construye',
    homeCtaLeadRest: 'algo inteligente',
    homeCtaBody:
      'Ya sea integrar un LLM en un producto existente, crear un flujo de agentes que automatice un proceso de varios pasos o levantar el backend que lo sostiene, puedo llevarlo del diseño técnico hasta producción.',
    homeWhyLead: 'Por Qué Trabajar',
    homeWhyAccent: 'Conmigo',
    homeWhySubtitle:
      'Cómo afronto la construcción de sistemas de IA que tienen que sobrevivir al contacto con producción.',

    aboutEyebrow: 'Sobre mí',
    aboutApproachLead: 'Mi',
    aboutApproachAccent: 'Enfoque',
    aboutPragmatic: 'Ingeniería Pragmática',
    aboutSpecialise: 'En Qué Me Especializo',
    aboutSpecialiseItems: [
      'Orquestación de LLM e integración en sistemas de negocio existentes',
      'Pipelines de generación aumentada por recuperación (RAG) y búsqueda semántica',
      'Flujos de agentes autónomos y automatización de procesos',
      'Arquitectura de backend, diseño de APIs y pipelines de datos',
      'Evaluación y endurecimiento de la salida de los modelos para uso en producción',
    ],
    aboutExperienceLead: 'Experiencia',
    aboutExperienceAccent: 'Profesional',
    aboutExperienceSubtitle:
      'Nueve años construyendo aplicaciones con IA, servicios de backend e integraciones entre sistemas.',
    aboutEducationAccent: 'Formación',
    aboutCtaLead: 'Actualmente abierto a',
    aboutCtaAccent: 'nuevos proyectos',
    aboutCtaBody:
      'Si tienes un sistema de IA que diseñar, un backend que construir o un proceso que merezca automatizarse, el trabajo de este sitio es la mejor medida de cómo abordaría el tuyo.',

    expertiseLead: 'Especialidades',
    expertiseAccent: 'Técnicas',
    expertiseSubtitle:
      'Seis áreas en las que trabajo, de la integración de modelos hasta la base de datos.',
    processLead: 'Cómo',
    processAccent: 'Trabajo',
    processSubtitle:
      'El ciclo de entrega que sigo, de la primera conversación al mantenimiento continuo.',
    expertiseCtaLead: 'Este stack, aplicado a',
    expertiseCtaAccent: 'sistemas reales',
    expertiseCtaBody:
      'Cada capacidad de arriba procede de trabajo en producción, no de proyectos paralelos. Así se tradujo en la práctica.',

    projectsLead: 'Proyectos',
    projectsAccent: 'Destacados',
    projectsSubtitle:
      'Casos de estudio de sistemas en producción y de trabajo entregado a clientes. Cada tarjeta indica de dónde procede.',
    projectsCtaLead: 'De dónde',
    projectsCtaAccent: 'viene esto',
    projectsCtaBody:
      'Nueve años en tres puestos de ingeniería, del trabajo de integración de IA a la arquitectura de backend. El historial completo está en la página sobre mí.',

    notFoundTitle: 'Página No Encontrada',
    notFoundHeading: 'Señal perdida',
    notFoundBody:
      'Esa página no existe o se ha movido. Los proyectos y la trayectoria siguen aquí.',
  },

  meta: {
    homeDescription:
      'Ingeniero Sénior de Software de IA y Python especializado en arquitectura de IA, integración de LLM y sistemas de software inteligentes.',
    aboutTitle: 'Sobre mí',
    aboutDescription:
      'Trayectoria, experiencia profesional y formación de un Ingeniero Sénior de Software de IA y Python.',
    expertiseTitle: 'Especialidades',
    expertiseDescription:
      'Especialidades técnicas en IA y LLMs, orquestación de agentes, ingeniería de backend, datos, frontend y práctica de ingeniería.',
    projectsTitle: 'Proyectos',
    projectsDescription:
      'Casos de estudio en pipelines de RAG, flujos de agentes de IA, evaluación de LLM, servicios de backend, e-commerce, sitios con CMS y apps Android.',
  },

  stats: [
    { value: 9, suffix: '+', label: 'Años de Experiencia' },
    { value: 3, suffix: '', label: 'Puestos de Ingeniería' },
    { value: 2, suffix: '', label: 'Títulos de Cambridge' },
    { value: 40, suffix: '+', label: 'Tecnologías' },
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
      title: 'IA y LLMs',
      blurb:
        'Diseñar e integrar capacidades de grandes modelos de lenguaje en software de producción, con el foco puesto en la fiabilidad y la coherencia de las respuestas.',
      items: [
        'OpenAI API e ingeniería de prompts',
        'RAG, embeddings y búsqueda semántica',
        'Function calling y salidas estructuradas',
        'Evaluación de LLM y bases de datos vectoriales',
      ],
    },
    {
      icon: 'fas fa-diagram-project',
      title: 'Agentes de IA y Orquestación',
      blurb:
        'Construir flujos de agentes autónomos que coordinan modelos, herramientas y servicios externos para automatizar procesos de varios pasos.',
      items: [
        'LangGraph y LlamaIndex',
        'Orquestación de agentes e integración de herramientas',
        'Automatización de flujos de trabajo',
        'Model Context Protocol (MCP)',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Ingeniería de Backend',
      blurb:
        'Diseñar servicios de backend y APIs fiables, seguros y mantenibles bajo carga real de producción.',
      items: [
        'Python, FastAPI y Django',
        'Diseño e integración de APIs REST',
        'Autenticación y validación de peticiones',
        'Procesamiento asíncrono y Node.js',
      ],
    },
    {
      icon: 'fas fa-database',
      title: 'Datos y Almacenamiento',
      blurb:
        'Modelar, almacenar y mover datos, del diseño de esquemas relacionales a la búsqueda vectorial y los pipelines de procesamiento.',
      items: [
        'PostgreSQL, MySQL y MongoDB',
        'Redis y búsqueda vectorial',
        'Pipelines de datos y preprocesamiento',
        'Optimización de consultas',
      ],
    },
    {
      icon: 'fas fa-code',
      title: 'Frontend',
      blurb:
        'Construir las interfaces que hacen usables los sistemas de IA, con un toolchain moderno de React tipado.',
      items: [
        'React y Next.js',
        'TypeScript y JavaScript',
        'Arquitectura de componentes',
        'Interfaces guiadas por API',
      ],
    },
    {
      icon: 'fas fa-screwdriver-wrench',
      title: 'Herramientas y Práctica',
      blurb:
        'La disciplina de ingeniería alrededor del código: pruebas, diseño de sistemas y el utillaje que mantiene predecible la entrega.',
      items: [
        'Git y pruebas automatizadas',
        'Pruebas de API y diseño de sistemas',
        'Desarrollo de SaaS',
        'Integraciones con Airtable y Slack',
      ],
    },
  ],

  experience: [
    {
      title: 'Ingeniero Sénior de Software de IA',
      company: 'Together AI',
      period: '07/2023 — Actualidad',
      location: 'En remoto, Londres, Reino Unido',
      current: true,
      bullets: [
        'Diseñé y desarrollé aplicaciones basadas en LLM usando las APIs de OpenAI, Python y frameworks modernos de integración de IA.',
        'Construí flujos de agentes de IA que integran APIs externas, bases de datos y herramientas de negocio para automatizar procesos de varios pasos.',
        'Apliqué técnicas de ingeniería de prompts, salidas estructuradas y function calling para mejorar la coherencia de las respuestas y la fiabilidad de la aplicación.',
        'Desarrollé servicios de backend y pipelines de procesamiento de datos para sostener aplicaciones guiadas por IA e integraciones en tiempo real.',
        'Diseñé flujos de generación aumentada por recuperación (RAG) que conectan modelos de lenguaje con fuentes externas de conocimiento para respuestas sensibles al contexto.',
        'Evalué las salidas de los LLM en relevancia, precisión, coherencia y cumplimiento de instrucciones, afinando prompts y flujos según los resultados de las pruebas.',
        'Contribuí a la arquitectura del sistema, el diseño de APIs, la gestión de errores y las pruebas de integración para mejorar la mantenibilidad y la preparación para producción.',
        'Colaboré con las partes interesadas para traducir requisitos de negocio en especificaciones técnicas y soluciones de IA aplicables.',
      ],
    },
    {
      title: 'Desarrollador Backend Python',
      company: 'Poolside',
      period: '11/2020 — 06/2023',
      location: 'En remoto, Londres, Reino Unido',
      current: false,
      bullets: [
        'Desarrollé y mantuve servicios de backend en Python y APIs REST que sostienen aplicaciones web e integraciones de terceros.',
        'Diseñé esquemas de base de datos relacional y optimicé consultas en PostgreSQL y MySQL para garantizar un acceso fiable a los datos.',
        'Construí pipelines de procesamiento para validar, transformar y organizar la información destinada a funciones de la aplicación y servicios posteriores.',
        'Integré APIs externas y sistemas de negocio, implementando autenticación, validación de peticiones, gestión de errores y registro de trazas.',
        'Desarrollé pruebas automatizadas para validar el comportamiento de las APIs, detectar regresiones y mejorar la fiabilidad del software.',
        'Mejoré el rendimiento y la mantenibilidad mediante refactorización de código, optimización de base de datos y componentes de backend reutilizables.',
        'Di soporte al despliegue, la resolución de incidencias y el mantenimiento continuo en los entornos de desarrollo y producción.',
        'Trabajé con el equipo de frontend y otras partes interesadas para definir contratos de API y entregar funcionalidad de extremo a extremo.',
      ],
    },
    {
      title: 'Desarrollador de IA e Ingeniero de Integración',
      company: 'Thinking Machines Lab',
      period: '02/2017 — 10/2020',
      location: 'En remoto, Londres, Reino Unido',
      current: false,
      bullets: [
        'Desarrollé funciones con IA usando Python y APIs de modelos de lenguaje, integrando esas capacidades en flujos de software ya existentes.',
        'Construí integraciones de API que conectan aplicaciones web, bases de datos y herramientas de negocio de terceros.',
        'Diseñé flujos automatizados para simplificar procesos repetitivos y coordinar la interacción entre servicios externos.',
        'Implementé componentes de backend en Python y Django, endpoints REST e integraciones con PostgreSQL.',
        'Desarrollé y afiné prompts y evalué las respuestas de los modelos frente a los requisitos de cada tarea, documentando los fallos e identificando oportunidades de mejora.',
        'Creé escenarios de prueba para valorar la calidad de las respuestas, la coherencia de las salidas y el comportamiento de las integraciones ante entradas representativas.',
        'Implementé validación de datos, gestión de excepciones y registro de trazas para mejorar la fiabilidad de las integraciones y simplificar la depuración.',
        'Coordiné la toma de requisitos, el diseño técnico, la implementación, las pruebas, el despliegue y el mantenimiento continuo.',
        'Documenté la arquitectura del sistema, el comportamiento de las APIs y los procedimientos de integración para sostener el mantenimiento y la evolución futura.',
      ],
    },
  ],

  education: [
    {
      degree: 'Máster en Ciencias de la Computación Avanzadas',
      school: 'University of Cambridge',
      period: '2019 — 2020',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: 'Grado en Ciencias de la Computación',
      school: 'University of Cambridge',
      period: '2016 — 2019',
      icon: 'fas fa-user-graduate',
    },
  ],

  differentiators: [
    {
      icon: 'fas fa-compass-drafting',
      title: 'Enfoque Guiado por la Ingeniería',
      text: 'Un enfoque pragmático y guiado por la ingeniería ante retos técnicos complejos: las decisiones de diseño nacen de las restricciones y la evidencia, no de la novedad.',
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'Fiabilidad y Seguridad',
      text: 'Atención firme a la fiabilidad, la escalabilidad, la seguridad y la mantenibilidad, con validación, gestión de excepciones y trazas previstas desde el principio.',
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Ciclo Completo de Entrega',
      text: 'De la toma de requisitos y el diseño técnico a la implementación, las pruebas, el despliegue y el mantenimiento continuo.',
    },
    {
      icon: 'fas fa-brain-circuit',
      title: 'Profundidad en Integración de IA',
      text: 'Especializado en orquestación de LLM, pipelines de RAG e integración de capacidades de IA en sistemas de negocio existentes, no en demostraciones partiendo de cero.',
    },
    {
      icon: 'fas fa-people-arrows',
      title: 'Traducción para las Partes Interesadas',
      text: 'Experiencia traduciendo requisitos de negocio en especificaciones técnicas y soluciones de IA que la gente realmente usa.',
    },
    {
      icon: 'fas fa-book-open',
      title: 'Documentado y Mantenible',
      text: 'Arquitectura del sistema, comportamiento de las APIs y procedimientos de integración documentados para sostener el mantenimiento y la evolución futura.',
    },
  ],

  process: [
    {
      step: '01',
      icon: 'fas fa-comments',
      title: 'Descubrimiento',
      text: 'Toma de requisitos con las partes interesadas, traduciendo objetivos de negocio en especificaciones técnicas y una definición clara de terminado.',
    },
    {
      step: '02',
      icon: 'fas fa-sitemap',
      title: 'Diseño Técnico',
      text: 'Arquitectura del sistema, contratos de API, modelado de datos y estrategia de gestión de errores acordados antes de empezar a implementar.',
    },
    {
      step: '03',
      icon: 'fas fa-code-branch',
      title: 'Construir y Evaluar',
      text: 'Implementación iterativa con pruebas automatizadas, pruebas de API y evaluación estructurada de las salidas del modelo frente a los requisitos de la tarea.',
    },
    {
      step: '04',
      icon: 'fas fa-rocket',
      title: 'Desplegar y Mantener',
      text: 'Despliegue entre entornos, optimización de rendimiento y consultas, documentación, resolución de incidencias y mantenimiento continuo.',
    },
  ],

  filters: {
    all: 'Todos',
    ai: 'IA y LLMs',
    backend: 'Backend',
    data: 'Datos',
    ecommerce: 'E-commerce',
    wordpress: 'WordPress',
    android: 'Android',
    fullstack: 'Full-stack',
  },

  categories: {
    'AI & LLMs': 'IA y LLMs',
    'AI Agents': 'Agentes de IA',
    Backend: 'Backend',
    Data: 'Datos',
    Integration: 'Integración',
    'E-commerce': 'E-commerce',
    WordPress: 'WordPress',
    'Static Site': 'Sitio Estático',
    Webflow: 'Webflow',
    'Web App': 'Aplicación Web',
    'AI Platform': 'Plataforma de IA',
    Web3: 'Web3',
    Agency: 'Agencia',
    'Headless CMS': 'CMS Headless',
    Fintech: 'Fintech',
    'Next.js': 'Next.js',
    'SaaS Platform': 'Plataforma SaaS',
    Android: 'Android',
  },

  projects: esProjects,
};
