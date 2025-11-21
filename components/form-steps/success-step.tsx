'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { CheckCircle2, Download, Mail, Calendar, X, User, Phone, MessageSquare } from 'lucide-react';
import { Card } from '../ui/card';

interface SuccessStepProps {
  onClose: () => void;
}

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  message: string;
}

export function SuccessStep({ onClose }: SuccessStepProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationData, setConsultationData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmittingConsultation, setIsSubmittingConsultation] = useState(false);
  const [consultationSubmitStatus, setConsultationSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDownloadForms = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/api/download-forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'immigration-forms.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Download failed. Please try again or contact support.');
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleEmailForms = async () => {
    setIsEmailing(true);
    try {
      const response = await fetch('/api/email-forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 5000);
      } else {
        alert('Email failed. Please check your spam folder or contact support.');
      }
    } catch (error) {
      console.error('Email error:', error);
      alert('Email failed. Please try again.');
    } finally {
      setIsEmailing(false);
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingConsultation(true);
    setConsultationSubmitStatus('idle');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultationData),
      });

      if (response.ok) {
        setConsultationSubmitStatus('success');
        setConsultationData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          message: '',
        });
        setTimeout(() => {
          setConsultationModalOpen(false);
          setConsultationSubmitStatus('idle');
        }, 2000);
      } else {
        setConsultationSubmitStatus('error');
      }
    } catch (error) {
      setConsultationSubmitStatus('error');
    } finally {
      setIsSubmittingConsultation(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-muted/20 py-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">Application Submitted!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your immigration packet is ready
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-600" />
                We've prepared the following documents for you:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  Form FMM-1 (Migratory Form) - Pre-filled
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  Residency Application - Pre-filled
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  Document Checklist for INM Appointment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  Preparation Guide
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold mb-4">What Happens Next?</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                  <span>Check your email for your immigration packet and forms</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                  <span>Our specialist will contact you within 24 hours to schedule a consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                  <span>Review all forms for accuracy and sign where indicated</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                  <span>Book your INM appointment with our guidance</span>
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button 
                onClick={handleDownloadForms}
                disabled={isDownloading}
                className="bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                {isDownloading ? 'Downloading...' : 'Download Forms (ZIP)'}
              </Button>
              <Button 
                onClick={handleEmailForms}
                disabled={isEmailing}
                variant="outline" 
                className="flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                {isEmailing ? 'Sending...' : emailSent ? '✓ Email Sent!' : 'Email Me the Forms'}
              </Button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-left text-sm text-amber-900">
              <p className="font-semibold mb-2">Important:</p>
              <p>Check your spam folder if you don't see the email within a few minutes.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onClose} variant="outline" className="flex-1">
                Return to Home
              </Button>
              <Button 
                onClick={() => setConsultationModalOpen(true)}
                className="flex-1 bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setConsultationModalOpen(false)}>
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
                <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours</p>
              </div>
              <button onClick={() => setConsultationModalOpen(false)} className="p-2 hover:bg-muted rounded-lg transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleConsultationSubmit} className="p-6 space-y-6">
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
                  value={consultationData.name}
                  onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
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
                  value={consultationData.email}
                  onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
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
                  value={consultationData.phone}
                  onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
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
                  value={consultationData.preferredDate}
                  onChange={(e) => setConsultationData({ ...consultationData, preferredDate: e.target.value })}
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
                  value={consultationData.message}
                  onChange={(e) => setConsultationData({ ...consultationData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="What type of residency are you interested in? Any specific questions?"
                />
              </div>

              {consultationSubmitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Consultation request sent! We'll contact you within 24 hours.
                </div>
              )}

              {consultationSubmitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  ✗ Something went wrong. Please try again or call us at 624 125 9640.
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmittingConsultation}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition disabled:opacity-50"
                >
                  {isSubmittingConsultation ? 'Sending...' : 'Schedule Consultation'}
                </button>
                <button
                  type="button"
                  onClick={() => setConsultationModalOpen(false)}
                  className="px-6 bg-muted hover:bg-muted/80 py-3 rounded-lg font-medium transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}