import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  MapPin,
  Clock,
  Phone,
  CalendarDays,
  FileText,
  RefreshCw,
  Home,
  Briefcase,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  Info,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'INM Cabo San Lucas Office | Address, Hours & Appointments',
  description:
    'INM office in Cabo San Lucas: Blvd. Lázaro Cárdenas 1625. Hours Mon–Fri 9AM–3PM. Phone 624 143 9859. How to book appointments, what to bring, and common visit reasons.',
  alternates: {
    canonical: 'https://www.loscabosimmigration.com/inm-cabo-san-lucas',
  },
  openGraph: {
    title: 'INM Cabo San Lucas Office — Address, Hours & Appointment Info',
    description:
      'Everything you need to visit the INM office in Cabo San Lucas: address, hours, phone numbers, how to book an appointment online, and what documents to bring.',
  },
}

const inmOfficeSchema = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOffice',
  name: 'INM Cabo San Lucas — Instituto Nacional de Migración',
  alternateName: 'INM Baja California Sur',
  description:
    'The Instituto Nacional de Migración (INM) office in Cabo San Lucas processes temporary residency, permanent residency, and work permit applications for the Los Cabos region.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Blvd. Lázaro Cárdenas 1625',
    addressLocality: 'Cabo San Lucas',
    addressRegion: 'Baja California Sur',
    postalCode: '23410',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.8905',
    longitude: '-109.9167',
  },
  telephone: '+52-624-143-9859',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
  url: 'https://www.inm.gob.mx',
}

