// ─────────────────────────────────────────────────────────────────────────────
// BOATS DATA
//
// Add, remove, or edit boats here. Each boat gets its own detail page
// automatically at /vloot/[slug].
//
// Images: put photos in /public/images/boats/[slug]/
//   e.g. /public/images/boats/de-kievit/1.jpg
//        /public/images/boats/de-kievit/2.jpg  (etc.)
// Then set the `images` array below to the filenames: ['1.jpg', '2.jpg']
// ─────────────────────────────────────────────────────────────────────────────

export interface Boat {
  slug: string           // URL-safe name, used in /vloot/[slug]
  name: string
  type: BoatType
  length: string         // e.g. "7.5 m"
  capacity: number       // max persons
  engine?: string        // e.g. "40 pk Yamaha buitenboordmotor"
  year?: number          // bouwjaar
  pricePerDay: number    // EUR
  pricePerHalfDay?: number
  pricePerWeek?: number
  deposit?: number       // borg in EUR
  features: string[]     // bulleted list of highlights
  shortDescription: string   // shown on cards (~1 sentence)
  description: string        // full text for detail page (can use \n\n for paragraphs)
  images: string[]           // filenames inside /public/images/boats/[slug]/
  coverImage?: string        // full /public path override used until per-boat photos exist
  featured: boolean          // show on homepage
  available: boolean         // set false to mark as "momenteel niet beschikbaar"
}

export type BoatType = 'Sloep' | 'Motorboot' | 'Kajuitboot' | 'Zeilboot' | 'RIB'

// ─────────────────────────────────────────────────────────────────────────────
// VLOOT — voeg hier boten toe of verwijder ze
// ─────────────────────────────────────────────────────────────────────────────

