import { useState } from 'react';
import {
  Users,
  Compass,
  FlaskConical,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { FLAGSHIP_PROGRAMMES } from '../data/nirvanaContent';

interface ProgrammesSectionProps {
  onOpenGetInvolved: () => void;
}

export default function ProgrammesSection({ onOpenGetInvolved }: ProgrammesSectionProps) {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const progIcons = [
    Users,
    Compass,
    FlaskConical,
    HeartHandshake,
  ];

  return (
    <section id="programmes" className="py-24 bg-[#F6F7F3] text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2D]" />
            <span>Civic Initiatives in Action</span>
          </div>

          <h2
            id="programmes-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
          >
            Flagship Programmes
          </h2>

          <p className="text-base sm:text-lg text-[#5B6B55] leading-relaxed">
            NIRVANA channels youth leadership through four structured, institutional programmes that combine deliberation, grassroots awareness, rigorous empirical research, and community action.
          </p>
        </div>

        {/* 4 Flagship Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FLAGSHIP_PROGRAMMES.map((prog, idx) => {
            const IconComp = progIcons[idx] || Users;
            const isHighlighted = activeTab === idx;

            return (
              <div
                key={prog.num}
                id={`programme-card-${prog.num}`}
                onMouseEnter={() => setActiveTab(idx)}
                onMouseLeave={() => setActiveTab(null)}
                className={`bg-white rounded-sm border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  isHighlighted
                    ? 'border-[#2C5F2D] shadow-lg ring-1 ring-[#2C5F2D]'
                    : 'border-[#D6E3C5] shadow-xs hover:border-[#97BC62]'
                }`}
              >
                <div className="p-8">
                  {/* Top Bar with Number & Category */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D6E3C5]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xs bg-[#2C5F2D] text-white flex items-center justify-center font-bold">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#2C5F2D] uppercase tracking-wider block">
                          PROGRAMME {prog.num}
                        </span>
                        <span className="text-xs text-[#5B6B55] font-medium">
                          {prog.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-3xl font-black font-display text-[#D6E3C5]">
                      {prog.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-extrabold text-[#22301E] font-display tracking-tight mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-[#5B6B55] leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Special Pipeline for Policy Lab (03) */}
                  {prog.pipeline && (
                    <div className="mb-6 p-4 rounded-xs bg-[#22301E] text-white border border-[#374C32]">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#97BC62] font-bold block mb-3">
                        RESEARCH PIPELINE ARCHITECTURE:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {prog.pipeline.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-xs bg-[#1C2819] border border-[#374C32] text-xs font-bold text-[#F6F7F3]">
                              {step}
                            </span>
                            {sIdx < prog.pipeline!.length - 1 && (
                              <span className="text-[#97BC62] text-xs font-bold">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Inclusions List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#22301E]">
                      Core Inclusions:
                    </span>
                    {prog.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-2.5 p-2 rounded-xs bg-[#F6F7F3] border border-[#D6E3C5]/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2C5F2D] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-[#22301E]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="px-8 py-4 bg-[#F6F7F3] border-t border-[#D6E3C5] flex items-center justify-between">
                  <span className="text-xs text-[#5B6B55] font-medium">
                    Chennai &amp; Tamil Nadu Cohorts
                  </span>
                  <button
                    onClick={onOpenGetInvolved}
                    className="text-xs font-bold uppercase tracking-wider text-[#2C5F2D] hover:text-[#22301E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Participate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Programme Engagement Strip */}
        <div className="p-8 rounded-sm bg-[#22301E] text-white border border-[#374C32] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#97BC62]">
              Youth Opportunities 2026
            </span>
            <h4 className="text-xl font-bold font-display text-white tracking-tight">
              Ready to take part in our upcoming policy forums or community action drives?
            </h4>
            <p className="text-xs text-[#C2CDBE]">
              Registrations are open for college students, young professionals, and community volunteers aged 18–25.
            </p>
          </div>
          <button
            onClick={onOpenGetInvolved}
            className="px-6 py-3 bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 text-white text-xs font-bold uppercase tracking-wider rounded-xs shrink-0 transition-colors shadow-md"
          >
            Join Youth Programmes
          </button>
        </div>

      </div>
    </section>
  );
}
