'use client';

import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition">
              <img
                src="https://res.cloudinary.com/dgixosra8/image/upload/v1763260298/Edg_3_fdbyxd.png"
                alt="Los Cabos Immigration Services"
                className="h-8 w-auto"
              />
              <span className="font-bold">{t.header.brandName}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link href="/services/temporary-residency" className="hover:text-primary transition">
                  {t.footer.temporaryResidency}
                </Link>
              </li>
              <li>
                <Link href="/services/permanent-residency" className="hover:text-primary transition">
                  {t.footer.permanentResidency}
                </Link>
              </li>
              <li>
                <Link href="/services/work-permits" className="hover:text-primary transition">
                  {t.footer.workPermits}
                </Link>
              </li>
              <li>
                <Link href="/about/susana-rapini" className="hover:text-primary transition">
                  {t.footer.aboutSusana}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition">
                  {t.footer.faq}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">{t.footer.contact}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p>Blvd. Lázaro Cárdenas 1625</p>
                  <p>Ampliación Juárez</p>
                  <p>23469 Cabo San Lucas, B.C.S.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+526241259640" className="hover:text-primary transition">
                  624 125 9640
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <p>{t.footer.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {currentYear} {t.header.brandName}. {t.footer.copyright}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                {t.footer.architectNote}{' '}
                <a href="tel:+526121698328" className="hover:text-primary transition">
                  +52 612 169 8328
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition">{t.footer.privacyPolicy}</a>
              <a href="#" className="hover:text-primary transition">{t.footer.termsOfService}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
