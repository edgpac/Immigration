'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/hooks/use-translation';

interface HeaderProps {
  onStartApplication?: () => void;
}

export function Header({ onStartApplication }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHomepage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" aria-label={t.header.brandName} className="flex items-center gap-3 hover:opacity-80 transition">
            <img
              src="https://res.cloudinary.com/dgixosra8/image/upload/v1763260298/Edg_3_fdbyxd.png"
              alt=""
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg hidden sm:inline" aria-hidden="true">{t.header.brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Services Dropdown - CLICK BASED */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm hover:text-primary transition"
              >
                {t.header.services}
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">{t.header.servicesOverview}</div>
                    <div className="text-xs text-muted-foreground">{t.header.servicesOverviewDesc}</div>
                  </Link>
                  <div className="border-t border-border my-1" />
                  <Link
                    href="/services/temporary-residency"
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">{t.header.temporaryResidency}</div>
                    <div className="text-xs text-muted-foreground">{t.header.temporaryResidencyDesc}</div>
                  </Link>
                  <Link
                    href="/services/permanent-residency"
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">{t.header.permanentResidency}</div>
                    <div className="text-xs text-muted-foreground">{t.header.permanentResidencyDesc}</div>
                  </Link>
                  <Link
                    href="/services/work-permits"
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">{t.header.workPermits}</div>
                    <div className="text-xs text-muted-foreground">{t.header.workPermitsDesc}</div>
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:text-primary transition">
              {t.header.howItWorks}
            </button>

            <Link href="/about/susana-rapini" className="text-sm hover:text-primary transition">
              {t.header.aboutSusana}
            </Link>

            <Link href="/faq" className="text-sm hover:text-primary transition">
              {t.header.faq}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="lang-toggle-btn py-1 px-4"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            >
              {t.header.langToggle}
            </button>
          </nav>

          <div className="hidden md:block">
            {onStartApplication ? (
              <Button onClick={onStartApplication} className="bg-primary hover:bg-primary/90">
                {t.header.startApplication}
              </Button>
            ) : (
              <Link href="/#contact">
                <Button className="bg-primary hover:bg-primary/90">
                  {t.header.contactUs}
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="/services"
              className="block w-full text-left py-2 text-sm hover:text-primary font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.allServices}
            </Link>
            <Link
              href="/services/temporary-residency"
              className="block w-full text-left py-2 text-sm hover:text-primary pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              → {t.header.temporaryResidency}
            </Link>
            <Link
              href="/services/permanent-residency"
              className="block w-full text-left py-2 text-sm hover:text-primary pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              → {t.header.permanentResidency}
            </Link>
            <Link
              href="/services/work-permits"
              className="block w-full text-left py-2 text-sm hover:text-primary pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              → {t.header.workPermits}
            </Link>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-sm hover:text-primary">
              {t.header.howItWorks}
            </button>
            <Link
              href="/about/susana-rapini"
              className="block w-full text-left py-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.aboutSusana}
            </Link>
            <Link
              href="/faq"
              className="block w-full text-left py-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.faq}
            </Link>
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="block w-full text-left py-2 text-sm font-semibold hover:text-primary border-t border-border pt-3"
            >
              {language === 'en' ? '🌐 Switch to Español' : '🌐 Switch to English'}
            </button>
            {onStartApplication ? (
              <Button onClick={onStartApplication} className="w-full bg-primary hover:bg-primary/90">
                {t.header.startApplication}
              </Button>
            ) : (
              <Link href="/#contact" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t.header.contactUs}
                </Button>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
