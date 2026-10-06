// Todo el contenido editable del sitio vive acá.
// Los textos entre [corchetes] son placeholders a completar con el cliente.

export const site = {
  name: 'Lost in Translation',
  firstName: '[Nombre]',
  since: 2024,
  tagline: 'Traducciones inglés ⇄ español',
  description:
    'Traducciones inglés ⇄ español cuidadas al detalle: documentos, textos académicos, contenido web y revisión. Presupuestos por WhatsApp.',
  // Formato internacional sin +, espacios ni guiones. Ej: 5491112345678
  whatsapp: '5491100000000',
  whatsappMessage: '¡Hola! Quiero pedir un presupuesto de traducción.',
};

export const nav = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cómo trabajo', href: '/#como-trabajo' },
  { label: 'Firma digital', href: '/#firma-digital' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Preguntas', href: '/#preguntas' },
];

export const services = [
  {
    title: 'Documentos personales',
    description: 'Partidas, certificados, títulos y analíticos, con precisión en nombres, fechas y términos.',
  },
  {
    title: 'Textos académicos',
    description: 'Papers, abstracts, tesis y material de estudio, respetando la terminología de cada disciplina.',
  },
  {
    title: 'Contenido web y redes',
    description: 'Sitios, newsletters y posteos que suenan naturales en el otro idioma, no traducidos.',
  },
  {
    title: 'Revisión y corrección',
    description: '¿Tenés una traducción hecha? La reviso, corrijo errores y pulo el estilo.',
  },
];

export const steps = [
  { title: 'Me escribís', description: 'Por WhatsApp o mail, contándome qué necesitás traducir y para cuándo.' },
  { title: 'Presupuesto', description: 'Te paso precio y plazo de entrega, sin compromiso.' },
  { title: 'Traducción', description: 'Trabajo el texto cuidando sentido, tono y terminología.' },
  { title: 'Entrega', description: 'Recibís el archivo listo, con una revisión final incluida.' },
];

// Instructivo para abrir y verificar una traducción legalizada con firma digital
export const signatureGuide = {
  pdf: '/instructivo-firma-digital.pdf',
  preview: '/instructivo-firma-digital.jpg',
  downloadName: 'Como-ver-una-traduccion-con-firma-digital.pdf',
  verifyUrl: 'https://www.traductores.org.ar/publico/como-verifico-una-legalizacion-digital/',
  steps: [
    {
      icon: 'download',
      title: 'Descargá el PDF',
      description:
        'Guardalo en tu computadora. Contiene varios documentos embebidos, uno adentro del otro: la legalización del Colegio de Traductores Públicos de la Ciudad de Buenos Aires, la traducción y el documento original.',
    },
    {
      icon: 'pen',
      title: 'Revisá las firmas',
      description:
        'Abrilo con Adobe Acrobat Reader o un programa similar y hacé clic en el ícono de la lapicera. Vas a ver una leyenda que indica que está firmado digitalmente y que las firmas son válidas.',
    },
    {
      icon: 'clip',
      title: 'Abrí los adjuntos',
      description:
        'Hacé clic en el ícono del clip (Adjuntos) para ver los documentos. Repetí el proceso hasta llegar al documento original.',
    },
  ],
} as const;

export const about = {
  paragraphs: [
    '[Breve presentación: quién es, su formación y cómo llegó a la traducción.]',
    '[Especialidades y forma de trabajo. Dos o tres oraciones alcanzan.]',
  ],
  credentials: ['[Título]', '[Especialidad]', `Traduciendo desde ${site.since}`],
};

export const testimonials = [
  {
    quote: 'La traducción quedó impecable y llegó antes de lo prometido.',
    author: '[Cliente]',
    detail: 'Documentos personales',
  },
  {
    quote: 'Mi paper sonaba natural en inglés, como si lo hubiera escrito un nativo.',
    author: '[Cliente]',
    detail: 'Texto académico',
  },
  {
    quote: 'Súper clara con los plazos y muy atenta a cada detalle.',
    author: '[Cliente]',
    detail: 'Contenido web',
  },
];

export const faqs = [
  {
    question: '¿Cómo pido un presupuesto?',
    answer:
      'Escribime por WhatsApp o completá el formulario de contacto contando de qué se trata el texto, la cantidad de palabras o páginas y para cuándo lo necesitás. Si podés, mandame el archivo (en el formulario, como link de Drive o WeTransfer).',
  },
  {
    question: '¿Cuánto tarda una traducción?',
    answer: '[Depende de la extensión y la complejidad. Ej: un documento de 1 a 3 páginas, entre 24 y 72 horas.]',
  },
  {
    question: '¿Hacés traducciones públicas o certificadas?',
    answer: '[Completar según corresponda.]',
  },
  {
    question: '¿Cómo se paga?',
    answer: '[Medios de pago aceptados: transferencia, Mercado Pago, etc.]',
  },
];
