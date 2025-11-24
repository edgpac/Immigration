'use client';

import { useState } from 'react';
import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';
import { ServicesSection } from '../components/services-section';
import { HowItWorksSection } from '../components/how-it-works-section';
import { ImmigrationFormWizard } from '../components/immigration-form-wizard';
import { TrustSection } from '../components/trust-section';
import { FAQSection } from '../components/faq-section';
import { FinalCTASection } from '../components/final-cta-section';
import { Footer } from '../components/footer';
import { FloatingContactButtons } from '../components/floating-contact-buttons';
import Head from 'next/head';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.loscabosimmigration.com/#organization",
        "name": "Los Cabos Immigration Services",
        "alternateName": "Susana Rapini Migration",
        "url": "https://www.loscabosimmigration.com",
        "logo": "https://www.loscabosimmigration.com/logo.png",
        "description": "Expert Mexican immigration services in Cabo San Lucas. Susana Rapini provides temporary residency, permanent residency, work permits, visa applications, and Mexican citizenship assistance.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boulevard Lázaro Cárdenas 1625",
          "addressLocality": "Cabo San Lucas",
          "addressRegion": "Baja California Sur",
          "postalCode": "23450",
          "addressCountry": "MX"
        },
        "telephone": "+52-624-125-9640",
        "email": "info@loscabosimmigration.com",
        "sameAs": [
          "https://www.facebook.com/loscabosimmigration",
          "https://www.instagram.com/loscabosimmigration"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "1",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Cabo San Lucas"
          },
          {
            "@type": "City",
            "name": "San José del Cabo"
          },
          {
            "@type": "State",
            "name": "Baja California Sur"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Susana Rapini",
          "jobTitle": "Immigration Consultant",
          "description": "Expert immigration consultant specializing in Mexican residency, visa applications, and citizenship services in Los Cabos"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.loscabosimmigration.com/#localbusiness",
        "name": "Los Cabos Immigration Services - Susana Rapini",
        "image": "https://www.loscabosimmigration.com/office.jpg",
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.loscabosimmigration.com/#service",
        "name": "Mexican Immigration Services",
        "serviceType": "Immigration Consulting",
        "provider": {
          "@id": "https://www.loscabosimmigration.com/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "Baja California Sur"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Immigration Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Temporary Residency Visa",
                "description": "Assistance with Mexican temporary resident visa applications, renewals, and status changes for foreigners living in Cabo San Lucas"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Permanent Residency",
                "description": "Complete permanent resident visa processing for long-term residents seeking permanent status in Mexico"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Work Permits",
                "description": "Employment authorization and work permit applications for foreign workers in Baja California Sur"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mexican Citizenship",
                "description": "Naturalization and Mexican citizenship application assistance for eligible permanent residents"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.loscabosimmigration.com/#webpage",
        "url": "https://www.loscabosimmigration.com",
        "name": "Los Cabos Immigration Services | Susana Rapini | Mexican Visa & Residency Expert",
        "description": "Expert Mexican immigration services in Cabo San Lucas by Susana Rapini. Temporary residency, permanent residency, work permits, visa renewals, and citizenship assistance. 5-star rated immigration consultant.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.loscabosimmigration.com/#website"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.loscabosimmigration.com/#website",
        "url": "https://www.loscabosimmigration.com",
        "name": "Los Cabos Immigration Services",
        "publisher": {
          "@id": "https://www.loscabosimmigration.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.loscabosimmigration.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.loscabosimmigration.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.loscabosimmigration.com"
          }
        ]
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the Mexican immigration process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Mexican immigration process typically takes 2-6 months from the initial consular appointment to receiving your temporary or permanent resident card. Timeline varies based on visa type, processing location, and document completeness. Susana Rapini helps expedite your application for faster results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I work in Mexico with temporary residency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temporary residents need specific work authorization added to their visa to legally work in Mexico. Los Cabos Immigration Services can help secure work permits and employment authorization for foreign workers in Cabo San Lucas and throughout Baja California Sur."
        }
      },
      {
        "@type": "Question",
        "name": "What are the income requirements for Mexican residency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mexican residency income requirements change periodically. Currently, temporary residency requires approximately $3,000-4,000 USD monthly income or $60,000 USD in investments. Permanent residency requirements are higher. Contact Susana Rapini for current financial solvency requirements and alternative qualification methods."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer for Mexican immigration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not legally required, professional immigration assistance from experts like Susana Rapini significantly increases success rates and reduces processing time, stress, and costly mistakes. Our immigration consulting services ensure proper documentation and compliance with Mexican immigration law."
        }
      },
      {
        "@type": "Question",
        "name": "Can I maintain my US or Canadian citizenship when becoming a Mexican resident?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mexico allows dual citizenship. Most Western countries including the United States and Canada also permit dual nationality with Mexico. You can hold both passports and maintain citizenship in multiple countries."
        }
      }
    ]
  };

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Head>
        <title>Los Cabos Immigration Services | Susana Rapini | Mexican Visa & Residency Expert in Cabo San Lucas</title>
        <meta 
          name="description" 
          content="Expert Mexican immigration services in Cabo San Lucas by Susana Rapini. Temporary residency, permanent residency, work permits, visa renewals, Mexican citizenship. 5-star rated immigration consultant serving expatriates, retirees, and digital nomads in Baja California Sur." 
        />
        <meta 
          name="keywords" 
          content="Mexican immigration, Cabo San Lucas immigration, Los Cabos immigration services, Susana Rapini, temporary residency Mexico, permanent residency Mexico, Mexican visa, work permit Mexico, immigration consultant, Baja California Sur immigration, expatriate services, retirement visa Mexico, residency application, Mexican citizenship, naturalization Mexico, visa renewal, consular services, immigration attorney, foreign residency, expat living Mexico, visa processing, immigration lawyer, legal residency, residente temporal, residente permanente, INM Mexico, immigration documentation, apostille services, document translation, certified translation, immigration compliance, visa requirements, financial solvency, consular appointment, Mexican consulate, visa interview, resident card, immigration status, legal status Mexico, migration services, visa extension, visa categories, immigration law Mexico, SEGOB, immigration policy, visa application, documentation requirements, passport requirements, criminal background check, FBI clearance, birth certificate apostille, marriage certificate, financial documents, proof of income, pension documentation, rental agreement, proof of address, Mexican ID, CURP, RFC, tax identification, Cabo immigration office, visa consultant, immigration specialist, migration expert, residency expert, citizenship application, dual citizenship, Mexican passport, property ownership, real estate immigration, fideicomiso, retirement destination, expat community, healthcare Mexico, IMSS, ISSSTE, tourist visa, FMM form, business visa, investor visa, entrepreneur visa, student visa, family reunification, spousal visa, dependent visa, work authorization, employment permit, digital nomad, remote worker, freelancer visa, retirement income, pension requirements, visa fees, processing fees, immigration costs, expedited processing, address change, domicile notification, travel restrictions, re-entry permit, visa validity, card expiration, renewal deadline, Mexican immigration system, migration institute, notary public, legal certification, character reference, job offer letter, lease agreement, customs regulations, household goods, vehicle importation, relocation services, moving assistance, orientation program, expat resources, English-speaking, bilingual services, interpretation, translation services, legal advice, case management, application tracking, status updates, document upload, confidential services, licensed consultant, authorized representative, immigration agent, accredited service, certified professional, experienced consultant, expert guidance, personalized service, custom solutions, individual attention, dedicated support, client satisfaction, success rate, positive reviews, testimonials, trusted advisor, reliable service, efficient processing, fast results, quick turnaround, timely delivery, follow-up service, post-approval support, ongoing assistance, compliance monitoring, annual reporting, status maintenance, San José del Cabo, Los Cabos corridor, Baja peninsula, INM office, immigration regulations, federal requirements, state requirements, municipal services, sworn statement, affidavit, employer letter, contract verification, utility bills, residence proof, economic integration, social integration, language requirement, Spanish proficiency, culture exam, citizenship ceremony, naturalization certificate, passport application, consular protection, border crossing, import duties, pet importation, shipping services, settling services, community groups, support network, professional ethics, responsive service, deadline management, family addition, elderly parents, divorce decree, custody documentation" 
        />
        <meta name="author" content="Susana Rapini, Los Cabos Immigration Services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.loscabosimmigration.com/" />
        <meta property="og:title" content="Los Cabos Immigration Services | Susana Rapini | Mexican Visa & Residency Expert" />
        <meta property="og:description" content="Expert Mexican immigration services in Cabo San Lucas. Temporary residency, permanent residency, work permits, visa renewals, and citizenship assistance by Susana Rapini." />
        <meta property="og:image" content="https://www.loscabosimmigration.com/og-image.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Los Cabos Immigration Services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.loscabosimmigration.com/" />
        <meta name="twitter:title" content="Los Cabos Immigration Services | Susana Rapini | Mexican Visa Expert" />
        <meta name="twitter:description" content="Expert Mexican immigration services in Cabo San Lucas by Susana Rapini. Temporary residency, permanent residency, work permits." />
        <meta name="twitter:image" content="https://www.loscabosimmigration.com/twitter-image.jpg" />
        
        {/* Geographic Tags */}
        <meta name="geo.region" content="MX-BCS" />
        <meta name="geo.placename" content="Cabo San Lucas" />
        <meta name="geo.position" content="22.8905;-109.9167" />
        <meta name="ICBM" content="22.8905, -109.9167" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="Boulevard Lázaro Cárdenas 1625" />
        <meta name="business:contact_data:locality" content="Cabo San Lucas" />
        <meta name="business:contact_data:region" content="Baja California Sur" />
        <meta name="business:contact_data:postal_code" content="23450" />
        <meta name="business:contact_data:country_name" content="Mexico" />
        <meta name="business:contact_data:phone_number" content="+52-624-125-9640" />
        
        {/* Language and Content */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.loscabosimmigration.com/" />
        
        {/* Alternate Languages (if you add Spanish version) */}
        <link rel="alternate" hrefLang="en" href="https://www.loscabosimmigration.com/" />
        <link rel="alternate" hrefLang="es" href="https://www.loscabosimmigration.com/es/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.loscabosimmigration.com/" />
        
        {/* Structured Data - Organization & Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        
        {/* Preconnect to Important Domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#5D1A1F" />
        <meta name="msapplication-TileColor" content="#5D1A1F" />
        
        {/* Verification Tags (add your actual verification codes) */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      </Head>

      <main 
        className="min-h-screen bg-background"
        role="main"
        aria-label="Los Cabos Immigration Services - Expert Mexican Visa and Residency Assistance"
      >
        {/* Hidden SEO Content - Keyword Rich Text for Search Engines */}
        <div className="sr-only" aria-hidden="true">
          <h1>Los Cabos Immigration Services by Susana Rapini - Expert Mexican Immigration Consultant in Cabo San Lucas, Baja California Sur</h1>
          <p>
            Welcome to Los Cabos Immigration Services, operated by renowned immigration expert Susana Rapini. 
            We provide comprehensive Mexican immigration services including temporary residency visa applications, 
            permanent residency processing, work permit authorization, visa renewals, document apostille services, 
            certified translations, Mexican citizenship naturalization, and complete immigration compliance assistance 
            for expatriates, retirees, digital nomads, remote workers, investors, and families relocating to 
            Cabo San Lucas, San José del Cabo, and throughout Baja California Sur, Mexico.
          </p>
          <p>
            Our immigration consulting services cover all aspects of Mexican migration law including residente temporal 
            applications, residente permanente status, INM Mexico procedures, consular appointments, financial solvency 
            documentation, criminal background checks, FBI clearance, birth certificate apostille, marriage certificate 
            legalization, proof of income verification, pension documentation, bank statements, rental agreements, 
            proof of address, Mexican ID (CURP), tax identification (RFC), immigration office appointments, visa interviews, 
            biometric processing, resident card issuance, and ongoing immigration status maintenance.
          </p>
          <p>
            Susana Rapini Migration services specialize in helping US citizens, Canadian nationals, European Union residents, 
            and international expatriates navigate complex Mexican immigration requirements. Our office located at 
            Boulevard Lázaro Cárdenas 1625 in Cabo San Lucas provides personalized consultation, bilingual support, 
            document preparation, application submission, follow-up coordination, and post-approval assistance.
          </p>
          <p>
            Whether you're seeking retirement visa options, business investor visas, employment authorization, 
            student visas, family reunification, spousal visas, dependent visas, work permits, self-employment authorization, 
            or naturalization services, Los Cabos Immigration Services delivers expert guidance with a 5-star reputation 
            for successful immigration outcomes in Los Cabos, Baja California Sur.
          </p>
          <p>
            Contact immigration consultant Susana Rapini today for professional assistance with temporary resident permits, 
            permanent resident cards, visa extensions, status changes, address notifications, travel documentation, 
            re-entry permits, citizenship applications, and all Mexican immigration, migration, and naturalization services 
            in Cabo San Lucas and throughout the Los Cabos corridor.
          </p>
        </div>

        <Header onStartApplication={() => setShowForm(true)} />
        
        {!showForm ? (
          <>
            <HeroSection onStartApplication={() => setShowForm(true)} />
            <ServicesSection onStartApplication={() => setShowForm(true)} />
            <HowItWorksSection />
            <TrustSection />
            <FAQSection />
            <FinalCTASection onStartApplication={() => setShowForm(true)} />
            <Footer />
          </>
        ) : (
          <div className="pt-20">
            <ImmigrationFormWizard onClose={() => setShowForm(false)} />
          </div>
        )}

        {/* Floating Contact Buttons - Always Visible */}
        <FloatingContactButtons />
      </main>
    </>
  );
}