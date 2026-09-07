export type WerkSpan = "square" | "wide" | "tall" | "big";

export interface WerkFoto {
  id: string;
  src: string; // /images/...
  alt: string; // descriptive, for SEO
  caption: string; // one line, lowercase, boottype + wat er gedaan is
  span?: WerkSpan;
}

// De ene set waar we een echt voor/na-paar van hebben.
export const werkVoorNa = {
  before: "/images/boat_washed_before.JPG",
  after: "/images/boat_washed_after.jpg",
  title: "Kajuitboot, geoxideerde romp",
  subtitle: "Volledige glansrestauratie",
  dienstSlug: "glansrestauratie",
};

export const werkFotos: WerkFoto[] = [
  {
    id: "highland-boeg",
    src: "/images/sloep-highland-boeg.jpg",
    alt: "Zwarte sloep Highland, boeg in hoogglans na polijsten, omgeving spiegelt in de romp",
    caption: "Sloep, zwarte romp — volledige glansrestauratie",
    span: "big",
  },
  {
    id: "grid-1",
    src: "/images/grid_img-1.jpg",
    alt: "Motorjacht na polijsten",
    caption: "Motorjacht na polijsten",
    span: "wide",
  },
  {
    id: "kajuitboot-dek",
    src: "/images/polijstwerk-kajuitboot-dek.jpg",
    alt: "Julian polijst met machine het kajuitdak van een wit motorjacht in de loods",
    caption: "Motorjacht, kajuitdak — machinaal polijsten",
    span: "tall",
  },
  {
    id: "grid-2",
    src: "/images/grid_img-2.jpg",
    alt: "Close-up gelcoat na behandeling",
    caption: "Close-up gelcoat na behandeling",
    span: "square",
  },
  {
    id: "poloshed-1",
    src: "/images/poloshed_boat1.jpg",
    alt: "Volledige restauratie, eindresultaat",
    caption: "Volledige restauratie",
    span: "big",
  },
  {
    id: "maasdam-water",
    src: "/images/sloep-maasdam-water.jpg",
    alt: "Grijze sloep Maasdam aan de kant met teakdek, na behandeling",
    caption: "Sloep, grijze romp en teakdek — opfrisbeurt",
    span: "tall",
  },
  {
    id: "grid-6",
    src: "/images/grid_img-6.JPG",
    alt: "Detail spiegel na polijsten",
    caption: "Detail spiegel",
    span: "wide",
  },
  {
    id: "grid-4",
    src: "/images/grid_img-4.jpg",
    alt: "Sloep gepolijst",
    caption: "Sloep gepolijst",
    span: "square",
  },
  {
    id: "grid-5",
    src: "/images/grid_img-5.jpg",
    alt: "Kajuitboot romp voor behandeling",
    caption: "Kajuitboot romp voor behandeling",
    span: "square",
  },

  // Nog niet aangeleverd — src toevoegen en uncommenten zodra het bestand
  // in public/images staat. Component hoeft niet aangeraakt te worden.
  // {
  //   id: "blauwe-parel-afplakken",
  //   src: "/images/blauwe-parel-afplakken.jpg",
  //   alt: "Donkerblauwe romp Blauwe Parel Zwartewaal, half afgeplakt met tape ter voorbereiding",
  //   caption: "Voorbereiding: afplakken vóór behandeling",
  //   span: "wide",
  // },
  // {
  //   id: "motorjacht-ladder",
  //   src: "/images/motorjacht-ladder.jpg",
  //   alt: "Julian op een ladder aan het werk bij een wit-blauw motorjacht, buiten",
  //   caption: "Motorjacht, romp en opbouw — behandeling ter plaatse",
  //   span: "tall",
  // },
];