export default function InmCaboSanLucasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inmOfficeSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="flex items-center justify-center gap-4 mb-6">
                <MapPin className="w-12 h-12" />
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                  INM Cabo San Lucas
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                Instituto Nacional de Migración — Office Information
              </p>
              <p className="text-lg opacity-80">
                Address, hours, appointments, and what to bring
              </p>
            </div>
          </div>
        </section>

        {/* Quick Reference Cards */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
              <div className="bg-card border rounded-lg p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-bold text-sm mb-1">Address</div>
                <div className="text-sm text-muted-foreground leading-snug">
                  Blvd. Lázaro Cárdenas 1625<br />
                  Col. Centro, Cabo San Lucas<br />
                  BCS, C.P. 23410
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-bold text-sm mb-1">Office Hours</div>
                <div className="text-sm text-muted-foreground">
                  Monday – Friday<br />
                  9:00 AM – 3:00 PM MST<br />
                  <span className="text-destructive font-medium">Closed weekends</span>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-bold text-sm mb-1">Phone</div>
                <div className="text-sm text-muted-foreground">
                  <a href="tel:+526241439859" className="hover:text-primary transition-colors block">
                    624 143 9859
                  </a>
                  <a href="tel:+526241439961" className="hover:text-primary transition-colors block">
                    624 143 9961
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">

              {/* How to Book an Appointment */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CalendarDays className="w-7 h-7 text-primary flex-shrink-0" />
                  <h2 className="font-heading text-3xl font-bold">How to Book an INM Appointment</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Appointments at the Cabo San Lucas INM office are required for most procedures — walk-ins are rarely accepted. The official appointment system is managed online through the INM national portal.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3">Official INM Appointment Portal</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Appointments are booked through the official INM website. The system is entirely in Spanish and requires you to select your specific trámite (procedure), your state (Baja California Sur), and your preferred office (Cabo San Lucas).
                  </p>
                  <a
                    href="https://www.inm.gob.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-lg font-medium text-sm transition"
                  >
                    Go to inm.gob.mx
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-sm">1</div>
                    <div>
                      <p className="font-semibold mb-1">Visit the INM national website</p>
                      <p className="text-sm text-muted-foreground">Navigate to the online appointment (cita previa) section. The interface is in Spanish only.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-sm">2</div>
                    <div>
                      <p className="font-semibold mb-1">Select your procedure</p>
                      <p className="text-sm text-muted-foreground">Choose the specific trámite: CANJE (resident card exchange), renewal, work permit, etc.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-sm">3</div>
                    <div>
                      <p className="font-semibold mb-1">Select Baja California Sur → Cabo San Lucas</p>
                      <p className="text-sm text-muted-foreground">Choose your state and the local office. Availability varies — early morning slots fill fastest.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-sm">4</div>
                    <div>
                      <p className="font-semibold mb-1">Enter your personal information and confirm</p>
                      <p className="text-sm text-muted-foreground">Save or print your confirmation — you must bring it to your appointment. Arrive at least 15 minutes early.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Appointments fill quickly.</strong> Book 2–4 weeks in advance, especially during peak season (November through April). If no slots appear, check back daily — cancellations open up regularly.
                  </p>
                </div>
              </div>

              {/* What to Bring */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-7 h-7 text-primary flex-shrink-0" />
                  <h2 className="font-heading text-3xl font-bold">What to Bring to Your INM Appointment</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Document requirements vary by procedure. The lists below cover the most common visit types. Always bring originals <strong>and</strong> photocopies of every document — INM keeps the copies.
                </p>

                <div className="space-y-6">
                  {/* CANJE */}
                  <div className="bg-card border rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 p-5 border-b bg-primary/5">
                      <Home className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">CANJE — First-Time Resident Card (Temporary Residency)</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">
                        Done within 30 days of entering Mexico with your consulate-issued visa. This is when you receive your physical resident card.
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Passport (original + copy of photo page)',
                          'Valid consulate-issued visa stamp (in your passport)',
                          'FMM form received at the port of entry',
                          'Completed INM application form (available at the office)',
                          'Proof of address in Mexico (rental contract, utility bill, or property deed)',
                          '2 recent passport photos (white background, 35×45 mm)',
                          'Payment receipt for resident card fee (3,000–5,570 MXN depending on duration)',
                          'If requesting work authorization: job offer letter or employer documentation',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Annual Renewal */}
                  <div className="bg-card border rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 p-5 border-b bg-primary/5">
                      <RefreshCw className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">Annual Renewal — Temporary Residency</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">
                        Renew up to 30 days before your card expires. Do not let it lapse — late renewals incur fines and may require restarting from a consulate abroad.
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Current temporary resident card (original + copy)',
                          'Passport (original + copy of photo page)',
                          'Completed renewal application form',
                          'Proof of current Mexican address (if changed since last renewal)',
                          '2 recent passport photos (white background, 35×45 mm)',
                          'Payment receipt for renewal fee',
                          'Updated proof of income or savings (if INM requests it — not always required for renewals)',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Permanent Residency Conversion */}
                  <div className="bg-card border rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 p-5 border-b bg-primary/5">
                      <Home className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">Conversion to Permanent Residency</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">
                        Available after 4 consecutive years of temporary residency. The conversion is done at the local INM office — no consulate visit required.
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Current temporary resident card (original + copy)',
                          'Passport (original + copy of photo page)',
                          'Completed permanent residency application form',
                          'Proof of 4 years of continuous temporary residency (prior cards or INM records)',
                          'Proof of current Mexican address',
                          '2 recent passport photos (white background, 35×45 mm)',
                          'Payment receipt for permanent resident card fee',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Work Permit */}
                  <div className="bg-card border rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 p-5 border-b bg-primary/5">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg">Adding Work Authorization to an Existing Card</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">
                        If you did not request work authorization when you first obtained residency, you can add it later through INM.
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Current resident card (original + copy)',
                          'Passport (original + copy of photo page)',
                          'Employer letter on company letterhead (job title, salary, contract duration)',
                          'Employer\'s INM registration certificate (constancia de inscripción)',
                          'Completed work authorization application form',
                          '2 recent passport photos',
                          'Payment receipt for work authorization fee (~1,780 MXN)',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    <strong>Always bring more than you think you need.</strong> INM officers may request additional documents not listed here. Having extras — extra photos, extra copies, bank statements — prevents having to reschedule. Document requirements can change without notice.
                  </p>
                </div>
              </div>

              {/* Common Reasons to Visit */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-7 h-7 text-primary flex-shrink-0" />
                  <h2 className="font-heading text-3xl font-bold">Common Reasons to Visit the INM Office</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'CANJE (Card Exchange)',
                      desc: 'Exchanging your consulate visa stamp for a physical resident card within 30 days of entry.',
                    },
                    {
                      title: 'Annual Renewal',
                      desc: 'Renewing your temporary resident card each year before the expiration date.',
                    },
                    {
                      title: 'Permanent Residency Conversion',
                      desc: 'Converting from temporary to permanent resident status after 4 years.',
                    },
                    {
                      title: 'Work Authorization',
                      desc: 'Adding work permission to an existing temporary resident card.',
                    },
                    {
                      title: 'Address Change Notification',
                      desc: 'Reporting a change of address in Mexico — required within 90 days of moving.',
                    },
                    {
                      title: 'Lost or Damaged Card Replacement',
                      desc: 'Replacing a lost, stolen, or damaged resident card with a new one.',
                    },
                    {
                      title: 'Exit / Re-Entry Permit',
                      desc: 'Requesting a temporary exit permit while your CANJE process is in progress.',
                    },
                    {
                      title: 'Employer Registration',
                      desc: 'Registering a business to legally sponsor foreign workers (obtains NUT number).',
                    },
                  ].map(({ title, desc }) => (
                    <div key={title} className="bg-card border rounded-lg p-5">
                      <h3 className="font-semibold mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Tips */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-7 h-7 text-primary flex-shrink-0" />
                  <h2 className="font-heading text-3xl font-bold">Practical Tips for Your Visit</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      tip: 'Arrive early',
                      detail: 'The office opens at 9 AM. Even with an appointment, arriving 15–20 minutes early ensures you have time to fill out any additional forms before your slot.',
                    },
                    {
                      tip: 'Expect a wait',
                      detail: 'Most appointments take 3–6 hours from arrival to card issuance, depending on the procedure and how busy the office is that day. Bring water and something to read.',
                    },
                    {
                      tip: 'Bring cash for fees',
                      detail: 'Government fees must be paid at designated banks or via official deposit slip before your appointment. Confirm the exact amount for your procedure in advance, as fees change annually.',
                    },
                    {
                      tip: 'All documents must be in Spanish',
                      detail: 'Any document in English (bank statements, letters, certificates) requires a certified Spanish translation. Apostilles are required for foreign government documents.',
                    },
                    {
                      tip: 'The office is near the INM building',
                      detail: 'The Cabo San Lucas INM office is on Boulevard Lázaro Cárdenas, one of the main roads in downtown Cabo. Street parking is available nearby.',
                    },
                    {
                      tip: 'Phone calls rarely get through',
                      detail: 'The INM office phones (624 143 9859 / 624 143 9961) are often busy. For urgent questions, visiting in person or working through a registered consultant is more reliable.',
                    },
                  ].map(({ tip, detail }) => (
                    <div key={tip} className="flex gap-4">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">{tip}:</span>{' '}
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Consultant CTA — informational, not salesy */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border rounded-xl p-8">
                <h2 className="font-heading text-2xl font-bold mb-3">
                  Only Want to Visit INM Once?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most common reason people visit INM multiple times is missing a document or having an incorrect form. Working with an INM-registered consultant means your paperwork is complete and correct before you walk in — most clients finish in a single appointment.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Susana Rapini</strong> is an INM-registered immigration consultant based in Cabo San Lucas with 15+ years of experience. She prepares all documents, accompanies clients to INM appointments, and handles translation — so you can focus on enjoying Cabo rather than navigating bureaucracy.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+526241259640"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call 624 125 9640
                  </a>
                  <a
                    href="/about/susana-rapini"
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-medium transition"
                  >
                    Learn About Susana
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/faq"
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:bg-muted px-6 py-3 rounded-lg font-medium transition"
                  >
                    Immigration FAQ
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
