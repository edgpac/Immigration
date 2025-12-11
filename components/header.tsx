'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onStartApplication?: () => void;
}

export function Header({ onStartApplication }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

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
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img 
              src="https://res.cloudinary.com/dgixosra8/image/upload/v1763260298/Edg_3_fdbyxd.png" 
              alt="Los Cabos Immigration Services" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg hidden sm:inline">Los Cabos Immigration Services</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Services Dropdown - CLICK BASED */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm hover:text-primary transition"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/services" 
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">Services Overview</div>
                    <div className="text-xs text-muted-foreground">Overview of our services</div>
                  </Link>
                  <div className="border-t border-border my-1" />
                  <Link 
                    href="/services/temporary-residency" 
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">Temporary Residency</div>
                    <div className="text-xs text-muted-foreground">1-4 year permits</div>
                  </Link>
                  <Link 
                    href="/services/permanent-residency" 
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">Permanent Residency</div>
                    <div className="text-xs text-muted-foreground">Lifetime status</div>
                  </Link>
                  <Link 
                    href="/services/work-permits" 
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-semibold">Work Permits</div>
                    <div className="text-xs text-muted-foreground">Employment authorization</div>
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:text-primary transition">
              How It Works
            </button>
            
            <Link href="/about/susana-rapini" className="text-sm hover:text-primary transition">
              About Susana
            </Link>
            
            <Link href="/faq" className="text-sm hover:text-primary transition">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:block">
            {onStartApplication ? (
              <Button onClick={onStartApplication} className="bg-primary hover:bg-primary/90">
                Start Application
              </Button>
            ) : (
              <Link href="/#contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
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
              All Services
            </Link>
            <Link 
              href="/services/temporary-residency" 
              className="block w-full text-left py-2 text-sm hover:text-primary pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              → Temporary Residency
            </Link>
            <Link 
              href="/services/permanent-residency" 
              className="block w-full text-left py-2 text-sm hover:text-primary pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              → Permanent Residency
            </Link>
            <Link 
              href="/services/work-permits" 
              className="block w-full text-left py-2 text-sm hover:text-primary pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              → Work Permits
            </Link>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-sm hover:text-primary">
              How It Works
            </button>
            <Link 
              href="/about/susana-rapini" 
              className="block w-full text-left py-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Susana
            </Link>
            <Link 
              href="/faq" 
              className="block w-full text-left py-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            {onStartApplication ? (
              <Button onClick={onStartApplication} className="w-full bg-primary hover:bg-primary/90">
                Start Application
              </Button>
            ) : (
              <Link href="/#contact" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}