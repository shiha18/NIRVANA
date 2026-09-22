import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { ORGANISATION_INFO } from '../data/nirvanaContent';

interface HeroProps {
  onOpenGetInvolved: () => void;
}

export default function Hero({ onOpenGetInvolved }: HeroProps) {
  const riseSteps = [
    { letter: 'R', title: 'REACH', desc: 'Understand the Community' },
    { letter: 'I', title: 'INFORM', desc: 'Create Awareness' },
    { letter: 'S', title: 'SUPPORT', desc: 'Connect & Facilitate' },
    { letter: 'E', title: 'EMPOWER', desc: 'Enable Participation' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-20 bg-[#22301E] text-white flex flex-col justify-center overflow-hidden border-b border-[#374C32]"
    >
      {/* Editorial background geometric grid & subtle radial illumination */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="civic-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#97BC62" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#civic-grid)" />
        </svg>
      </div>

      {/* Subtle institutional focal glow */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#2C5F2D]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#97BC62]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Institutional Brand & Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#2C5F2D]/60 border border-[#97BC62]/40 text-[#E8F0DE] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#97BC62] animate-pulse" />
              <span>Public Policy Organisation • Chennai, Tamil Nadu • Est. 2026</span>
            </div>

            {/* Main Organization Title & Subtitle */}
            <div className="space-y-2">
              <h1
                id="hero-organisation-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]"
              >
                {ORGANISATION_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl text-[#C2CDBE] font-medium tracking-tight">
                Centre for Youth &amp; Public Policy
              </p>
            </div>

            {/* Brand Tagline in Editorial Serif */}
            <div className="relative pl-5 border-l-2 border-[#97BC62] py-1">
              <p
                id="hero-tagline"
                className="text-2xl sm:text-3xl lg:text-4xl text-[#F6F7F3] font-serif font-semibold italic tracking-tight"
              >
                “{ORGANISATION_INFO.tagline}”
              </p>
            </div>

            {/* Short Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-[#E8F0DE]/90 leading-relaxed max-w-2xl font-normal"
            >
              “{ORGANISATION_INFO.heroSubtext}”
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-explore-work-btn"
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 rounded-sm transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#97BC62]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#97BC62]" />
              </a>

              <button
                id="hero-get-involved-btn"
                onClick={onOpenGetInvolved}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#1C2819] hover:bg-[#2A3B25] border border-[#374C32] rounded-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#97BC62]"
              >
                <span>Get Involved</span>
                <Sparkles className="w-4 h-4 text-[#97BC62]" />
              </button>
            </div>

          </div>

          {/* Right Column: Editorial Civic Geometry Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-sm bg-[#1C2819]/90 border border-[#374C32] shadow-2xl backdrop-blur-sm">
              
              {/* Header Label inside Card */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#374C32]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#97BC62]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C2CDBE]">
                    Civic Action Paradigm
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#97BC62] font-semibold bg-[#97BC62]/10 px-2 py-0.5 rounded-xs border border-[#97BC62]/30">
                  TAMIL NADU 2026
                </span>
              </div>

              {/* Geometric SVG Civic Structure */}
              <div className="relative py-4 flex items-center justify-center">
                <svg
                  className="w-full h-48 sm:h-56"
                  viewBox="0 0 320 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Institutional Orbits */}
                  <circle cx="160" cy="110" r="95" stroke="#374C32" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="160" cy="110" r="68" stroke="#5B6B55" strokeWidth="1.2" strokeOpacity="0.4" />
                  <circle cx="160" cy="110" r="40" stroke="#97BC62" strokeWidth="1" strokeOpacity="0.6" />

                  {/* Radiating policy axes */}
                  <line x1="160" y1="15" x2="160" y2="205" stroke="#374C32" strokeWidth="1" />
                  <line x1="65" y1="110" x2="255" y2="110" stroke="#374C32" strokeWidth="1" />

                  {/* Corner nodes */}
                  <circle cx="160" cy="15" r="4" fill="#97BC62" />
                  <circle cx="255" cy="110" r="4" fill="#2C5F2D" />
                  <circle cx="160" cy="205" r="4" fill="#97BC62" />
                  <circle cx="65" cy="110" r="4" fill="#5B6B55" />

                  {/* Central NIRVANA Core */}
                  <rect
                    x="115"
                    y="82"
                    width="90"
                    height="56"
                    rx="4"
                    fill="#22301E"
                    stroke="#2C5F2D"
                    strokeWidth="1.5"
                  />
                  <text
                    x="160"
                    y="107"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Outfit, sans-serif"
                    fontSize="13"
                    fontWeight="800"
                    letterSpacing="1.5"
                  >
                    NIRVANA
                  </text>
                  <text
                    x="160"
                    y="124"
                    textAnchor="middle"
                    fill="#C2CDBE"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontSize="8"
                    fontWeight="600"
                    letterSpacing="0.8"
                  >
                    POLICY HUB
                  </text>

                  {/* Dynamic connecting pulses */}
                  <path
                    d="M 160 82 L 160 40"
                    stroke="#97BC62"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 205 110 L 235 110"
                    stroke="#2C5F2D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 160 138 L 160 180"
                    stroke="#97BC62"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 115 110 L 85 110"
                    stroke="#5B6B55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Civic Focus Pillars Footnote */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#374C32] text-center">
                <div className="p-2 rounded-xs bg-[#22301E] border border-[#374C32]">
                  <div className="text-[10px] uppercase font-bold text-[#C2CDBE] tracking-wider">Demography</div>
                  <div className="text-xs font-semibold text-white">Youth 18–25</div>
                </div>
                <div className="p-2 rounded-xs bg-[#22301E] border border-[#374C32]">
                  <div className="text-[10px] uppercase font-bold text-[#C2CDBE] tracking-wider">Method</div>
                  <div className="text-xs font-semibold text-[#97BC62]">Evidence-Led</div>
                </div>
                <div className="p-2 rounded-xs bg-[#22301E] border border-[#374C32]">
                  <div className="text-[10px] uppercase font-bold text-[#C2CDBE] tracking-wider">HQ</div>
                  <div className="text-xs font-semibold text-[#E8F0DE]">Chennai, TN</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Visual representation of NIRVANA RISE Concept */}
        <div id="hero-rise-concept-strip" className="mt-16 sm:mt-20 pt-8 border-t border-[#374C32]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#97BC62] uppercase tracking-wider font-semibold">
                  Core Framework
                </span>
                <span className="text-[#5B6B55]">•</span>
                <span className="text-xs text-[#C2CDBE] font-medium">The NIRVANA RISE Model</span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-display">
                REACH → INFORM → SUPPORT → EMPOWER
              </h2>
            </div>
            <a
              href="#rise-model"
              className="text-xs font-semibold text-[#97BC62] hover:text-white inline-flex items-center gap-1 group transition-colors"
            >
              <span>Explore Interactive Model</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {riseSteps.map((step, idx) => (
              <div
                key={step.letter}
                id={`hero-rise-badge-${step.letter.toLowerCase()}`}
                className="group relative p-4 rounded-sm bg-[#1C2819]/80 hover:bg-[#2C5F2D]/40 border border-[#374C32] hover:border-[#97BC62] transition-all duration-200"
              >
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-2xl font-black text-[#97BC62] font-display group-hover:text-white transition-colors">
                    {step.letter}
                  </span>
                  <span className="text-xs font-extrabold tracking-widest text-white uppercase">
                    {step.title}
                  </span>
                </div>
                <p className="text-xs text-[#C2CDBE] group-hover:text-white transition-colors">
                  {step.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#374C32]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Down arrow anchor */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#5B6B55] hover:text-[#97BC62] transition-colors">
        <a href="#about" aria-label="Scroll down to About section">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
