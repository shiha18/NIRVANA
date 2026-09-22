import { useState } from 'react';
import {
  Megaphone,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Flame,
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../data/nirvanaContent';

interface CampaignSectionProps {
  onOpenSubmitIssue: () => void;
  onOpenGetInvolved: () => void;
}

export default function CampaignSection({ onOpenSubmitIssue, onOpenGetInvolved }: CampaignSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="campaign" className="py-24 bg-[#22301E] text-white border-b border-[#374C32] relative overflow-hidden">
      {/* Decorative ambient illumination */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#97BC62]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2C5F2D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Campaign Banner */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#2C5F2D] border border-[#97BC62]/40 text-[#E8F0DE] text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-[#97BC62]" />
            <span>Civic Action Movement</span>
          </div>

          <h2
            id="campaign-main-heading"
            className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight"
          >
            {CAMPAIGN_INFO.heading}
          </h2>

          <div className="p-4 sm:p-5 rounded-xs bg-[#1C2819] border-l-4 border-[#97BC62] space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#97BC62] font-bold">
              CAMPAIGN OBJECTIVE:
            </span>
            <p
              id="campaign-objective-text"
              className="text-base sm:text-lg text-[#F6F7F3] font-medium leading-relaxed"
            >
              “{CAMPAIGN_INFO.objective}”
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="px-3.5 py-1.5 rounded-xs bg-[#1C2819] border border-[#374C32] text-[#C2CDBE]">
              <span className="text-[#C2CDBE] font-medium">Primary Demographic:</span>{' '}
              <strong className="text-white font-bold">{CAMPAIGN_INFO.target}</strong>
            </div>
            <div className="px-3.5 py-1.5 rounded-xs bg-[#1C2819] border border-[#374C32] text-[#C2CDBE]">
              <span className="text-[#C2CDBE] font-medium">Coverage:</span>{' '}
              <strong className="text-[#97BC62] font-bold">Chennai &amp; Tamil Nadu Neighborhoods</strong>
            </div>
          </div>
        </div>

        {/* Campaign Themes Chips */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C2CDBE] block mb-3">
            Core Campaign Themes:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {CAMPAIGN_INFO.themes.map((theme, tIdx) => (
              <div
                key={tIdx}
                id={`campaign-theme-${tIdx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#1C2819] hover:bg-[#2C5F2D]/50 border border-[#374C32] text-xs font-semibold text-[#E8F0DE] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#97BC62]" />
                <span>{theme}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 5-Step Process Pipeline */}
        <div className="bg-[#1C2819] border border-[#374C32] rounded-sm p-8 sm:p-12 mb-14 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#374C32]">
            <div>
              <span className="text-xs font-mono text-[#97BC62] uppercase tracking-widest font-bold">
                CIVIC PARTICIPATION PIPELINE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                How The Movement Operates
              </h3>
            </div>
            <div className="text-xs text-[#C2CDBE]">
              Step 0{activeStepIndex + 1} of 05 • Click any step to inspect
            </div>
          </div>

          {/* 5 Step Journey Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {CAMPAIGN_INFO.steps.map((step, idx) => {
              const isCurrent = activeStepIndex === idx;

              return (
                <button
                  key={step.num}
                  id={`campaign-step-btn-${step.num}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xs border text-left transition-all duration-150 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#2C5F2D] border-[#97BC62] ring-1 ring-[#97BC62]'
                      : 'bg-[#22301E] border-[#374C32] hover:border-[#97BC62]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isCurrent ? 'text-[#97BC62]' : 'text-[#5B6B55]'
                      }`}
                    >
                      STEP {step.num}
                    </span>
                    {isCurrent && <span className="w-2 h-2 rounded-full bg-[#97BC62]" />}
                  </div>

                  <span className="text-xs font-extrabold text-white uppercase tracking-tight">
                    {step.title}
                  </span>

                  <span className="text-[10px] text-[#C2CDBE] mt-2 font-mono">
                    {idx < 4 ? 'Next: Step 0' + (idx + 2) : 'Final Action'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Spotlight */}
          <div className="p-6 rounded-xs bg-[#22301E] border border-[#374C32] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#97BC62] uppercase tracking-wider">
                  ACTION DIRECTIVE:
                </span>
                <span className="text-sm font-bold text-white uppercase">
                  {CAMPAIGN_INFO.steps[activeStepIndex].title}
                </span>
              </div>
              <p className="text-sm text-[#C2CDBE] leading-relaxed max-w-2xl">
                {CAMPAIGN_INFO.steps[activeStepIndex].desc}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setActiveStepIndex((activeStepIndex + 1) % 5)}
                className="px-4 py-2.5 bg-[#1C2819] hover:bg-[#2C5F2D] border border-[#374C32] text-xs font-semibold text-white rounded-xs transition-colors"
              >
                Next Step →
              </button>
            </div>
          </div>

        </div>

        {/* Movement CTA Banner */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#1C2819] border border-[#374C32] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#97BC62] uppercase tracking-wider">
              <Megaphone className="w-4 h-4 text-[#97BC62]" />
              <span>Youth Leadership Action</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Join the Movement
            </h3>
            <p className="text-sm text-[#C2CDBE] max-w-xl">
              Be a catalyst in Chennai and across Tamil Nadu. Identify local challenges responsibly, participate in structured discussions, and bridge your voice to civic institutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              id="campaign-submit-issue-btn"
              onClick={onOpenSubmitIssue}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-md"
            >
              <span>Submit a Local Issue</span>
              <Sparkles className="w-3.5 h-3.5 text-[#97BC62]" />
            </button>

            <button
              id="campaign-join-movement-btn"
              onClick={onOpenGetInvolved}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#97BC62] hover:bg-[#85A952] text-[#22301E] text-xs font-extrabold uppercase tracking-wider rounded-xs transition-colors shadow-md"
            >
              <span>Join the Movement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
