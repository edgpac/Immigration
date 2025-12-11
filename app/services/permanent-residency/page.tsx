import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSection } from '@/components/trust-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { Home, DollarSign, Infinity, Clock, CheckCircle2, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Permanent Residency Mexico - Residente Permanente Cabo San Lucas | No Expiration',
  description: 'Complete guide to Mexican permanent residency (residente permanente) in Cabo San Lucas. Lifetime status, automatic work rights, no renewals. Licensed INM consultants.',
  openGraph: {
    title: 'Permanent Residency Mexico - Expert Assistance in Cabo San Lucas',
    description: 'Get Mexican permanent resident status with professional help. Lifetime validity, work authorization included. INM-registered consultants.',
  },
}

export default function PermanentResidencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Permanent Residency in Mexico
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Residente Permanente - Live in Cabo San Lucas Indefinitely
            </p>
            <p className="text-lg opacity-80">
              Lifetime residency with full work rights and no renewal requirements
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
                <Infinity className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">Lifetime</div>
                <div className="text-sm text-muted-foreground">No Expiration</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">8-12 Weeks</div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">$2,700</div>
                <div className="text-sm text-muted-foreground">Monthly Income</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">No Renewals</div>
                <div className="text-sm text-muted-foreground">Set for Life</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl font-bold mb-6">
                What is Permanent Residency in Mexico?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Permanent residency (residente permanente) is Mexico's highest immigration status for foreigners, granting indefinite authorization to live in the country with no expiration date and no renewal requirements. Unlike temporary residency which requires annual renewals and work permission requests, permanent residents enjoy automatic work authorization for any employer throughout Mexico, making this the preferred status for those committed to long-term life in Cabo San Lucas and beyond.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Permanent residency is also the final step before Mexican citizenship eligibility. After holding permanent resident status for five years (or two years if married to a Mexican citizen), you can apply for naturalization and obtain a Mexican passport, enabling dual citizenship with most countries including the United States and Canada.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Who Qualifies for Permanent Residency?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                There are several pathways to Mexican permanent residency, each with different requirements:
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Path 1: Financial Qualification (Direct Application)</h3>
                <p className="text-muted-foreground mb-4">
                  Apply directly at a Mexican consulate abroad if you meet these financial thresholds:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>$54,000 USD minimum</strong> average balance in bank accounts for 12 consecutive months, OR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>$2,700 USD monthly income</strong> for the past 6 consecutive months</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  These are approximately double the temporary residency requirements, reflecting the permanent nature of this status.
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Path 2: Conversion from Temporary Residency</h3>
                <p className="text-muted-foreground mb-2">
                  After <strong>four consecutive years</strong> of temporary residency, you automatically qualify to convert to permanent status without needing to prove financial solvency again.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is the most common pathway for expatriates already living in Mexico.
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Path 3: Family Reunification</h3>
                <p className="text-muted-foreground mb-4">
                  Immediate family members of Mexican citizens or permanent residents can apply:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Spouses (after 2 years of temporary residency through marriage)</li>
                  <li>• Parents of Mexican citizens</li>
                  <li>• Children (biological or adopted) of Mexican citizens or permanent residents</li>
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6 not-prose">
                <h3 className="font-bold text-lg mb-3">Path 4: Points-Based System</h3>
                <p className="text-muted-foreground mb-2">
                  Mexico has a points system considering factors like:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Years of prior temporary residency</li>
                  <li>• Educational credentials (especially Mexican degrees)</li>
                  <li>• Professional work in Mexico</li>
                  <li>• Real estate ownership in Mexico</li>
                  <li>• Mexican cultural knowledge and Spanish proficiency</li>
                </ul>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                The Application Process
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Determine Your Pathway</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Assess which qualification path you meet. If converting from temporary residency, this step is straightforward. If applying based on financial qualifications or family ties, gather proof documentation. Our consultation helps identify your best pathway and required documents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Consulate vs. INM Application</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>New applicants</strong> (financial qualification path) must apply at a Mexican consulate abroad, following the same initial process as temporary residency but with higher financial thresholds. <strong>Temporary residents converting</strong> can apply directly at their local INM office in Mexico—no need to leave the country.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Document Preparation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Required documents typically include: valid passport, proof of legal entry (for conversion applicants), current temporary resident card (if converting), financial documentation, completed application forms, passport photos, and applicable fees. Family-based applications require additional relationship documentation like marriage or birth certificates (apostilled if issued outside Mexico).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interview and Processing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attend your scheduled appointment (consulate or INM office depending on pathway). Officers will review your documentation, conduct an interview about your ties to Mexico, and collect biometric data. Processing time varies but typically takes 1-3 months from application to receiving your permanent resident card.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Receive Permanent Resident Card</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Once approved, you'll receive your permanent resident card (valid indefinitely). While the card itself technically expires after a certain number of years, your permanent resident status never expires—you simply renew the physical card for identification purposes, not your legal status.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Benefits of Permanent Residency
              </h2>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>No Renewals Required:</strong> Your residency status never expires. While you must update your physical card periodically for identification, your legal right to live in Mexico is permanent.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Automatic Work Authorization:</strong> Work for any employer throughout Mexico without additional permits or employer sponsorship. This includes self-employment, freelancing, and starting your own business.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Path to Citizenship:</strong> After 5 years of permanent residency (or 2 years if married to Mexican citizen), you can apply for Mexican citizenship and obtain a Mexican passport.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Property Ownership Benefits:</strong> Simplified real estate transactions and potential eligibility for restricted zone property ownership under more favorable terms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Access to Mexican Social Services:</strong> Eligibility for IMSS (Mexican Social Security healthcare) and other government programs available to Mexican nationals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Unrestricted Travel:</strong> Enter and leave Mexico freely without worrying about visa expiration or re-entry permits.
                  </span>
                </li>
              </ul>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Conversion from Temporary to Permanent Residency
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Most expatriates obtain permanent residency by converting from temporary status after four years. This process is straightforward compared to the initial temporary residency application because you've already proven your financial solvency and established ties to Mexico. The conversion can be initiated during your final temporary residency renewal or shortly after.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Key advantages of the conversion pathway include: no need to leave Mexico and reapply at a consulate abroad, no additional financial documentation required (you qualified years ago), familiarity with INM procedures from annual renewals, and established address history in Mexico. Our conversion assistance ensures the transition happens smoothly without complications from paperwork errors or missed deadlines.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Permanent Residency vs. Temporary: Which to Choose?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                While permanent residency offers clear advantages, temporary residency remains the right choice for many scenarios:
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Choose Temporary Residency if you:</strong> Are testing long-term life in Mexico before fully committing, don't yet meet the higher financial requirements for permanent status, may return to your home country within 4 years, or want to maintain easier tax residency in another country.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Choose Permanent Residency if you:</strong> Meet the financial qualifications and know you're committed to Mexico long-term, need unrestricted work authorization for employment flexibility, want to eliminate annual renewal processes and fees, or plan to apply for Mexican citizenship eventually.
              </p>

              <h2 className="font-heading text-3xl font-bold mt-12 mb-6">
                Why Professional Assistance Matters
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Permanent residency applications involve higher stakes than temporary visas—this is your permanent legal status in Mexico. Errors can result in denial, forcing you back to temporary status or even having to leave the country. Our licensed consultants ensure your application is complete, accurate, and presents your qualifications in the strongest possible light to INM officers.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                For conversion applications, we coordinate timing to transition seamlessly from temporary to permanent status without gaps in your legal authorization. For direct permanent residency applications through consulates, we ensure all financial documentation meets the strict requirements and help you prepare for the more thorough interview process permanent applicants undergo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Components */}
      <HowItWorksSection />
      <TrustSection />
      <FinalCTASection />
      
      <Footer />
    </div>
  )
}
