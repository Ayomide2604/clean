
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import TemplateScripts from "@/components/TemplateScripts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchOverlay from "@/components/SearchOverlay";





export const metadata: Metadata = {
  metadataBase: new URL('https://780propertycleaners.ca'),
  title: {
    default: "780 Property Cleaners | Professional Cleaning Services Edmonton",
    template: "%s | 780 Property Cleaners"
  },
  description: "Professional residential and commercial cleaning services in Edmonton and surrounding areas. Get your free quote today for reliable, thorough cleaning.",
  keywords: "cleaning services Edmonton, house cleaning, commercial cleaning, move-out cleaning, deep cleaning, office cleaning",
  authors: [{ name: "780 Property Cleaners" }],
  creator: "780 Property Cleaners",
  publisher: "780 Property Cleaners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://780propertycleaners.ca',
    siteName: '780 Property Cleaners',
    title: '780 Property Cleaners | Professional Cleaning Services Edmonton',
    description: 'Professional residential and commercial cleaning services in Edmonton and surrounding areas.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '780 Property Cleaners Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '780 Property Cleaners | Professional Cleaning Services Edmonton',
    description: 'Professional residential and commercial cleaning services in Edmonton and surrounding areas.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <head>
        {/* <link rel="icon" type="image/png" href="/assets/images/favicon.png" /> - Favicon removed until logo decided */}
        
        {/* CSS files from public/assets/css */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/selectize.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/navbar.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" /> 
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <Header/>
        <SearchOverlay/>
        {children}
        <Footer/>
      </body>
      <TemplateScripts/>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "780 Property Cleaners",
            "image": "https://780propertycleaners.ca/logo.png",
            "telephone": "+1 780 555 0142",
            "email": "clean@780propertycleaners.ca",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Edmonton",
              "addressRegion": "AB",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.5461",
              "longitude": "-113.4938"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "priceRange": "$$"
          })
        }}
      />
    </html>
  );
}
