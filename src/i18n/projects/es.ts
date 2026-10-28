import type { ProjectText } from '../types';

/**
 * Spanish card words, keyed by slug.
 *
 * Brand, product and place names are left as the companies write them —
 * "Secret Spa", "GLUCOCARD", "Park Mansion Minami Azabu" — so each card still
 * matches the site it links to.
 */
export const esProjects: Record<string, ProjectText> = {
  'rag-pipelines': {
    title: 'Pipelines de Generación Aumentada por Recuperación',
    description:
      'Diseñé flujos de RAG que conectan modelos de lenguaje con fuentes de conocimiento externas, de modo que las respuestas se apoyen en el contexto real de la organización y no solo en la memoria del modelo.',
    alt: 'Estanterías repletas de libros, como representación de un corpus externo de conocimiento',
    source: 'Ingeniero Sénior de Software de IA, Together AI',
  },
  'agent-workflows': {
    title: 'Flujos de Agentes de IA Autónomos',
    description:
      'Construí flujos de agentes que integran APIs externas, bases de datos y herramientas de negocio para automatizar procesos de varios pasos de principio a fin, sustituyendo los traspasos manuales entre sistemas.',
    alt: 'Un robot de servicio humanoide, como representación de un agente de software autónomo',
    source: 'Ingeniero Sénior de Software de IA, Together AI',
  },
  'llm-evaluation': {
    title: 'Evaluación de LLM y Fiabilidad de Prompts',
    description:
      'Evalué las salidas de los modelos en relevancia, precisión, coherencia y cumplimiento de instrucciones, y después afiné prompts y flujos a partir de esos resultados para que el comportamiento de la aplicación fuera predecible.',
    alt: 'Un gráfico de líneas luminoso que asciende sobre un campo oscuro de barras de datos',
    source: 'Ingeniero Sénior de Software de IA, Together AI',
  },
  'backend-services': {
    title: 'Servicios de Backend y APIs REST en Producción',
    description:
      'Desarrollé y mantuve servicios de backend en Python y APIs REST que sostienen aplicaciones web e integraciones de terceros, incluyendo despliegue, resolución de incidencias y mantenimiento continuo.',
    alt: 'Filas de racks de servidores iluminados en un pasillo de centro de datos',
    source: 'Desarrollador Backend Python, Poolside',
  },
  'data-pipelines': {
    title: 'Pipelines de Datos y Diseño de Esquemas',
    description:
      'Diseñé esquemas relacionales y optimicé consultas en PostgreSQL y MySQL, y construí pipelines que validan, transforman y organizan la información para funciones de la aplicación y servicios posteriores.',
    alt: 'Un conjunto de discos duros y sus placas controladoras',
    source: 'Desarrollador Backend Python, Poolside',
  },
  'system-integration': {
    title: 'Integración de Sistemas de Negocio y APIs',
    description:
      'Integré APIs externas y sistemas de negocio con autenticación, validación de peticiones, gestión de errores y registro de trazas, además de flujos automatizados que coordinan la interacción entre servicios externos.',
    alt: 'Una constelación de nodos conectados formando una red',
    source: 'Desarrollador de IA e Ingeniero de Integración, Thinking Machines Lab',
  },
  theayurved: {
    title: 'The Ayurved — Tienda de Productos Ayurvédicos',
    description:
      'Tienda en línea de un fabricante ayurvédico certificado W-GMP e ISO en Haridwar, con complementos de fitoterapia como Hepato Care, Triphala y Ojas, además de reserva de terapia Panchakarma y consultas, con políticas de envío, pago y devolución y pago con RuPay.',
    alt: 'Una persona meditando en un bosque verde y denso al amanecer',
  },
  onlymassage: {
    title: 'Onlymassage — Marketplace de Bienestar',
    description:
      'Marketplace de dos caras para reservar masaje, fisioterapia y tratamientos de spa. Los clientes buscan por servicio y fecha en ocho categorías de tratamiento; los profesionales se dan de alta por un portal propio. Multilingüe, con cuentas para ambos lados del mercado.',
    alt: 'Una masajista atendiendo a un cliente, bajo el logotipo de Onlymassage',
  },
  secretspa: {
    title: 'Secret Spa — Belleza a Domicilio bajo Reserva',
    description:
      'Plataforma londinense de reserva de belleza y bienestar a domicilio. Los clientes contratan profesionales verificados y evaluados técnicamente para peluquería, uñas, masaje, faciales, depilación, sueroterapia y estética entre las 6 y las 22 h, con valoraciones, seguimiento en vivo, puntos de fidelidad y tarjetas regalo.',
    alt: 'Manos con manicura ante un portátil junto a un retrato de belleza, con la identidad de Secret Spa',
  },
  dogsushi: {
    title: 'DogSushi — Descubrimiento de Juegos en Steam',
    description:
      'Aplicación web progresiva instalable para encontrar juegos de PC, que muestra valoraciones de Steam, reseñas y recomendaciones personalizadas. Construida como una SPA renderizada en el cliente, con instalación que funciona sin conexión e interfaz pensada en modo oscuro.',
    alt: 'El logotipo de DogSushi, un shiba inu con forma de sushi',
  },
  vibrantpharma: {
    title: 'Vibrant Pharma — Catálogo de CRO Química',
    description:
      'Sitio y catálogo de producto de una organización canadiense de investigación por contrato en Brantford, Ontario, que ofrece síntesis a medida, química medicinal y de procesos. El visitante busca compuestos por nombre, categoría, número de catálogo, CAS o MDL y compra mediante un carrito WooCommerce.',
    alt: 'Material de vidrio de laboratorio sobre la mesa de un laboratorio de síntesis',
  },
  goprogarage: {
    title: 'Go Pro Garage Door — Servicios en Florida',
    description:
      'Sitio de captación de clientes para una empresa de reparación e instalación de puertas de garaje en Florida, hecho para convertir la búsqueda local en llamadas. Páginas de servicio, galería de trabajos y bloques de llamada a la acción en todo el sitio, con Google Site Kit conectado para informes de búsqueda y analítica.',
    alt: 'El interior de una puerta de garaje residencial y su mecanismo de guías',
  },
  urogyn: {
    title: 'Urogyn — Clínica Especializada en Estocolmo',
    description:
      'Sitio en sueco de una de las principales clínicas de urología, ginecología y uroterapia de Estocolmo. Presenta las áreas de tratamiento y el perfil de los profesionales y dirige al paciente al especialista adecuado, sobre una base ligera Hello Elementor elegida por rendimiento.',
    alt: 'La entrada acristalada de la clínica Urogyn en Estocolmo',
  },
  pulsesante: {
    title: 'Pulse Santé — Sitio de SaaS Sanitario',
    description:
      'Sitio corporativo en francés de una plataforma integral de gestión (PSDM) usada por proveedores de atención domiciliaria y distribuidores de equipamiento médico. Las páginas de producto y de funciones conducen a la solicitud de demostración, sobre un tema a medida en lugar de un maquetador.',
    alt: 'La interfaz del software Pulse Santé mostrando la ficha de un paciente',
  },
  aesthetika: {
    title: 'Aesthetika Dental Studio — Clínica Dental Privada',
    description:
      'Sitio de una clínica dental privada en Kingston upon Thames, con revisiones, higiene, Invisalign e implantes. Las páginas de tratamiento aportan prueba social de más de 250 reseñas de Google, con WP Rocket encargado de la caché y la optimización en un sitio cargado de material audiovisual.',
    alt: 'Dos dentistas ante el rótulo de Aesthetika Dental Studio',
  },
  bertolla: {
    title: 'Ivan Bertolla — Portafolio de Compositor',
    description:
      'Sitio oficial de un compositor, guitarrista y productor australiano cuya música de producción firma grandes eventos. Una presencia escueta, hecha a mano, que muestra el catálogo y los créditos, sin CMS detrás.',
    alt: 'La portada del álbum de tráileres orquestales Epic Battle, de Ivan Bertolla',
  },
  klens: {
    title: 'Klens — Lanzamiento de Dispositivo Quirúrgico',
    description:
      'Sitio de producto de un dispositivo de un solo uso, desarrollado junto a la Mayo Clinic, que limpia la lente del laparoscopio sin retirarlo del paciente. Plantea el problema clínico con evidencia citada y convierte a cirujanos y sistemas de salud en contactos comerciales.',
    alt: 'Una mano enguantada sosteniendo un laparoscopio durante una cirugía mínimamente invasiva',
  },
  cascade: {
    title: 'CASCADE — Base de Datos de la Cascada del VIH',
    description:
      'Base de datos de investigación de McMaster University con 349 ensayos clínicos y 74.375 participantes, de 1995 a 2023. Los ensayos se filtran por nivel de renta, población, entorno asistencial y tipo de intervención, con gráficos de tendencia interactivos y exportación en CSV o JSON.',
    alt: 'El logotipo tipográfico de la base de datos CASCADE sobre la cascada de atención del VIH',
  },
  jimeng: {
    title: 'Jimeng AI — Estudio Generativo de Imagen y Vídeo',
    description:
      'Plataforma creativa en chino que genera imágenes y vídeo a partir de un prompt o de un fotograma de referencia. Incluye un estudio de microdramas, un lienzo multicapa con relleno, expansión y recorte, control del movimiento del primer al último fotograma, y planes por créditos que habilitan cada generación de modelo.',
    alt: 'La marca de Jimeng AI sobre un retrato generado por IA',
  },
  lialive: {
    title: 'LIA — Agente de Voz Conversacional con IA',
    description:
      'Agente de voz que atiende ventas, soporte, búsqueda y reservas en web, móvil, WhatsApp, Instagram y tienda física. Ejecuta transacciones completas contra la disponibilidad real, negocia y hace venta adicional, cambia de idioma a mitad de conversación y transfiere a una persona con todo el contexto cuando hace falta.',
    alt: 'El logotipo tipográfico LIA en letras con degradado sobre fondo negro',
  },
  platformz: {
    title: 'Platformz — Planificación de Negocio con IA',
    description:
      'Platbot convierte una idea o un problema operativo en un plan de entrega presupuestado —requisitos, alcance, concepto de página de inicio, topología, calendario e inversión estimada— entregado como un PDF de proyecto. Los itinerarios cubren marketplaces, lanzamiento en retail, venta internacional, agentes de IA y automatización de procesos.',
    alt: 'El banner de Platformz con el lema Command Everything, Blueprint and Build Anything',
  },
  moonlitdev: {
    title: 'MoonLit — Panel de Staking y Rendimiento DeFi',
    description:
      'Front-end de staking que anuncia un 19,9 % de APY, con un panel conectado a la cartera que muestra el importe en staking, los puntos diarios y las recompensas de temporada. Representa el histórico de APY del contrato inteligente, gestiona depósito y retirada y opera un programa de referidos sobre los incentivos del token $MOON.',
    alt: 'El panel de ganancias de MoonLit con una curva de rendimiento que sube hasta 5,46 mil dólares',
  },
  dialedweb: {
    title: 'Dialedweb — Estudio de Web y Motion',
    description:
      'Sitio de un estudio que vende trabajo premium de web y motion, donde el portafolio es el propio argumento: diez proyectos de cliente se muestran como vistas previas en vídeo y no como capturas, respaldados por testimonios firmados por los fundadores que los encargaron.',
    alt: 'Un portátil sobre un pedestal mostrando un sitio de cliente de Dialedweb para una marca de bebidas',
  },
  waraqlabs: {
    title: 'Waraq Labs — Agencia de Desarrollo de Software',
    description:
      'Agencia de desarrollo con sede en Pakistán que construye su argumento frente a los fallos habituales de la subcontratación —plazos incumplidos, código frágil, presupuestos que se disparan tras la firma— y responde a cada uno con entregas semanales, CI/CD con cobertura real de pruebas y estimaciones honestas desde el principio.',
    alt: 'El monograma de Waraq Labs',
  },
  asmobius: {
    title: 'Archi Site Mobius — Portafolio de Arquitectura',
    description:
      'Portafolio bilingüe de un estudio de arquitectura de Tokio, con residencias y villas como Park Mansion Minami Azabu y Sevens Villa Karuizawa. Un front-end empaquetado a mano muestra los proyectos mientras WordPress queda detrás, únicamente como superficie de edición.',
    alt: 'Un interior minimalista de hormigón y vidrio de un proyecto de Archi Site Mobius',
  },
  lazzaglobal: {
    title: 'Lazza Global — Plataforma de Inversión con IA',
    description:
      'Plataforma de inversión en español que combina un producto de renta fija anunciado al 1 % mensual con un algoritmo de renta variable guiado por IA y trading en vivo de cripto, acciones e índices. Incluye explorador de mercado, vista de cartera, comparación de planes lado a lado y un back office para retiradas e informes.',
    alt: 'El banner de Lazza Global con fichas de cripto sobre un globo oscuro',
  },
  hammerai: {
    title: 'HammerAI — Chat de Personajes Privado',
    description:
      'Plataforma de conversación y rol con personajes cuya premisa es la privacidad: los modelos se ejecutan en los servidores alojados o enteramente en la máquina del usuario, mediante Ollama en la aplicación de escritorio, de modo que las conversaciones nunca necesitan salir de ahí. Añade generación de imágenes, escritura de relatos, chat en grupo, lorebooks y personas en escritorio, iOS y web.',
    alt: 'El logotipo tipográfico HammerAI y el icono de martillo sobre fondo negro',
  },
  arkrayusa: {
    title: 'ARKRAY USA — Sitio de Producto de Diagnóstico',
    description:
      'Sitio estadounidense de un fabricante global de cuidado de la diabetes y diagnóstico clínico, con la gama de medidores GLUCOCARD, la línea profesional Assure y los analizadores ADAMS y AUTION. Apoya al personal clínico con formación, manuales, fichas de seguridad y un localizador de producto, bajo un selector de región que abarca cuatro continentes.',
    alt: 'Tres medidores de glucosa GLUCOCARD Shine con tiras reactivas',
  },
  biancasantini: {
    title: 'Bianca Santini — Joyería Artesanal',
    description:
      'Tienda brasileña de joyería artesanal en plata 925 con piedras naturales y perlas, cada gema acreditada a la localidad de Minas Gerais de la que procede. La navegación funciona tanto por piedra como por pieza, con envío gratuito a partir de cierto importe, pago a plazos sin intereses, entrega asegurada con seguimiento y un año de garantía.',
    alt: 'Un pendiente artesanal de plata y piedra llevado por una modelo',
  },
  melosacilotto: {
    title: 'Melo Sacilotto — Equiparación Hospitalaria Fiscal',
    description:
      'Sitio de campaña de un despacho brasileño especializado en la Equiparação Hospitalar, el beneficio de 1995 que permite tributar a las clínicas que cumplen requisitos como si fueran hospitales y reducir hasta un 70 % el impuesto federal. Expone los requisitos, el proceso en cinco etapas, del análisis al seguimiento, y los más de 50 millones de reales ya recuperados para sus clientes.',
    alt: 'Una abogada fotografiada de perfil sobre un fondo oscuro',
  },
  eventoirreplicavel: {
    title: 'Irreplicável — Página de Evento Presencial',
    description:
      'Página de conversión de un solo objetivo para una inmersión presencial de dos horas en Brasil, construida en torno a una fecha concreta con horario de acceso, compra de entrada y sellos de las marcas de tarjeta. Encabeza con testimonios de asistentes y una promesa estructurada que termina en un plan de acción de 90 días.',
    alt: 'El anfitrión del evento fotografiado sentado con iluminación tenue',
  },
  drajulianamattos: {
    title: 'Dra. Juliana Mattos — Ortodoncia y Sueño',
    description:
      'Sitio de una clínica dental de Bahía que trabaja en ortodoncia, Invisalign y odontología del sueño para ronquido y apnea, con contenidos explicativos sobre los tratamientos publicados como blog divulgativo para convertir la búsqueda en consultas reservadas.',
    alt: 'Un panel con el nombre Dra. Juliana Mattos sobre el dominio del sitio',
  },
  yurirocha: {
    title: 'Yuri Rocha Advocacia — Despacho y Blog Jurídico',
    description:
      'Sitio de un despacho de abogados de Espírito Santo que trabaja en contratos, litigio, mediación y reclamaciones bancarias de consumo. Un blog publicado con constancia explica derechos como la usucapión, las dietas militares y las comisiones bancarias cobradas indebidamente, convirtiendo la búsqueda en consultas.',
    alt: 'El monograma de Yuri Rocha Advocacia con la figura de la Justicia',
  },
  gruporesolucao: {
    title: 'Grupo Resolução — Ingeniería Industrial',
    description:
      'Sitio de una contratista paulista de ingeniería eléctrica y facility management con veinte años de actividad, que cubre proyectos de baja y media tensión, automatización industrial, instalaciones fotovoltaicas, climatización e informes de conformidad NR-10, AVCB y CLCB. Cada página de servicio desemboca en una solicitud de presupuesto.',
    alt: 'Un técnico trabajando en un cuadro de distribución eléctrica industrial',
  },
  nosdapolitica: {
    title: 'Nós da Política — Plataforma de Educación Cívica',
    description:
      'Publicación brasileña independiente que hace legible la vida pública: qué nivel de gobierno decide qué, cómo funciona realmente el presupuesto participativo y por qué las mujeres siguen siendo minoría en los cargos pese a ser mayoría en las urnas. Combina un blog con formato de revista con cursos y materiales gratuitos.',
    alt: 'Una reunión vecinal en curso, con los asistentes sentados en círculo',
  },
  rudderconsultoria: {
    title: 'Rudder Consultoria — Estrategia Financiera y Fiscal',
    description:
      'Sitio de una consultora brasileña que trabaja en estructuración financiera, fiscal y societaria —organización de la tesorería, reestructuración de deuda, apoyo en fusiones y adquisiciones, revisión fiscal y planificación sucesoria— presentada mediante páginas de servicio orientadas a resultados que conducen a reservar un diagnóstico estratégico.',
    alt: 'Un timón de barco dibujado como la marca de Rudder Consultoria',
  },
  conexaotropical: {
    title: 'Conexão Tropical — Tienda de Alimentación Brasileña',
    description:
      'Tienda en línea que lleva alimentos y marcas brasileñas a clientes de Suiza y Liechtenstein, operada junto a una tienda física en Ginebra, con reparto local y envío prioritario a todo el país.',
    alt: 'Un panel con el nombre Conexão Tropical sobre el dominio del sitio',
  },
  vetdomus: {
    title: 'Vet Domus — Hospital Veterinario 24 h',
    description:
      'Sitio de un hospital veterinario de 24 horas en Pinheiros, São Paulo, con certificación Cat Friendly Gold, que obtiene por mantener sala de espera, consulta y hospitalización felinas separadas y lejos de los ladridos. Presenta urgencias, cirugía, diagnóstico por imagen digital, laboratorio propio, fisioterapia y más de 15 especialidades.',
    alt: 'El edificio del hospital Vet Domus y su rótulo en la calle',
  },
  costalaw: {
    title: 'Costa Law — Derecho de Empresa y Tecnología',
    description:
      'Sitio trilingüe de un despacho paulista de derecho de empresa, construido en torno al caso de estudio de DocuSign: eSignature, IAM, Maestro y Navigator sustituyeron un proceso que había acumulado cinco rechazos judiciales de documentos firmados digitalmente. Cubre además due diligence en M&A, gobierno corporativo y cumplimiento de la LGPD.',
    alt: 'El fundador de Costa Law retratado ante un interior de oficina desenfocado',
  },
  contabilissimo: {
    title: 'Contabilíssimo — Contabilidad SaaS para E-commerce',
    description:
      'Servicio de contabilidad totalmente digital para vendedores brasileños en línea, que se conecta con Mercado Livre, Shopify y Nuvemshop para volcar las ventas y emitir facturas automáticamente. Añade nóminas y presentación en eSocial, planificación fiscal y una migración de diez días desde el asesor actual, tras una cuenta con acceso por passkey.',
    alt: 'La cabecera del sitio de Contabilíssimo prometiendo contabilidad 100 % digital para e-commerce',
  },
  interakt: {
    title: 'Interakt — Plataforma de WhatsApp Business',
    description:
      'Plataforma de relación con el cliente usada por más de 100.000 empresas, construida sobre la API de WhatsApp Business y extendida a Instagram, RCS y voz. Reúne un creador de chatbots sin código, un CRM de ventas centrado en WhatsApp, una bandeja de entrada compartida y herramientas de campaña, y cuando un mensaje de WhatsApp no se entrega recurre a RCS en lugar de perder al cliente.',
    alt: 'La cabecera de Interakt mostrando una conversación de tienda por WhatsApp en un móvil',
  },
  aleyaai: {
    title: 'AleyaAI — Agencia de Desarrollo de IA y Automatización',
    description:
      'Agencia que construye agentes de IA, chatbots, IA de voz y automatizaciones de WhatsApp para clientes de Estados Unidos, el Golfo y Pakistán, organizada en cuatro áreas que cubren estrategia, diseño, construcción y crecimiento. Vende por alcance cerrado y lanzamiento en dos a cuatro semanas, con traspaso a persona previsto en el diseño y entregas conformes a HIPAA y GDPR.',
    alt: 'El banner de AleyaAI con el lema “Your AI-first partner”',
  },
  easy3p: {
    title: 'Easy3P — App de Citas para Parejas y Solteros',
    description:
      'Aplicación de citas que trata a una pareja como una sola cuenta, de modo que dos personas pueden presentarse y hacer match desde un único perfil. El match por deslizamiento abre el chat cuando hay interés mutuo, junto a métricas de «me gusta» y visitas al perfil, eventos privados creados por los miembros y un nivel VIP que habilita el chat inmediato y la recuperación de perfiles descartados. Valorada con 4,1 en más de 5.300 reseñas.',
    alt: 'Una captura de la ficha de tienda de Easy3P mostrando un perfil conjunto de pareja',
  },
  zynq: {
    title: 'Zynq — App de Citas Moderna',
    description:
      'Aplicación de citas construida en torno al control del usuario sobre su exposición. La ubicación es aproximada por diseño: se muestra la distancia, nunca las coordenadas exactas, y el permiso puede denegarse sin más. Añade verificación de foto revisada por personas, bloqueo que deshace un match existente, borrado de la cuenta desde la propia app y niveles Gold y Platinum sobre un plan gratuito. No muestra publicidad.',
    alt: 'La pantalla de descubrimiento de Zynq con una tarjeta de perfil y los botones de me gusta y descartar',
  },
  wild: {
    title: 'Wild — App de Citas con Perfiles Verificados',
    description:
      'Aplicación de citas cuyo diferencial es demostrar que la persona es real: AWS Rekognition Face Liveness verifica cada perfil, respaldado por detección de estafas con IA y revisión manual. Añade búsqueda por intención, para que quien busca algo estable y quien busca algo casual no se crucen, encuentros locales, navegación anónima con fotos liberadas solo a los matches y un nivel SVIP para enviar mensajes antes del match. Valorada con 4,1 en más de 54.000 reseñas.',
    alt: 'Una pieza de la ficha de tienda de Wild encabezada «Casual Fun»',
  },
  csl: {
    title: 'CSL — App de Citas Casuales de Joyride',
    description:
      'Aplicación de citas de Joyride GmbH, el estudio detrás de Jaumo, que empareja por la intención declarada en lugar de por navegación abierta. La privacidad es el valor por defecto y no un ajuste: el perfil puede permanecer oculto para los propios contactos del teléfono y las fotos siguen siendo privadas hasta que se liberan. Perfiles verificados y mensajes de voz en toda la app. Valorada con 4,5 en más de 338.000 reseñas, la más valorada de este conjunto.',
    alt: 'Una pieza de la ficha de tienda de CSL encabezada «Casual & Fun. For Everyone.» con la marca de 50 millones de descargas',
  },
};
