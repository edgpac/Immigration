import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TrustSection } from '@/components/trust-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { Award, MapPin, Languages, GraduationCap, Users, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Susana Rapini - Certified Translator & Immigration Consultant Cabo San Lucas',
  description: 'Meet Susana Rapini, certified translator for immigration consultant registered with INM. 15+ years experience in Mexican immigration law. Specialized in temporary/permanent residency and work permits in Los Cabos.',
  openGraph: {
    title: 'Susana Rapini - Expert Immigration Consultant in Cabo San Lucas',
    description: 'Certified translator and INM-registered consultant specializing in Mexican immigration. 15+ years experience helping expatriates establish residency in Los Cabos.',
  },
}

export default function SusanaRapiniPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Susana Rapini
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Certified Translator & Immigration Consultant
            </p>
            <p className="text-lg opacity-80">
              15+ Years Helping Expatriates Establish Legal Residency in Mexico
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-1">INM Registered</h3>
                <p className="text-sm text-muted-foreground">Official Registration</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-1">15+ Years</h3>
                <p className="text-sm text-muted-foreground">Immigration Experience</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Languages className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-1">Multilingual</h3>
                <p className="text-sm text-muted-foreground">English, Spanish, Italian</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl font-bold mb-6">
                About Susana
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Susana Rapini is a certified translator for an immigration consultant and registered with Mexico's Instituto Nacional de Migración (INM), specializing in residency and work authorization processes for foreign nationals in Los Cabos and throughout Baja California Sur. With over 15 years of dedicated experience in Mexican immigration law, Susana has helped thousands of expatriates successfully navigate the complex requirements of temporary residency, permanent residency, work permits, and visa renewals.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Born in Italy and having lived in multiple countries throughout her career, Susana brings a unique personal understanding to the immigration process. Her own experiences as an international resident inform her empathetic, client-centered approach. She understands the challenges, anxieties, and excitement that come with establishing legal status in a new country because she has lived through these experiences herself.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Professional Background
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Susana's immigration career began in the early 2000s when she recognized the growing need for professional, bilingual immigration assistance in Mexico's expatriate communities. What started as helping friends and neighbors navigate visa applications evolved into a full-time consultancy serving clients from over 30 countries.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Her professional credentials include official registration with INM as a licensed immigration consultant (consultor en materia migratoria), extensive training in Mexican immigration law and procedures, and ongoing continuing education to stay current with frequent policy changes. Susana maintains direct working relationships with INM offices in Cabo San Lucas and La Paz, giving her clients significant advantages in application processing and issue resolution.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Credentials</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• INM Registered Consultant</li>
                    <li>• Mexican Immigration Law Specialist</li>
                    <li>• Certified Legal Translator</li>
                    <li>• Member, Immigration Consultants Association</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Experience</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 15+ Years Immigration Consulting</li>
                    <li>• 3,000+ Successful Applications</li>
                    <li>• 30+ Countries Represented</li>
                    <li>• Fluent: English, Spanish, Italian</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Areas of Expertise
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Susana's practice covers the full spectrum of Mexican immigration services, with particular expertise in several key areas:
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Temporary Residency (Residente Temporal):</strong> Susana guides clients through the complete process from initial consulate applications to final resident card issuance, including work authorization requests, dependent applications, and property-based qualifications. Her deep familiarity with various Mexican consulates' specific requirements helps clients avoid common pitfalls that lead to application denial.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Permanent Residency (Residente Permanente):</strong> Specializing in both direct permanent residency applications and conversions from temporary status, Susana ensures clients transition smoothly to permanent resident status. She advises on optimal timing for conversion, financial documentation requirements, and strategies for applicants with complex situations like prior immigration violations or unusual income sources.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Work Permits and Employment Authorization:</strong> For both employers and employees, Susana handles the intricate process of INM employer registration, work authorization applications, and coordination with foreign consulates. She assists companies establishing operations in Los Cabos with understanding their obligations under Mexican labor and immigration law.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Renewals and Status Maintenance:</strong> Susana's practice includes comprehensive renewal services ensuring clients never lose their legal status due to missed deadlines or incomplete paperwork. She also handles address change notifications, card replacements, and status updates required by INM regulations.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Approach and Philosophy
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Susana's approach to immigration consulting centers on three core principles: clarity, accuracy, and advocacy. She believes every client deserves clear explanations of their options, accurate information about requirements and timelines, and a dedicated advocate navigating bureaucratic systems on their behalf.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Rather than a one-size-fits-all approach, Susana customizes her services to each client's unique circumstances. Whether you're a retiree seeking temporary residency, an entrepreneur needing work authorization, or a family establishing permanent roots, she develops strategies tailored to your specific situation, timeline, and goals.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8 not-prose">
                <div className="flex items-start gap-3 mb-3">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Client-First Philosophy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "Immigration is more than paperwork—it's about helping people build new lives in a country they love. Every application I process represents someone's dream of living in Mexico, and I take that responsibility seriously. My goal is not just successful applications, but clients who feel supported, informed, and confident throughout their immigration journey."
                    </p>
                    <p className="text-sm text-muted-foreground italic mt-3">— Susana Rapini</p>
                  </div>
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Community Involvement
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond her consulting practice, Susana actively contributes to the Los Cabos expatriate community through educational workshops on immigration topics, pro bono consultations for seniors and low-income residents, and advocacy work to improve immigration services accessibility. She regularly presents at expat community events, provides immigration updates through local media, and mentors aspiring immigration consultants.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Susana also maintains close relationships with other professionals serving the international community in Los Cabos, including attorneys specializing in real estate and family law, accountants handling cross-border tax issues, and relocation specialists. This network allows her to connect clients with comprehensive support beyond immigration services when needed.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Why Clients Choose Susana
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Clients consistently cite several factors when explaining why they chose to work with Susana:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Local Expertise:</strong> Susana's deep familiarity with the Cabo San Lucas and La Paz INM offices means faster processing and fewer complications compared to consultants unfamiliar with local procedures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Personal Attention:</strong> Every client works directly with Susana, not junior associates or outsourced services. She personally reviews all documentation and attends critical appointments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Transparent Communication:</strong> Susana provides realistic timelines, honest assessments of application strength, and prompt responses to client questions. No surprises, no false promises.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Multilingual Service:</strong> Fluent in English, Spanish, and Italian, Susana eliminates language barriers that often complicate immigration processes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Proven Track Record:</strong> With thousands of successful applications and strong relationships with INM officials, Susana's reputation speaks for itself.
                  </span>
                </li>
              </ul>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Schedule a Consultation
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're just beginning to explore Mexican residency options or facing challenges with an existing application, Susana offers comprehensive consultations to assess your situation and develop an action plan. Initial consultations cover your specific circumstances, available visa options, required documentation, realistic timelines, and estimated costs.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Most clients find that professional assistance saves significant time and stress while increasing the likelihood of successful approval. Susana's goal is to make your immigration journey as smooth and straightforward as possible, allowing you to focus on enjoying your new life in beautiful Los Cabos rather than worrying about paperwork and bureaucratic complexities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Components */}
      <TrustSection />
      <FinalCTASection />
      
      <Footer />
    </div>
  )
}