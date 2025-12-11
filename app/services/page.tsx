import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicesSection } from '@/components/services-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSection } from '@/components/trust-section'
import { FinalCTASection } from '@/components/final-cta-section'
import Link from 'next/link'
import { Calendar, Home, Briefcase, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immigration Services in Cabo San Lucas | Temporary & Permanent Residency',
  description: 'Complete immigration services in Los Cabos: temporary residency, permanent residency, work permits, visa renewals. Licensed INM consultants with 15+ years experience. Fast processing.',
  openGraph: {
    title: 'Immigration Services Cabo San Lucas - Expert Visa Assistance',
    description: 'Professional immigration services for temporary residency, permanent residency, and work permits in Los Cabos, Mexico.',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header onStartApplication={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Immigration Services in Cabo San Lucas
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert guidance for temporary residency, permanent residency, work permits, and visa renewals in Los Cabos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Complete Immigration Solutions for Los Cabos
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're relocating to Cabo San Lucas for retirement, pursuing work opportunities, or establishing permanent roots in Baja California Sur, navigating Mexican immigration law can feel overwhelming. Cabo Immigration Services simplifies the entire process with licensed INM-registered consultants who specialize in the specific procedures and requirements of the local Los Cabos immigration office.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Our comprehensive immigration services cover every aspect of the Mexican residency process, from initial consulate appointments to final resident card issuance. We handle temporary residency (residente temporal) applications for those planning to stay 1-4 years, permanent residency (residente permanente) for indefinite stays, work authorization for foreign employees, and ongoing renewals to keep your status current.
            </p>

            <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
              Why Choose Professional Immigration Assistance?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Mexican immigration procedures involve complex documentation requirements, strict timelines, and forms entirely in Spanish. A single error on your application can result in denied appointments, delayed processing, or even deportation issues. Professional assistance isn't just about convenience—it's about protecting your investment of time and money while ensuring compliance with federal immigration law.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The Instituto Nacional de Migración (INM) has specific requirements that vary by visa type, consulate location, and even individual circumstances like marital status or property ownership. Our licensed consultants stay current on these ever-changing requirements and have established working relationships with the Cabo San Lucas INM office, allowing us to navigate complications quickly and efficiently.
            </p>

            <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
              Our Service Areas
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <Link href="/services/temporary-residency" className="block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:border-primary group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                    Temporary Residency
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  1-4 year residency permits with optional work authorization. Ideal for retirees, digital nomads, and those testing long-term life in Mexico.
                </p>
                <span className="text-primary text-sm font-medium mt-4 inline-block group-hover:underline">
                  Learn More →
                </span>
              </Link>

              <Link href="/services/permanent-residency" className="block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:border-primary group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                    Permanent Residency
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Indefinite residency with automatic work rights and no renewal requirements. The final step before Mexican citizenship eligibility.
                </p>
                <span className="text-primary text-sm font-medium mt-4 inline-block group-hover:underline">
                  Learn More →
                </span>
              </Link>

              <Link href="/services/work-permits" className="block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:border-primary group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                    Work Permits
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Employment authorization for foreign workers. We handle employer INM registration and employee visa processing.
                </p>
                <span className="text-primary text-sm font-medium mt-4 inline-block group-hover:underline">
                  Learn More →
                </span>
              </Link>

              <div className="block p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    Renewals & Updates
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Keep your immigration status current with timely renewals, address change notifications, and status updates to avoid penalties.
                </p>
              </div>
            </div>

            <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
              The Cabo San Lucas Immigration Advantage
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Cabo San Lucas and San José del Cabo have become premier destinations for North American and European expatriates, creating a vibrant international community. The local INM office in Cabo processes thousands of residency applications annually and has specific procedures that differ from offices in other Mexican cities. Our team's deep familiarity with this particular office's requirements, staff, and processes gives our clients a significant advantage.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The growing expat population in Los Cabos has also led to increased scrutiny of immigration compliance. INM enforcement has become stricter regarding overstays, working without proper authorization, and "perpetual tourist" visa runs. Professional guidance ensures you establish legal status correctly from the start, avoiding complications that can take months to resolve.
            </p>
          </div>
        </div>
      </section>

      {/* Reuse existing components */}
      <ServicesSection onStartApplication={() => {}} />
      <HowItWorksSection />
      <TrustSection />
      <FinalCTASection onStartApplication={() => {}} />
      
      <Footer />
    </div>
  )
}
