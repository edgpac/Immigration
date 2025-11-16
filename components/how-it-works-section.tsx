'use client';

import { useState } from 'react';
import { Card } from './ui/card';
import { CheckCircle2, FormInput, FileCheck, Flag, X } from 'lucide-react';

interface StepModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: {
    icon: any;
    title: string;
    description: string;
    details: {
      timeline: string;
      requirements: string[];
      keyFacts: string[];
      costs: string;
    };
  } | null;
}

function StepModal({ isOpen, onClose, step }: StepModalProps) {
  if (!isOpen || !step) return null;

  const Icon = step.icon;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Timeline */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">⏱️ Timeline</h4>
            <p className="text-muted-foreground">{step.details.timeline}</p>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">📋 Requirements</h4>
            <ul className="space-y-2">
              {step.details.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Facts */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">💡 Key Facts</h4>
            <ul className="space-y-2">
              {step.details.keyFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Costs */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">💰 Costs</h4>
            <p className="text-muted-foreground">{step.details.costs}</p>
          </div>

          <div className="pt-4 border-t">
            <button
              onClick={onClose}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      icon: CheckCircle2,
      title: 'Choose Your Service',
      description: 'Select temporary residency, permanent residency, or work permit',
      details: {
        timeline: 'Consulate appointment typically takes 2-4 weeks to schedule. Total initial process: 1-2 months.',
        requirements: [
          'Valid passport with at least 6 months validity',
          'Proof of financial solvency: $27,000 USD in bank balance (last 12 months) OR $1,620 USD monthly income (last 6 months)',
          'Completed visa application form',
          'Recent passport-sized photo (white background)',
          'Consular appointment fee: $54 USD (non-refundable)'
        ],
        keyFacts: [
          'Temporary residency allows stays up to 4 years before permanent residency eligibility',
          'Work permission must be requested separately unless married to Mexican citizen',
          'INM (Instituto Nacional de Migración) processes all residency applications',
          'Temporary residents must notify INM of address changes within 90 days',
          'Perpetual tourists (leaving every 180 days) face increasing enforcement and fines'
        ],
        costs: 'Consulate visa: $54 USD | Temporary resident card (1 year): 3,000-5,570 MXN (~$175-$325 USD) | Permanent resident card: 6,789 MXN (~$400 USD)'
      }
    },
    {
      icon: FormInput,
      title: 'Complete Smart Form',
      description: 'Answer questions once - we auto-fill all Mexican immigration forms for you',
      details: {
        timeline: '30-day window after receiving visa to complete process in Mexico. Card issuance: same day to 1 week depending on INM office.',
        requirements: [
          'Approved temporary resident visa from Mexican consulate',
          'FMM (Forma Migratoria Múltiple) received at airport/border',
          'Original passport with visa stamp',
          'Proof of legal entry into Mexico',
          'Payment for resident card (varies by duration: 1-4 years)',
          'Biometric data (fingerprints and photograph at INM office)'
        ],
        keyFacts: [
          'CANJE process: exchanging your visa for resident card at local INM office',
          'Appointments required at most INM offices - plan ahead',
          'Bring all original documents plus photocopies',
          'Process can take 3-6 hours at INM office',
          'Card expires on date shown in DD/MM/YYYY format',
          'Renewal window: up to 30 days before expiration (or 55 days if outside Mexico)'
        ],
        costs: 'Annual renewal fees vary by card duration. Work permit addition: ~1,780 MXN. Replacement card if lost: ~600 MXN plus new photo requirements.'
      }
    },
    {
      icon: FileCheck,
      title: 'Review & Download',
      description: 'Review completed forms, upload supporting documents, get your personalized checklist',
      details: {
        timeline: 'Document preparation: 1-2 weeks. Apostille/legalization: 2-4 weeks additional if required.',
        requirements: [
          'Birth certificate (apostilled if from non-Spanish speaking country)',
          'Marriage certificate if applicable (apostilled)',
          'Police clearance/background check from country of residence',
          'Proof of income: 6 months bank statements or employment letter',
          'Health insurance documentation (recommended)',
          'Job offer letter with salary details if applying for work permit',
          'Educational diplomas/certificates if required for job'
        ],
        keyFacts: [
          'Documents in languages other than Spanish must be officially translated',
          'Apostille requirements vary by country - check with consulate',
          'Digital copies usually accepted initially, originals at appointment',
          'Financial documents must show consistent monthly income or savings',
          'Employer registration with INM required before work permit application',
          'Keep copies of everything - INM may request additional documentation'
        ],
        costs: 'Apostille services: $20-50 USD per document | Professional translation: $25-40 USD per page | Background check: $20-50 USD depending on country'
      }
    },
    {
      icon: Flag,
      title: 'Submit & Track',
      description: 'Submit to INM with our guidance or book a consultation for hands-on help',
      details: {
        timeline: 'Work permit approval from INM: 20-30 business days. Consulate visa issuance: 10 business days. Total: 1-2 months for work permits.',
        requirements: [
          'Employer must be registered with INM (constancia de inscripción de empleador)',
          'NUT (Unique Processing Number) issued by INM to employer',
          'Signed employment contract in Spanish with job details and salary',
          'Proof that position requires foreign expertise (no labor market test but qualifications matter)',
          'Company registration documents and tax information',
          'Letter acknowledging employer covers travel expenses'
        ],
        keyFacts: [
          'Employer initiates work permit process - employees cannot self-apply',
          'Work permits tied to specific employer - changing jobs requires new application',
          'Temporary work visa valid up to 4 years, renewable annually',
          'After 4 consecutive years, eligible for permanent residency',
          'Permanent residents can work freely without additional permits',
          'Tourist visas cannot be converted to work permits - must leave Mexico and reapply',
          'Digital nomads working for non-Mexican companies technically need work authorization'
        ],
        costs: 'Employer INM registration: varies by company size | Work authorization addition to resident card: 1,780 MXN (~$105 USD) | Legal assistance (optional): $500-2,000 USD'
      }
    },
  ];

  return (
    <>
      <StepModal
        isOpen={selectedStep !== null}
        onClose={() => setSelectedStep(null)}
        step={selectedStep !== null ? steps[selectedStep] : null}
      />

      <section id="how-it-works" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground mb-2">
              Our streamlined approach makes immigration easy
            </p>
            <p className="text-sm text-muted-foreground">
              Click any card to learn detailed requirements, timelines, and costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card
                    onClick={() => setSelectedStep(index)}
                    className="p-6 h-full flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="mb-4 p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{step.description}</p>
                    <span className="text-primary text-sm font-medium group-hover:underline">
                      Learn More →
                    </span>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-border" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}