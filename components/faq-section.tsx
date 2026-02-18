'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function FAQSection() {
  const t = useTranslation();
  const [sectionOpen, setSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t.faq.items;

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Master Toggle Button */}
        <button
          onClick={() => setSectionOpen(!sectionOpen)}
          className="w-full group"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <HelpCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <h2 className="text-4xl font-bold group-hover:text-primary transition-colors">
              {t.faq.title}
            </h2>
            <span className="text-lg text-muted-foreground font-medium">({faqs.length})</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
            <span className="text-sm font-medium">
              {sectionOpen ? t.faq.hide : t.faq.showAll}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                sectionOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {/* FAQ Accordion - Hidden until master toggle is clicked */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            sectionOpen
              ? 'grid-rows-[1fr] opacity-100 mt-8'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'bg-muted/20' : 'bg-background hover:bg-muted/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left group"
                  >
                    <span className="font-semibold text-base pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-primary transition-all duration-300 ${
                        openIndex === index ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-1">
                        <div className="h-px bg-border mb-4" />
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
