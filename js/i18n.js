/* ============================================================
   NAHUAS.COM - Internationalization (i18n) Engine
   Supports: English (en), Spanish (es), Nahuatl (nah)
   ============================================================ */

const NahuasI18n = (() => {
  'use strict';

  const STORAGE_KEY = 'nahuas-lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED_LANGS = ['en', 'es', 'nah'];

  const translations = {
    // ──────────── Navigation ────────────
    'nav.home': {
      en: 'Home',
      es: 'Inicio',
      nah: 'Calpolli'
    },
    'nav.history': {
      en: 'History',
      es: 'Historia',
      nah: 'Tlahtolli'
    },
    'nav.religion': {
      en: 'Religion & Cosmology',
      es: 'Religión y Cosmología',
      nah: 'Teochihualiztli'
    },
    'nav.language': {
      en: 'Nahuatl Language',
      es: 'Lengua Náhuatl',
      nah: 'Nahuatlahtolli'
    },
    'nav.maps': {
      en: 'Maps & Atlas',
      es: 'Mapas y Atlas',
      nah: 'Tlalpilli'
    },
    'nav.figures': {
      en: 'Famous Figures',
      es: 'Figuras Célebres',
      nah: 'Huehuehtlahtolli'
    },
    'nav.culture': {
      en: 'Culture & Society',
      es: 'Cultura y Sociedad',
      nah: 'Nemiliztli'
    },

    // ──────────── Language Switcher ────────────
    'lang.en': {
      en: 'English',
      es: 'Inglés',
      nah: 'Inglestlahtolli'
    },
    'lang.es': {
      en: 'Spanish',
      es: 'Español',
      nah: 'Caxtillantlahtolli'
    },
    'lang.nah': {
      en: 'Nahuatl',
      es: 'Náhuatl',
      nah: 'Nahuatlahtolli'
    },
    'lang.select': {
      en: 'Language',
      es: 'Idioma',
      nah: 'Tlahtolli'
    },

    // ──────────── Homepage Hero ────────────
    'hero.badge': {
      en: 'The Definitive Nahua Civilization Portal',
      es: 'El Portal Definitivo de la Civilización Nahua',
      nah: 'In Nahua Altepetl Tlamachihualiztli'
    },
    'hero.title': {
      en: 'Discover the Nahua Civilization',
      es: 'Descubre la Civilización Nahua',
      nah: 'Xiquitta in Nahua Tlatocayotl'
    },
    'hero.title.highlight': {
      en: 'Past, Present, and Living',
      es: 'Pasado, Presente y Viva',
      nah: 'Ye Opanoc, Axcan, ihuan Yoltoc'
    },
    'hero.subtitle': {
      en: 'History. Religion. Language. Maps. Leaders. Stories. The most comprehensive digital authority on Nahua peoples—past, present, and future.',
      es: 'Historia. Religión. Lengua. Mapas. Líderes. Relatos. La autoridad digital más completa sobre los pueblos nahuas: pasado, presente y futuro.',
      nah: 'Tlahtolli. Teochihualiztli. Nahuatlahtolli. Tlalpilli. Tlatoanime. Zazanilli. In huel neltiliztli ipan Nahua tlacameh—ye opanoc, axcan, ihuan moztla.'
    },
    'hero.cta.explore': {
      en: 'Explore Nahua History',
      es: 'Explorar la Historia Nahua',
      nah: 'Xiquitta in Nahua Tlahtolli'
    },
    'hero.cta.learn': {
      en: 'Learn Nahuatl',
      es: 'Aprende Náhuatl',
      nah: 'Ximomachti Nahuatl'
    },
    'hero.cta.map': {
      en: 'View Interactive Map',
      es: 'Ver Mapa Interactivo',
      nah: 'Xiquitta Tlalpilli'
    },

    // ──────────── Stats ────────────
    'stats.years': {
      en: 'Years of History',
      es: 'Años de Historia',
      nah: 'Xihuitl Tlahtolli'
    },
    'stats.speakers': {
      en: 'Nahuatl Speakers Today',
      es: 'Hablantes de Náhuatl Hoy',
      nah: 'Nahuatlahtoanih Axcan'
    },
    'stats.communities': {
      en: 'Living Communities',
      es: 'Comunidades Vivas',
      nah: 'Yoltoc Altepemeh'
    },
    'stats.codices': {
      en: 'Surviving Codices',
      es: 'Códices Sobrevivientes',
      nah: 'Amoxtli Nemih'
    },

    // ──────────── Pillars Section ────────────
    'pillars.eyebrow': {
      en: 'Knowledge Pillars',
      es: 'Pilares del Conocimiento',
      nah: 'Tlamatiliztli Tetzacuilli'
    },
    'pillars.title': {
      en: 'Explore the Nahua World',
      es: 'Explora el Mundo Nahua',
      nah: 'Xiquitta in Nahua Cemanahuac'
    },
    'pillars.desc': {
      en: 'Six comprehensive pillars covering every aspect of Nahua civilization, from ancient migrations to living communities today.',
      es: 'Seis pilares integrales que cubren cada aspecto de la civilización nahua, desde las migraciones antiguas hasta las comunidades vivas de hoy.',
      nah: 'Chicuacen tetzacuilli tlen quipiya mochi tlamantli ipan Nahua tlatocayotl, itech ye huehcauh nenemiztli ihuan axcan altepemeh.'
    },

    // Pillar 1: History
    'pillar.history.title': {
      en: 'Historical Timeline',
      es: 'Línea del Tiempo Histórica',
      nah: 'Xiuhpohualli Tlahtolli'
    },
    'pillar.history.desc': {
      en: 'From pre-Aztec migrations through the Triple Alliance era to modern Nahua communities. A complete interactive chronology.',
      es: 'Desde las migraciones pre-aztecas hasta la era de la Triple Alianza y las comunidades nahuas modernas. Una cronología interactiva completa.',
      nah: 'Itech in achto nenemiztli, Excan Tlahtoloyan, ihuan axcan Nahua altepemeh. Mochi xiuhpohualli.'
    },
    'pillar.history.link': {
      en: 'Explore Timeline',
      es: 'Explorar Línea del Tiempo',
      nah: 'Xiquitta Xiuhpohualli'
    },

    // Pillar 2: Religion
    'pillar.religion.title': {
      en: 'Religion & Cosmology',
      es: 'Religión y Cosmología',
      nah: 'Teochihualiztli ihuan Cemanahuac'
    },
    'pillar.religion.desc': {
      en: 'The Five Suns, soul concepts, major deities, sacred calendars, and ritual systems of the Nahua spiritual world.',
      es: 'Los Cinco Soles, conceptos del alma, deidades principales, calendarios sagrados y sistemas rituales del mundo espiritual nahua.',
      nah: 'In Macuilli Tonatiuh, teyolia, huehuehteteoh, tonalpohualli, ihuan tlamanalliztli.'
    },
    'pillar.religion.link': {
      en: 'Explore Cosmology',
      es: 'Explorar Cosmología',
      nah: 'Xiquitta Cemanahuac'
    },

    // Pillar 3: Language
    'pillar.language.title': {
      en: 'Nahuatl Language Hub',
      es: 'Centro de la Lengua Náhuatl',
      nah: 'Nahuatlahtolli Calli'
    },
    'pillar.language.desc': {
      en: 'Lessons, dictionary, pronunciation guides, grammar, and a searchable archive of codex translations.',
      es: 'Lecciones, diccionario, guías de pronunciación, gramática y un archivo de traducciones de códices.',
      nah: 'Tlamachtiliztli, amatlahcuilolli, camanalli, nahuatlahtolmatiliztli, ihuan amoxtli.'
    },
    'pillar.language.link': {
      en: 'Start Learning',
      es: 'Comenzar a Aprender',
      nah: 'Ximomachti'
    },

    // Pillar 4: Maps
    'pillar.maps.title': {
      en: 'Interactive Map Atlas',
      es: 'Atlas de Mapas Interactivos',
      nah: 'Tlalpilli Amoxtli'
    },
    'pillar.maps.desc': {
      en: 'High-resolution interactive maps of city-states, trade routes, tribute regions, migrations, and modern Nahua-speaking areas.',
      es: 'Mapas interactivos de alta resolución de ciudades-estado, rutas comerciales, regiones tributarias, migraciones y zonas nahuahablantes modernas.',
      nah: 'Altepemeh, pochtecayotl ohtli, tequitl tlalli, nenemiztli, ihuan axcan Nahua tlalli.'
    },
    'pillar.maps.link': {
      en: 'Open Atlas',
      es: 'Abrir Atlas',
      nah: 'Xiquitta Tlalpilli'
    },

    // Pillar 5: Figures
    'pillar.figures.title': {
      en: 'Famous Nahua Figures',
      es: 'Figuras Nahuas Célebres',
      nah: 'Tlatoanime ihuan Tlamatinimeh'
    },
    'pillar.figures.desc': {
      en: 'Biographies of rulers, poets, thinkers, colonial-era writers, and modern leaders shaping Nahua identity.',
      es: 'Biografías de gobernantes, poetas, pensadores, escritores de la era colonial y líderes modernos que forjan la identidad nahua.',
      nah: 'In tlatoanime, cuicapicqueh, tlamatinimeh, ihuan axcan teyacanqueh.'
    },
    'pillar.figures.link': {
      en: 'Meet the Leaders',
      es: 'Conocer a los Líderes',
      nah: 'Xiquinmiximachili'
    },

    // Pillar 6: Culture
    'pillar.culture.title': {
      en: 'Culture & Daily Life',
      es: 'Cultura y Vida Cotidiana',
      nah: 'Nemiliztli ihuan Momoztlayotl'
    },
    'pillar.culture.desc': {
      en: 'Education, family, cuisine, textiles, architecture, markets, military organization, and legal systems of Nahua society.',
      es: 'Educación, familia, cocina, textiles, arquitectura, mercados, organización militar y sistemas legales de la sociedad nahua.',
      nah: 'Tlamachtiliztli, cencalli, tlacualli, quachtli, caltlamachiliztli, tianquiztli, yaoyotl, ihuan nahuatilli.'
    },
    'pillar.culture.link': {
      en: 'Explore Culture',
      es: 'Explorar Cultura',
      nah: 'Xiquitta Nemiliztli'
    },

    // ──────────── Featured Section ────────────
    'featured.eyebrow': {
      en: 'Featured Content',
      es: 'Contenido Destacado',
      nah: 'Huel Tlamahuizolli'
    },
    'featured.title': {
      en: 'Deep Dives into Nahua Knowledge',
      es: 'Inmersiones Profundas en el Conocimiento Nahua',
      nah: 'Huelitiliztli ipan Nahua Tlamatiliztli'
    },

    // Featured Articles
    'featured.suns.tag': {
      en: 'Cosmology',
      es: 'Cosmología',
      nah: 'Cemanahuac'
    },
    'featured.suns.title': {
      en: 'The Five Suns: Creation and Cosmic Cycles',
      es: 'Los Cinco Soles: Creación y Ciclos Cósmicos',
      nah: 'In Macuilli Tonatiuh: Tlachihualiztli ihuan Cemanahuac'
    },
    'featured.suns.excerpt': {
      en: 'Explore the Nahua understanding of cosmic creation through five successive worlds, each destroyed and reborn.',
      es: 'Explora la comprensión nahua de la creación cósmica a través de cinco mundos sucesivos, cada uno destruido y renacido.',
      nah: 'Xiquitta in Nahua tlamatiliztli ipan tlachihualiztli ica macuilli cemanahuac.'
    },
    'featured.tenochtitlan.tag': {
      en: 'History',
      es: 'Historia',
      nah: 'Tlahtolli'
    },
    'featured.tenochtitlan.title': {
      en: 'The Founding of Tenochtitlan',
      es: 'La Fundación de Tenochtitlan',
      nah: 'In Ipehualiz Tenochtitlan'
    },
    'featured.tenochtitlan.excerpt': {
      en: 'How the Mexica people founded one of the greatest cities in the ancient world on an island in Lake Texcoco.',
      es: 'Cómo el pueblo mexica fundó una de las ciudades más grandes del mundo antiguo en una isla del lago de Texcoco.',
      nah: 'Quenin in Mexihcah quipehualtihqueh ce hueyi altepetl ipan Texcoco atezcatl.'
    },
    'featured.nezahualcoyotl.tag': {
      en: 'Poetry & Philosophy',
      es: 'Poesía y Filosofía',
      nah: 'Cuicatl ihuan Tlamatiliztli'
    },
    'featured.nezahualcoyotl.title': {
      en: 'Nezahualcoyotl: Poet-King of Texcoco',
      es: 'Nezahualcóyotl: Rey-Poeta de Texcoco',
      nah: 'Nezahualcoyotl: Cuicapicqui Tlatoani Texcoco'
    },
    'featured.nezahualcoyotl.excerpt': {
      en: 'The extraordinary life of the philosopher-king who shaped Nahua intellectual traditions and left an enduring poetic legacy.',
      es: 'La vida extraordinaria del rey-filósofo que moldeó las tradiciones intelectuales nahuas y dejó un legado poético perdurable.',
      nah: 'In hueyi nemiliztli tlatoani tlamatini tlen oquichihuilih Nahua tlamatiliztli.'
    },

    // ──────────── FAQ Section ────────────
    'faq.title': {
      en: 'Frequently Asked Questions',
      es: 'Preguntas Frecuentes',
      nah: 'Tlatlaniliztli'
    },
    'faq.q1': {
      en: 'Who are the Nahua peoples?',
      es: '¿Quiénes son los pueblos nahuas?',
      nah: '¿Aquihqueh in Nahua tlacameh?'
    },
    'faq.a1': {
      en: 'The Nahua peoples are a group of indigenous peoples of Mexico and Central America who share the Nahuatl language family. They include the famous Mexica (Aztecs), as well as the Tlaxcalteca, Acolhua, Tepaneca, Xochimilca, Chalca, and many other groups. Today, approximately 1.7 million people speak Nahuatl, making it the most widely spoken indigenous language in Mexico.',
      es: 'Los pueblos nahuas son un grupo de pueblos indígenas de México y Centroamérica que comparten la familia lingüística náhuatl. Incluyen a los famosos mexicas (aztecas), así como a los tlaxcaltecas, acolhuas, tepanecas, xochimilcas, chalcas y muchos otros grupos. Hoy, aproximadamente 1.7 millones de personas hablan náhuatl, lo que la convierte en la lengua indígena más hablada de México.',
      nah: 'In Nahua tlacameh cah ce huey altepemeh itech Mexico ihuan Cemanahuac tlen quipixticate Nahuatlahtolli. Quinpixticate in Mexihcah, Tlaxcaltecah, Acolhuahqueh, Tepanecah, Xochimilcah, Chalcah, ihuan occequintin. Axcan, huel ce milion chicome ciento mil tlacameh quihtoa Nahuatl.'
    },
    'faq.q2': {
      en: 'What is the difference between Nahua and Aztec?',
      es: '¿Cuál es la diferencia entre nahua y azteca?',
      nah: '¿Tlein in amo zanye itech Nahua ihuan Aztecah?'
    },
    'faq.a2': {
      en: '"Nahua" is the broader ethnic and cultural category encompassing all peoples who speak Nahuatl languages. "Aztec" specifically refers to the Mexica and their Triple Alliance partners (Texcoco and Tlacopan) who built the empire centered on Tenochtitlan. All Aztecs were Nahua, but not all Nahua peoples were Aztecs.',
      es: '"Nahua" es la categoría étnica y cultural más amplia que abarca a todos los pueblos que hablan lenguas náhuatl. "Azteca" se refiere específicamente a los mexicas y sus socios de la Triple Alianza (Texcoco y Tlacopan) que construyeron el imperio centrado en Tenochtitlan. Todos los aztecas eran nahuas, pero no todos los nahuas eran aztecas.',
      nah: '"Nahua" cah in hueyi tlahtolmeh tlen quinemilia mochi tlacameh tlen quihtoa Nahuatl. "Aztecah" zan quihtoznequi in Mexihcah ihuan Excan Tlahtoloyan. Mochi Aztecah catcah Nahuah, amo mochi Nahuah catcah Aztecah.'
    },
    'faq.q3': {
      en: 'Is Nahuatl still spoken today?',
      es: '¿Se habla náhuatl todavía hoy?',
      nah: '¿Oc mohtoa Nahuatl axcan?'
    },
    'faq.a3': {
      en: 'Yes! Nahuatl is very much alive. Approximately 1.7 million people speak varieties of Nahuatl across Mexico, primarily in the states of Puebla, Veracruz, Hidalgo, San Luis Potosí, Guerrero, and Mexico State. It is the most widely spoken indigenous language in Mexico and continues to evolve as a living language.',
      es: '¡Sí! El náhuatl está muy vivo. Aproximadamente 1.7 millones de personas hablan variedades de náhuatl en todo México, principalmente en los estados de Puebla, Veracruz, Hidalgo, San Luis Potosí, Guerrero y Estado de México. Es la lengua indígena más hablada en México y continúa evolucionando como lengua viva.',
      nah: '¡Quemah! Nahuatl oc yoltoc. Huel ce milion chicome ciento mil tlacameh quihtoa Nahuatl ipan nochi Mexico, hueliyoc itech Puebla, Veracruz, Hidalgo, San Luis Potosí, Guerrero, ihuan Mexico. Cah in hueyi tlahtolli itech Mexico ihuan oc mozcaltia.'
    },
    'faq.q4': {
      en: 'What are Nahua codices?',
      es: '¿Qué son los códices nahuas?',
      nah: '¿Tlein in Nahua amoxtli?'
    },
    'faq.a4': {
      en: 'Nahua codices are pictorial manuscripts created by indigenous scribes before and after the Spanish conquest. They recorded historical events, religious practices, tribute records, calendrical systems, and genealogies. Famous examples include the Codex Mendoza, Codex Borbonicus, and the Florentine Codex. These documents are invaluable primary sources for understanding Nahua civilization.',
      es: 'Los códices nahuas son manuscritos pictóricos creados por escribas indígenas antes y después de la conquista española. Registraron eventos históricos, prácticas religiosas, registros tributarios, sistemas calendáricos y genealogías. Ejemplos famosos incluyen el Códice Mendoza, el Códice Borbónico y el Códice Florentino.',
      nah: 'In Nahua amoxtli cah tlahcuilolli tlen oquichihqueh tlahcuilohqueh achto ihuan zatepan Caxtiltecah. Oquipohuayah tlahtolli, teochihualiztli, tequitl, tonalpohualli, ihuan tlahtocamecayotl. In hueyi amoxtli cah Mendoza, Borbonicus, ihuan Florentino.'
    },

    // ──────────── CTA Banner ────────────
    'cta.title': {
      en: 'Begin Your Journey into Nahua Civilization',
      es: 'Comienza Tu Viaje por la Civilización Nahua',
      nah: 'Xipehua Monemiliz ipan Nahua Tlatocayotl'
    },
    'cta.desc': {
      en: 'Whether you want to learn Nahuatl, explore ancient history, or understand living Nahua communities, your path starts here.',
      es: 'Ya sea que quieras aprender náhuatl, explorar la historia antigua o comprender las comunidades nahuas vivas, tu camino comienza aquí.',
      nah: 'Intla ticnequi timomachtiz Nahuatl, xiquitta ye huehcauh tlahtolli, noso xicmati axcan Nahua altepemeh, nican pehua moohtli.'
    },
    'cta.button': {
      en: 'Start Exploring',
      es: 'Comenzar a Explorar',
      nah: 'Xipehua'
    },

    // ──────────── Footer ────────────
    'footer.brand.desc': {
      en: 'The definitive global platform for Nahua civilization, language preservation, and cultural understanding.',
      es: 'La plataforma global definitiva para la civilización nahua, la preservación lingüística y la comprensión cultural.',
      nah: 'In hueyi cemanahuac tlamachihualiztli ipan Nahua tlatocayotl, tlahtolli ihuan nemiliztli.'
    },
    'footer.explore': {
      en: 'Explore',
      es: 'Explorar',
      nah: 'Xiquitta'
    },
    'footer.learn': {
      en: 'Learn',
      es: 'Aprender',
      nah: 'Ximomachti'
    },
    'footer.about': {
      en: 'About',
      es: 'Acerca de',
      nah: 'Ipampa'
    },
    'footer.about.mission': {
      en: 'Our Mission',
      es: 'Nuestra Misión',
      nah: 'Totequiuh'
    },
    'footer.about.sources': {
      en: 'Sources & Citations',
      es: 'Fuentes y Citas',
      nah: 'Tlahtolpehualoni'
    },
    'footer.about.contribute': {
      en: 'Contribute',
      es: 'Contribuir',
      nah: 'Xitlapalehui'
    },
    'footer.about.contact': {
      en: 'Contact',
      es: 'Contacto',
      nah: 'Tlanextiliztli'
    },
    'footer.copyright': {
      en: '© 2026 Nahuas.com — The Global Home of Nahua Knowledge',
      es: '© 2026 Nahuas.com — El Hogar Global del Conocimiento Nahua',
      nah: '© 2026 Nahuas.com — In Cemanahuac Calli Nahua Tlamatiliztli'
    },
    'footer.privacy': {
      en: 'Privacy Policy',
      es: 'Política de Privacidad',
      nah: 'Ichtacayotl'
    },
    'footer.terms': {
      en: 'Terms of Use',
      es: 'Términos de Uso',
      nah: 'Nahuatilli'
    },

    // ──────────── Accessibility ────────────
    'a11y.skip': {
      en: 'Skip to main content',
      es: 'Saltar al contenido principal',
      nah: 'Xiyauh itech hueyi tlahtolli'
    },
    'a11y.menu.open': {
      en: 'Open menu',
      es: 'Abrir menú',
      nah: 'Xitlapo'
    },
    'a11y.menu.close': {
      en: 'Close menu',
      es: 'Cerrar menú',
      nah: 'Xitzacua'
    },
    'a11y.search': {
      en: 'Search',
      es: 'Buscar',
      nah: 'Xitlatemohua'
    },

    // ──────────── History Page ────────────
    'history.title': {
      en: 'The Complete Nahua Historical Timeline',
      es: 'La Línea del Tiempo Histórica Nahua Completa',
      nah: 'Mochi Nahua Xiuhpohualli Tlahtolli'
    },
    'history.subtitle': {
      en: 'From ancient migrations to living communities—a comprehensive journey through Nahua civilization spanning over 1,500 years.',
      es: 'Desde las migraciones antiguas hasta las comunidades vivas—un viaje integral por la civilización nahua que abarca más de 1,500 años.',
      nah: 'Itech ye huehcauh nenemiztli ihuan axcan altepemeh—mochi ohpantli ipan Nahua tlatocayotl, huel ce mil macuilli ciento xihuitl.'
    },
    'history.era.premigration': {
      en: 'Pre-Aztec Nahua Migrations',
      es: 'Migraciones Nahuas Pre-Aztecas',
      nah: 'Achto Nahua Nenemiztli'
    },
    'history.era.triple': {
      en: 'Mexica & Triple Alliance Era',
      es: 'Era Mexica y la Triple Alianza',
      nah: 'Mexihcah ihuan Excan Tlahtoloyan'
    },
    'history.era.colonial': {
      en: 'Spanish Conquest & Colonial Period',
      es: 'Conquista Española y Período Colonial',
      nah: 'Caxtiltecah Netecuiliztli'
    },
    'history.era.modern': {
      en: 'Modern Nahua Communities',
      es: 'Comunidades Nahuas Modernas',
      nah: 'Axcan Nahua Altepemeh'
    },

    // Timeline events
    'history.event.aztlan': {
      en: 'Departure from Aztlan',
      es: 'Partida de Aztlán',
      nah: 'Quizqueh Aztlan'
    },
    'history.event.aztlan.desc': {
      en: 'The Mexica people begin their legendary migration southward from the mythical homeland of Aztlan, guided by Huitzilopochtli. This migration would span generations and define the founding narrative of the Aztec Empire.',
      es: 'El pueblo mexica comienza su legendaria migración hacia el sur desde la patria mítica de Aztlán, guiados por Huitzilopochtli. Esta migración abarcaría generaciones y definiría la narrativa fundacional del Imperio Azteca.',
      nah: 'In Mexihcah peuhqueh innenemiuh itech Aztlan, quintlacaquiltia Huitzilopochtli. Inin nenemiztli oquipanoc miyec tlahtocamecayotl.'
    },
    'history.event.tenochtitlan': {
      en: 'Founding of Tenochtitlan',
      es: 'Fundación de Tenochtitlan',
      nah: 'Ipehualiz Tenochtitlan'
    },
    'history.event.tenochtitlan.desc': {
      en: 'On an island in Lake Texcoco, the Mexica fulfill the prophecy of Huitzilopochtli by founding their capital city where an eagle perched on a cactus devours a serpent. Tenochtitlan would grow to become one of the largest cities in the world.',
      es: 'En una isla del lago de Texcoco, los mexicas cumplen la profecía de Huitzilopochtli al fundar su ciudad capital donde un águila posada sobre un nopal devora una serpiente. Tenochtitlan crecería hasta convertirse en una de las ciudades más grandes del mundo.',
      nah: 'Ipan ce tlalli itech Texcoco atezcatl, in Mexihcah oquineltilihqueh Huitzilopochtli itlahtol: canin ce cuauhtli ipan nopalli quicua ce coatl. Tenochtitlan omozcaltih hueyi altepetl ipan cemanahuac.'
    },
    'history.event.alliance': {
      en: 'Formation of the Triple Alliance',
      es: 'Formación de la Triple Alianza',
      nah: 'Excan Tlahtoloyan Ipehualiz'
    },
    'history.event.alliance.desc': {
      en: 'Tenochtitlan, Texcoco, and Tlacopan form the Triple Alliance (Excan Tlahtoloyan), creating the political and military foundation for what would become the most powerful empire in Mesoamerica.',
      es: 'Tenochtitlan, Texcoco y Tlacopan forman la Triple Alianza (Excan Tlahtoloyan), creando la base política y militar de lo que se convertiría en el imperio más poderoso de Mesoamérica.',
      nah: 'Tenochtitlan, Texcoco, ihuan Tlacopan oquichihqueh Excan Tlahtoloyan, oquichihuilihqueh in hueyi tlatocayotl ipan Cemanahuac.'
    },
    'history.event.conquest': {
      en: 'Fall of Tenochtitlan',
      es: 'Caída de Tenochtitlan',
      nah: 'Tenochtitlan Ohuetz'
    },
    'history.event.conquest.desc': {
      en: 'After a devastating siege, Tenochtitlan falls to Spanish forces and their indigenous allies under Hernán Cortés. Cuauhtémoc, the last Mexica tlatoani, is captured. This marks the beginning of the colonial period but not the end of Nahua culture.',
      es: 'Después de un devastador asedio, Tenochtitlan cae ante las fuerzas españolas y sus aliados indígenas bajo Hernán Cortés. Cuauhtémoc, el último tlatoani mexica, es capturado. Esto marca el inicio del período colonial pero no el fin de la cultura nahua.',
      nah: 'Zatepan hueyi yaoyotl, Tenochtitlan ohuetz ica Caxtiltecah ihuan inteicniuhuan. Cuauhtemoc, in tlamian tlatoani, omacoc. Inin opehualtiuh Caxtiltecah cahuitl, amo tlamian Nahua nemiliztli.'
    },
    'history.event.modern': {
      en: 'Nahua Cultural Revival',
      es: 'Renacimiento Cultural Nahua',
      nah: 'Nahua Nemiliztli Mozcaltia'
    },
    'history.event.modern.desc': {
      en: 'Today, approximately 1.7 million Nahuatl speakers maintain the language across Mexico. Cultural revitalization movements, academic programs, and community organizations work to preserve and expand Nahua heritage for future generations.',
      es: 'Hoy, aproximadamente 1.7 millones de hablantes de náhuatl mantienen la lengua en todo México. Movimientos de revitalización cultural, programas académicos y organizaciones comunitarias trabajan para preservar y expandir la herencia nahua para las futuras generaciones.',
      nah: 'Axcan, huel ce milion chicome ciento mil nahuatlahtoanih quipixticate in tlahtolli ipan nochi Mexico. Nemiliztli mozcaltianih, tlamachtilcalli, ihuan altepetl tequitl quitequipanoah inic quipiazqueh Nahua nemiliztli.'
    },

    // ──────────── Religion Page ────────────
    'religion.title': {
      en: 'Nahua Religion, Cosmology & Sacred Knowledge',
      es: 'Religión, Cosmología y Conocimiento Sagrado Nahua',
      nah: 'Nahua Teochihualiztli, Cemanahuac ihuan Teotlamatiliztli'
    },
    'religion.subtitle': {
      en: 'Explore the profound spiritual world of the Nahua peoples—from the cosmic cycles of the Five Suns to the sacred calendar and the great deities.',
      es: 'Explora el profundo mundo espiritual de los pueblos nahuas—desde los ciclos cósmicos de los Cinco Soles hasta el calendario sagrado y las grandes deidades.',
      nah: 'Xiquitta in hueyi teochihualiztli Nahua tlacameh—itech Macuilli Tonatiuh ihuan tonalpohualli ihuan huehueteotl.'
    },
    'religion.cosmology': {
      en: 'Nahua Cosmology',
      es: 'Cosmología Nahua',
      nah: 'Nahua Cemanahuac'
    },
    'religion.fivesuns': {
      en: 'The Five Suns (Nahui Ollin)',
      es: 'Los Cinco Soles (Nahui Ollin)',
      nah: 'Macuilli Tonatiuh (Nahui Ollin)'
    },
    'religion.fivesuns.desc': {
      en: 'The Nahua believed the universe had been created and destroyed four times before the current era. Each "Sun" represented a cosmic age ruled by a different deity, ending in catastrophic destruction. The current world, the Fifth Sun, was created at Teotihuacan through divine sacrifice.',
      es: 'Los nahuas creían que el universo había sido creado y destruido cuatro veces antes de la era actual. Cada "Sol" representaba una edad cósmica gobernada por una deidad diferente, terminando en destrucción catastrófica. El mundo actual, el Quinto Sol, fue creado en Teotihuacan a través del sacrificio divino.',
      nah: 'In Nahuah quineltocayah in cemanahuac oquichiuhqueh ihuan oquipolohqueh nauhpa achto ipan axcan. Ce ce "Tonatiuh" cah ce cemanahuac cahuitl. In axcan, Macuilli Tonatiuh, omochiuh itech Teotihuacan.'
    },
    'religion.deities': {
      en: 'Major Deities',
      es: 'Deidades Principales',
      nah: 'Huehuehteteoh'
    },
    'religion.calendars': {
      en: 'Sacred Calendar Systems',
      es: 'Sistemas de Calendarios Sagrados',
      nah: 'Tonalpohualli ihuan Xiuhpohualli'
    },
    'religion.rituals': {
      en: 'Ritual & Ceremony',
      es: 'Ritual y Ceremonia',
      nah: 'Tlamanalliztli'
    },

    // Deities
    'deity.huitzilopochtli': {
      en: 'Huitzilopochtli',
      es: 'Huitzilopochtli',
      nah: 'Huitzilopochtli'
    },
    'deity.huitzilopochtli.role': {
      en: 'God of War & the Sun',
      es: 'Dios de la Guerra y el Sol',
      nah: 'Yaotl ihuan Tonatiuh Teotl'
    },
    'deity.tlaloc': {
      en: 'Tlaloc',
      es: 'Tláloc',
      nah: 'Tlaloc'
    },
    'deity.tlaloc.role': {
      en: 'God of Rain & Fertility',
      es: 'Dios de la Lluvia y la Fertilidad',
      nah: 'Quiyahuitl ihuan Xochitl Teotl'
    },
    'deity.quetzalcoatl': {
      en: 'Quetzalcoatl',
      es: 'Quetzalcóatl',
      nah: 'Quetzalcoatl'
    },
    'deity.quetzalcoatl.role': {
      en: 'Feathered Serpent, God of Wind & Knowledge',
      es: 'Serpiente Emplumada, Dios del Viento y el Conocimiento',
      nah: 'Quetzalli Coatl, Ehecatl ihuan Tlamatiliztli Teotl'
    },
    'deity.tezcatlipoca': {
      en: 'Tezcatlipoca',
      es: 'Tezcatlipoca',
      nah: 'Tezcatlipoca'
    },
    'deity.tezcatlipoca.role': {
      en: 'Smoking Mirror, God of Night & Destiny',
      es: 'Espejo Humeante, Dios de la Noche y el Destino',
      nah: 'Tezcatl Ipoca, Yohualli ihuan Tonalli Teotl'
    },
    'deity.coatlicue': {
      en: 'Coatlicue',
      es: 'Coatlicue',
      nah: 'Coatlicue'
    },
    'deity.coatlicue.role': {
      en: 'Earth Mother, She of the Serpent Skirt',
      es: 'Madre Tierra, La de la Falda de Serpientes',
      nah: 'Tlalli Tonantzin, Coatl Icue'
    },
    'deity.xipetotec': {
      en: 'Xipe Totec',
      es: 'Xipe Tótec',
      nah: 'Xipe Totec'
    },
    'deity.xipetotec.role': {
      en: 'Our Lord the Flayed One, God of Spring',
      es: 'Nuestro Señor el Desollado, Dios de la Primavera',
      nah: 'Toxipeuh, Xopantla Teotl'
    },
    'deity.mictlantecuhtli': {
      en: 'Mictlantecuhtli',
      es: 'Mictlantecuhtli',
      nah: 'Mictlantecuhtli'
    },
    'deity.mictlantecuhtli.role': {
      en: 'Lord of Mictlan, God of Death',
      es: 'Señor de Mictlán, Dios de la Muerte',
      nah: 'Mictlan Tecuhtli, Miquiztli Teotl'
    },
    'deity.xochiquetzal': {
      en: 'Xochiquetzal',
      es: 'Xochiquetzal',
      nah: 'Xochiquetzal'
    },
    'deity.xochiquetzal.role': {
      en: 'Goddess of Beauty, Love & Arts',
      es: 'Diosa de la Belleza, el Amor y las Artes',
      nah: 'Xochitl, Tlazohtlaliztli ihuan Toltecayotl Teocihuatl'
    },

    // ──────────── Language Page ────────────
    'language.title': {
      en: 'Nahuatl Language Hub',
      es: 'Centro de la Lengua Náhuatl',
      nah: 'Nahuatlahtolli Calli'
    },
    'language.subtitle': {
      en: 'Learn the living language of the Nahua peoples. From beginner lessons to advanced grammar, dictionary, and codex translations.',
      es: 'Aprende la lengua viva de los pueblos nahuas. Desde lecciones para principiantes hasta gramática avanzada, diccionario y traducciones de códices.',
      nah: 'Ximomachti in yoltoc tlahtolli Nahua tlacameh. Itech tlamachtiliztli, amatlahcuilolli, nahuatlahtolmatiliztli, ihuan amoxtli.'
    },
    'language.lessons': {
      en: 'Language Lessons',
      es: 'Lecciones de Idioma',
      nah: 'Tlamachtiliztli'
    },
    'language.dictionary': {
      en: 'Nahuatl Dictionary',
      es: 'Diccionario Náhuatl',
      nah: 'Nahuatl Amatlahcuilolli'
    },
    'language.codex': {
      en: 'Codex Archive',
      es: 'Archivo de Códices',
      nah: 'Amoxtli'
    },
    'language.search.placeholder': {
      en: 'Search Nahuatl words...',
      es: 'Buscar palabras en náhuatl...',
      nah: 'Xitlatemohua Nahuatl tlahtolmeh...'
    },
    'language.grammar': {
      en: 'Grammar & Structure',
      es: 'Gramática y Estructura',
      nah: 'Nahuatlahtolmatiliztli'
    },
    'language.pronunciation': {
      en: 'Pronunciation Guide',
      es: 'Guía de Pronunciación',
      nah: 'Camanaloni'
    },

    // ──────────── Maps Page ────────────
    'maps.title': {
      en: 'Interactive Nahua Map Atlas',
      es: 'Atlas de Mapas Interactivos Nahuas',
      nah: 'Nahua Tlalpilli Amoxtli'
    },
    'maps.subtitle': {
      en: 'Explore the geography of Nahua civilization through interactive maps spanning pre-conquest city-states to modern communities.',
      es: 'Explora la geografía de la civilización nahua a través de mapas interactivos que abarcan desde las ciudades-estado pre-conquista hasta las comunidades modernas.',
      nah: 'Xiquitta in Nahua tlalli itech tlalpilli, itech ye huehcauh altepemeh ihuan axcan altepemeh.'
    },
    'maps.filter.cities': {
      en: 'City-States',
      es: 'Ciudades-Estado',
      nah: 'Altepemeh'
    },
    'maps.filter.trade': {
      en: 'Trade Routes',
      es: 'Rutas Comerciales',
      nah: 'Pochtecayotl Ohtli'
    },
    'maps.filter.tribute': {
      en: 'Tribute Regions',
      es: 'Regiones Tributarias',
      nah: 'Tequitl Tlalli'
    },
    'maps.filter.migration': {
      en: 'Migration Paths',
      es: 'Rutas de Migración',
      nah: 'Nenemiztli Ohtli'
    },
    'maps.filter.modern': {
      en: 'Modern Nahuatl Regions',
      es: 'Regiones Náhuatl Modernas',
      nah: 'Axcan Nahuatl Tlalli'
    },

    // ──────────── Figures Page ────────────
    'figures.title': {
      en: 'Famous Nahua Figures',
      es: 'Figuras Nahuas Célebres',
      nah: 'Nahua Tlatoanime ihuan Tlamatinimeh'
    },
    'figures.subtitle': {
      en: 'From warrior-kings and philosopher-poets to colonial chroniclers and modern activists—the people who shaped Nahua civilization.',
      es: 'Desde reyes guerreros y poetas filósofos hasta cronistas coloniales y activistas modernos—las personas que forjaron la civilización nahua.',
      nah: 'Itech yaotlatoanime ihuan cuicapicqueh, tlahtolpouhqueh ihuan axcan teyacanqueh—in tlacameh oquichihuilihqueh Nahua tlatocayotl.'
    },
    'figures.category.preconquest': {
      en: 'Pre-Conquest Leaders',
      es: 'Líderes Pre-Conquista',
      nah: 'Achto Tlatoanime'
    },
    'figures.category.thinkers': {
      en: 'Thinkers & Poets',
      es: 'Pensadores y Poetas',
      nah: 'Tlamatinimeh ihuan Cuicapicqueh'
    },
    'figures.category.colonial': {
      en: 'Colonial-Era Writers',
      es: 'Escritores de la Era Colonial',
      nah: 'Caxtiltecah Cahuitl Tlahcuilohqueh'
    },
    'figures.category.modern': {
      en: 'Modern Leaders',
      es: 'Líderes Modernos',
      nah: 'Axcan Teyacanqueh'
    },

    // ──────────── Culture Page ────────────
    'culture.title': {
      en: 'Nahua Culture & Daily Life',
      es: 'Cultura y Vida Cotidiana Nahua',
      nah: 'Nahua Nemiliztli ihuan Momoztlayotl'
    },
    'culture.subtitle': {
      en: 'Deep dives into the social structures, education, cuisine, arts, trade, and everyday life of the Nahua world.',
      es: 'Inmersiones profundas en las estructuras sociales, educación, cocina, artes, comercio y vida cotidiana del mundo nahua.',
      nah: 'Huelitiliztli ipan altepetl, tlamachtiliztli, tlacualli, toltecayotl, pochtecayotl, ihuan momoztlayotl ipan Nahua cemanahuac.'
    },
    'culture.education': {
      en: 'Education System',
      es: 'Sistema Educativo',
      nah: 'Tlamachtiliztli'
    },
    'culture.family': {
      en: 'Family & Social Structure',
      es: 'Familia y Estructura Social',
      nah: 'Cencalli ihuan Altepetl'
    },
    'culture.cuisine': {
      en: 'Cuisine & Agriculture',
      es: 'Cocina y Agricultura',
      nah: 'Tlacualli ihuan Milchihualiztli'
    },
    'culture.arts': {
      en: 'Arts & Textiles',
      es: 'Artes y Textiles',
      nah: 'Toltecayotl ihuan Quachtli'
    },
    'culture.trade': {
      en: 'Trade & Markets',
      es: 'Comercio y Mercados',
      nah: 'Pochtecayotl ihuan Tianquiztli'
    },
    'culture.military': {
      en: 'Military Organization',
      es: 'Organización Militar',
      nah: 'Yaoyotl'
    },
    'culture.law': {
      en: 'Legal Systems',
      es: 'Sistemas Legales',
      nah: 'Nahuatilli'
    },
    'culture.architecture': {
      en: 'Architecture',
      es: 'Arquitectura',
      nah: 'Caltlamachiliztli'
    },

    // ──────────── Common / Shared ────────────
    'common.readmore': {
      en: 'Read More',
      es: 'Leer Más',
      nah: 'Xicpohua'
    },
    'common.back': {
      en: 'Back',
      es: 'Atrás',
      nah: 'Ximocuepa'
    },
    'common.home': {
      en: 'Home',
      es: 'Inicio',
      nah: 'Calpolli'
    },
    'common.learnmore': {
      en: 'Learn More',
      es: 'Saber Más',
      nah: 'Xicmati Oc'
    },
    'common.sources': {
      en: 'Sources',
      es: 'Fuentes',
      nah: 'Tlahtolpehualoni'
    }
  };

  let currentLang = DEFAULT_LANG;

  function detectLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) return urlLang;

    const browserLang = (navigator.language || '').slice(0, 2);
    if (browserLang === 'es') return 'es';

    return DEFAULT_LANG;
  }

  function t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[currentLang] || entry[DEFAULT_LANG] || key;
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'nah' ? 'nah' : lang;
    document.documentElement.dir = 'ltr';
    applyTranslations();
    updateLangSwitcher();
    updateHreflang();
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = t(key);
      el.textContent = translated;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translated = t(key);
      el.innerHTML = translated;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(key));
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const key = metaDesc.getAttribute('data-i18n-content');
      if (key) metaDesc.setAttribute('content', t(key));
    }
  }

  function updateLangSwitcher() {
    const labels = { en: 'EN', es: 'ES', nah: 'NAH' };
    document.querySelectorAll('.lang-switcher__current').forEach(el => {
      el.textContent = labels[currentLang] || 'EN';
    });
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function updateHreflang() {
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());

    const base = window.location.origin + window.location.pathname;
    SUPPORTED_LANGS.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang === 'nah' ? 'nah' : lang;
      link.href = `${base}?lang=${lang}`;
      document.head.appendChild(link);
    });

    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = window.location.origin + window.location.pathname;
    document.head.appendChild(xDefault);
  }

  function getCurrentLang() {
    return currentLang;
  }

  function init() {
    currentLang = detectLanguage();
    setLanguage(currentLang);
  }

  return {
    init,
    t,
    setLanguage,
    getCurrentLang,
    SUPPORTED_LANGS,
    translations
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  NahuasI18n.init();
});
