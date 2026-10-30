import { site } from "@/content/site";

const dayCodes = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    servesCuisine: ["Spanish", "Tapas", "Mediterranean"],
    telephone: "+1-904-389-0330",
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.address.lat, longitude: site.address.lng },
    openingHours: site.hours.filter((h) => h.open).map((h) => `${dayCodes[h.day]} ${h.open}-${h.close}`),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
