import type { Metadata } from "next";
import { company } from "@/data/company";
import { diensten, type Dienst } from "@/data/diensten";

export const SITE_URL = "https://www.wielaardmarine.nl";
const BUSINESS_ID = `${SITE_URL}/#business`;

export const OG_IMAGE = {
  url: "/images/og-wielaard-marine.jpg",
  width: 1200,
  height: 630,
  alt: "Wielaard Marine — boot polijsten in de Hoeksche Waard",
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Title, description, canonical and share preview for one page. */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const shareTitle = `${title} | ${company.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: company.name,
      title: shareTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// No street address: the site deliberately shows only the region.
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/wielaard_marine_logo.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    description:
      "Handmatig polijstwerk en bootverzorging aan de Binnenmaas in de Hoeksche Waard. Daarnaast bootverhuur.",
    telephone: company.phone,
    email: company.email,
    vatID: company.btw,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "KvK",
      value: company.kvk,
    },
    foundingDate: "2023",
    founder: { "@type": "Person", name: company.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hoeksche Waard",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    areaServed: [
      { "@type": "Place", name: "Binnenmaas" },
      { "@type": "Place", name: "Hoeksche Waard" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Behandelingen",
      itemListElement: diensten.map((d) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d.title,
          url: `${SITE_URL}/diensten/${d.slug}`,
        },
      })),
    },
  };
}

export function serviceJsonLd(dienst: Dienst) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: dienst.title,
    description: dienst.metaDescription,
    url: `${SITE_URL}/diensten/${dienst.slug}`,
    serviceType: dienst.title,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Place", name: "Hoeksche Waard" },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
