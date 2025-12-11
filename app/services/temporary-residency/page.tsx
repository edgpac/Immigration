import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSection } from '@/components/trust-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { Calendar, DollarSign, FileText, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Temporary Residency Mexico - Residente Temporal Cabo San Lucas | 1-4 Years',
  description: 'Complete guide to Mexican temporary residency (residente temporal) in Cabo San Lucas. Requirements, costs, timeline, work permits. Licensed INM consultants. Apply today.',
  openGraph: {
    title: 'Temporary Residency Mexico - Expert Assistance in Cabo San Lucas',
    description: 'Get your Mexican temporary resident visa with professional help. 1-4 year permits, work authorization available. INM-registered consultants.',
  },
}

export default function TemporaryResidencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Temporary Residency in Mexico
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Residente Temporal - Live in Cabo San Lucas for 1-4 Years
            </p>
            <p className="text-lg opacity-80">
              Professional assistance with temporary resident visa applications, renewals, and work authorization
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
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">1-4 Years</div>
                <div className="text-sm text-muted-foreground">Validity Period</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">6-8 Weeks</div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">$1,620</div>
                <div className="text-sm text-muted-foreground">Monthly Income</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">Annual</div>
                <div className="text-sm text-muted-foreground">Renewal Required</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl font-bold mb-6">
                What is Temporary Residency in Mexico?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Temporary residency (residente temporal) is Mexico's most popular visa for foreigners planning to live in the country for extended periods. This legal status allows you to reside in Mexico for up to four consecutive years with annual renewals, making it ideal for retirees testing retirement in Cabo San Lucas, digital nomads working remotely, or anyone establishing roots in Baja California Sur before committing to permanent residency.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike tourist visas limited to 180 days, temporary residency provides legal status for much longer periods and can include work authorization if requested during the application process. After maintaining temporary residency for four years, you become eligible to apply for permanent residency, which never expires and grants automatic work rights throughout Mexico.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Financial Requirements for 2025
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The Mexican government requires proof of financial solvency to ensure temporary residents can support themselves without seeking Mexican employment (unless you've specifically applied for work authorization). Current requirements are updated annually and vary slightly by consulate, but general minimums for 2025 are:
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Option 1: Savings Balance</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>$27,000 USD minimum</strong> average balance maintained in bank accounts for the past 12 consecutive months
                </p>
                <p className="text-sm text-muted-foreground">
                  Bank statements must show consistent balances above this threshold—temporary dips below may result in denial
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Option 2: Monthly Income</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>$1,620 USD monthly income</strong> demonstrated for the past 6 consecutive months
                </p>
                <p className="text-sm text-muted-foreground">
                  Acceptable sources: employment salary, pension, Social Security, rental income, investment distributions
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                For dependents (spouse, children), additional income requirements apply—typically $500-1,800 USD monthly per dependent, varying by consulate. Property ownership in Mexico may also qualify you for residency depending on the property value (generally $200,000+ USD) and the specific consulate's policies.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                The Application Process Step-by-Step
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Consulate Appointment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Schedule an appointment at a Mexican consulate in your home country. Popular consulates for Americans include those in San Diego, Phoenix, Houston, and Miami. Appointment wait times vary from 2-6 weeks depending on location and season. You must apply from outside Mexico—you cannot convert tourist status to temporary residency from within the country.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Document Preparation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gather required documents including valid passport, completed application form, financial proof (bank statements or income letters), passport photos, and appointment fee payment ($54 USD non-refundable). If applying for work authorization, include job offer letters and employer documentation. Our consultation services help ensure all documents meet consulate specifications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Consulate Interview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attend your scheduled appointment where consulate staff will review your documents, conduct a brief interview about your plans in Mexico, and collect biometric data. If approved (typically same-day or within 1-2 weeks), you'll receive a visa stamp in your passport valid for 180 days of entry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Entry to Mexico</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enter Mexico with your visa stamp within the 180-day validity window. At the port of entry (airport or land border), immigration officers will issue your FMM (Forma Migratoria Múltiple) card. Keep this document—you'll need it for the next step.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">CANJE Process at INM</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Within 30 days of entering Mexico, complete the CANJE process at your local INM office (Cabo San Lucas for residents here). This involves submitting additional paperwork, paying the resident card fee (3,000-5,570 MXN depending on card duration), providing biometrics, and receiving your physical temporary resident card. This is where local expertise is invaluable—INM offices have specific procedures and our consultants can accompany you to navigate the process efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Work Authorization with Temporary Residency
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Temporary residency does NOT automatically grant work permission in Mexico. You must specifically request work authorization (permiso de trabajo) when applying at the consulate or add it later through INM. Work permits are tied to a specific employer, so changing jobs requires a new application process. If you're self-employed, freelancing, or working remotely for a foreign company, technically you should have work authorization, though enforcement for remote work is inconsistent.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Permanent residents, in contrast, have automatic work rights for any employer. Many temporary residents therefore choose to apply for permanent residency after their four-year eligibility period to gain unrestricted employment flexibility.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Annual Renewals and Timeline
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Temporary resident cards are initially issued for one year and must be renewed annually. You can renew up to 30 days before expiration, or up to 55 days after if you were outside Mexico during the renewal window (though INM gives you only 5 days after re-entering the country to begin the renewal process).
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Late renewals incur fines that increase the longer you wait. Allowing your temporary residency to expire completely means starting the entire process over from scratch at a consulate abroad—a costly mistake both in time and money. Our renewal reminder service ensures you never miss critical deadlines.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Common Mistakes to Avoid
              </h2>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Attempting to apply from within Mexico:</strong> You cannot convert tourist status to temporary residency without leaving the country first. Trying to do so results in automatic denial and potential immigration violations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Missing the 30-day CANJE window:</strong> After entering Mexico with your visa, you have only 30 days to complete the resident card process at INM. Missing this deadline means your visa becomes invalid and you must restart from the beginning.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Working without authorization:</strong> Even if you work remotely for a non-Mexican company, technically you need work permission. INM has begun cracking down on this, especially for visible foreign workers in tourist areas like Cabo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Using old financial requirement numbers:</strong> Income and savings requirements are adjusted annually. Using outdated information from internet forums can lead to application denial.
                  </span>
                </li>
              </ul>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Why Professional Assistance Matters
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                While it's technically possible to navigate the temporary residency process independently, the complexity of requirements, language barriers, and consequences of errors make professional assistance a wise investment. Our licensed INM consultants have processed hundreds of applications and understand the specific procedures of the Cabo San Lucas INM office, including which staff members handle which types of cases and common issues that arise.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We also handle the most time-consuming aspects: translating documents, filling out Spanish-language forms correctly, scheduling appointments efficiently, and accompanying you to INM visits to ensure smooth communication. Most clients report that our services save them 20-40 hours of research, paperwork, and appointment coordination—time better spent enjoying your new life in Cabo San Lucas.
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
