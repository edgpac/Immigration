'use client';

import { useState } from 'react';
import { Card } from './ui/card';
import { Star, Shield, Clock, X } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const trustIcons = [Star, Shield, Clock];

interface TrustModalProps {
  isOpen: boolean;
  onClose: () => void;
  trustItem: {
    icon: any;
    title: string;
    description: string;
    details: {
      overview: string;
      benefits: string[];
      examples: string[];
    };
  } | null;
}

function TrustModal({ isOpen, onClose, trustItem }: TrustModalProps) {
  const t = useTranslation();

  if (!isOpen || !trustItem) return null;

  const Icon = trustItem.icon;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{trustItem.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{trustItem.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.trust.modal.whatThisMeans}</h4>
            <p className="text-muted-foreground leading-relaxed">{trustItem.details.overview}</p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.trust.modal.keyBenefits}</h4>
            <ul className="space-y-3">
              {trustItem.details.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">{t.trust.modal.realExamples}</h4>
            <div className="space-y-3">
              {trustItem.details.examples.map((example, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">{example}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <button
              onClick={onClose}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition"
            >
              {t.trust.modal.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const t = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Star className="w-6 h-6 text-primary fill-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{t.trust.reviewsModal.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.trust.reviewsModal.subtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {t.trust.reviews.map((review, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-6 border">
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-background border-t p-6">
          <button
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition"
          >
            {t.trust.reviewsModal.closeReviews}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TrustSection() {
  const t = useTranslation();
  const [selectedTrust, setSelectedTrust] = useState<number | null>(null);
  const [showReviews, setShowReviews] = useState(false);

  const trustPoints = t.trust.points.map((point, i) => ({
    ...point,
    icon: trustIcons[i],
  }));

  return (
    <>
      <TrustModal
        isOpen={selectedTrust !== null}
        onClose={() => setSelectedTrust(null)}
        trustItem={selectedTrust !== null ? trustPoints[selectedTrust] : null}
      />

      <ReviewsModal
        isOpen={showReviews}
        onClose={() => setShowReviews(false)}
      />

      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.trust.title}</h2>
            <p className="text-sm text-muted-foreground">
              {t.trust.clickHint}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  onClick={() => setSelectedTrust(index)}
                  className="p-8 text-center cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{point.title}</h3>
                  <p className="text-muted-foreground mb-4">{point.description}</p>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    {t.trust.learnMore}
                  </span>
                </Card>
              );
            })}
          </div>

          {/* Client Reviews Button */}
          <div className="text-center">
            <button
              onClick={() => setShowReviews(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              <Star className="w-5 h-5" />
              {t.trust.readReviews}
              <Star className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
