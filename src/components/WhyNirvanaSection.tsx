import {
  FileQuestion,
  Users2,
  Split,
  BookOpenText,
  AlertTriangle,
  ShieldAlert,
} from 'lucide-react';
import { WHY_NIRVANA_CHALLENGES } from '../data/nirvanaContent';

export default function WhyNirvanaSection() {
  const challengeIcons = [
    FileQuestion,
    Users2,
    Split,
    BookOpenText,
    AlertTriangle,
    ShieldAlert,
  ];

  return (
    <section id="why-nirvana" className="py-24 bg-[#22301E] text-white border-b border-[#374C32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#2C5F2D]/70 border border-[#97BC62]/40 text-[#E8F0DE] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#97BC62]" />
            <span>The Ground Realities</span>
          </div>

          <h2
            id="why-nirvana-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            Why NIRVANA?
          </h2>

          <p className="text-base sm:text-lg text-[#C2CDBE] leading-relaxed">
            Public governance functions at its best when citizens understand institutional systems, have direct channels to participate, and can escalate localized community issues with verified evidence. NIRVANA addresses six systemic challenges identified in the ground context of youth civic participation:
          </p>
        </div>

        {/* 6 Challenges Grid (01 to 06) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_NIRVANA_CHALLENGES.map((challenge, index) => {
            const IconComp = challengeIcons[index] || AlertTriangle;
            return (
              <div
                key={challenge.num}
                id={`why-challenge-card-${challenge.num}`}
                className="group relative bg-[#1C2819] hover:bg-[#2C5F2D]/35 p-7 rounded-sm border border-[#374C32] hover:border-[#97BC62] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#374C32]">
                    <span className="text-2xl font-black font-display text-[#97BC62] tracking-tighter group-hover:text-white transition-colors">
                      {challenge.num}
                    </span>
                    <div className="w-10 h-10 rounded-xs bg-[#22301E] border border-[#374C32] flex items-center justify-center text-[#97BC62] group-hover:text-white group-hover:border-[#97BC62] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Challenge Title */}
                  <h3 className="text-lg font-bold text-white font-display tracking-tight leading-snug group-hover:text-[#E8F0DE] transition-colors mb-3">
                    {challenge.title}
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-sm text-[#C2CDBE] leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#374C32] flex items-center justify-between text-xs text-[#5B6B55]">
                  <span className="font-mono text-[11px] uppercase tracking-wider">CHALLENGE {challenge.num}</span>
                  <span className="text-[#97BC62] font-medium group-hover:translate-x-1 transition-transform">
                    Addressed by NIRVANA →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Civic Response Footnote */}
        <div className="mt-14 p-6 rounded-sm bg-[#1C2819] border border-[#374C32] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#97BC62]">
              NIRVANA&apos;s Solution Mandate
            </span>
            <p className="text-sm font-medium text-[#E8F0DE]">
              Overcoming these structural bottlenecks through the RISE framework, the Youth Policy Forum, and localized civic connect camps.
            </p>
          </div>
          <a
            href="#rise-model"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 px-4 py-2.5 rounded-xs shrink-0 transition-colors"
          >
            <span>View The RISE Model</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
