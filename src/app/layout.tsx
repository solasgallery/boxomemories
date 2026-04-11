import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BoxoMemories — Memory Preservation Studio | Salado, TX",
    template: "%s | BoxoMemories",
  },
  description:
    "Professional digitization of photos, slides, negatives, VHS tapes, and film reels. Archival-quality preservation by Tim Flanagan in Salado, Texas.",
  keywords: [
    "photo digitization",
    "memory preservation",
    "VHS to digital",
    "slide scanning",
    "negative scanning",
    "film reel digitization",
    "Salado TX",
    "archival quality",
  ],
  openGraph: {
    title: "BoxoMemories — Memory Preservation Studio",
    description:
      "Professional digitization of photos, slides, negatives, VHS tapes, and film reels in Salado, Texas.",
    url: "https://boxomemories.com",
    siteName: "BoxoMemories",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BoxoMemories",
              description:
                "Professional memory preservation and digitization studio. Photos, slides, negatives, VHS tapes, and film reels converted to archival-quality digital files.",
              url: "https://boxomemories.com",
              telephone: "+1-254-613-6123",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Rock Creek Dr Unit A",
                addressLocality: "Salado",
                addressRegion: "TX",
                postalCode: "76571",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "17:00",
                },
              ],
              parentOrganization: {
                "@type": "Organization",
                name: "Salado Village Framer",
              },
            }),
          }}
        />
      </head>
      <body className="bg-warm-white text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
