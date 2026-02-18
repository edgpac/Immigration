'use client';

import { useState } from 'react';
import { Card } from './ui/card';
import { CheckCircle2, FormInput, FileCheck, Flag, X } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const stepIcons = [CheckCircle2, FormInput, FileCheck, Flag];

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
  const t = useTranslation();

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
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.howItWorks.modal.timeline}</h4>
            <p className="text-muted-foreground">{step.details.timeline}</p>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.howItWorks.modal.requirements}</h4>
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
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.howItWorks.modal.keyFacts}</h4>
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
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.howItWorks.modal.costs}</h4>
            <p className="text-muted-foreground">{step.details.costs}</p>
          </div>

          <div className="pt-4 border-t">
            <button
              onClick={onClose}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition"
            >
              {t.howItWorks.gotIt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const t = useTranslation();
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = t.howItWorks.steps.map((step, i) => ({
    ...step,
    icon: stepIcons[i],
  }));

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
            <h2 className="text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-muted-foreground mb-2">
              {t.howItWorks.subtitle}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.howItWorks.clickHint}
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
                      {t.howItWorks.learnMore}
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
