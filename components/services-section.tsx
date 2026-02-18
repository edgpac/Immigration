'use client';

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar, Home, Briefcase, RefreshCw, Lock } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

interface ServicesSectionProps {
  onStartApplication?: () => void;
}

export function ServicesSection({ onStartApplication }: ServicesSectionProps) {
  const t = useTranslation();
  const handleStartApplication = onStartApplication ?? (() => { window.location.href = '/'; });

  const icons = [Calendar, Home, Briefcase, RefreshCw];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Single Start Application Button */}
        <div className="text-center">
          <Button
            onClick={handleStartApplication}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6"
          >
            {t.services.startApplication}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t.services.chooseNextStep}
          </p>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
            <Lock className="w-3 h-3 text-green-600" />
            <span>{t.services.secureLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
