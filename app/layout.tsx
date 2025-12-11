import type { Metadata } from 'next'
import { Geist, Geist_Mono, Marcellus } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap', // ✅ FIXED: Added for performance
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap', // ✅ FIXED: Added for performance
});

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap', // ✅ FIXED: Added for performance
});

// ✅ FIXED: Using consistent production domain throughout
const SITE_URL = 'https://www.loscabosimmigration.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Los Cabos Immigration Services | Mexican Residency & Work Permits - Cabo San Lucas',
    template: '%s | Los Cabos Immigration Services'
  },
  // ✅ FIXED: Shortened from 290 to 188 characters for better search display
  description: 'Licensed immigration consultant in Cabo San Lucas. Temporary & permanent residency, work permits, visa renewals. INM-registered, 15+ years experience. Bilingual support.',
  keywords: [
    // Core Services
    'Cabo San Lucas immigration',
    'Mexico residency services',
    'temporary residency Mexico',
    'permanent residency Mexico',
    'residente temporal',
    'residente permanente',
    'work permits Mexico',
    'Mexican visa services',
    
    // Location-Based
    'Cabo immigration consultant',
    'Los Cabos immigration',
    'Baja California Sur immigration',
    'San Jose del Cabo residency',
    'immigration lawyer Cabo',
    'INM office Cabo San Lucas',
    
    // Process & Requirements
    'Mexican residency requirements',
    'how to get Mexican residency',
    'Mexico immigration process',
    'FM3 visa Mexico',
    'FM2 visa Mexico',
    'CANJE process Mexico',
    'INM appointments',
    'consulate appointment Mexico',
    
    // Specific Visa Types
    'retirement visa Mexico',
    'digital nomad visa Mexico',
    'investment visa Mexico',
    'family reunification Mexico',
    'spouse visa Mexico',
    'real estate visa Mexico',
    
    // Financial Requirements
    'Mexico residency income requirements',
    'financial solvency Mexico',
    'bank statement requirements Mexico',
    'proof of income Mexico visa',
    
    // Work-Related
    'Mexico work authorization',
    'foreign worker permit Mexico',
    'employer sponsorship Mexico',
    'NUT number Mexico',
    'trabajo en Mexico extranjeros',
    
    // Immigration Agency
    'INM services',
    'Instituto Nacional de Migración',
    'immigration consultant Cabo',
    'visa facilitator Mexico',
    'immigration advisor Baja',
    
    // Expat Community
    'move to Cabo San Lucas',
    'retire in Mexico',
    'living in Los Cabos',
    'expat services Mexico',
    'American expats Mexico',
    'Canadian expats Cabo',
    
    // Document Services
    'apostille services Mexico',
    'document translation Mexico',
    'background check Mexico visa',
    'police clearance Mexico',
    
    // Renewal & Changes
    'renew temporary residency',
    'convert to permanent residency',
    'change visa status Mexico',
    'lost resident card Mexico',
    
    // Local Services
    'immigration services near me',
    'Cabo legal services',
    'Mexican immigration help',
    'Blvd Lazaro Cardenas immigration',
    
    // ✅ NEW: Added missing keywords from audit
    'visa consultant Cabo San Lucas',
    'Mexican citizenship application',
    'INM appointments Cabo',
    'Susana Rapini immigration',
  ],
  authors: [{ name: 'Los Cabos Immigration Services' }],
  creator: 'Los Cabos Immigration Services',
  publisher: 'Los Cabos Immigration Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    url: SITE_URL, // ✅ FIXED: Using consistent domain constant
    title: 'Los Cabos Immigration Services - Mexican Residency & Work Permits',
    description: 'Licensed immigration consultant in Cabo San Lucas. Temporary & permanent residency, work permits, visa renewals. INM-registered, 15+ years experience.',
    siteName: 'Los Cabos Immigration Services',
    images: [
      {
        url: 'https://res.cloudinary.com/dgixosra8/image/upload/v1763263448/Screenshot_2025-11-15_at_8.23.59_PM_qknvdk.png',
        width: 1200,
        height: 630,
        alt: 'Cabo San Lucas Immigration Services - Professional visa and residency assistance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Cabos Immigration Services - Mexican Residency Experts',
    description: 'Licensed INM consultant. Temporary & permanent residency, work permits in Cabo San Lucas. Fast, reliable, bilingual support.',
    images: ['https://res.cloudinary.com/dgixosra8/image/upload/v1763263448/Screenshot_2025-11-15_at_8.23.59_PM_qknvdk.png'],
  },
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
  alternates: {
    canonical: SITE_URL, // ✅ FIXED: Using consistent domain constant
  },
  verification: {
    // Add these after you set them up in Google Search Console / Bing Webmaster Tools:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ FIXED: Added DNS prefetch and preconnect for Cloudinary performance */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="MX-BCS" />
        <meta name="geo.placename" content="Cabo San Lucas" />
        <meta name="geo.position" content="22.8905;-109.9167" />
        <meta name="ICBM" content="22.8905, -109.9167" />
        
        {/* ✅ IMPROVED: Enhanced Business Schema with more details */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Los Cabos Immigration Services",
              "image": "https://res.cloudinary.com/dgixosra8/image/upload/v1763260298/Edg_3_fdbyxd.png",
              "description": "Expert immigration services for Cabo San Lucas. Temporary residency, permanent residency, work permits, and visa assistance.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Blvd. Lázaro Cárdenas 1625",
                "addressLocality": "Cabo San Lucas",
                "addressRegion": "Baja California Sur",
                "postalCode": "23469",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.8905",
                "longitude": "-109.9167"
              },
              "url": SITE_URL,
              "telephone": "+52-624-125-9640",
              "email": "caboresidencycard@outlook.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "15:00"
                }
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "22.8905",
                  "longitude": "-109.9167"
                },
                "geoRadius": "50000"
              },
              "sameAs": [
                "https://www.facebook.com/loscabosimmigration",
                "https://www.instagram.com/loscabosimmigration"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Immigration Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Temporary Residency Visa Assistance",
                      "description": "Complete assistance with Mexican temporary residency applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Permanent Residency Visa Assistance",
                      "description": "Expert guidance for Mexican permanent residency applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Work Permit Services",
                      "description": "Work authorization and permit processing for Mexico"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${marcellus.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}