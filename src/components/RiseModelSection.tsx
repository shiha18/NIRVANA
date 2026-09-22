import { useState } from 'react';
import {
  Compass,
  BookOpen,
  Handshake,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { RISE_STAGES } from '../data/nirvanaContent';

export default function RiseModelSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stageIcons = [
    Compass,
    BookOpen,
    Handshake,
    Award,
  ];

  const currentStage = RISE_STAGES[activeStageIndex];
  const CurrentIcon = stageIcons[activeStageIndex] || Compass;

  return (
    <section id="rise-model" className="py-24 bg-[#22301E] text-white border-b border-[#374C32] relative overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2C5F2D]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#97BC62]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#2C5F2D] border border-[#97BC62]/40 text-[#E8F0DE] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#97BC62]" />
            <span>Foundational Civic Paradigm</span>
          </div>

          <h2
            id="rise-model-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            The NIRVANA RISE Model
          </h2>

          <p className="text-base sm:text-lg text-[#C2CDBE] leading-relaxed">
            A structured four-stage civic engagement framework designed to bridge the gap between youth energy and public governance, turning civic awareness into measurable community outcomes.
          </p>
        </div>

        {/* Four Stages Navigation Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {RISE_STAGES.map((stage, idx) => {
            const IconComp = stageIcons[idx] || Compass;
            const isActive = activeStageIndex === idx;

            return (
              <button
                key={stage.letter}
                id={`rise-stage-btn-${stage.letter.toLowerCase()}`}
                onClick={() => setActiveStageIndex(idx)}
                onMouseEnter={() => setActiveStageIndex(idx)}
                className={`relative p-6 rounded-sm text-left transition-all duration-200 border flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#2C5F2D] border-[#97BC62] shadow-xl ring-1 ring-[#97BC62]/50'
                    : 'bg-[#1C2819] border-[#374C32] hover:border-[#97BC62]/60 hover:bg-[#253620]'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#374C32]">
                    <span
                      className={`text-4xl font-black font-display tracking-tight transition-colors ${
                        isActive ? 'text-[#97BC62]' : 'text-[#5B6B55] group-hover:text-white'
                      }`}
                    >
                      {stage.letter}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xs flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#97BC62] text-[#22301E]'
                          : 'bg-[#22301E] text-[#C2CDBE] group-hover:text-white'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stage Title & Subhead */}
                  <h3 className="text-xl font-extrabold font-display text-white tracking-tight">
                    {stage.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#97BC62] uppercase tracking-wider mt-1">
                    {stage.subhead}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#374C32] flex items-center justify-between text-[11px] font-mono text-[#C2CDBE]">
                  <span>STAGE 0{idx + 1}</span>
                  <span
                    className={`font-bold transition-transform ${
                      isActive ? 'text-[#97BC62] translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  >
                    View Details →
                  </span>
                </div>

                {/* Progress underline bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#97BC62] rounded-b-sm" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div
          id="rise-stage-deep-dive"
          className="bg-[#1C2819] border border-[#374C32] rounded-sm p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Summary & Strategic Intent */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xs bg-[#22301E] border border-[#374C32] flex items-center justify-center text-[#97BC62]">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#97BC62] uppercase tracking-widest">
                      PHASE 0{activeStageIndex + 1} OF 04
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                    {currentStage.letter} — {currentStage.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#97BC62] uppercase tracking-wider mt-0.5">
                    {currentStage.subhead}
                  </p>
                </div>
              </div>

              <p className="text-base text-[#C2CDBE] leading-relaxed">
                {currentStage.description}
              </p>

              {/* Expected Strategic Outcome */}
              <div className="p-4 rounded-xs bg-[#22301E] border border-[#374C32]">
                <span className="text-[11px] font-mono uppercase font-bold text-[#97BC62] tracking-wider block mb-1">
                  Expected Impact &amp; Outcome
                </span>
                <p className="text-sm font-medium text-white">
                  {currentStage.outcome}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#5B6B55]">
                <span>Click any stage above to inspect activities</span>
              </div>
            </div>

            {/* Right: Concrete Activities in this Stage */}
            <div className="lg:col-span-7 bg-[#22301E] p-6 sm:p-8 rounded-sm border border-[#374C32] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#374C32]">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Operational Activities &amp; Methodologies:
                </span>
                <span className="text-xs font-mono text-[#97BC62]">
                  {currentStage.activities.length} Core Actions
                </span>
              </div>

              <div className="space-y-3">
                {currentStage.activities.map((activity, aIdx) => (
                  <div
                    key={aIdx}
                    id={`rise-activity-${currentStage.letter.toLowerCase()}-${aIdx}`}
                    className="flex items-start gap-3.5 p-3.5 rounded-xs bg-[#1C2819] border border-[#374C32] hover:border-[#97BC62] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#97BC62] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#F6F7F3] font-medium leading-relaxed">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#374C32] flex items-center justify-between text-xs text-[#C2CDBE]">
                <span>Next Stage: {RISE_STAGES[(activeStageIndex + 1) % 4].name}</span>
                <button
                  onClick={() => setActiveStageIndex((activeStageIndex + 1) % 4)}
                  className="text-[#97BC62] hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Advance Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Section Closing Banner Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#1C2819] border border-[#374C32] shadow-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-[#97BC62] font-bold">
              RISE PHILOSOPHY
            </span>
            <span className="hidden sm:inline text-[#5B6B55]">•</span>
            <p
              id="rise-closing-statement"
              className="text-xl sm:text-2xl font-serif italic text-white font-semibold tracking-tight"
            >
              “From awareness to action.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
