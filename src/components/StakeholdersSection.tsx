import { useState } from 'react';
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Radio,
  Users,
  CheckCircle2,
  Network,
} from 'lucide-react';
import { STAKEHOLDER_GROUPS } from '../data/nirvanaContent';

export default function StakeholdersSection() {
  const [selectedStakeholderId, setSelectedStakeholderId] = useState<string>('government');

  const stakeholderIcons: Record<string, typeof Building2> = {
    government: Building2,
    education: GraduationCap,
    'civil-society': HeartHandshake,
    media: Radio,
    citizens: Users,
  };

  const currentStakeholder =
    STAKEHOLDER_GROUPS.find((s) => s.id === selectedStakeholderId) || STAKEHOLDER_GROUPS[0];

  return (
    <section id="stakeholders" className="py-24 bg-[#F6F7F3] text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5 text-[#2C5F2D]" />
            <span>Collaborative Ecosystem</span>
          </div>

          <h2
            id="stakeholders-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
          >
            NIRVANA’s Stakeholders
          </h2>

          <p className="text-base sm:text-lg text-[#5B6B55] leading-relaxed">
            Public policy impact requires multi-sectoral institutional coordination. NIRVANA serves as a collaborative civic node connecting five vital stakeholder pillars across Tamil Nadu:
          </p>
        </div>

        {/* Central Node & Surrounding Orbit Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Orbital SVG & Node Map (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#22301E] p-6 sm:p-10 rounded-sm border border-[#374C32] shadow-xl relative overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#97BC62] font-bold">
                INTERACTIVE ECOSYSTEM MAP
              </span>
              <p className="text-xs text-[#C2CDBE] mt-0.5">
                Click any surrounding stakeholder node to inspect collaborative scope
              </p>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                {/* Orbit guidelines */}
                <circle cx="200" cy="200" r="140" stroke="#374C32" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="95" stroke="#2C5F2D" strokeWidth="1" />

                {/* Connection lines from center (200, 200) to each 5 nodes at radius ~140 */}
                {[
                  { id: 'government', x: 200, y: 60 },
                  { id: 'education', x: 333, y: 156 },
                  { id: 'civil-society', x: 282, y: 313 },
                  { id: 'media', x: 118, y: 313 },
                  { id: 'citizens', x: 67, y: 156 },
                ].map((node) => {
                  const isSelected = selectedStakeholderId === node.id;
                  return (
                    <g key={node.id}>
                      <line
                        x1="200"
                        y1="200"
                        x2={node.x}
                        y2={node.y}
                        stroke={isSelected ? '#97BC62' : '#5B6B55'}
                        strokeWidth={isSelected ? '2.5' : '1'}
                        strokeOpacity={isSelected ? '1' : '0.5'}
                      />
                      {/* Pulse circle on selected line */}
                      {isSelected && (
                        <circle
                          cx={(200 + node.x) / 2}
                          cy={(200 + node.y) / 2}
                          r="3"
                          fill="#97BC62"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Central NIRVANA Core Node */}
                <circle cx="200" cy="200" r="48" fill="#2C5F2D" stroke="#97BC62" strokeWidth="2.5" />
                <circle cx="200" cy="200" r="40" fill="#22301E" />
                <text
                  x="200"
                  y="196"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="Outfit, sans-serif"
                  fontSize="13"
                  fontWeight="800"
                  letterSpacing="1"
                >
                  NIRVANA
                </text>
                <text
                  x="200"
                  y="212"
                  textAnchor="middle"
                  fill="#97BC62"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="8"
                  fontWeight="700"
                  letterSpacing="0.8"
                >
                  CENTRAL NODE
                </text>
              </svg>

              {/* HTML Absolute Node Overlays for Accessibility & Click */}
              {[
                { id: 'government', label: 'Government', top: '7%', left: '50%', transform: 'translate(-50%, -50%)' },
                { id: 'education', label: 'Educational', top: '39%', left: '83%', transform: 'translate(-50%, -50%)' },
                { id: 'civil-society', label: 'Civil Society', top: '78%', left: '70%', transform: 'translate(-50%, -50%)' },
                { id: 'media', label: 'Media', top: '78%', left: '30%', transform: 'translate(-50%, -50%)' },
                { id: 'citizens', label: 'Citizens', top: '39%', left: '17%', transform: 'translate(-50%, -50%)' },
              ].map((item) => {
                const isSelected = selectedStakeholderId === item.id;
                const IconComp = stakeholderIcons[item.id] || Building2;

                return (
                  <button
                    key={item.id}
                    id={`stakeholder-node-btn-${item.id}`}
                    onClick={() => setSelectedStakeholderId(item.id)}
                    style={{
                      position: 'absolute',
                      top: item.top,
                      left: item.left,
                      transform: item.transform,
                    }}
                    className={`group flex flex-col items-center p-2.5 rounded-sm transition-all duration-150 z-10 ${
                      isSelected
                        ? 'bg-[#2C5F2D] border-2 border-[#97BC62] scale-105 shadow-xl'
                        : 'bg-[#1C2819] border border-[#374C32] hover:border-[#97BC62]'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xs flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#97BC62] text-[#22301E]' : 'bg-[#22301E] text-[#97BC62]'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider mt-1 whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-2 border-t border-[#374C32] text-center text-xs text-[#C2CDBE]">
              Five institutional anchors bridging young citizens with public administration
            </div>
          </div>

          {/* Right Column: Selected Stakeholder Detail Card (Right 5 Cols) */}
          <div
            id="stakeholder-detail-card"
            className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-sm border border-[#D6E3C5] shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#D6E3C5]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2C5F2D]" />
                  <span className="text-xs font-mono font-bold text-[#2C5F2D] uppercase tracking-wider">
                    STAKEHOLDER PROFILE
                  </span>
                </div>
                <span className="text-xs text-[#5B6B55] font-mono">
                  ACTIVE PILLAR
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xs bg-[#2C5F2D] text-white flex items-center justify-center">
                  {(() => {
                    const CurrentIcon = stakeholderIcons[currentStakeholder.id] || Building2;
                    return <CurrentIcon className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold font-display text-[#22301E] tracking-tight">
                    {currentStakeholder.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#2C5F2D]">
                    NIRVANA Strategic Partner
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#22301E]">
                  Role in the Ecosystem:
                </span>
                <p className="text-sm text-[#22301E] font-medium leading-relaxed bg-[#F6F7F3] p-3.5 rounded-xs border border-[#D6E3C5]">
                  {currentStakeholder.role}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#22301E]">
                  Engagement Methodology:
                </span>
                <p className="text-sm text-[#5B6B55] leading-relaxed">
                  {currentStakeholder.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-[#D6E3C5] flex items-center justify-between text-xs text-[#5B6B55]">
              <span>Coordinated from Chennai HQ</span>
              <a
                href="#contact"
                className="text-[#2C5F2D] hover:text-[#22301E] font-bold uppercase tracking-wider transition-colors"
              >
                Partner With Us →
              </a>
            </div>
          </div>

        </div>

        {/* 5 Stakeholder Quick Summary Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {STAKEHOLDER_GROUPS.map((s) => {
            const isSelected = selectedStakeholderId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedStakeholderId(s.id)}
                className={`p-3.5 rounded-xs text-left border transition-all text-xs ${
                  isSelected
                    ? 'bg-[#2C5F2D] text-white border-[#2C5F2D]'
                    : 'bg-white text-[#22301E] border-[#D6E3C5] hover:border-[#2C5F2D]'
                }`}
              >
                <div className="font-bold">{s.name}</div>
                <div className={`text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-[#E8F0DE]' : 'text-[#5B6B55]'}`}>
                  {s.role}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
