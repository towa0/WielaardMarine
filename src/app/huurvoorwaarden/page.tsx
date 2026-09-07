import type { Metadata } from "next";
import { VoorwaardenLayout, Article } from "@/components/VoorwaardenLayout";

export const metadata: Metadata = {
  title: "Huurvoorwaarden",
  description: "Huurvoorwaarden voor de bootverhuur van Wielaard Marine.",
  alternates: { canonical: "/huurvoorwaarden" },
};

export default function HuurvoorwaardenPage() {
  return (
    <VoorwaardenLayout
      title="Huurvoorwaarden"
      updated="31 augustus 2026"
      otherHref="/algemene-voorwaarden"
      otherLabel="Algemene voorwaarden"
    >
      <div className="flex flex-col gap-8.5">
        <Article title="1. Borg">
          <p>
            Bij het huren van de boot betaalt de huurder vooraf € 150 borg
            contant.
          </p>
        </Article>
        <Article title="2. Verantwoordelijkheid tijdens de huurperiode">
          <p>
            De huurder is tijdens de huurperiode verantwoordelijk voor de
            boot, inventaris en meegeleverde materialen. Schade, vermissing
            of extra schoonmaakkosten kunnen worden ingehouden op de borg.
            Zijn de kosten hoger dan € 150, dan blijft de huurder
            aansprakelijk voor het resterende bedrag.
          </p>
        </Article>
        <Article title="3. Teruggave van de boot">
          <p>
            De boot moet netjes, zonder schade en op het afgesproken
            tijdstip worden teruggebracht. Bij te late teruggave kunnen
            extra kosten worden berekend.
          </p>
        </Article>
        <Article title="4. Schade en storingen">
          <p>
            Schade, storing of andere problemen moeten direct worden gemeld
            aan de verhuurder.
          </p>
        </Article>
        <Article title="5. Akkoord">
          <p>
            Door de boot te huren gaat de huurder akkoord met deze
            voorwaarden.
          </p>
        </Article>
      </div>
    </VoorwaardenLayout>
  );
}
