import { useState } from 'react';
import {
  Users,
  FileText,
  Search,
  BookCheck,
  Globe2,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  ChevronRight,
  X,
  FileCheck,
} from 'lucide-react';
import { CORE_POLICIES } from '../data/nirvanaContent';
import { Policy } from '../types';

export default function PolicyFrameworkSection() {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const policyIcons = [
    Users,
    FileText,
    Search,
    BookCheck,
    Globe2,
    Leaf,
    HeartHandshake,
    ShieldCheck,
  ];

  const categories = ['All', 'Participation', 'Information', 'Research', 'Environment', 'Governance'];

  const filteredPolicies =
    filterCategory === 'All'
      ? CORE_POLICIES
      : CORE_POLICIES.filter((p) => p.category === filterCategory);

  return (
    <section id="policies" className="py-24 bg-white text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2D]" />
              <span>Institutional Governance</span>
            </div>

            <h2
              id="policies-main-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
            >
              NIRVANA’s Core Policies
            </h2>

            <p className="text-base text-[#5B6B55] leading-relaxed">
              Eight institutional pillars establishing standard operating guidelines for youth engagement, ethical community research, information transparency, and civic inclusion.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F6F7F3] p-1.5 rounded-sm border border-[#D6E3C5]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xs transition-colors ${
                  filterCategory === cat
                    ? 'bg-[#2C5F2D] text-white shadow-xs'
                    : 'text-[#5B6B55] hover:text-[#22301E] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPolicies.map((policy) => {
            const rawIndex = parseInt(policy.num, 10) - 1;
            const IconComp = policyIcons[rawIndex] || FileText;

            return (
              <div
                key={policy.num}
                id={`policy-card-${policy.num}`}
                onClick={() => setSelectedPolicy(policy)}
                className="group cursor-pointer bg-[#F6F7F3] hover:bg-white p-6 rounded-sm border border-[#D6E3C5] hover:border-[#2C5F2D] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D6E3C5]">
                    <span className="text-2xl font-black font-display text-[#2C5F2D] tracking-tighter group-hover:text-[#22301E] transition-colors">
                      {policy.num}
                    </span>
                    <div className="w-9 h-9 rounded-xs bg-white border border-[#D6E3C5] group-hover:bg-[#2C5F2D] group-hover:border-[#2C5F2D] flex items-center justify-center text-[#2C5F2D] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Policy Title */}
                  <h3 className="text-base font-bold text-[#22301E] font-display tracking-tight leading-snug group-hover:text-[#2C5F2D] transition-colors mb-2.5">
                    {policy.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#5B6B55] leading-relaxed line-clamp-3">
                    {policy.summary}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#D6E3C5]/80 flex items-center justify-between text-xs text-[#5B6B55]">
                  <span className="text-[11px] font-mono text-[#2C5F2D] font-semibold uppercase tracking-wider">
                    {policy.category}
                  </span>
                  <span className="font-semibold text-[#22301E] group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Scope <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Policy Detail Modal / Slide-out */}
        {selectedPolicy && (
          <div
            id="policy-detail-modal"
            className="fixed inset-0 z-50 bg-[#22301E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPolicy(null)}
          >
            <div
              className="bg-white rounded-sm border border-[#2C5F2D] shadow-2xl max-w-xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#D6E3C5] mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono font-bold text-[#2C5F2D] bg-[#E8F0DE] px-2 py-0.5 rounded-xs">
                    POLICY {selectedPolicy.num}
                  </span>
                  <span className="text-xs text-[#5B6B55] font-semibold uppercase tracking-wider">
                    {selectedPolicy.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="p-1.5 text-[#5B6B55] hover:text-[#22301E] rounded-xs hover:bg-[#F6F7F3] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-extrabold font-display text-[#22301E] tracking-tight mb-3">
                {selectedPolicy.title}
              </h3>

              <p className="text-sm text-[#5B6B55] leading-relaxed mb-6">
                {selectedPolicy.summary}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#D6E3C5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#22301E] block">
                  Key Institutional Provisions:
                </span>
                {selectedPolicy.keyProvisions.map((provision, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xs bg-[#F6F7F3] border border-[#D6E3C5]"
                  >
                    <FileCheck className="w-4 h-4 text-[#2C5F2D] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#22301E] leading-relaxed">
                      {provision}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#D6E3C5] flex items-center justify-between text-xs text-[#5B6B55]">
                <span>NIRVANA Policy Framework • Chennai, TN</span>
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="px-4 py-2 bg-[#2C5F2D] hover:bg-[#387639] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
