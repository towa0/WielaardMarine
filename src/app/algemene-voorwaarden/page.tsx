import type { Metadata } from "next";
import { VoorwaardenLayout, SkeletonArticles } from "@/components/VoorwaardenLayout";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Wielaard Marine.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

const sections = [
  "Definities",
  "Toepasselijkheid",
  "Offerte en totstandkoming van de opdracht",
  "Uitvoering van de werkzaamheden",
  "Prijzen en betaling",
  "Aansprakelijkheid",
  "Klachten en geschillen",
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <VoorwaardenLayout
      title="Algemene voorwaarden"
      otherHref="/huurvoorwaarden"
      otherLabel="Huurvoorwaarden"
    >
      <SkeletonArticles titles={sections} />
    </VoorwaardenLayout>
  );
}
