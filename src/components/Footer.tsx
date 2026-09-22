import { ORGANISATION_INFO } from '../data/nirvanaContent';

export default function Footer() {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#approach' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Policies', href: '#policies' },
    { label: 'Campaign', href: '#campaign' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#22301E] text-white border-t border-[#374C32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#374C32]">
          
          {/* Brand Column (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-[#2C5F2D] border border-[#97BC62]/40 flex items-center justify-center text-white font-extrabold text-lg">
                N
              </div>
              <div>
                <h3 className="text-2xl font-extrabold font-display tracking-tight text-white">
                  {ORGANISATION_INFO.name}
                </h3>
                <p className="text-xs text-[#C2CDBE] font-medium">
                  Centre for Youth &amp; Public Policy
                </p>
              </div>
            </div>

            <p className="text-lg font-serif italic text-[#F6F7F3] max-w-md">
              “{ORGANISATION_INFO.tagline}”
            </p>

            <div className="pt-2 text-xs font-mono tracking-widest text-[#97BC62] font-bold">
              Reach • Inform • Support • Empower
            </div>

            <p className="text-xs text-[#C2CDBE] max-w-lg leading-relaxed pt-1">
              Established in 2026 and headquartered in Chennai, Tamil Nadu. Dedicated to building informed, engaged and empowered communities where young citizens actively contribute to sustainable and inclusive development.
            </p>
          </div>

          {/* Quick Links Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-start md:items-end">
            <div className="space-y-3 w-full md:max-w-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-white block pb-2 border-b border-[#374C32]">
                Quick Links
              </span>
              <ul className="grid grid-cols-2 gap-2 text-xs">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#C2CDBE] hover:text-[#97BC62] transition-colors py-1 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-2 border-t border-[#374C32] text-[11px] text-[#5B6B55]">
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6B55]">
          <p>© 2026 NIRVANA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Non-Partisan Civic Organisation</span>
            <span>•</span>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
