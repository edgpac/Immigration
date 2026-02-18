'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { X, Mail, User, Phone, Calendar, MessageSquare } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  message: string;
}

function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const t = useTranslation();
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', preferredDate: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{t.consultation.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t.consultation.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                {t.consultation.fullName}
              </div>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t.consultation.namePlaceholder}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                {t.consultation.email}
              </div>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t.consultation.emailPlaceholder}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                {t.consultation.phone}
              </div>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t.consultation.phonePlaceholder}
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {t.consultation.preferredDate}
              </div>
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                {t.consultation.message}
              </div>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder={t.consultation.messagePlaceholder}
            />
          </div>

          {/* Submit Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              {t.consultation.successMessage}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {t.consultation.errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              {isSubmitting ? t.consultation.sending : t.consultation.submit}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 bg-muted hover:bg-muted/80 py-3 rounded-lg font-medium transition"
            >
              {t.consultation.cancel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface FinalCtaSectionProps {
  onStartApplication?: () => void;
}

export function FinalCTASection({ onStartApplication }: FinalCtaSectionProps) {
  const t = useTranslation();
  const handleStartApplication = onStartApplication ?? (() => { window.location.href = '/'; });
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <>
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.finalCta.title}</h2>
          <p className="text-lg opacity-90 mb-8">
            {t.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleStartApplication}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              {t.finalCta.startApplication}
            </Button>
            <Button
              onClick={() => setConsultationModalOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              {t.finalCta.scheduleConsultation}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
