import { useState } from 'react';
import {
  Compass,
  Megaphone,
  TreePine,
  Search,
  Building2,
  ArrowRight,
  Check,
} from 'lucide-react';
import { APPROACH_IDEAS, APPROACH_STATEMENT } from '../data/nirvanaContent';

export default function ApproachSection() {
  const [activeIdeaIndex, setActiveIdeaIndex] = useState(0);

  const ideaIcons = [
    Compass,
    Megaphone,
    TreePine,
    Search,
    Building2,
  ];

  const currentIdea = APPROACH_IDEAS[activeIdeaIndex];
  const CurrentIcon = ideaIcons[activeIdeaIndex] || Compass;

  return (
    <section id="approach" className="py-24 bg-[#F6F7F3] text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2D]" />
            <span>Methodology</span>
          </div>

          <h2
            id="approach-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
          >
            Our Approach
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-[#2C5F2D] font-display tracking-tight">
            NIRVANA’s Core Ideas
          </p>

          <p className="text-base text-[#5B6B55] leading-relaxed pt-1">
            NIRVANA structures public-policy engagement through five interconnected civic ideas, transforming passive awareness into sustainable, youth-led community transformation.
          </p>
        </div>

        {/* Five Interactive Cards Grid & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: 5 Selectable Cards */}
          <div className="lg:col-span-6 space-y-3">
            {APPROACH_IDEAS.map((idea, index) => {
              const IconComp = ideaIcons[index] || Compass;
              const isSelected = activeIdeaIndex === index;

              return (
                <button
                  key={idea.num}
                  id={`approach-card-${idea.num}`}
                  onClick={() => setActiveIdeaIndex(index)}
                  className={`w-full text-left p-5 sm:p-6 rounded-sm border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#2C5F2D] shadow-md ring-1 ring-[#2C5F2D]'
                      : 'bg-white/90 hover:bg-white border-[#D6E3C5] hover:border-[#97BC62] shadow-2xs'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xs flex items-center justify-center shrink-0 font-bold transition-colors ${
                      isSelected
                        ? 'bg-[#2C5F2D] text-white'
                        : 'bg-[#E8F0DE] text-[#2C5F2D]'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#2C5F2D] uppercase tracking-wider">
                        IDEA {idea.num}
                      </span>
                      {isSelected && (
                        <span className="text-[11px] font-semibold text-[#2C5F2D] uppercase tracking-wider bg-[#E8F0DE] px-2 py-0.5 rounded-xs">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#22301E] font-display tracking-tight mt-0.5">
                      {idea.title}
                    </h3>
                    <p className="text-sm text-[#5B6B55] mt-1 line-clamp-2">
                      {idea.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive on Current Selected Approach Card */}
          <div
            id="approach-deep-dive-panel"
            className="lg:col-span-6 bg-[#22301E] text-white p-8 sm:p-10 rounded-sm border border-[#374C32] shadow-lg sticky top-28"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#374C32]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xs bg-[#1C2819] border border-[#374C32] flex items-center justify-center text-[#97BC62]">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#97BC62] uppercase tracking-widest font-bold">
                    CORE IDEA {currentIdea.num}
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-white tracking-tight">
                    {currentIdea.title}
                  </h3>
                </div>
              </div>
              <span className="text-3xl font-black font-display text-[#374C32]">
                {currentIdea.num}
              </span>
            </div>

            <p className="text-base sm:text-lg text-[#F6F7F3] font-medium leading-relaxed mb-6">
              {currentIdea.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#374C32]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C2CDBE]">
                Operational Pillars &amp; Action Channels:
              </span>
              <div className="space-y-2.5">
                {currentIdea.keyAspects.map((aspect, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xs bg-[#1C2819] border border-[#374C32]">
                    <Check className="w-4 h-4 text-[#97BC62] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#E8F0DE]">
                      {aspect}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#374C32] flex items-center justify-between text-xs text-[#C2CDBE]">
              <span>Translating ideas into institutional outcomes</span>
              <a
                href="#programmes"
                className="text-white hover:text-[#97BC62] inline-flex items-center gap-1 font-semibold transition-colors"
              >
                <span>See Programs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#97BC62]" />
              </a>
            </div>
          </div>

        </div>

        {/* Central Core Statement Callout Banner */}
        <div
          id="approach-core-statement"
          className="relative overflow-hidden bg-white border-2 border-[#2C5F2D] p-8 sm:p-12 rounded-sm shadow-sm text-center"
        >
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2C5F2D]">
              NIRVANA THESIS OF CHANGE
            </span>
            <blockquote
              id="approach-statement-quote"
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold italic text-[#22301E] tracking-tight leading-snug"
            >
              “{APPROACH_STATEMENT}”
            </blockquote>
            <p className="text-xs sm:text-sm text-[#5B6B55] max-w-xl mx-auto">
              Connecting constitutional knowledge with active ground-level engagement to deliver tangible public progress.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
