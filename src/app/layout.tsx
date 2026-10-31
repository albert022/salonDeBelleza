import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "@/config/businessConfig";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: businessConfig.seo.siteTitle,
  description: businessConfig.seo.siteDescription,
  keywords: businessConfig.seo.keywords,
  authors: [{ name: businessConfig.seo.author }],
  creator: "QRMOON",
  metadataBase: new URL("https://aurabeauty.qrmoon.do"),
  openGraph: {
    title: businessConfig.seo.siteTitle,
    description: businessConfig.seo.siteDescription,
    url: businessConfig.seo.url,
    siteName: businessConfig.name,
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: businessConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: businessConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.siteTitle,
    description: businessConfig.seo.siteDescription,
    images: [businessConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: businessConfig.name,
    image: businessConfig.seo.ogImage,
    telephone: businessConfig.phoneDisplay,
    email: businessConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address,
      addressLocality: businessConfig.city,
      addressRegion: "Distrito Nacional",
      addressCountry: "DO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.4725,
      longitude: -69.9385,
    },
    url: businessConfig.seo.url,
    hasMap: businessConfig.googleMapsUrl,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream-50 text-taupe-800 antialiased selection:bg-rose-200 selection:text-taupe-900">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
