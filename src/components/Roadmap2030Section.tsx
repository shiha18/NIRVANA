import {
  Milestone,
  Compass,
  Building,
  GraduationCap,
  FileSpreadsheet,
  Users2,
  Languages,
  CheckCircle2,
} from 'lucide-react';
import { ROADMAP_2030_ITEMS } from '../data/nirvanaContent';

export default function Roadmap2030Section() {
  const milestoneIcons = [
    Compass,
    Building,
    GraduationCap,
    FileSpreadsheet,
    Users2,
    Languages,
  ];

  return (
    <section id="roadmap-2030" className="py-24 bg-[#22301E] text-white border-b border-[#374C32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#2C5F2D] border border-[#97BC62]/40 text-[#E8F0DE] text-xs font-bold uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5 text-[#97BC62]" />
            <span>Strategic Horizon</span>
          </div>

          <h2
            id="nirvana-2030-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            NIRVANA 2030
          </h2>

          <p className="text-base sm:text-lg text-[#C2CDBE] leading-relaxed">
            Our strategic institutional roadmap for systemic public policy impact, expanding youth-led civic participation, research infrastructure, and community governance across Tamil Nadu over the next decade.
          </p>
        </div>

        {/* Timeline / Roadmap Grid */}
        <div className="relative">
          {/* Subtle vertical spine for larger screens */}
          <div className="hidden lg:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-[#374C32]" />

          <div className="space-y-8 lg:space-y-12">
            {ROADMAP_2030_ITEMS.map((item, idx) => {
              const IconComp = milestoneIcons[idx] || Compass;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.index}
                  id={`roadmap-milestone-${item.index}`}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Centre Marker */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#22301E] border-2 border-[#97BC62] items-center justify-center text-xs font-mono font-bold text-white z-10">
                    {item.index}
                  </div>

                  {/* Empty side for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Content Side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-[#1C2819] hover:bg-[#2C5F2D]/40 p-6 sm:p-8 rounded-sm border border-[#374C32] hover:border-[#97BC62] transition-all duration-200 shadow-md">
                      
                      {/* Top Header of Item */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#374C32]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xs bg-[#22301E] border border-[#374C32] flex items-center justify-center text-[#97BC62]">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono font-bold text-[#97BC62] uppercase tracking-wider">
                            STRATEGIC GOAL {item.index}
                          </span>
                        </div>
                        <span className="text-xs text-[#5B6B55] font-mono">
                          HORIZON 2030
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xl font-bold font-display text-white tracking-tight leading-snug mb-2.5">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#C2CDBE] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-4 mt-4 border-t border-[#374C32] flex items-center gap-2 text-xs text-[#C2CDBE]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#97BC62]" />
                        <span>Tamil Nadu State-Wide Implementation</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Vision Footnote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase font-mono tracking-widest text-[#C2CDBE]">
            Long-term commitment to sustainable and inclusive civic development
          </p>
          <div className="mt-2 text-sm font-semibold text-white">
            Rooted in Chennai • Expanding Across Tamil Nadu
          </div>
        </div>

      </div>
    </section>
  );
}
