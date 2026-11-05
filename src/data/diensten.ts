export interface Dienst {
  slug: string;
  order: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  homeSummary: string;
  intro: string[];
  forWhom: string;
  result: string;
  signs: string[]; // wanneer deze behandeling past
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  image?: { src: string; alt: string };
}

const fotos = "/images/wielaard-before-after";

export const diensten: Dienst[] = [
  {
    slug: "opfrisbeurt",
    order: "01",
    title: "Opfrisbeurt",
    metaTitle: "Opfrisbeurt boot: reinigen en licht polijsten",
    metaDescription:
      "Opfrisbeurt voor een boot die goed onderhouden is maar zijn diepte kwijt is: reinigen, één polijstgang en beschermen. Aan de Binnenmaas in de Hoeksche Waard.",
    h1: "Opfrisbeurt voor uw boot: reinigen, licht polijsten, beschermen",
    homeSummary:
      "Voor een boot die nog goed is maar zijn diepte kwijt is. Reinigen, licht polijsten, beschermen.",
    intro: [
      "De lichtste behandeling. De romp wordt grondig gereinigd, aanslag en waterlijn gaan eraf, en de toplaag krijgt één polijstgang om de matte waas weg te halen.",
      "Geen oplossing voor echte oxidatie — daarvoor is de glansrestauratie. Wel de juiste keuze om een boot die goed onderhouden is scherp te houden.",
    ],
    forWhom: "Sloepen en kajuitboten waarvan de gelcoat nog gezond is",
    result: "Egale, schone glans en een beschermde toplaag",
    signs: [
      "De romp is goed onderhouden, maar de glans heeft zijn diepte verloren",
      "Er ligt een lichte, matte waas over de gelcoat",
      "Er zit aanslag op de romp en langs de waterlijn",
      "U wilt voorkomen dat een lichte waas uitgroeit tot oxidatie",
    ],
    steps: [
      {
        title: "Reinigen",
        text: "De romp wordt grondig gereinigd. Aanslag en de rand op de waterlijn gaan eraf.",
      },
      {
        title: "Eén polijstgang",
        text: "Eén gang over de toplaag haalt de matte waas weg en brengt de glans egaal terug.",
      },
      {
        title: "Beschermen",
        text: "De toplaag wordt beschermd, zodat het resultaat niet direct weer wegzakt.",
      },
    ],
    faqs: [
      {
        q: "Is een opfrisbeurt genoeg voor mijn boot?",
        a: "Als de gelcoat nog gezond is wel. Ziet u krijtaanslag of verkleuring, dan is er sprake van oxidatie en is een glansrestauratie nodig. Stuur een paar foto's van de romp, dan zeggen wij welke van de twee past.",
      },
      {
        q: "Wat kost een opfrisbeurt?",
        a: "Dat hangt af van de lengte en de staat van de boot. Daarom werken wij met een offerte in plaats van een prijslijst.",
      },
    ],
    image: {
      src: `${fotos}/motorjacht-0614yv-zijkant-na.jpeg`,
      alt: "Wit motorjacht in de loods met glanzende opbouw en een fles polijstmiddel op het dek",
    },
  },
  {
    slug: "glansrestauratie",
    order: "02",
    title: "Volledige glansrestauratie",
    metaTitle: "Glansrestauratie boot: gelcoat polijsten",
    metaDescription:
      "Is de gelcoat van uw boot dof of geoxideerd? Met meerstaps polijstwerk halen wij de oxidatie eruit en komt de diepe glans terug. In de Hoeksche Waard.",
    h1: "Glansrestauratie: geoxideerde gelcoat terug naar diepe glans",
    homeSummary:
      "Meerstaps polijstwerk op een romp die zwaar geoxideerd is. Terug naar diepe glans.",
    intro: [
      "Meerstaps polijstwerk op een romp die zijn glans echt kwijt is. We werken van grof naar fijn: eerst de oxidatielaag eraf, dan opbouwen naar diepte, dan afwerken.",
      "Dit is het werk dat het verschil maakt op de voor-en-na beelden. Altijd handmatig, altijd afgestemd op hoe hard de gelcoat is — een boot uit 2005 vraagt iets anders dan een uit 2021.",
    ],
    forWhom: "Rompen met zichtbare oxidatie, krijtaanslag of verkleuring",
    result: "Diepe, spiegelende glans en een romp die weer beschermd is",
    signs: [
      "De gelcoat is dof en wordt niet meer glanzend van poetsen",
      "Er zit krijtaanslag op de romp",
      "De kleur van de romp is verkleurd of vaal geworden",
      "De omgeving spiegelt niet meer in de romp",
    ],
    steps: [
      {
        title: "Oxidatie verwijderen",
        text: "Eerst gaat de oxidatielaag eraf. Hoe grof er gewerkt wordt hangt af van de staat en de hardheid van de gelcoat.",
      },
      {
        title: "Opbouwen naar diepte",
        text: "Daarna wordt van grof naar fijn gewerkt, laag voor laag, tot de diepte in de glans terug is.",
      },
      {
        title: "Afwerken en beschermen",
        text: "De laatste gang werkt de romp af. Daarna volgt bescherming, anders begint de oxidatie meteen weer.",
      },
    ],
    faqs: [
      {
        q: "Is polijsten schadelijk voor de gelcoat?",
        a: "Polijsten neemt altijd een fractie van de toplaag mee. Daarom bepaalt de staat van de gelcoat hoe agressief er gewerkt wordt. Waar een lichte gang genoeg is, doen wij niet meer.",
      },
      {
        q: "Hoe lang ligt mijn boot stil?",
        a: "Dat verschilt per boot. U hoort de doorlooptijd vooraf, in de offerte.",
      },
    ],
  },
  {
    slug: "coating-bescherming",
    order: "03",
    title: "Coating & bescherming",
    metaTitle: "Coating boot: gelcoat beschermen",
    metaDescription:
      "Een coating houdt water, vuil en uv van de gelcoat af, zodat de glans na het polijsten blijft staan. Aangebracht direct na de behandeling, in de Hoeksche Waard.",
    h1: "Coating en bescherming voor de gelcoat van uw boot",
    homeSummary:
      "De laag die het werk vasthoudt. Houdt water, vuil en uv van de gelcoat af.",
    intro: [
      "Polijsten haalt weg, coating houdt tegen. Zonder beschermlaag begint de oxidatie meteen weer, en staat u volgend seizoen op hetzelfde punt.",
      "Wordt vrijwel altijd direct na een behandeling aangebracht — dat is het moment dat de toplaag er klaar voor is.",
    ],
    forWhom: "Elke boot, direct na polijstwerk",
    result:
      "Bescherming tegen uv, vuil en verkleuring; makkelijker schoon te houden",
    signs: [
      "Uw boot wordt gepolijst en u wilt dat de glans blijft staan",
      "De boot staat veel in de zon en het weer",
      "U wilt de romp makkelijker schoon kunnen houden",
      "U wilt verkleuring van de gelcoat voor zijn",
    ],
    steps: [
      {
        title: "Toplaag voorbereiden",
        text: "De coating gaat op een schone, behandelde toplaag. Daarom volgt hij vrijwel altijd direct op het polijstwerk.",
      },
      {
        title: "Coating aanbrengen",
        text: "De beschermlaag wordt over de behandelde delen aangebracht.",
      },
      {
        title: "Oplevering en advies",
        text: "U loopt de boot met ons langs en hoort wat u zelf kunt doen om het zo te houden.",
      },
    ],
    faqs: [
      {
        q: "Waarom coaten als de boot net gepolijst is?",
        a: "Polijsten haalt de aangetaste laag weg, maar beschermt niet. Zonder beschermlaag begint de oxidatie meteen weer, en staat u volgend seizoen op hetzelfde punt.",
      },
      {
        q: "Kan een coating ook zonder polijsten?",
        a: "Coating wordt vrijwel altijd direct na een behandeling aangebracht, omdat de toplaag er dan klaar voor is. Stuur een foto van de romp, dan kijken wij wat bij uw boot past.",
      },
    ],
    image: {
      src: `${fotos}/highland-boeg-close-na.jpeg`,
      alt: "Zwarte sloep Highland, boeg in hoogglans na polijsten, klinkers spiegelen in de romp",
    },
  },
  {
    slug: "interieurreiniging",
    order: "04",
    title: "Interieurreiniging",
    metaTitle: "Interieurreiniging boot: kussens, kuip en dek",
    metaDescription:
      "Interieurreiniging voor uw boot: kussens, bekleding, kuip en dek. Vaak gecombineerd met polijstwerk aan de buitenkant. Aan de Binnenmaas in de Hoeksche Waard.",
    h1: "Interieurreiniging voor uw boot: kussens, kuip en dek",
    homeSummary:
      "Kussens, kuip en dek. Vaak in combinatie met een behandeling van buiten.",
    intro: [
      "Kussens, bekleding, kuip en dek. Een boot die van buiten strak staat maar binnen naar vorig seizoen ruikt is niet af.",
      "Meestal in combinatie met een behandeling van buiten, omdat de boot dan toch stilligt.",
    ],
    forWhom: "Open sloepen, kuipen en kajuitboten",
    result: "Schone bekleding en kuip, zonder aanslag en vlekken",
    signs: [
      "De kussens en bekleding zitten vol vlekken of ruiken muf",
      "Er zit aanslag in de kuip of op het dek",
      "De boot komt uit de winterstalling en moet het seizoen in",
      "De buitenkant wordt behandeld en u wilt de boot in één keer klaar hebben",
    ],
    steps: [
      {
        title: "Kussens en bekleding",
        text: "Kussens en bekleding worden gereinigd en ontdaan van vlekken.",
      },
      {
        title: "Kuip",
        text: "De kuip wordt schoongemaakt en aanslag wordt verwijderd.",
      },
      {
        title: "Dek",
        text: "Tot slot het dek, zodat de boot aan boord net zo strak is als van buiten.",
      },
    ],
    faqs: [
      {
        q: "Kan interieurreiniging samen met polijstwerk?",
        a: "Ja, en dat is ook het meest gebruikelijk: de boot ligt dan toch stil.",
      },
      {
        q: "Wat kost interieurreiniging?",
        a: "Dat hangt af van de boot en de staat van het interieur. Stuur een paar foto's, dan krijgt u een offerte.",
      },
    ],
  },
];

export function getDienst(slug: string): Dienst | undefined {
  return diensten.find((d) => d.slug === slug);
}
