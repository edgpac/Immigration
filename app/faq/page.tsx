import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FinalCTASection } from '@/components/final-cta-section'
import { FAQSection } from '@/components/faq-section'
import { HelpCircle, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Mexico Immigration FAQ 2025 | INM-Registered Specialist',
  },
  description: '2025 answers on income thresholds, processing times, document checklists, and INM procedures — answered by INM-registered specialist Susana Rapini in Cabo.',
  alternates: {
    canonical: 'https://www.loscabosimmigration.com/faq',
  },
  openGraph: {
    title: 'Mexico Immigration FAQ 2025 — Answered by INM-Registered Specialist',
    description: 'Accurate 2025 answers on income requirements, timelines, document checklists, and INM procedures. Written by INM-registered specialist Susana Rapini in Cabo.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does the residency process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The complete process typically takes 6-8 weeks total. Consulate appointments can be scheduled 2-4 weeks out. Once approved, you have 6 months to enter Mexico, then 30 days to complete the CANJE process (exchanging your visa for a resident card) at the local INM office. The actual INM appointment can take 3-6 hours, with some offices issuing cards same-day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the minimum income requirements for 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For temporary residency: $27,000 USD in bank balance (last 12 months) OR $1,620 USD monthly income (last 6 months). For permanent residency: approximately $54,000 USD savings OR $2,700 USD monthly income. Requirements vary slightly by consulate and are adjusted annually. Dependents typically require an additional $500-1,800 monthly income proof.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to speak Spanish to get Mexican residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Spanish is not required to obtain residency. However, all INM procedures are conducted in Spanish. Immigration consultants like us prepare all forms in both languages and can accompany you to appointments to translate. For naturalization (after 5 years of residency), you will need to demonstrate Spanish language skills and pass a test on Mexican history and culture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I work in Mexico with temporary residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but you must apply for work authorization when requesting your temporary residency. Work permission is not automatic — you must specifically request it. The work authorization is tied to a specific employer, so changing jobs requires a new application. Permanent residents can work freely without additional permits. Digital nomads working for foreign companies technically need work authorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I leave Mexico while my residency is being processed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the stage. During the consulate application process abroad, you can travel freely. Once you enter Mexico with your visa and start the CANJE process, you should not leave until you receive your resident card. In exceptional circumstances, you can request a one-time exit/entry permit from INM, which takes about 7 days to issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to renew my temporary residency every year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Temporary residency cards are initially issued for 1 year and must be renewed annually. You can renew up to 30 days before expiration (or up to 55 days after expiration if you were outside Mexico, with a 5-day grace period upon return). After 4 consecutive years of temporary residency, you become eligible to apply for permanent residency, which never expires.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I overstay my tourist visa in Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overstaying is a serious violation. Mexico is cracking down on "perpetual tourists" who leave every 180 days to reset their stay. You may face fines, deportation, or be barred from re-entry. If caught overstaying, you cannot convert to temporary residency from within Mexico — you must leave the country and apply at a Mexican consulate abroad. Fines can range from 1,000 to 10,000 pesos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I apply for Mexican residency if I own property in Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Owning Mexican real estate can qualify you for residency depending on the property value. Requirements vary by consulate, but generally properties valued at $200,000+ USD may qualify you for temporary residency, while higher values may qualify for permanent residency. You will still need to show property ownership documents and may need to prove additional financial solvency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am married to a Mexican citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mexican spouses have a streamlined path. You can apply directly at an INM office in Mexico without going to a consulate abroad first. You will need your marriage certificate (apostilled if married outside Mexico), proof of your spouse\'s Mexican citizenship, and standard documents. After 2 years of temporary residency through marriage, you can apply for permanent residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I have to pay Mexican taxes as a resident?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tax residency is separate from immigration residency. You become a Mexican tax resident if you have a permanent home in Mexico or if your center of vital interests is in Mexico. However, many foreign residents do not pay Mexican income tax because they work for foreign companies or have foreign-sourced retirement income. Consult a qualified tax advisor familiar with cross-border tax law.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Mexican consulate should I use to apply for residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can apply at any Mexican consulate, but most applicants use the one nearest their legal residence or where they can most easily schedule an appointment. Popular consulates for Americans include San Diego (typically fastest appointments), Los Angeles, Phoenix, Houston, Miami, and Chicago. Each consulate has slightly different procedures, so check their specific website. San Diego often processes applications same-day, while others take 1-2 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I apply for Mexican residency from inside Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, no. You must apply at a Mexican consulate in your home country or country of legal residence. Exceptions include immediate family members of Mexican citizens or permanent residents, who can apply at INM offices in Mexico, and those converting from temporary to permanent residency after 4 years. Tourist visa holders cannot convert to residency from within Mexico — attempting this results in automatic denial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do pension or Social Security payments count as income for Mexican residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pension payments, Social Security benefits, military retirement, and any other regular monthly payments qualify as income for residency applications. You will need official documentation showing consistent payments for at least 6 consecutive months, such as pension statements, Social Security award letters, or bank deposits showing regular deposits. The income must meet the minimums: $1,620 USD/month for temporary residency or $2,700 USD/month for permanent residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine income and savings to meet the financial requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Policies vary by consulate. Some consulates allow combining income and savings, while others require you to meet either the income threshold or the savings threshold completely. The safest approach is to qualify using one method fully. If you are borderline on both, consult an immigration consultant to determine which consulate\'s policies best fit your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have investment accounts instead of regular income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Investment accounts qualify as savings balance if they show the required minimum ($27,000 USD for temporary or $54,000 USD for permanent) maintained consistently for 12 months. Investment distributions can count as income if they are regular and predictable. Provide brokerage statements showing account values and distribution history. Some consulates are more flexible with investment income than others.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a Mexican address to apply for residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need a Mexican address for the initial consulate application, but you will need one for the CANJE process (exchanging your visa for a resident card) within 30 days of entering Mexico. This can be a rental, purchased home, or a friend\'s address where you are staying. INM requires proof of address like a rental contract, property deed, or utility bill. Address changes must be reported to INM within 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my residency application is denied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consulates rarely outright deny applications — they typically request additional documentation or clarification. Common issues include insufficient financial documentation, expired documents, or missing paperwork. If denied, you can reapply once you address the reasons for denial. There is no waiting period, but you must resolve the underlying issue. Professional consultation before applying significantly reduces denial risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I start a business in Mexico with temporary residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but you need work authorization on your temporary resident card. Starting a business is considered economic activity requiring work permission, even if you are self-employed. You can own a business without work authorization (passive ownership with hired management), but active involvement in operations requires permission. Permanent residents can start and operate businesses freely without additional authorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I freelance or do consulting work with temporary residency in Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, all work performed in Mexico requires authorization, even freelance work for foreign clients. The safest approach is to obtain temporary residency with general work permission, which costs approximately 1,780 MXN (~$105 USD) additional when adding to your resident card. Many digital nomads and freelancers report working on tourist visas without issues, but legally you should have authorization. Risk increases if you are visibly working in public or posting about work on social media.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my spouse and children get Mexican residency with me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Family members can apply as dependents on your application. Dependent requirements include additional financial showing ($500-1,800 per dependent monthly, varies by consulate) and proof of relationship via apostilled marriage or birth certificates. All dependents must attend the consulate appointment together. Children under 18 are typically approved if the parent qualifies. Adult children may need to prove financial dependency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a DUI or criminal record affect my Mexican residency application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minor criminal records like a single DUI conviction typically do not disqualify residency applicants, but you must disclose them honestly. Mexico primarily excludes applicants with serious criminal histories: violent crimes, drug trafficking, or human trafficking. Background check requirements vary by consulate. Be completely honest on your application — lying about criminal history is grounds for immediate denial and potential ban from future applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I eventually get Mexican citizenship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After 5 years of permanent residency (or 2 years if married to a Mexican citizen), you can apply for naturalization. Requirements include demonstrating Spanish language proficiency, passing a test on Mexican history and culture, and showing good moral character. Many countries including the USA and Canada allow dual citizenship. The naturalization process takes 6-18 months and grants you all rights of Mexican nationals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I have access to Mexican healthcare as a resident?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Temporary and permanent residents can enroll in IMSS (Mexican Social Security healthcare) by paying monthly premiums, which typically cost $300-500 USD annually for individuals. Mexican private healthcare is also high quality and affordable compared to the United States — private consultations run $30-80 USD and procedures cost 50-70% less than US equivalents. Most expatriates combine IMSS enrollment with supplemental private insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the INM and what does it do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'INM stands for Instituto Nacional de Migración (National Immigration Institute) — Mexico\'s official federal immigration authority. INM is responsible for processing residency applications, issuing resident cards, registering employers who hire foreign workers, and enforcing immigration law. The INM office in Cabo San Lucas is located at Blvd. Lázaro Cárdenas 1625 and serves the Los Cabos corridor. INM-registered consultants like Susana Rapini are officially authorized to represent clients before the institute.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need to apply for temporary residency in Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required documents typically include: valid passport (6+ months remaining), completed application form, financial proof (bank statements for 12 months showing $27,000 USD balance, or income statements showing $1,620 USD/month for 6 months), two passport photos, and payment of the consulate fee ($54 USD non-refundable). If applying for work authorization, include a job offer letter. Documents in a foreign language must be accompanied by certified Spanish translations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between temporary and permanent residency in Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Temporary residency (residente temporal) is valid for 1-4 years and requires annual renewal. It requires lower financial thresholds ($1,620/month income or $27,000 savings) and work authorization must be specifically requested. Permanent residency (residente permanente) never expires, includes automatic work rights for any employer, and requires higher financial qualifications ($2,700/month or $54,000 savings) or 4 years of prior temporary residency. Permanent residency is also the path to Mexican citizenship eligibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to get Mexican residency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government fees include a consulate application fee ($54 USD non-refundable) and the resident card fee paid to INM (3,000-5,570 MXN, approximately $150-280 USD, depending on card duration). Additional costs may include document apostilles ($50-150 per document), certified translations, and consultant fees for professional assistance. Renewal fees are similar annually. Total government costs typically range from $400-700 USD for the initial application.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.loscabosimmigration.com/faq',
  name: 'Mexico Immigration FAQ 2025 | INM-Registered Specialist',
  description: '2025 answers on income thresholds, processing times, document checklists, and INM procedures — answered by INM-registered specialist Susana Rapini in Cabo.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-speakable-intro'],
  },
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <HelpCircle className="w-12 h-12" />
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Immigration FAQ
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Common Questions About Mexican Residency & Work Permits
            </p>
            <p className="text-lg opacity-80">
              Expert answers from licensed INM consultants in Cabo San Lucas
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-lg p-8 mb-12">
              <div className="flex items-start gap-4">
                <Search className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Find Your Answer</h2>
                  <p className="faq-speakable-intro text-muted-foreground leading-relaxed mb-4">
                    This comprehensive FAQ covers the most common questions we receive about Mexican immigration, residency processes, work permits, and visa requirements. We've organized answers by topic to help you quickly find the information you need.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Can't find what you're looking for? <a href="#contact" className="text-primary hover:underline font-medium">Contact our consultants</a> for personalized assistance with your specific immigration situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional FAQs Beyond Component */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">
                Additional Immigration Questions
              </h2>

              <div className="space-y-6">
                {/* Consulate Process */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Which Mexican consulate should I use?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can apply at any Mexican consulate, but most applicants use the consulate nearest their legal residence or where they can most easily schedule an appointment. Popular consulates for Americans include San Diego (typically fastest appointments), Los Angeles, Phoenix, Houston, Miami, and Chicago. Each consulate has slightly different procedures and document requirements, so check their <a href="https://embamex.sre.gob.mx/sre/index.php/directorio-consular" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">specific website</a>. Some consulates like San Diego process applications same-day, while others take 1-2 weeks. If you live abroad temporarily, you may be able to use that country's consulate, but confirm eligibility first.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Can I apply for Mexican residency from inside Mexico?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Generally, no. You must apply at a Mexican consulate in your home country or country of legal residence. The only exceptions are: (1) immediate family members of Mexican citizens or permanent residents can apply at <a href="https://www.inm.gob.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">INM offices</a> in Mexico, (2) those with certain humanitarian visas, or (3) conversion from temporary to permanent residency after 4 years. Tourist visa holders cannot convert to residency status from within Mexico—attempting this results in automatic denial and potential immigration violations. If you're in Mexico on a tourist visa and want residency, you must leave Mexico and apply at a consulate abroad.
                  </p>
                </div>

                {/* Financial Requirements */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Do pension or Social Security payments count as income?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! Pension payments, Social Security benefits, military retirement, and any other regular monthly payments qualify as income for residency applications. You'll need to provide official documentation showing consistent monthly payments for at least 6 consecutive months. Accepted documents include pension statements, Social Security award letters, bank deposits showing regular payments, or official letters from the paying institution. The income must meet the minimum threshold: $1,620 USD/month for temporary residency or $2,700 USD/month for permanent residency.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Can I combine income and savings to meet requirements?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Policies vary by consulate. Some consulates allow combining income and savings (for example, $1,000/month income plus $15,000 savings), while others require you to meet either the income threshold OR the savings threshold completely. The safest approach is to qualify using one method fully. If you're borderline on both, consult with us to determine which consulate's policies best fit your situation. Never assume you can combine—always verify with the specific consulate you plan to use.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">What if I have investments instead of regular income?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Investment accounts qualify as savings balance if they show the required minimum ($27,000 USD for temporary or $54,000 USD for permanent) maintained consistently for 12 months. Investment distributions can count as income if they're regular and predictable. Provide brokerage statements showing account values and distribution history. Some consulates are more flexible with investment income than others, so if this is your primary financial qualification, we can advise on the best consulate to use and help present your investments in the strongest light.
                  </p>
                </div>

                {/* Property and Real Estate */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Can owning property in Mexico help me get residency?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, in some cases. Mexican property ownership can qualify you for residency depending on the property value and the consulate's policies. Generally, properties valued at $200,000+ USD may qualify for temporary residency, while higher values ($500,000+) may qualify for permanent residency. You'll need to provide: property deed (escritura), recent property tax statements (predial), professional appraisal or assessed value documentation, and proof of purchase. Property-based applications often still require showing some financial solvency beyond the property itself. Requirements vary significantly by consulate, so property owners should consult with us to understand their specific pathway.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Do I need a Mexican address to apply for residency?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You don't need a Mexican address for the initial consulate application, but you will need one for the CANJE process (exchanging your visa for a resident card) within 30 days of entering Mexico. This can be a rental, purchased home, or even a friend's address where you're staying. INM requires proof of address like a rental contract, property deed, or utility bill in your name. You can establish your address after arriving in Mexico but before your INM appointment. Many newcomers rent initially then update their address with INM once they purchase property. Address changes must be reported to INM within 90 days.
                  </p>
                </div>

                {/* Timeline and Processing */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">How long does the entire process take from start to finish?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Total timeline: 6-12 weeks typically. Breakdown: Consulate appointment scheduling (2-6 weeks depending on location and season), document preparation (1-2 weeks if you need apostilles or translations), consulate processing after appointment (same day to 2 weeks for visa approval), entry to Mexico (within 180 days of visa issuance), CANJE process at INM (within 30 days of entry, appointment takes 3-6 hours), and resident card issuance (same day to 1 week after CANJE). Factors that extend timelines: busy season at consulates (winter months), document issues requiring additional submissions, INM office backlogs, or complications like prior immigration violations.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">What happens if my application is denied?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consulates rarely outright deny applications—they typically request additional documentation or clarification. Common issues: insufficient financial documentation, expired documents, missing paperwork, or inconsistent information. If denied, you can reapply once you address the reasons for denial. There's no waiting period, but you must resolve the underlying issue. Denials usually stem from preventable errors like incomplete bank statements, financial documents not meeting the minimum threshold, or unsigned forms. Professional consultation before applying significantly reduces denial risk by identifying and correcting issues before submission.
                  </p>
                </div>

                {/* Work and Employment */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Can I start a business in Mexico with temporary residency?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, but you need work authorization on your temporary resident card. Starting a business is considered "economic activity" requiring work permission, even if you're self-employed. The process: obtain temporary residency with work authorization, establish your business legally (register with <a href="https://www.sat.gob.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SAT</a>, obtain RFC tax ID), and ensure your resident card shows work permission. You can own a business without work authorization (passive ownership with hired management), but active involvement in operations requires permission. Permanent residents can start and operate businesses freely without additional authorization. Consult with both an immigration specialist and Mexican business attorney when establishing a company.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">What about freelancing or consulting work?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Technically, all work performed in Mexico requires authorization, even freelance work for foreign clients. Enforcement has traditionally been lax for remote workers not interacting with the Mexican economy, but INM is increasingly scrutinizing this. Safest approach: obtain temporary residency with general work permission, which costs approximately 1,780 MXN (~$105 USD) additional when adding to your resident card. This protects you from penalties if INM investigates. Many digital nomads and freelancers report working on tourist visas without issues, but legally you should have authorization. Risk increases if you're visibly working (café laptop work), posting on social media about work, or conducting client meetings in Mexico.
                  </p>
                </div>

                {/* Family and Dependents */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Can my spouse and children get residency with me?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! Family members can apply as dependents on your application. Dependent requirements: additional financial showing ($500-1,800 per dependent monthly, varies by consulate), proof of relationship (marriage certificates, birth certificates—apostilled if issued outside Mexico), and same application process as primary applicant. All dependents must attend the consulate appointment together. Children under 18 are typically approved if the parent qualifies. Adult children (18+) may need to prove financial dependency or have special circumstances. Spouses of Mexican citizens have an alternative pathway: applying directly at INM offices in Mexico with marriage certificate and spouse's Mexican citizenship proof.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">What if I'm divorced or separated from my Mexican spouse?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you obtained residency through marriage to a Mexican citizen and later divorce, your residency status doesn't automatically terminate. However, you may need to show you can maintain yourself financially when renewing (meet regular income/savings requirements). If you have children with Mexican citizenship, you have strong grounds for residency continuation. Notify INM of your marital status change within 90 days. You can transition from marriage-based residency to standard temporary residency by demonstrating financial solvency at your next renewal. Consult an immigration attorney if you're concerned about status implications from divorce.
                  </p>
                </div>

                {/* Special Circumstances */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">I have a DUI conviction—will this affect my application?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Minor criminal records like single DUI convictions typically don't disqualify residency applicants, but you must disclose them honestly. Mexico primarily excludes applicants with serious criminal histories: violent crimes, drug trafficking, human trafficking, or multiple serious offenses. Background check requirements vary by consulate—some require police clearances from all countries you've lived in the past 5 years. Be completely honest on your application; lying about criminal history is grounds for immediate denial and potential ban from future applications. If you have concerns about your record, consult with us before applying to assess potential impact and develop disclosure strategy.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Can I get Mexican citizenship eventually?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! After 5 years of permanent residency (or 2 years if married to Mexican citizen), you can apply for naturalization. Requirements include: demonstrating Spanish language proficiency, passing a test on Mexican history and culture, proving ties to Mexico (residence, family, employment), showing good moral character, and renouncing other citizenships (though many countries including USA and Canada allow dual citizenship). The naturalization process takes 6-18 months and involves multiple government agencies. Mexican citizenship grants you all rights of Mexican nationals including voting, running for office, and owning property in restricted zones without trusts. Many expatriates pursue citizenship after years of permanent residency for the security and benefits.
                  </p>
                </div>

                {/* Healthcare and Services */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Will I have access to Mexican healthcare as a resident?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Temporary and permanent residents can enroll in <a href="https://www.imss.gob.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IMSS (Mexican Social Security healthcare)</a> by paying monthly premiums. IMSS provides comprehensive coverage at government facilities for a fraction of US healthcare costs (typically $300-500 USD annually for individuals). Alternatively, many residents use private health insurance or pay out-of-pocket—Mexican private healthcare is high quality and affordable compared to the United States. Private consultations run $30-80 USD, and procedures cost 50-70% less than US equivalents. Some US Medicare Advantage plans offer limited coverage in Mexico, but traditional Medicare doesn't cover services outside the US. Most expatriates combine IMSS enrollment with supplemental private insurance or medical tourism policies.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Do I need to file Mexican taxes as a resident?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Immigration residency and tax residency are separate. You become a Mexican tax resident if you have a permanent home available in Mexico OR if your "center of vital interests" is in Mexico (family, economic interests, etc.). Many foreign residents don't owe Mexican income taxes because: they receive foreign-sourced income (pensions, Social Security, investment distributions from abroad) that Mexico doesn't tax unless you exceed certain thresholds, or they qualify for tax treaties between Mexico and their home country. However, if you work for Mexican employers, earn rental income from Mexican property, or operate businesses in Mexico, you likely owe Mexican taxes. Consult a cross-border tax advisor familiar with both countries' tax laws. Immigration consultants don't provide tax advice or report to Mexican tax authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original FAQ Component */}
      <FAQSection />

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every immigration situation is unique. Our licensed consultants provide personalized answers and guidance tailored to your specific circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+526241259640"
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Call: 624 125 9640
              </a>
              <button
                
                className="inline-block bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
      
      <Footer />
    </div>
    </>
  )
}
