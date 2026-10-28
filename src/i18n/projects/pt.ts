import type { ProjectText } from '../types';

/**
 * Portuguese (Brazil) card words, keyed by slug.
 *
 * Brand names, product names and place names are left as they are written by
 * the companies themselves — "Secret Spa", "GLUCOCARD", "Park Mansion Minami
 * Azabu" — because translating them would make the cards harder to match to
 * the sites they link to, not easier.
 */
export const ptProjects: Record<string, ProjectText> = {
  'rag-pipelines': {
    title: 'Pipelines de Geração Aumentada por Recuperação',
    description:
      'Desenhei fluxos de RAG conectando modelos de linguagem a fontes de conhecimento externas, de modo que as respostas se apoiem no contexto real da organização e não apenas na memória do modelo.',
    alt: 'Prateleiras lotadas de livros, representando um acervo externo de conhecimento',
    source: 'Engenheiro Sênior de Software de IA, Together AI',
  },
  'agent-workflows': {
    title: 'Fluxos de Agentes de IA Autônomos',
    description:
      'Construí fluxos de agentes que integram APIs externas, bancos de dados e ferramentas de negócio para automatizar processos de múltiplas etapas de ponta a ponta, substituindo as passagens manuais entre sistemas.',
    alt: 'Um robô de atendimento humanoide, representando um agente de software autônomo',
    source: 'Engenheiro Sênior de Software de IA, Together AI',
  },
  'llm-evaluation': {
    title: 'Avaliação de LLM e Confiabilidade de Prompts',
    description:
      'Avaliei as saídas dos modelos quanto a relevância, precisão, consistência e aderência às instruções, e então refinei prompts e fluxos a partir desses resultados para tornar o comportamento da aplicação previsível.',
    alt: 'Um gráfico de linha luminoso subindo sobre um campo escuro de barras de dados',
    source: 'Engenheiro Sênior de Software de IA, Together AI',
  },
  'backend-services': {
    title: 'Serviços de Backend e APIs REST em Produção',
    description:
      'Desenvolvi e mantive serviços de backend em Python e APIs REST que sustentam aplicações web e integrações de terceiros, incluindo implantação, resolução de problemas e manutenção contínua.',
    alt: 'Fileiras de racks de servidores iluminados em um corredor de data center',
    source: 'Desenvolvedor Backend Python, Poolside',
  },
  'data-pipelines': {
    title: 'Pipelines de Dados e Modelagem de Esquemas',
    description:
      'Projetei esquemas relacionais e otimizei consultas em PostgreSQL e MySQL, e construí pipelines que validam, transformam e organizam informações para recursos da aplicação e serviços subsequentes.',
    alt: 'Um conjunto de discos rígidos e suas placas controladoras',
    source: 'Desenvolvedor Backend Python, Poolside',
  },
  'system-integration': {
    title: 'Integração de Sistemas de Negócio e APIs',
    description:
      'Integrei APIs externas e sistemas de negócio com autenticação, validação de requisições, tratamento de erros e registro de logs — além de fluxos automatizados que coordenam a interação entre serviços externos.',
    alt: 'Uma constelação de nós conectados formando uma rede',
    source: 'Desenvolvedor de IA e Engenheiro de Integração, Thinking Machines Lab',
  },
  theayurved: {
    title: 'The Ayurved — Loja de Produtos Ayurvédicos',
    description:
      'Loja virtual de um fabricante ayurvédico certificado W-GMP e ISO em Haridwar, com suplementos fitoterápicos como Hepato Care, Triphala e Ojas, além de agendamento de terapia Panchakarma e consultas, com políticas de envio, pagamento e devolução e checkout RuPay.',
    alt: 'Uma pessoa meditando em uma floresta verde e densa ao amanhecer',
  },
  onlymassage: {
    title: 'Onlymassage — Marketplace de Bem-Estar',
    description:
      'Marketplace de dois lados para agendar massagem, fisioterapia e tratamentos de spa. Os clientes buscam por serviço e data em oito categorias de tratamento; os profissionais entram por um portal próprio. Multilíngue, com contas para os dois lados do mercado.',
    alt: 'Uma massoterapeuta atendendo um cliente, sob o logotipo da Onlymassage',
  },
  secretspa: {
    title: 'Secret Spa — Beleza Agendada em Casa',
    description:
      'Plataforma londrina de agendamento de beleza e bem-estar a domicílio. Os clientes reservam profissionais verificados e testados tecnicamente para cabelo, unhas, massagem, limpeza de pele, depilação, soroterapia e estética entre 6h e 22h, com avaliações, rastreamento ao vivo, pontos de fidelidade e vale-presente.',
    alt: 'Mãos com manicure diante de um notebook ao lado de um retrato de beleza, na identidade da Secret Spa',
  },
  dogsushi: {
    title: 'DogSushi — Descoberta de Jogos na Steam',
    description:
      'Aplicativo web progressivo instalável para encontrar jogos de PC, exibindo notas da Steam, avaliações e recomendações personalizadas. Construído como uma SPA renderizada no cliente, com instalação que funciona offline e interface que nasce no modo escuro.',
    alt: 'O logotipo da DogSushi, um shiba inu em forma de sushi',
  },
  vibrantpharma: {
    title: 'Vibrant Pharma — Catálogo de CRO Química',
    description:
      'Site e catálogo de produtos de uma organização canadense de pesquisa por contrato em Brantford, Ontário, que oferece síntese sob medida, química medicinal e de processos. O visitante busca compostos por nome, categoria, número de catálogo, CAS ou MDL e compra por um carrinho WooCommerce.',
    alt: 'Vidraria de laboratório sobre a bancada de um laboratório de síntese',
  },
  goprogarage: {
    title: 'Go Pro Garage Door — Serviços na Flórida',
    description:
      'Site de geração de leads para uma empresa de reparo e instalação de portas de garagem na Flórida, feito para transformar busca local em ligações. Páginas de serviço, galeria de obras e blocos de chamada para ação em todo o site, com Google Site Kit ligado para relatórios de busca e analytics.',
    alt: 'O interior de uma porta de garagem residencial e seu mecanismo de trilhos',
  },
  urogyn: {
    title: 'Urogyn — Clínica Especializada em Estocolmo',
    description:
      'Site em sueco de uma das principais clínicas de urologia, ginecologia e uroterapia de Estocolmo. Apresenta as áreas de tratamento e o perfil dos profissionais e encaminha o paciente ao especialista certo, sobre uma base Hello Elementor leve, escolhida por desempenho.',
    alt: 'A entrada de vidro da clínica Urogyn em Estocolmo',
  },
  pulsesante: {
    title: 'Pulse Santé — Site de SaaS para Saúde',
    description:
      'Site institucional em francês de uma plataforma integrada de gestão (PSDM) usada por prestadores de atenção domiciliar e fornecedores de equipamentos médicos. As páginas de produto e de recursos levam ao pedido de demonstração, sobre tema sob medida em vez de construtor de páginas.',
    alt: 'A interface do software Pulse Santé exibindo o prontuário de um paciente',
  },
  aesthetika: {
    title: 'Aesthetika Dental Studio — Clínica Odontológica',
    description:
      'Site de uma clínica odontológica particular em Kingston upon Thames, cobrindo check-ups, higiene, Invisalign e implantes. As páginas de tratamento trazem prova social de mais de 250 avaliações no Google, com WP Rocket cuidando de cache e otimização em um site pesado em mídia.',
    alt: 'Dois dentistas diante da fachada do Aesthetika Dental Studio',
  },
  bertolla: {
    title: 'Ivan Bertolla — Portfólio de Compositor',
    description:
      'Site oficial de um compositor, guitarrista e produtor australiano cuja música de produção assina grandes eventos. Uma presença enxuta, feita à mão, que apresenta o catálogo e os créditos, sem CMS por trás.',
    alt: 'A capa do álbum de trailers orquestrais Epic Battle, de Ivan Bertolla',
  },
  klens: {
    title: 'Klens — Lançamento de Dispositivo Cirúrgico',
    description:
      'Site de produto de um dispositivo de uso único, desenvolvido em parceria com a Mayo Clinic, que limpa a lente do laparoscópio sem retirá-lo do paciente. Expõe o problema clínico com evidências citadas e converte cirurgiões e redes de saúde em contatos comerciais.',
    alt: 'Uma mão enluvada segurando um laparoscópio durante uma cirurgia por vídeo',
  },
  cascade: {
    title: 'CASCADE — Base de Dados do Cuidado em HIV',
    description:
      'Base de dados de pesquisa da McMaster University com 349 ensaios clínicos e 74.375 participantes, de 1995 a 2023. Os ensaios podem ser filtrados por faixa de renda, população, cenário de cuidado e tipo de intervenção, com gráficos de tendência interativos e exportação em CSV ou JSON.',
    alt: 'A marca nominativa da base de dados CASCADE sobre o cuidado em HIV',
  },
  jimeng: {
    title: 'Jimeng AI — Estúdio Generativo de Imagem e Vídeo',
    description:
      'Plataforma criativa em chinês que gera imagens e vídeos a partir de um prompt ou de um quadro de referência. Abrange um estúdio de microdramas, uma tela multicamadas com preenchimento, expansão e recorte, controle do primeiro ao último quadro do movimento, e planos por créditos que liberam cada geração de modelo.',
    alt: 'A marca da Jimeng AI sobre um retrato gerado por IA',
  },
  lialive: {
    title: 'LIA — Agente de Voz Conversacional com IA',
    description:
      'Agente de voz que atende vendas, suporte, busca e reservas em site, celular, WhatsApp, Instagram e loja física. Conduz transações de ponta a ponta contra a disponibilidade real, negocia e faz venda adicional, troca de idioma no meio da conversa e transfere para um humano com todo o contexto quando necessário.',
    alt: 'A marca nominativa LIA em letras com gradiente sobre fundo preto',
  },
  platformz: {
    title: 'Platformz — Planejamento de Negócios com IA',
    description:
      'O Platbot transforma uma ideia ou um problema operacional em um plano de entrega orçado — requisitos, escopo, conceito de página inicial, topologia, cronograma e investimento estimado — entregue como um PDF de projeto. Os caminhos cobrem marketplaces, lançamento no varejo, venda internacional, agentes de IA e automação de processos.',
    alt: 'O banner da Platformz com os dizeres Command Everything, Blueprint and Build Anything',
  },
  moonlitdev: {
    title: 'MoonLit — Painel de Staking e Rendimento DeFi',
    description:
      'Front-end de staking que anuncia 19,9% de APY, com painel conectado à carteira mostrando o valor em staking, pontos diários e recompensas da temporada. Exibe o histórico de APY do contrato inteligente, trata depósito e saque e opera um programa de indicação sobre os incentivos do token $MOON.',
    alt: 'O painel de ganhos da MoonLit mostrando uma curva de rendimento subindo até US$ 5,46 mil',
  },
  dialedweb: {
    title: 'Dialedweb — Estúdio de Web e Motion',
    description:
      'Site de um estúdio que vende trabalho premium de web e motion, em que o portfólio é o próprio argumento: dez projetos de clientes aparecem como prévias em vídeo e não como capturas de tela, apoiados por depoimentos assinados pelos fundadores que os contrataram.',
    alt: 'Um notebook sobre um pedestal exibindo um site de cliente da Dialedweb para uma marca de bebidas',
  },
  waraqlabs: {
    title: 'Waraq Labs — Agência de Desenvolvimento',
    description:
      'Agência de desenvolvimento sediada no Paquistão que constrói seu argumento contra as falhas habituais da terceirização — prazos estourados, código frágil, orçamentos que crescem depois da assinatura — e responde a cada uma com entregas semanais, CI/CD com cobertura real de testes e estimativas honestas desde o início.',
    alt: 'O monograma da Waraq Labs',
  },
  asmobius: {
    title: 'Archi Site Mobius — Portfólio de Arquitetura',
    description:
      'Portfólio bilíngue de um escritório de arquitetura de Tóquio, apresentando residências e vilas como Park Mansion Minami Azabu e Sevens Villa Karuizawa. Um front-end empacotado à mão exibe os projetos enquanto o WordPress fica atrás, servindo apenas como superfície de edição.',
    alt: 'Um interior minimalista de concreto e vidro de um projeto do Archi Site Mobius',
  },
  lazzaglobal: {
    title: 'Lazza Global — Plataforma de Investimento com IA',
    description:
      'Plataforma de investimento em espanhol que combina um produto de renda fixa anunciado a 1% ao mês com um algoritmo de renda variável guiado por IA e negociação ao vivo em cripto, ações e índices. Traz navegador de mercado, visão de carteira, comparação lado a lado dos planos e um back office para saques e relatórios.',
    alt: 'O banner da Lazza Global com tokens de cripto sobre um globo escuro',
  },
  hammerai: {
    title: 'HammerAI — Chat de Personagens Privado',
    description:
      'Plataforma de conversa e roleplay com personagens cuja premissa é a privacidade: os modelos rodam nos servidores hospedados ou inteiramente na máquina do próprio usuário, via Ollama no aplicativo de desktop, de modo que as conversas nunca precisam sair dali. Acrescenta geração de imagens, escrita de histórias, conversa em grupo, lorebooks e personas em desktop, iOS e web.',
    alt: 'A marca nominativa HammerAI e o ícone de martelo sobre fundo preto',
  },
  arkrayusa: {
    title: 'ARKRAY USA — Site de Produtos de Diagnóstico',
    description:
      'Site norte-americano de uma fabricante global de cuidado em diabetes e diagnóstico clínico, com a linha de medidores GLUCOCARD, a linha profissional Assure e os analisadores ADAMS e AUTION. Apoia profissionais de saúde com treinamento, manuais, fichas de segurança e localizador de produtos, sob um seletor de região que cobre quatro continentes.',
    alt: 'Três medidores de glicose GLUCOCARD Shine com tiras de teste',
  },
  biancasantini: {
    title: 'Bianca Santini — Joias Autorais Artesanais',
    description:
      'Loja brasileira de joias artesanais em prata 925 com pedras naturais e pérolas, cada gema creditada à cidade mineira de onde veio. A navegação acontece tanto por pedra quanto por peça, com frete grátis a partir de um valor, parcelamento sem juros, entrega rastreada com seguro e garantia de um ano.',
    alt: 'Um brinco artesanal de prata e pedra usado por uma modelo',
  },
  melosacilotto: {
    title: 'Melo Sacilotto — Equiparação Hospitalar',
    description:
      'Site de campanha de um escritório brasileiro especializado em Equiparação Hospitalar, o benefício de 1995 que permite a clínicas qualificadas serem tributadas como hospitais e reduzir impostos federais em até 70%. Apresenta os requisitos, o processo em cinco etapas, da análise ao monitoramento, e os mais de R$ 50 milhões já recuperados para clientes.',
    alt: 'Uma advogada fotografada de perfil contra um fundo escuro',
  },
  eventoirreplicavel: {
    title: 'Irreplicável — Página de Evento Presencial',
    description:
      'Página de conversão com um único objetivo, para uma imersão presencial de duas horas no Brasil, construída em torno de uma data com horário de check-in, compra de ingresso e selos das bandeiras de cartão. Lidera com depoimentos de participantes e uma promessa estruturada que termina em um plano de ação de 90 dias.',
    alt: 'O anfitrião do evento fotografado sentado sob luz baixa',
  },
  drajulianamattos: {
    title: 'Dra. Juliana Mattos — Ortodontia e Sono',
    description:
      'Site de um consultório odontológico da Bahia que atua em ortodontia, Invisalign e odontologia do sono para ronco e apneia, com conteúdos explicativos sobre tratamentos publicados como blog educativo para converter busca em consultas agendadas.',
    alt: 'Um painel com o nome Dra. Juliana Mattos sobre o domínio do site',
  },
  yurirocha: {
    title: 'Yuri Rocha Advocacia — Escritório e Blog Jurídico',
    description:
      'Site de um escritório de advocacia do Espírito Santo que atua em contratos, contencioso, mediação e demandas bancárias de consumo. Um blog publicado com regularidade explica direitos como usucapião, ajuda de custo militar e tarifas bancárias cobradas indevidamente, transformando busca em consultas.',
    alt: 'O monograma do Yuri Rocha Advocacia com a figura da Justiça',
  },
  gruporesolucao: {
    title: 'Grupo Resolução — Engenharia Industrial',
    description:
      'Site de uma empresa paulista de engenharia elétrica e facilities com vinte anos de atuação, cobrindo projetos de baixa e média tensão, automação industrial, instalações fotovoltaicas, climatização e laudos de conformidade NR-10, AVCB e CLCB. Cada página de serviço leva a um pedido de orçamento.',
    alt: 'Um eletricista trabalhando em um quadro de distribuição elétrica industrial',
  },
  nosdapolitica: {
    title: 'Nós da Política — Plataforma de Educação Cidadã',
    description:
      'Publicação brasileira independente que torna a vida pública legível: qual esfera de governo decide o quê, como o orçamento participativo funciona de fato e por que as mulheres seguem minoria nos cargos apesar de serem maioria nas urnas. Combina um blog em formato de revista com cursos e materiais gratuitos.',
    alt: 'Uma reunião comunitária em andamento, com moradores sentados em círculo',
  },
  rudderconsultoria: {
    title: 'Rudder Consultoria — Estratégia Financeira e Tributária',
    description:
      'Site de uma consultoria brasileira que atua em estruturação financeira, tributária e societária — organização de fluxo de caixa, reestruturação de dívidas, apoio em fusões e aquisições, revisão tributária e planejamento sucessório — apresentada por páginas de serviço orientadas a resultado que levam ao agendamento de um diagnóstico estratégico.',
    alt: 'Um leme de navio desenhado como a marca da Rudder Consultoria',
  },
  conexaotropical: {
    title: 'Conexão Tropical — Mercearia Brasileira',
    description:
      'Loja online que leva alimentos e marcas brasileiras a clientes na Suíça e em Liechtenstein, operada ao lado de uma loja física em Genebra, com entrega local e envio prioritário para todo o país.',
    alt: 'Um painel com o nome Conexão Tropical sobre o domínio do site',
  },
  vetdomus: {
    title: 'Vet Domus — Hospital Veterinário 24h',
    description:
      'Site de um hospital veterinário 24 horas em Pinheiros, São Paulo, com certificação Cat Friendly Gold, conquistada por manter espera, consultório e internação de felinos separados e longe de latidos. Apresenta emergência, cirurgia, diagnóstico por imagem digital, laboratório próprio, fisioterapia e mais de 15 especialidades.',
    alt: 'O prédio do hospital Vet Domus e sua fachada com letreiro',
  },
  costalaw: {
    title: 'Costa Law — Direito Empresarial e Tecnologia',
    description:
      'Site trilíngue de um escritório paulista de direito empresarial, construído em torno do estudo de caso DocuSign: eSignature, IAM, Maestro e Navigator substituíram um processo que havia acumulado cinco rejeições judiciais de documentos assinados digitalmente. Cobre ainda due diligence em M&A, governança e conformidade com a LGPD.',
    alt: 'O fundador da Costa Law retratado diante de um escritório desfocado',
  },
  contabilissimo: {
    title: 'Contabilíssimo — Contabilidade para E-commerce',
    description:
      'Serviço de contabilidade totalmente digital para lojistas brasileiros online, que se conecta a Mercado Livre, Shopify e Nuvemshop para puxar as vendas e emitir notas automaticamente. Acrescenta folha de pagamento e eSocial, planejamento tributário e uma migração de dez dias a partir do contador atual, por trás de uma conta com acesso por passkey.',
    alt: 'O topo do site da Contabilíssimo prometendo contabilidade 100% digital para e-commerce',
  },
  interakt: {
    title: 'Interakt — Plataforma WhatsApp Business',
    description:
      'Plataforma de relacionamento com o cliente usada por mais de 100 mil empresas, construída sobre a API do WhatsApp Business e estendida a Instagram, RCS e voz. Reúne um construtor de chatbot sem código, um CRM de vendas centrado no WhatsApp, uma caixa de entrada compartilhada e ferramentas de campanha — e, quando uma mensagem de WhatsApp falha na entrega, recorre ao RCS em vez de perder o cliente.',
    alt: 'O topo do site da Interakt mostrando uma conversa de loja no WhatsApp em um celular',
  },
  aleyaai: {
    title: 'AleyaAI — Agência de IA e Automação',
    description:
      'Agência que constrói agentes de IA, chatbots, IA de voz e automações de WhatsApp para clientes nos Estados Unidos, no Golfo e no Paquistão, organizada em quatro frentes que cobrem estratégia, design, construção e crescimento. Vende por escopo fechado e lançamento em duas a quatro semanas, com transferência para humano prevista no projeto e entregas aderentes a HIPAA e GDPR.',
    alt: 'O banner da AleyaAI com os dizeres “Your AI-first partner”',
  },
  easy3p: {
    title: 'Easy3P — App de Relacionamento para Casais e Solteiros',
    description:
      'Aplicativo de relacionamento que trata um casal como uma conta única, permitindo que duas pessoas se apresentem e deem match por um só perfil. O match por swipe abre a conversa quando há interesse mútuo, ao lado de métricas de curtidas e visitas ao perfil, eventos privados criados por membros e um nível VIP que libera conversa imediata e recuperação de perfis descartados. Nota 4,1 em mais de 5.300 avaliações.',
    alt: 'Uma captura de tela da loja mostrando um perfil conjunto de casal no Easy3P',
  },
  zynq: {
    title: 'Zynq — App de Relacionamento Moderno',
    description:
      'Aplicativo de relacionamento construído em torno do controle do usuário sobre sua exposição. A localização é aproximada por decisão de projeto — mostra-se a distância, nunca as coordenadas exatas, e a permissão pode ser simplesmente negada. Acrescenta verificação de foto revisada por pessoas, bloqueio que desfaz um match existente, exclusão da conta pelo próprio app e níveis Gold e Platinum sobre um plano gratuito. Não exibe publicidade.',
    alt: 'A tela de descoberta do Zynq com um cartão de perfil e os botões de curtir e dispensar',
  },
  wild: {
    title: 'Wild — App de Relacionamento com Perfis Verificados',
    description:
      'Aplicativo de relacionamento cujo diferencial é provar que a pessoa é real: o AWS Rekognition Face Liveness verifica cada perfil, apoiado por detecção de golpes com IA e revisão manual. Acrescenta busca por intenção, para que quem procura algo sério e quem procura algo casual não se cruzem, encontros locais, navegação anônima com fotos liberadas apenas para matches e um nível SVIP para mensagens antes do match. Nota 4,1 em mais de 54 mil avaliações.',
    alt: 'Uma peça da loja do Wild com o título “Casual Fun”',
  },
  csl: {
    title: 'CSL — App de Relacionamento Casual da Joyride',
    description:
      'Aplicativo de relacionamento da Joyride GmbH, estúdio por trás do Jaumo, que faz match pela intenção declarada em vez de navegação aberta. A privacidade é o padrão e não um ajuste: o perfil pode ficar oculto para os próprios contatos do celular e as fotos seguem privadas até serem liberadas. Perfis verificados e mensagens de voz em todo o app. Nota 4,5 em mais de 338 mil avaliações — o app mais avaliado deste conjunto.',
    alt: 'Uma peça da loja do CSL com o título “Casual & Fun. For Everyone.” e a marca de 50 milhões de downloads',
  },
};
