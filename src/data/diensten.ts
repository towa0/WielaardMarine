export interface Dienst {
  slug: string;
  order: string;
  title: string;
  homeSummary: string;
  intro: string[];
  forWhom: string;
  result: string;
}

export const diensten: Dienst[] = [
  {
    slug: "opfrisbeurt",
    order: "01",
    title: "Opfrisbeurt",
    homeSummary:
      "Voor een boot die nog goed is maar zijn diepte kwijt is. Reinigen, licht polijsten, beschermen.",
    intro: [
      "De lichtste behandeling. De romp wordt grondig gereinigd, aanslag en waterlijn gaan eraf, en de toplaag krijgt één polijstgang om de matte waas weg te halen.",
      "Geen oplossing voor echte oxidatie — daarvoor is de glansrestauratie. Wel de juiste keuze om een boot die goed onderhouden is scherp te houden.",
    ],
    forWhom: "Sloepen en kajuitboten waarvan de gelcoat nog gezond is",
    result: "Egale, schone glans en een beschermde toplaag",
  },
  {
    slug: "glansrestauratie",
    order: "02",
    title: "Volledige glansrestauratie",
    homeSummary:
      "Meerstaps polijstwerk op een romp die zwaar geoxideerd is. Terug naar diepe glans.",
    intro: [
      "Meerstaps polijstwerk op een romp die zijn glans echt kwijt is. We werken van grof naar fijn: eerst de oxidatielaag eraf, dan opbouwen naar diepte, dan afwerken.",
      "Dit is het werk dat het verschil maakt op de voor-en-na beelden. Altijd handmatig, altijd afgestemd op hoe hard de gelcoat is — een boot uit 2005 vraagt iets anders dan een uit 2021.",
    ],
    forWhom: "Rompen met zichtbare oxidatie, krijtaanslag of verkleuring",
    result: "Diepe, spiegelende glans en een romp die weer beschermd is",
  },
  {
    slug: "coating-bescherming",
    order: "03",
    title: "Coating & bescherming",
    homeSummary:
      "De laag die het werk vasthoudt. Houdt water, vuil en uv van de gelcoat af.",
    intro: [
      "Polijsten haalt weg, coating houdt tegen. Zonder beschermlaag begint de oxidatie meteen weer, en staat u volgend seizoen op hetzelfde punt.",
      "Wordt vrijwel altijd direct na een behandeling aangebracht — dat is het moment dat de toplaag er klaar voor is.",
    ],
    forWhom: "Elke boot, direct na polijstwerk",
    result:
      "Bescherming tegen uv, vuil en verkleuring; makkelijker schoon te houden",
  },
  {
    slug: "interieurreiniging",
    order: "04",
    title: "Interieurreiniging",
    homeSummary:
      "Kussens, kuip en dek. Vaak in combinatie met een behandeling van buiten.",
    intro: [
      "Kussens, bekleding, kuip en dek. Een boot die van buiten strak staat maar binnen naar vorig seizoen ruikt is niet af.",
      "Meestal in combinatie met een behandeling van buiten, omdat de boot dan toch stilligt.",
    ],
    forWhom: "Open sloepen, kuipen en kajuitboten",
    result: "Schone bekleding en kuip, zonder aanslag en vlekken",
  },
];

export function getDienst(slug: string): Dienst | undefined {
  return diensten.find((d) => d.slug === slug);
}
