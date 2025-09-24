interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'Retrato Individual' | 'Pareja' | 'Paisaje' | 'Eventos' | 'Conciertos';
  style?: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Top 6 always visible
  {
    src: 'images/destacadas/individual/chica-enpoderada-vestido-negro.webp',
    alt: 'Retrato de modelo con vestido negro y actitud enérgica en Almería. Sesión de fotos natural y con estilo.',
    title: 'Actitud y naturalidad | Fotógrafo Almería Retratos Individuales',
    description:
      'Sesión de fotos en Almería capturando la fuerza y el encanto natural de la modelo con un vestido negro. Retratos individuales que combinan elegancia urbana y espontaneidad.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/parejas/pareja_playa_v.webp',
    alt: 'Pareja de novios en la orilla del mar al atardecer en Almería',
    title: 'Pareja de novios en la orilla | Fotógrafo Almería bodas y parejas',
    description:
      'Retrato vertical de pareja nupcial en la playa. Luz suave y estilo elegante. Fotógrafo de bodas y parejas en Almería y provincia.',
    category: 'Pareja',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/paisajes/alambra_granada_v.webp',
    alt: 'Imagen vertical de la Alhambra de Granada al atardecer con luz dorada',
    title: 'La Alhambra de Granada al atardecer | Fotógrafo Almería paisajes',
    description:
      'Imagen vertical de la Alhambra con luz dorada. Fotógrafo de paisajes en Almería, Granada y alrededores.',
    category: 'Paisaje',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/eventos/novios_beso_v.webp',
    alt: 'Beso de novios en ceremonia nupcial en formato vertical en Almería',
    title: 'Beso de novios en vertical | Fotógrafo Almería bodas',
    description:
      'Retrato vertical de pareja de recién casados sellando su amor. Detalles íntimos. Fotógrafo de bodas y parejas en Almería y provincia.',
    category: 'Eventos',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chico_barba_vista_horizonte_h.webp',
    alt: 'Retrato horizontal de joven con barba mirando el horizonte en Almería',
    title: 'Chico con barba mirando el horizonte | Fotógrafo Almería retratos',
    description:
      'Retrato horizontal de sujeto contemplando el horizonte. Emoción y profundidad. Fotógrafo de retratos en Almería y provincia.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/eventos/niños_comunion_v.webp',
    alt: 'Retrato de niña vestida de comunión con mirada serena en Almería',
    title: 'Retrato infantil de comunión | Fotógrafo Almería retratos',
    description:
      'Sesión de comunión en exterior: niña vestida de comunión con mirada serena. Fotógrafo de retratos infantiles en Almería, Granada y alrededores.',
    category: 'Eventos',
    style: 'object-position: top;',
  },

  // Resto de imágenes intercaladas
  {
    src: 'images/destacadas/individual/artista_dj_v.webp',
    alt: 'Retrato de artista DJ en estudio con luces de neón en Almería',
    title: 'Retrato de artista DJ en estudio | Fotógrafo Almería retratos',
    description:
      'Sesión de retrato de DJ: actitud, luces y estilo moderno. Fotógrafo de retrato individual en Almería, Granada y alrededores.',
    category: 'Conciertos',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/parejas/pareja_playa_h.webp',
    alt: 'Pareja caminando juntas en la playa de Almería en plano horizontal',
    title: 'Pareja caminando en playa | Fotógrafo Almería parejas',
    description:
      'Plano horizontal de pareja andando junto al agua. Momentos de complicidad. Fotógrafo en Almería y alrededores.',
    category: 'Pareja',
  },
  {
    src: 'images/destacadas/paisajes/atardecer_cable_ingles_v.webp',
    alt: 'Atardecer sobre el Cable Inglés en Almería con cielo anaranjado',
    title: 'Atardecer en Cable Inglés, Almería | Fotógrafo Almería paisajes',
    description:
      'Silhueta marítima y cielo cálido sobre Cable Inglés. Fotógrafo de paisajes costeros en Almería y provincia.',
    category: 'Paisaje',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chica-pose-natural-vestido-negro.webp',
    alt: 'Modelo con pose natural y relajada en Almería. Fotografía de retrato con luz natural.',
    title: 'Poses naturales y auténticas | Sesión de fotos en Almería',
    description:
      'Retrato de la modelo en una pose natural y sin artificios, reflejando su personalidad en una sesión de fotos en Almería. Fotógrafo especializado en capturar la esencia de cada persona.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/eventos/familia_parque_comunion_v.webp',
    alt: 'Retrato familiar al aire libre en parque durante comunión en Almería',
    title:
      'Sesión familiar en parque para comunión | Fotógrafo Almería eventos',
    description:
      'Retrato de familia al aire libre en Almería durante comunión. Capturando emoción y unión. Fotógrafo de eventos en Almería, Granada y alrededores.',
    category: 'Eventos',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chica_chaqueta_negra_v.webp',
    alt: 'Retrato de chica con chaqueta negra en entorno urbano de Almería',
    title: 'Retrato de chica con chaqueta negra | Fotógrafo Almería moda',
    description:
      'Close‑up de modelo juvenil con chaqueta negra. Elegancia urbana. Fotógrafo de moda y retratos en Almería y provincia.',
    category: 'Retrato Individual',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/parejas/pareja_vista_camara_v.webp',
    alt: 'Pareja posando junta mirando a cámara en Almería',
    title: 'Pareja mirando a cámara | Fotógrafo Almería retratos de pareja',
    description:
      'Captura íntima de pareja posando frente a cámara. Fotógrafo profesional de parejas en Almería, Granada y alrededores.',
    category: 'Pareja',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/paisajes/cable_ingles_almeria_v.webp',
    alt: 'Vista panorámica de la costa y el Cable Inglés en Almería',
    title: 'Vista panorámica de Cable Inglés | Fotógrafo Almería paisajes',
    description:
      'Fotografía de larga exposición en la costa de Almería. Paisaje marino profesional. Fotógrafo en Almería, Granada y alrededores.',
    category: 'Paisaje',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/eventos/grupo_lejion_v.webp',
    alt: 'Fotografía de grupo de La Legión en acto oficial en Almería',
    title: 'Grupo “La Legión” en desfile | Fotógrafo Almería reportajes',
    description:
      'Fotografía de grupo de La Legión en acto oficial. Detalle y fuerza en cada imagen. Fotógrafo de eventos y reportajes en Almería, Granada y alrededores.',
    category: 'Eventos',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chica_concierto_v.webp',
    alt: 'Retrato de artista en concierto con ambiente vibrante en Almería',
    title: 'Retrato de artista en concierto | Fotógrafo Almería eventos',
    description:
      'Captura de artista en concierto con ambiente vibrante. Fotógrafo de eventos y retratos en Almería, Granada y alrededores.',
    category: 'Conciertos',
  },
  {
    src: 'images/destacadas/individual/chica-vestido-negro.webp',
    alt: 'Retrato de una chica en Almería con un elegante vestido negro, mostrando un look natural y sofisticado.',
    title: 'Elegancia natural | Fotógrafo Retrato Individual Almería',
    description:
      'Sesión de fotos en Almería donde la modelo luce un vestido negro, capturando su elegancia y naturalidad. Ideal para retratos de moda con un enfoque personal y auténtico.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/parejas/pareja_playa_2_v.webp',
    alt: 'Pareja abrazada en la orilla del mar en Almería',
    title: 'Pareja abrazada en playa | Fotógrafo Almería parejas',
    description:
      'Imagen vertical de pareja abrazándose frente al mar. Romántico y natural. Fotógrafo de parejas en Almería, Granada y alrededores.',
    category: 'Pareja',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/paisajes/edificio_mariposas_almeria_v.webp',
    alt: 'Fachada artística del Edificio Mariposas en Almería en vertical',
    title: 'Edificio Mariposas en Almería | Fotógrafo Almería arquitectura',
    description:
      'Imagen vertical del edificio con fachada artística. Fotografía urbana y arquitectura. Fotógrafo en Almería y provincia.',
    category: 'Paisaje',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chica-vestido-negro-edificio-mariposas.webp',
    alt: 'Modelo posando con vestido negro frente al Edificio Mariposas de Almería. Sesión urbana y natural.',
    title: 'Retratos urbanos en Almería | Fotógrafo en Edificio Mariposas',
    description:
      'Fotografía de la modelo con vestido negro posando de forma espontánea frente al icónico Edificio Mariposas en Almería. Sesiones de fotos urbanas que fusionan la naturalidad y el entorno.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/eventos/lejionario_v.webp',
    alt: 'Primer plano de legionario con uniforme en Almería',
    title: 'Retrato de legionario | Fotógrafo Almería retratos militares',
    description:
      'Primer plano de legionario con uniforme y actitud imponente. Profesionalismo en cada disparo. Fotógrafo de retratos en Almería y provincia.',
    category: 'Eventos',
  },
  {
    src: 'images/destacadas/individual/chica_playa_h.webp',
    alt: 'Retrato horizontal de modelo en la playa de Almería con luz natural',
    title: 'Retrato horizontal en playa | Fotógrafo Almería retratos',
    description:
      'Sesión de fotografía individual en la costa de Almería: espontaneidad y luz natural. Fotógrafo de retratos en Almería y alrededores.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/parejas/pareja_playa_h.webp',
    alt: 'Pareja caminando juntas por la orilla en Almería',
    title: 'Pareja caminando en playa | Fotógrafo Almería parejas',
    description:
      'Plano horizontal de pareja andando junto al agua. Momentos de complicidad. Fotógrafo en Almería y alrededores.',
    category: 'Pareja',
  },
  {
    src: 'images/destacadas/paisajes/fuente_granada_v.webp',
    alt: 'Fuente monumental en espacio público de Granada en vertical',
    title: 'Fuente emblemática de Granada | Fotógfo Almería paisajes',
    description:
      'Captura de fuente monumental en espacio público. Fotógrafo de arquitectura y paisaje en Almería y alrededores.',
    category: 'Paisaje',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/eventos/novia_entrada_coche_v.webp',
    alt: 'Novia subiendo al coche nupcial tras ceremonia en Almería',
    title: 'Novia entrando al coche nupcial | Fotógrafo Almería bodas',
    description:
      'Momento emotivo de novia subiendo al coche tras ceremonia. Captura de elegancia y detalle. Fotógrafo de bodas en Almería y alrededores.',
    category: 'Eventos',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chica_playa_v2.webp',
    alt: 'Retrato alternativo de modelo en la playa de Almería',
    title: 'Retrato alternativo en playa | Fotógrafo Almería retratos',
    description:
      'Variación de sesión en la playa con composición moderna. Fotógrafo de retratos individuales en Almería y provincia.',
    category: 'Retrato Individual',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/parejas/pareja_vista_camara_v.webp',
    alt: 'Pareja posando junta mirando a cámara en Almería',
    title: 'Pareja mirando a cámara | Fotógrafo Almería retratos de pareja',
    description:
      'Captura íntima de pareja posando frente a cámara. Fotógrafo profesional de parejas en Almería, Granada y alrededores.',
    category: 'Pareja',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chica-vista-camara-pose-natural.webp',
    alt: 'Modelo mirando a cámara con pose natural y mirada cautivadora en una sesión en Almería.',
    title: 'Mirada auténtica y pose natural | Fotógrafo Retratos Almería',
    description:
      'Retrato de la modelo con una pose natural y una mirada directa a cámara, capturando su carisma en una sesión de fotos en Almería. Fotógrafo profesional que crea conexiones auténticas.',
    category: 'Retrato Individual',
  },
  {
    src: 'images/destacadas/paisajes/moto_v.webp',
    alt: 'Motocicleta estacionada en paisaje rústico de Almería',
    title: 'Motocicleta en entorno natural | Fotógrafo Almería paisajes',
    description:
      'Moto estacionada en paisaje rústico. Combinación de detalle y entorno. Fotógrafo en Almería, Granada y alrededores.',
    category: 'Paisaje',
  },
  {
    src: 'images/destacadas/eventos/virgen_cofrade_v.webp',
    alt: 'Paso de la Virgen en procesión cofrade en Almería',
    title:
      'Hermandad cofrade con imagen de la Virgen | Fotógrafo Almería tradiciones',
    description:
      'Escena de procesión con el paso de la Virgen. Cultura y emoción andaluza. Fotógrafo de eventos religiosos en Almería y provincia.',
    category: 'Eventos',
    style: 'object-position: top;',
  },
  {
    src: 'images/destacadas/individual/chico_barba_v.webp',
    alt: 'Primer plano de hombre con barba y mirada intensa en Almería',
    title: 'Retrato de chico con barba | Fotógrafo Almería retratos',
    description:
      'Primer plano de joven con barba y mirada intensa. Sesión de retrato individual. Fotógrafo en Almería, Granada y alrededores.',
    category: 'Retrato Individual',
  },
];
