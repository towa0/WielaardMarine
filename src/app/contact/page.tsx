import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = pageMetadata({
  title: "Offerte boot polijsten aanvragen — contact",
  description:
    "Vraag een offerte aan voor het polijsten van uw boot. Stuur lengte, type en een paar foto's van de romp, dan hoort u binnen één werkdag wat er nodig is.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
