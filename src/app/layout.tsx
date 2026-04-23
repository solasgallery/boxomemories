import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boxomemories.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.boxomemories.com",
    siteName: "BoxoMemories",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "BoxoMemories — Memory Preservation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoxoMemories — Memory Preservation Studio",
    description:
      "Professional digitization of photos, slides, negatives, VHS tapes, and film reels in Salado, Texas.",
    images: ["/og-default.jpg"],
  },
  verification: {
    google: "REPLACE_WITH_GSC_TOKEN",
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

        {/*
          Google Tag Manager
          Container: GTM-PJKK489C
          IMPORTANT: this snippet only loads the container.
          GA4, Meta Pixel, and Brevo are configured INSIDE GTM as tags.
          If tracking isn't firing, the container is likely unpublished —
          open tagmanager.google.com > the container > Submit > Publish.
        */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PJKK489C');`}
        </Script>

        {/*
          Brevo page-view tracker (belt & suspenders alongside the GTM tag).
          Replace BREVO_CLIENT_KEY with the key from
          app.brevo.com > Automation > Settings > Tracking Code.
        */}
        <Script id="brevo-tracker" strategy="afterInteractive">
          {`(function() {
            var key = '9u1hsxe9gvu5e6i2ar4j28q2';
            if (key === 'BREVO_CLIENT_KEY') return;
            var js, fjs = document.getElementsByTagName('script')[0];
            js = document.createElement('script');
            js.id = 'sendinblue-js';
            js.src = 'https://sibautomation.com/sa.js?key=' + key;
            fjs.parentNode.insertBefore(js, fjs);
          })();`}
        </Script>

        {/*
          JSON-LD structured data for BoxoMemories
          Type: Organization + Service (digitization service)
          NOTE: Address and phone preserved from existing schema.
          BoxoMemories operates from Solas Gallery's shared address.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "Service"],
              "@id": "https://www.boxomemories.com/#business",
              name: "BoxoMemories",
              description:
                "Professional memory preservation and digitization studio. Photos, slides, negatives, VHS tapes, and film reels converted to archival-quality digital files.",
              url: "https://www.boxomemories.com",
              telephone: "+1-254-613-6123",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Rock Creek Dr Unit A",
                addressLocality: "Salado",
                addressRegion: "TX",
                postalCode: "76571",
                addressCountry: "US",
              },
              serviceType: "Photo, video, and media digitization",
              areaServed: "United States",
              image: "https://www.boxomemories.com/og-default.jpg",
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
            }),
          }}
        />
      </head>
      <body className="bg-warm-white text-charcoal font-body antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJKK489C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
