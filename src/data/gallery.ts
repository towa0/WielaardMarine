export type GallerySpan = "square" | "wide" | "tall" | "big";

export interface GalleryImage {
  id: string;
  alt: string;
  span?: GallerySpan;
  src?: string; // e.g. '/images/gallery/polijsten-01.jpg' — leave empty for a placeholder tile
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    alt: "Motorjacht — voor en na polijsten",
    span: "wide",
    src: "/images/grid_img-1.jpg",
  },
  {
    id: "2",
    alt: "Close-up gelcoat na behandeling",
    span: "tall",
    src: "/images/grid_img-2.jpg",
  },
  {
    id: "3",
    alt: "Boeg in hoogglans",
    src: "/images/grid_img-3.HEIC",
  },
  {
    id: "4",
    alt: "Sloep gepolijst",
    src: "/images/grid_img-4.jpg",
  },
  {
    id: "5",
    alt: "Kajuitboot romp",
    src: "/images/grid_img-5.jpg",
  },
  {
    id: "6",
    alt: "Detail spiegel",
    span: "wide",
    src: "/images/grid_img-6.JPG",
  },
  // {
  //   id: "7",
  //   alt: "Dekwerk gereinigd",
  //   src: "/images/grid_img-7.jpg",
  // },
  {
    id: "8",
    alt: "Volledige restauratie",
    span: "tall",
    src: "/images/poloshed_boat1.jpg",
  },
  // {
  //   id: "9",
  //   alt: "Consoleboot resultaat",
  //   src: "/images/grid_img-1",
  // },
  // {
  //   id: "10",
  //   alt: "Romp close-up",
  //   src: "/images/grid_img-1",
  // },
];
