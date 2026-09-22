import {
  Heart,
  GraduationCap,
  Building2,
  AlertCircle,
  Users2,
  ArrowRight,
} from 'lucide-react';
import { GET_INVOLVED_OPTIONS } from '../data/nirvanaContent';

interface GetInvolvedSectionProps {
  onSelectOption: (optionId: string) => void;
}

export default function GetInvolvedSection({ onSelectOption }: GetInvolvedSectionProps) {
  const ctaIcons: Record<string, typeof Heart> = {
    volunteer: Heart,
    'youth-programmes': GraduationCap,
    partner: Building2,
    'community-issue': AlertCircle,
    collaborate: Users2,
  };

  return (
    <section id="get-involved" className="py-24 bg-[#F6F7F3] text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2D]" />
            <span>Participate &amp; Connect</span>
          </div>

          <h2
            id="get-involved-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
          >
            Get Involved
          </h2>

          <p className="text-base sm:text-lg text-[#5B6B55] leading-relaxed">
            Whether you are a student, young community leader, educational institution, or civic body, NIRVANA provides structured pathways to engage in public policy and community action.
          </p>
        </div>

        {/* 5 Strong CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GET_INVOLVED_OPTIONS.map((item) => {
            const IconComp = ctaIcons[item.id] || Heart;

            return (
              <div
                key={item.id}
                id={`get-involved-card-${item.id}`}
                className="bg-white p-7 sm:p-8 rounded-sm border border-[#D6E3C5] hover:border-[#2C5F2D] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D6E3C5]">
                    <div className="w-10 h-10 rounded-xs bg-[#2C5F2D] text-white flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#97BC62]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#2C5F2D] uppercase tracking-wider bg-[#E8F0DE] border border-[#97BC62]/40 px-2 py-0.5 rounded-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-[#22301E] tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5B6B55] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F6F7F3]">
                  <button
                    id={`cta-btn-${item.id}`}
                    onClick={() => onSelectOption(item.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 rounded-xs transition-colors shadow-xs"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Civic Commitment Note */}
        <div className="p-6 rounded-sm bg-white border border-[#D6E3C5] text-center text-xs text-[#5B6B55]">
          NIRVANA follows transparent and non-partisan engagement protocols across all student cohorts, volunteer drives, and institutional research partnerships.
        </div>

      </div>
    </section>
  );
}
