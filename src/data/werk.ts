export interface WerkFoto {
  id: string;
  src: string;
  alt: string; // descriptive, for SEO
  caption: string; // one line, boottype + wat er te zien is
  width: number;
  height: number;
}

export interface WerkPaar {
  id: string;
  title: string;
  description: string;
  before: { src: string; alt: string; position?: string };
  after: { src: string; alt: string; position?: string };
}

const dir = "/images/wielaard-before-after";

// Dezelfde boot, vergelijkbare hoek, maar niet pixel-gelijk: daarom twee
// panelen naast elkaar en niet in de BeforeAfterSlider.
export const werkParen: WerkPaar[] = [
  {
    id: "lago-amore",
    title: "Lago Amore 570, zwarte romp",
    description:
      "Deze zwarte sloep kwam binnen met een doffe romp vol aanslag. Na het polijsten staat de romp in hoogglans en spiegelt de omgeving in het gelcoat.",
    before: {
      src: `${dir}/lago-amore-boeg-voor.jpeg`,
      alt: "Boeg van zwarte sloep Lago Amore 570, dof en vol aanslag, voor het polijsten",
    },
    after: {
      src: `${dir}/lago-amore-boeg-na.jpeg`,
      alt: "Boeg van dezelfde Lago Amore 570 in hoogglans, omgeving spiegelt in de romp",
      position: "center top",
    },
  },
  {
    id: "bavaria",
    title: "Bavaria motorjacht, blauwe romp",
    description:
      "De blauwe romp van deze Bavaria was verkleurd en dof. Na het polijsten is de kleur weer diep blauw, met een glans waarin de loods te zien is.",
    before: {
      src: `${dir}/bavaria-romp-voor.jpeg`,
      alt: "Romp van Bavaria motorjacht, verkleurd en dof blauw, voor het polijsten",
    },
    after: {
      src: `${dir}/bavaria-romp-na.jpeg`,
      alt: "Romp van dezelfde Bavaria in diep blauw en hoogglans, na het polijsten",
    },
  },
];

export const werkTapeTest = {
  src: `${dir}/blauwe-parel-tape-test.jpeg`,
  alt: "Donkerblauwe romp Blauwe Parel met verticale tapestrook: links gepolijst en spiegelend, rechts nog dof",
  title: "Eén romp, half gepolijst",
  caption:
    "Links van de tape gepolijst, rechts nog niet. Zelfde boot, zelfde moment.",
};

// Mensen aan het werk: staand formaat, twee per rij.
export const werkAanHetWerk: WerkFoto[] = [
  {
    id: "werk-steiger",
    src: `${dir}/spiegel-afgeplakt-werk-steiger.jpeg`,
    alt: "Polijsten vanaf een steiger aan een afgeplakte blauwe spiegel",
    caption: "Blauwe spiegel — afgeplakt en vanaf de steiger",
    width: 1200,
    height: 1600,
  },
  {
    id: "jacht-kajuit-werk",
    src: `${dir}/motorjacht-0614yv-werk-kajuit.jpeg`,
    alt: "Polijstmachine in de hand naast de kajuit van een wit motorjacht in de loods",
    caption: "Motorjacht, kajuit — machine in de hand",
    width: 1200,
    height: 1600,
  },
  {
    id: "werk-ladder",
    src: `${dir}/motorjacht-6yb764-werk-ladder.jpeg`,
    alt: "Werk op een ladder aan de opbouw van een wit motorjacht op de kant",
    caption: "Motorjacht op de kant — werk aan de opbouw",
    width: 1200,
    height: 1600,
  },
  {
    id: "jacht-voordek",
    src: `${dir}/motorjacht-0614yv-voordek-werk.jpeg`,
    alt: "Wit motorjacht in de loods, voordek spiegelt als glas tijdens het polijsten",
    caption: "Motorjacht, voordek — tijdens het werk",
    width: 1200,
    height: 1600,
  },
];

// Liggende foto's over de volle breedte, staande per twee.
export const werkFotos: WerkFoto[] = [
  {
    id: "highland-boeg",
    src: `${dir}/highland-boeg-close-na.jpeg`,
    alt: "Zwarte sloep Highland, boeg in hoogglans na polijsten, klinkers spiegelen in de romp",
    caption: "Sloep Highland, zwarte romp — na polijsten",
    width: 1600,
    height: 1200,
  },
  {
    id: "bliss-boeg",
    src: `${dir}/bliss-boeg-na.jpeg`,
    alt: "Bliss sportboot in de werkplaats met zwarte boeg in hoogglans",
    caption: "Bliss, zwarte boeg — na polijsten",
    width: 1200,
    height: 1600,
  },
  {
    id: "lago-amore-zijkant-voor",
    src: `${dir}/lago-amore-zijkant-voor.jpeg`,
    alt: "Zijkant van Lago Amore 570 voor behandeling, doffe romp met aanslag en groen op de stootrand",
    caption: "Lago Amore 570, zijkant — zo kwam hij binnen",
    width: 1200,
    height: 1600,
  },
  {
    id: "lago-amore-achterzijde",
    src: `${dir}/lago-amore-achterzijde-na.jpeg`,
    alt: "Achterzijde van Lago Amore 570, licht gelcoat glanzend na behandeling",
    caption: "Lago Amore 570, achterzijde — na behandeling",
    width: 1600,
    height: 870,
  },
  {
    id: "jacht-zijkant",
    src: `${dir}/motorjacht-0614yv-zijkant-na.jpeg`,
    alt: "Wit motorjacht in de loods met glanzende opbouw en een fles polijstmiddel op het dek",
    caption: "Motorjacht, opbouw — na polijsten",
    width: 1200,
    height: 1600,
  },
  {
    id: "jacht-kajuit-na",
    src: `${dir}/motorjacht-0614yv-kajuit-na.jpeg`,
    alt: "Kajuit en gangboord van wit motorjacht met glanzend gelcoat en gepoetst RVS",
    caption: "Motorjacht, kajuit en RVS — na polijsten",
    width: 1200,
    height: 1600,
  },
  {
    id: "jacht-6yb-romp",
    src: `${dir}/motorjacht-6yb764-romp-spiegeling-na.jpeg`,
    alt: "Witte romp van motorjacht op de kant, omgeving spiegelt in het gelcoat",
    caption: "Motorjacht, witte romp — spiegeling in het gelcoat",
    width: 1600,
    height: 1200,
  },
];
