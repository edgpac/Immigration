'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { X, MapPin, Phone, Clock, Mail, User, Calendar, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onStartApplication: () => void;
}

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  message: string;
}

function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          message: '',
        });
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
            <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
            <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Full Name *
              </div>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email Address *
              </div>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number *
              </div>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+52 624 123 4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Preferred Consultation Date
              </div>
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Tell us about your immigration needs
              </div>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="What type of residency are you interested in? Any specific questions?"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              ✓ Consultation request sent! We'll contact you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              ✗ Something went wrong. Please try again or call us at 624 125 9640.
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 bg-muted hover:bg-muted/80 py-3 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="text-sm text-muted-foreground mt-1">Cabo Immigration Services Office</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Office Location</h4>
              <p className="text-muted-foreground">
                Blvd. Lázaro Cárdenas 1625<br />
                Ampliación Juárez<br />
                23469 Cabo San Lucas, B.C.S.<br />
                Mexico
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <a href="tel:+526241259640" className="text-primary hover:underline">
                624 125 9640
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8 AM – 3 PM MST</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-destructive">Closed</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-destructive">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Blvd.+Lázaro+Cárdenas+1625,+Ampliación+Juárez,+23469+Cabo+San+Lucas"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium text-center transition"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="sticky bottom-0 bg-background border-t p-6">
          <button
            onClick={onClose}
            className="w-full bg-muted hover:bg-muted/80 py-3 rounded-lg font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ onStartApplication }: HeroSectionProps) {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <ConsultationModal isOpen={consultationModalOpen} onClose={() => setConsultationModalOpen(false)} />
      
      <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Navigate Mexican Immigration with Confidence
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Expert assistance for temporary residency, permanent residency, and work permits in Cabo San Lucas
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setConsultationModalOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6"
                >
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  onClick={() => setContactModalOpen(true)}
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold border-2 border-white/40 text-lg px-8 py-6"
                >
                  Contact Info
                </Button>
              </div>
            </div>

            {/* Right column - Image with Gold Border */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-yellow-500/30">
                <img
                  src="https://res.cloudinary.com/dhwnr1pa5/image/upload/v1763848829/immi_d2xupt.png"
                  alt="Beautiful Cabo San Lucas beach at sunset"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}