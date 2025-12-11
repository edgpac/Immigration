import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSection } from '@/components/trust-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { Briefcase, Building2, FileText, Clock, CheckCircle2, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work Permits Mexico - Employment Authorization Cabo San Lucas | Foreign Workers',
  description: 'Complete guide to Mexican work permits and employment authorization in Cabo San Lucas. Employer sponsorship, INM registration, visa processing. Licensed consultants.',
  openGraph: {
    title: 'Work Permits Mexico - Expert Employment Authorization in Cabo',
    description: 'Get legal work authorization in Mexico with professional help. Employer registration, employee visa processing. INM-registered consultants.',
  },
}

export default function WorkPermitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header onStartApplication={() => {}} />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work Permits & Employment Authorization
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Legal Authorization for Foreign Workers in Mexico
            </p>
            <p className="text-lg opacity-80">
              Complete employer registration and employee work permit processing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="bg-card p-6 rounded-lg border text-center">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">Employer</div>
                <div className="text-sm text-muted-foreground">Sponsored</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">20-30 Days</div>
                <div className="text-sm text-muted-foreground">INM Processing</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">NUT Required</div>
                <div className="text-sm text-muted-foreground">Registration Number</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">1-4 Years</div>
                <div className="text-sm text-muted-foreground">Permit Duration</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl font-bold mb-6">
                Understanding Mexican Work Authorization
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Foreign nationals working in Mexico must obtain proper work authorization from INM (Instituto Nacional de Migración), regardless of whether they're employed by Mexican companies, foreign companies operating in Mexico, or working remotely for international employers. Unlike tourist visas which prohibit employment, work permits (permisos de trabajo) grant legal authorization to receive compensation for services performed within Mexican territory.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Work authorization in Mexico is employer-specific, meaning your permit is tied to a particular company and position. Changing employers requires applying for new authorization through the new company's sponsorship. This system ensures INM maintains oversight of foreign workers in the Mexican labor market and protects employment opportunities for Mexican nationals.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Types of Work Authorization
              </h2>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Temporary Residency with Work Permission</h3>
                <p className="text-muted-foreground mb-2">
                  Most common for foreign employees. Grants residency for 1-4 years with renewable work authorization tied to a specific employer.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm mt-3">
                  <li>• Must be requested when applying for temporary residency at consulate</li>
                  <li>• Can be added to existing temporary residency through INM process</li>
                  <li>• Work permission appears directly on resident card</li>
                  <li>• Changing jobs requires new authorization application</li>
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Permanent Residency (Automatic Work Rights)</h3>
                <p className="text-muted-foreground mb-2">
                  Permanent residents can work for any employer without additional permits or restrictions.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm mt-3">
                  <li>• No employer sponsorship required</li>
                  <li>• Freedom to change jobs without immigration implications</li>
                  <li>• Can be self-employed or start own business</li>
                  <li>• Most flexible option for foreign workers</li>
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Visitor Work Permit (Short-Term)</h3>
                <p className="text-muted-foreground mb-2">
                  For temporary work assignments, business travel, and short-term contracts up to 180 days.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm mt-3">
                  <li>• Specific projects or training assignments</li>
                  <li>• Speaking engagements, conferences, consulting</li>
                  <li>• Does not grant residency status</li>
                  <li>• Cannot be extended beyond 180 days</li>
                </ul>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                The Employer Registration Process
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Before sponsoring foreign workers, Mexican employers must register with INM and obtain a NUT (Número Único de Trámite). This registration demonstrates the company is legally established, financially stable, and compliant with Mexican labor law. The process involves:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Company Documentation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Compile company registration documents, tax identification (RFC), proof of legal establishment, financial statements, and evidence of business operations. INM reviews these to confirm the employer is legitimate and financially capable of supporting foreign workers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">INM Registration Application</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Submit employer registration forms to INM along with supporting documentation. Processing typically takes 2-4 weeks. Once approved, the company receives a constancia de inscripción de empleador (employer registration certificate) and unique NUT number required for all future work permit applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Maintain Compliance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Registered employers must maintain accurate records of all foreign employees, report address changes, and renew registrations as required. INM may conduct audits to verify ongoing compliance with labor and immigration regulations.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Employee Work Permit Application
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Once the employer is registered, the work permit process for individual employees involves coordinated efforts between the employer, employee, and INM:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Employer Initiates Request</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The employer must initiate the work permit process—foreign nationals cannot apply independently. The employer submits a formal request to INM including job description, salary details, contract terms, and justification for hiring a foreign worker (specialized skills, expertise not readily available in Mexican labor market).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">INM Reviews and Approves</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      INM evaluates whether the position genuinely requires foreign expertise and that hiring the foreign worker won't displace Mexican nationals. Processing takes 20-30 business days. If approved, INM issues authorization that the employee then presents at a Mexican consulate abroad.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Consulate Visa Issuance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The employee schedules a consulate appointment in their home country, presents INM's work authorization approval, undergoes standard visa interview, and receives a temporary resident visa with work permission. Total consulate processing: 10-15 business days after appointment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Entry and Card Processing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Employee enters Mexico with visa and completes CANJE process at local INM office within 30 days to receive temporary resident card with work authorization. The physical card displays both residency status and work permission, tied to the specific employer.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Special Considerations for Remote Workers
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The rise of remote work has created gray areas in Mexican immigration law. Technically, anyone performing work while physically in Mexico—even for foreign employers—should have work authorization. However, enforcement for remote workers employed by companies outside Mexico has been inconsistent.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Digital nomads and remote workers face increasing risk as INM modernizes enforcement. Posting on social media about working from Cabo, conducting visible client meetings, or operating obvious business activities while on tourist visas can trigger investigation. The safest approach is obtaining temporary residency with general work permission, even if your employer isn't Mexican.
              </p>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8 not-prose">
                <div className="flex gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <h3 className="font-bold text-lg text-destructive">Working Without Authorization</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Penalties for working without proper authorization include:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Immediate deportation and bar from re-entering Mexico</li>
                  <li>• Fines up to 500 times the daily minimum wage</li>
                  <li>• Criminal charges in serious cases</li>
                  <li>• Inability to legalize status later—must leave country</li>
                  <li>• Employer also faces penalties including business closure</li>
                </ul>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Changing Employers
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Since work authorization is employer-specific, changing jobs requires a new application process through the new employer. This involves the new company obtaining INM approval, you receiving updated documentation, and potentially updating your resident card. The process typically takes 30-45 days, during which you cannot legally work for the new employer.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Many foreign workers eventually pursue permanent residency to gain employment flexibility. After four years of temporary residency (including with work permission), you automatically qualify to convert to permanent status, after which you can work for any employer without restrictions.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Why Professional Assistance is Essential
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Work permit applications involve coordination between employers, employees, INM, and foreign consulates—multiple parties, jurisdictions, and bureaucracies. Our licensed consultants manage the entire process: registering employers with INM, preparing work authorization requests, coordinating timing with employee visa applications, and ensuring all documentation meets technical requirements.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                For employers, we handle the complex NUT registration process and maintain ongoing compliance with INM reporting requirements. For employees, we coordinate your consulate appointment timing with your employer's INM approval to minimize gaps in employment authorization. Our expertise ensures smooth processing without delays that could jeopardize job offers or business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Components */}
      <HowItWorksSection />
      <TrustSection />
      <FinalCTASection onStartApplication={() => {}} />
      
      <Footer />
    </div>
  )
}