export const boats: Boat[] = [
  {
    slug: 'de-kievit',
    name: 'De Kievit',
    type: 'Sloep',
    length: '7.5 m',
    capacity: 8,
    engine: '40 pk Yamaha buitenboordmotor',
    year: 2019,
    pricePerDay: 195,
    pricePerHalfDay: 120,
    pricePerWeek: 950,
    deposit: 300,
    featured: true,
    available: true,
    shortDescription: 'Ruime open sloep, ideaal voor een dagje varen met het gezin op de Binnenmaas.',
    description: `De Kievit is onze populairste boot voor gezinsuitjes en groepen. Met 7,5 meter lengte en plaats voor 8 personen is er genoeg ruimte voor iedereen.

De boot is uitgerust met een 40 pk Yamaha buitenboordmotor, een Bluetooth-geluidsinstallatie, bimini-top voor schaduw en een koelbox. Zowel ervaren als onervaren vaarders zijn welkom — geen vaarbewijs vereist.

De Kievit vaart comfortabel op de Binnenmaas en de omringende wateren van de Hoeksche Waard. Ideaal voor picknicks op het water, vissen of gewoon genieten van het Nederlandse polderlandschap.`,
    images: [],
    coverImage: '/images/boattype-1_water.jpg',
    features: [
      'Geen vaarbewijs vereist',
      'Bimini-top (zonnescherm)',
      'Bluetooth-geluidsinstallatie',
      'Koelbox & anker aan boord',
      'Veiligheidspakket inclusief',
      'Honden welkom',
    ],
  },
  {
    slug: 'de-strandloper',
    name: 'De Strandloper',
    type: 'Sloep',
    length: '5.8 m',
    capacity: 6,
    engine: '25 pk Mercury buitenboordmotor',
    year: 2021,
    pricePerDay: 145,
    pricePerHalfDay: 90,
    pricePerWeek: 720,
    deposit: 250,
    featured: true,
    available: true,
    shortDescription: 'Compacte en wendbare sloep, perfect voor koppels of kleine groepen.',
    description: `De Strandloper is onze compacte, wendbare sloep. Met 5,8 meter is hij gemakkelijk te besturen en ideaal voor smalle vaargeulen en rustige kreekjes in de Hoeksche Waard.

Uitgerust met een zuinige 25 pk Mercury motor, is De Strandloper ook geschikt voor langere tochten. De boot heeft comfortabele stoelen voor 6 personen en een kleine opbergkoffer.

Perfect voor koppels, kleine gezinnen of vrienden die een rustige dag op het water willen doorbrengen.`,
    images: [],
    coverImage: '/images/boattype-1-2_water.jpg',
    features: [
      'Geen vaarbewijs vereist',
      'Zuinige 25 pk motor',
      'Comfortabele bekleding',
      'Veiligheidspakket inclusief',
      'Geschikt voor smalle vaarwegen',
    ],
  },
  {
    slug: 'de-zeearend',
    name: 'De Zeearend',
    type: 'Motorboot',
    length: '9.2 m',
    capacity: 10,
    engine: '2× 60 pk Suzuki buitenboordmotoren',
    year: 2018,
    pricePerDay: 295,
    pricePerWeek: 1450,
    deposit: 500,
    featured: true,
    available: true,
    shortDescription: 'Onze grootste boot — perfect voor groepen en speciale gelegenheden op het water.',
    description: `De Zeearend is het pronkstuk van onze vloot. Met 9,2 meter lengte en ruimte voor 10 personen is hij bij uitstek geschikt voor feestjes, bedrijfsuitjes of grote familiebijeenkomsten.

De boot is uitgerust met twee krachtige 60 pk Suzuki buitenboordmotoren, een Bimini-top, een grote zit- en ligoppervlakte, ingebouwde koelboxen en een volledig veiligheidspakket.

Vaarbewijs vereist (CWO III of vergelijkbaar). Wij kunnen u desgewenst doorverwijzen naar een erkende schipper.`,
    images: [],
    coverImage: '/images/boattype-1_water.jpg',
    features: [
      'Vaarbewijs vereist (CWO III)',
      'Twee motoren voor extra betrouwbaarheid',
      'Grote zit- & ligoppervlakte',
      'Ingebouwde koelboxen',
      'Bluetooth-geluidsinstallatie',
      'Geschikt voor bedrijfsuitjes',
      'Schipper beschikbaar op aanvraag',
    ],
  },
  {
    slug: 'de-merel',
    name: 'De Merel',
    type: 'Kajuitboot',
    length: '6.5 m',
    capacity: 4,
    engine: '30 pk Honda buitenboordmotor',
    year: 2020,
    pricePerDay: 225,
    pricePerWeek: 1100,
    deposit: 350,
    featured: false,
    available: true,
    shortDescription: 'Kleine kajuitboot met slaapruimte voor 2 — ideaal voor een nachtje weg op het water.',
    description: `De Merel is onze enige kajuitboot en biedt een unieke mogelijkheid om te overnachten op het water. De kajuit biedt slaapruimte voor 2 personen en heeft een kleine pantry.

Met zijn 30 pk Honda motor en stabiele romp is De Merel comfortabel te besturen op de wateren van de Hoeksche Waard en omgeving.

Perfect voor een romantisch weekendje weg of voor vissers die vroeg willen opstaan. Inclusief beddengoed, gaskomfoor en handdoeken.`,
    images: [],
    coverImage: '/images/boattype-1-2_water.jpg',
    features: [
      'Vaarbewijs vereist (CWO II)',
      'Slaapruimte voor 2 personen',
      'Pantry met gaskomfoor',
      'Beddengoed & handdoeken inbegrepen',
      'Toilet aan boord',
      'Ideaal voor overnachting',
    ],
  },
]

// Helper: get a single boat by slug
export function getBoat(slug: string): Boat | undefined {
  return boats.find((b) => b.slug === slug)
}

// Helper: get all featured boats (shown on homepage)
export function getFeaturedBoats(): Boat[] {
  return boats.filter((b) => b.featured && b.available)
}
