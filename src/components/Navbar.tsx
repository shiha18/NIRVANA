import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, ORGANISATION_INFO } from '../data/nirvanaContent';

interface NavbarProps {
  onOpenGetInvolved: () => void;
}

export default function Navbar({ onOpenGetInvolved }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveHash('#' + sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#22301E]/95 backdrop-blur-md shadow-lg border-b border-[#374C32] py-3'
          : 'bg-[#22301E] border-b border-[#374C32]/70 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          id="nav-brand-link"
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#97BC62] rounded-md px-1 py-0.5"
        >
          <div className="w-10 h-10 rounded-sm bg-[#2C5F2D] border border-[#97BC62]/50 flex items-center justify-center text-white font-bold tracking-wider text-base shadow-sm group-hover:border-[#97BC62] transition-colors">
            N
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold tracking-tight text-lg leading-tight font-display">
                {ORGANISATION_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#97BC62] tracking-wider bg-[#97BC62]/15 border border-[#97BC62]/30 px-1.5 py-0.5 rounded-xs">
                Est. {ORGANISATION_INFO.establishedYear}
              </span>
            </div>
            <span className="text-[11px] text-[#C2CDBE] font-medium tracking-normal leading-none hidden sm:block">
              Centre for Youth &amp; Public Policy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className={`text-xs font-semibold tracking-wider px-3 py-2 rounded-sm transition-all duration-150 ${
                  isActive
                    ? 'text-white bg-[#2C5F2D] border-b-2 border-[#97BC62]'
                    : 'text-[#C2CDBE] hover:text-white hover:bg-[#2C5F2D]/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-get-involved-btn"
            onClick={onOpenGetInvolved}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2C5F2D] hover:bg-[#387639] active:bg-[#224A23] border border-[#97BC62]/40 rounded-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#97BC62]"
          >
            <span>Get Involved</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#97BC62]" />
          </button>

          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#C2CDBE] hover:text-white hover:bg-[#2C5F2D] rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#97BC62]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#22301E] border-b border-[#374C32] px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="py-2 mb-2 border-b border-[#374C32] text-xs font-medium text-[#C2CDBE]">
            {ORGANISATION_INFO.fullName} • {ORGANISATION_INFO.headquarters}
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wide text-white hover:text-[#97BC62] hover:bg-[#2C5F2D] px-3 py-2.5 rounded-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-[#374C32]">
            <button
              id="mobile-drawer-get-involved-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetInvolved();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase font-semibold tracking-wider text-white bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 rounded-sm transition-colors"
            >
              <span>Get Involved</span>
              <ArrowUpRight className="w-4 h-4 text-[#97BC62]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
