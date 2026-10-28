import { ptProjects } from './projects/pt';
import type { Content } from './types';

export const pt: Content = {
  profile: {
    name: 'Ruan Victor Cabral De Lima',
    initial: 'R',
    given: 'Ruan Victor',
    family: 'Cabral De Lima',
    role: 'Engenheiro Sênior de Software de IA e Python',
    roleFull: 'Engenheiro Sênior de Software de IA e Python | Treinador de IA e Especialista em LLM',
    tagline: 'Arquitetura de IA, Integração de LLM e Sistemas Inteligentes',
    heroLead: 'Engenharia de Software',
    heroRest: 'de IA para Produção',
    heroBlurb:
      'Projeto e construo aplicações de IA prontas para produção, agentes autônomos e soluções de automação com Python e tecnologias modernas de IA — do desenho técnico à implantação e à otimização.',
    summary:
      'Sou Engenheiro Sênior de Software de IA e Python, especializado em arquitetura de IA, integração de LLM e desenvolvimento de sistemas de software inteligentes. Projeto e construo aplicações de IA prontas para produção, agentes autônomos e soluções de automação com Python e tecnologias modernas de IA.',
    summaryCont:
      'Minha experiência inclui orquestração de LLM, pipelines de RAG, desenho de APIs, arquitetura de backend e a integração de recursos de IA a sistemas de negócio já existentes. Adoto uma abordagem pragmática e orientada pela engenharia para resolver desafios técnicos complexos, com forte atenção a confiabilidade, escalabilidade, segurança e manutenibilidade. Do desenho técnico à implantação e à otimização, construo soluções de IA robustas que entregam valor mensurável ao negócio.',
  },

  nav: { home: 'Início', about: 'Sobre', expertise: 'Especialidades', projects: 'Projetos' },

  ui: {
    skipToContent: 'Ir para o conteúdo',
    languageLabel: 'Idioma',
    homeAria: 'página inicial',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    backToTop: 'Voltar ao topo',
    availability: 'Disponível para Trabalhos Sênior de Engenharia de IA',
    viewWork: 'Ver Projetos',
    myBackground: 'Minha Trajetória',
    allWork: 'Todos os Projetos',
    fullBackground: 'Trajetória completa',
    exploreExpertise: 'Conheça Minhas Especialidades',
    seeTheWork: 'Ver os Projetos',
    seeMyWork: 'Ver Meus Projetos',
    myExpertise: 'Minhas Especialidades',
    backHome: 'Voltar ao Início',
    current: 'Atual',
    opensInNewTab: 'abre em uma nova aba',
    opensEmployerSite: 'abre o site da empresa em uma nova aba',
    footerExplore: 'Explorar',
    footerMore: 'Mais',
    rightsReserved: 'Todos os direitos reservados.',
    nothingHereTitle: 'Ainda não há nada aqui',
    nothingHereBody:
      'Nenhum trabalho desta categoria foi publicado neste site ainda. Volte mais tarde ou veja as outras categorias.',

    homeAboutLead: 'Sobre',
    homeAboutAccent: 'Mim',
    homeApproachHeading: 'Desenvolvimento de IA orientado pela engenharia',
    homeCoreStack: 'Stack Principal',
    homeUniversity: 'University of Cambridge',
    homeDegrees: 'Mestrado em Ciência da Computação Avançada · Bacharelado em Ciência da Computação',
    homeWorkLead: 'Projetos',
    homeWorkAccent: 'Selecionados',
    homeWorkSubtitle:
      'Estudos de caso de sistemas em produção que projetei e entreguei ao longo de três funções de engenharia.',
    homeCtaLeadAccent: 'Construa',
    homeCtaLeadRest: 'algo inteligente',
    homeCtaBody:
      'Seja para integrar um LLM a um produto existente, criar um fluxo de agentes que automatize um processo de várias etapas ou construir o backend que sustenta tudo isso — posso conduzir do desenho técnico até a produção.',
    homeWhyLead: 'Por Que Trabalhar',
    homeWhyAccent: 'Comigo',
    homeWhySubtitle:
      'Como eu abordo a construção de sistemas de IA que precisam sobreviver ao contato com a produção.',

    aboutEyebrow: 'Sobre',
    aboutApproachLead: 'Minha',
    aboutApproachAccent: 'Abordagem',
    aboutPragmatic: 'Engenharia Pragmática',
    aboutSpecialise: 'Em Que Me Especializo',
    aboutSpecialiseItems: [
      'Orquestração de LLM e integração a sistemas de negócio existentes',
      'Pipelines de geração aumentada por recuperação (RAG) e busca semântica',
      'Fluxos de agentes autônomos e automação de processos',
      'Arquitetura de backend, desenho de APIs e pipelines de dados',
      'Avaliação e endurecimento da saída dos modelos para uso em produção',
    ],
    aboutExperienceLead: 'Experiência',
    aboutExperienceAccent: 'Profissional',
    aboutExperienceSubtitle:
      'Nove anos construindo aplicações habilitadas por IA, serviços de backend e integrações entre sistemas.',
    aboutEducationAccent: 'Formação',
    aboutCtaLead: 'Atualmente aberto a',
    aboutCtaAccent: 'novos projetos',
    aboutCtaBody:
      'Se você tem um sistema de IA para projetar, um backend para construir ou um processo que vale a pena automatizar, os trabalhos deste site são a melhor medida de como eu abordaria o seu.',

    expertiseLead: 'Especialidades',
    expertiseAccent: 'Técnicas',
    expertiseSubtitle:
      'Seis áreas em que atuo, da integração de modelos até o banco de dados.',
    processLead: 'Como Eu',
    processAccent: 'Trabalho',
    processSubtitle:
      'O ciclo de entrega que sigo, da primeira conversa à manutenção contínua.',
    expertiseCtaLead: 'Esse stack, aplicado a',
    expertiseCtaAccent: 'sistemas reais',
    expertiseCtaBody:
      'Cada capacidade acima vem de trabalho em produção, não de projetos paralelos. Veja como isso se traduziu na prática.',

    projectsLead: 'Projetos',
    projectsAccent: 'Selecionados',
    projectsSubtitle:
      'Estudos de caso de sistemas em produção e de trabalhos entregues a clientes. Cada cartão indica de onde vem.',
    projectsCtaLead: 'De onde',
    projectsCtaAccent: 'isso vem',
    projectsCtaBody:
      'Nove anos em três funções de engenharia, da integração de IA à arquitetura de backend. O histórico completo está na página sobre.',

    notFoundTitle: 'Página Não Encontrada',
    notFoundHeading: 'Sinal perdido',
    notFoundBody:
      'Essa página não existe ou foi movida. Os projetos e a trajetória continuam todos aqui.',
  },

  meta: {
    homeDescription:
      'Engenheiro Sênior de Software de IA e Python, especializado em arquitetura de IA, integração de LLM e sistemas de software inteligentes.',
    aboutTitle: 'Sobre',
    aboutDescription:
      'Trajetória, experiência profissional e formação de um Engenheiro Sênior de Software de IA e Python.',
    expertiseTitle: 'Especialidades',
    expertiseDescription:
      'Especialidades técnicas em IA e LLMs, orquestração de agentes, engenharia de backend, dados, frontend e prática de engenharia.',
    projectsTitle: 'Projetos',
    projectsDescription:
      'Estudos de caso em pipelines de RAG, fluxos de agentes de IA, avaliação de LLM, serviços de backend, e-commerce, sites em CMS e aplicativos Android.',
  },

  stats: [
    { value: 9, suffix: '+', label: 'Anos de Experiência' },
    { value: 3, suffix: '', label: 'Funções de Engenharia' },
    { value: 2, suffix: '', label: 'Diplomas de Cambridge' },
    { value: 40, suffix: '+', label: 'Tecnologias' },
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
      title: 'IA e LLMs',
      blurb:
        'Projetar e integrar recursos de grandes modelos de linguagem em software de produção, com foco na confiabilidade e na consistência das respostas.',
      items: [
        'OpenAI API e engenharia de prompts',
        'RAG, embeddings e busca semântica',
        'Function calling e saídas estruturadas',
        'Avaliação de LLM e bancos vetoriais',
      ],
    },
    {
      icon: 'fas fa-diagram-project',
      title: 'Agentes de IA e Orquestração',
      blurb:
        'Construir fluxos de agentes autônomos que coordenam modelos, ferramentas e serviços externos para automatizar processos de várias etapas.',
      items: [
        'LangGraph e LlamaIndex',
        'Orquestração de agentes e integração de ferramentas',
        'Automação de fluxos de trabalho',
        'Model Context Protocol (MCP)',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Engenharia de Backend',
      blurb:
        'Arquitetar serviços de backend e APIs confiáveis, seguros e manuteníveis sob carga real de produção.',
      items: [
        'Python, FastAPI e Django',
        'Desenho e integração de APIs REST',
        'Autenticação e validação de requisições',
        'Processamento assíncrono e Node.js',
      ],
    },
    {
      icon: 'fas fa-database',
      title: 'Dados e Armazenamento',
      blurb:
        'Modelar, armazenar e mover dados — do desenho de esquemas relacionais à busca vetorial e aos pipelines de processamento.',
      items: [
        'PostgreSQL, MySQL e MongoDB',
        'Redis e busca vetorial',
        'Pipelines de dados e pré-processamento',
        'Otimização de consultas',
      ],
    },
    {
      icon: 'fas fa-code',
      title: 'Frontend',
      blurb:
        'Construir as interfaces que tornam os sistemas de IA utilizáveis, com um toolchain React moderno e tipado.',
      items: [
        'React e Next.js',
        'TypeScript e JavaScript',
        'Arquitetura de componentes',
        'Interfaces orientadas a API',
      ],
    },
    {
      icon: 'fas fa-screwdriver-wrench',
      title: 'Ferramentas e Prática',
      blurb:
        'A disciplina de engenharia em volta do código: testes, desenho de sistemas e o ferramental que mantém a entrega previsível.',
      items: [
        'Git e testes automatizados',
        'Teste de APIs e desenho de sistemas',
        'Desenvolvimento de SaaS',
        'Integrações com Airtable e Slack',
      ],
    },
  ],

  experience: [
    {
      title: 'Engenheiro Sênior de Software de IA',
      company: 'Together AI',
      period: '07/2023 — Presente',
      location: 'Remoto, Londres, Reino Unido',
      current: true,
      bullets: [
        'Projetei e desenvolvi aplicações baseadas em LLM usando as APIs da OpenAI, Python e frameworks modernos de integração de IA.',
        'Construí fluxos de agentes de IA integrando APIs externas, bancos de dados e ferramentas de negócio para automatizar processos de várias etapas.',
        'Apliquei técnicas de engenharia de prompts, saídas estruturadas e function calling para melhorar a consistência das respostas e a confiabilidade da aplicação.',
        'Desenvolvi serviços de backend e pipelines de processamento de dados para sustentar aplicações orientadas por IA e integrações em tempo real.',
        'Projetei fluxos de geração aumentada por recuperação (RAG) conectando modelos de linguagem a fontes externas de conhecimento para respostas sensíveis ao contexto.',
        'Avaliei as saídas dos LLMs quanto a relevância, precisão, consistência e aderência às instruções, refinando prompts e fluxos a partir dos resultados dos testes.',
        'Contribuí com arquitetura de sistemas, desenho de APIs, tratamento de erros e testes de integração para melhorar a manutenibilidade e o preparo para produção.',
        'Colaborei com as partes interessadas para traduzir requisitos de negócio em especificações técnicas e soluções de IA aplicáveis.',
      ],
    },
    {
      title: 'Desenvolvedor Backend Python',
      company: 'Poolside',
      period: '11/2020 — 06/2023',
      location: 'Remoto, Londres, Reino Unido',
      current: false,
      bullets: [
        'Desenvolvi e mantive serviços de backend em Python e APIs REST que sustentam aplicações web e integrações de terceiros.',
        'Projetei esquemas de banco de dados relacional e otimizei consultas em PostgreSQL e MySQL para garantir acesso confiável aos dados.',
        'Construí pipelines de processamento para validar, transformar e organizar informações para recursos da aplicação e serviços subsequentes.',
        'Integrei APIs externas e sistemas de negócio, implementando autenticação, validação de requisições, tratamento de erros e registro de logs.',
        'Desenvolvi testes automatizados para validar o comportamento das APIs, identificar regressões e aumentar a confiabilidade do software.',
        'Melhorei o desempenho e a manutenibilidade da aplicação por meio de refatoração, otimização de banco de dados e componentes de backend reutilizáveis.',
        'Dei suporte à implantação, à resolução de problemas e à manutenção contínua nos ambientes de desenvolvimento e produção.',
        'Trabalhei com o time de frontend e outras partes interessadas para definir contratos de API e entregar funcionalidades de ponta a ponta.',
      ],
    },
    {
      title: 'Desenvolvedor de IA e Engenheiro de Integração',
      company: 'Thinking Machines Lab',
      period: '02/2017 — 10/2020',
      location: 'Remoto, Londres, Reino Unido',
      current: false,
      bullets: [
        'Desenvolvi recursos habilitados por IA usando Python e APIs de modelos de linguagem, integrando essas capacidades a fluxos de software já existentes.',
        'Construí integrações de API conectando aplicações web, bancos de dados e ferramentas de negócio de terceiros.',
        'Projetei fluxos automatizados para simplificar processos repetitivos e coordenar a interação entre serviços externos.',
        'Implementei componentes de backend em Python e Django, endpoints REST e integrações com PostgreSQL.',
        'Desenvolvi e refinei prompts e avaliei as respostas dos modelos frente aos requisitos das tarefas, documentando falhas e identificando oportunidades de melhoria.',
        'Criei cenários de teste para avaliar a qualidade das respostas, a consistência das saídas e o comportamento das integrações em entradas representativas.',
        'Implementei validação de dados, tratamento de exceções e registro de logs para aumentar a confiabilidade das integrações e simplificar a depuração.',
        'Coordenei levantamento de requisitos, desenho técnico, implementação, testes, implantação e manutenção contínua.',
        'Documentei arquitetura de sistemas, comportamento de APIs e procedimentos de integração para apoiar a manutenibilidade e a evolução futura.',
      ],
    },
  ],

  education: [
    {
      degree: 'Mestrado em Ciência da Computação Avançada',
      school: 'University of Cambridge',
      period: '2019 — 2020',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: 'Bacharelado em Ciência da Computação',
      school: 'University of Cambridge',
      period: '2016 — 2019',
      icon: 'fas fa-user-graduate',
    },
  ],

  differentiators: [
    {
      icon: 'fas fa-compass-drafting',
      title: 'Abordagem Orientada pela Engenharia',
      text: 'Uma abordagem pragmática e orientada pela engenharia para desafios técnicos complexos — as decisões de projeto nascem de restrições e evidências, não de novidade.',
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'Confiabilidade e Segurança',
      text: 'Forte atenção a confiabilidade, escalabilidade, segurança e manutenibilidade, com validação, tratamento de exceções e logs previstos desde o início.',
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Ciclo Completo de Entrega',
      text: 'Do levantamento de requisitos e do desenho técnico à implementação, aos testes, à implantação e à manutenção contínua.',
    },
    {
      icon: 'fas fa-brain-circuit',
      title: 'Profundidade em Integração de IA',
      text: 'Especializado em orquestração de LLM, pipelines de RAG e integração de recursos de IA a sistemas de negócio existentes, e não em demonstrações do zero.',
    },
    {
      icon: 'fas fa-people-arrows',
      title: 'Tradução para as Partes Interessadas',
      text: 'Experiência em traduzir requisitos de negócio em especificações técnicas e soluções de IA que as pessoas realmente usam.',
    },
    {
      icon: 'fas fa-book-open',
      title: 'Documentado e Manutenível',
      text: 'Arquitetura de sistemas, comportamento de APIs e procedimentos de integração documentados para sustentar a manutenção e a evolução futura.',
    },
  ],

  process: [
    {
      step: '01',
      icon: 'fas fa-comments',
      title: 'Descoberta',
      text: 'Levantamento de requisitos com as partes interessadas, traduzindo objetivos de negócio em especificações técnicas e uma definição clara de pronto.',
    },
    {
      step: '02',
      icon: 'fas fa-sitemap',
      title: 'Desenho Técnico',
      text: 'Arquitetura de sistemas, contratos de API, modelagem de dados e estratégia de tratamento de erros acordados antes de começar a implementação.',
    },
    {
      step: '03',
      icon: 'fas fa-code-branch',
      title: 'Construir e Avaliar',
      text: 'Implementação iterativa com testes automatizados, testes de API e avaliação estruturada das saídas do modelo frente aos requisitos da tarefa.',
    },
    {
      step: '04',
      icon: 'fas fa-rocket',
      title: 'Implantar e Manter',
      text: 'Implantação entre ambientes, otimização de desempenho e consultas, documentação, resolução de problemas e manutenção contínua.',
    },
  ],

  filters: {
    all: 'Todos',
    ai: 'IA e LLMs',
    backend: 'Backend',
    data: 'Dados',
    ecommerce: 'E-commerce',
    wordpress: 'WordPress',
    android: 'Android',
    fullstack: 'Full-stack',
  },

  categories: {
    'AI & LLMs': 'IA e LLMs',
    'AI Agents': 'Agentes de IA',
    Backend: 'Backend',
    Data: 'Dados',
    Integration: 'Integração',
    'E-commerce': 'E-commerce',
    WordPress: 'WordPress',
    'Static Site': 'Site Estático',
    Webflow: 'Webflow',
    'Web App': 'Aplicação Web',
    'AI Platform': 'Plataforma de IA',
    Web3: 'Web3',
    Agency: 'Agência',
    'Headless CMS': 'CMS Headless',
    Fintech: 'Fintech',
    'Next.js': 'Next.js',
    'SaaS Platform': 'Plataforma SaaS',
    Android: 'Android',
  },

  projects: ptProjects,
};
