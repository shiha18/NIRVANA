import { CheckCircle2, Shield, Users, Eye, Target, Leaf, Award, MapPin, Calendar } from 'lucide-react';
import { CORE_VALUES, MISSION_POINTS, ORGANISATION_INFO, VISION_STATEMENT } from '../data/nirvanaContent';

export default function AboutSection() {
  const valueIcons: Record<string, typeof Shield> = {
    integrity: Shield,
    inclusion: Users,
    transparency: Eye,
    participation: Target,
    sustainability: Leaf,
    accountability: Award,
  };

  return (
    <section id="about" className="py-24 bg-[#F6F7F3] text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C5F2D]" />
            <span>Institutional Profile</span>
          </div>
          
          <h2
            id="about-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
          >
            About NIRVANA
          </h2>

          <p className="text-base sm:text-lg text-[#414E3C] leading-relaxed">
            <strong className="text-[#22301E] font-semibold">{ORGANISATION_INFO.fullName}</strong> is a dedicated youth and public-policy organisation established in{' '}
            <span className="font-semibold text-[#2C5F2D]">{ORGANISATION_INFO.establishedYear}</span> and headquartered in{' '}
            <span className="font-semibold text-[#22301E]">{ORGANISATION_INFO.headquarters}</span>. NIRVANA operates as an institutional bridge between energetic young citizens and public governance systems, fostering grassroots constitutional literacy, evidence-based policy research, and collaborative community action.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-[#5B6B55]">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xs border border-[#D6E3C5] shadow-2xs">
              <Calendar className="w-4 h-4 text-[#2C5F2D]" />
              <span>Established 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xs border border-[#D6E3C5] shadow-2xs">
              <MapPin className="w-4 h-4 text-[#97BC62]" />
              <span>Headquartered in Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Vision Card */}
          <div
            id="about-vision-card"
            className="lg:col-span-5 bg-[#22301E] text-white p-8 sm:p-10 rounded-sm shadow-md border border-[#374C32] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C5F2D]/30 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#374C32] pb-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#97BC62]">
                  Strategic Purpose
                </span>
                <span className="text-xs text-[#C2CDBE] font-mono">01 / VISION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                VISION
              </h3>

              <div className="relative pl-4 border-l-2 border-[#97BC62]">
                <blockquote className="text-lg sm:text-xl font-serif italic text-[#F6F7F3] leading-relaxed">
                  “{VISION_STATEMENT}”
                </blockquote>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#374C32] flex items-center justify-between text-xs text-[#C2CDBE]">
              <span>NIRVANA Foundation Charter</span>
              <span className="text-[#97BC62] font-semibold">2026 &amp; Beyond</span>
            </div>
          </div>

          {/* Mission Card */}
          <div
            id="about-mission-card"
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-[#D6E3C5] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#D6E3C5] pb-4 mb-6">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#2C5F2D]">
                  Operational Mandate
                </span>
                <span className="text-xs text-[#5B6B55] font-mono">02 / MISSION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#22301E] tracking-tight mb-6">
                MISSION
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MISSION_POINTS.map((point, index) => (
                  <div
                    key={index}
                    id={`mission-point-${index + 1}`}
                    className="flex items-start gap-3 p-3.5 rounded-xs bg-[#F6F7F3] border border-[#D6E3C5]/80 hover:border-[#2C5F2D] hover:bg-[#E8F0DE]/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2C5F2D] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#22301E] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D6E3C5] text-xs text-[#5B6B55]">
              Structured to connect youth energy directly with evidence-based public institutional action.
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div>
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#2C5F2D]">
              Guiding Principles
            </span>
            <h3
              id="about-values-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#22301E] font-display tracking-tight mt-1"
            >
              CORE VALUES
            </h3>
            <p className="text-sm text-[#5B6B55] mt-2">
              The foundational ethical standards that govern every program, research endeavor, and community partnership at NIRVANA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComponent = valueIcons[val.id] || Shield;
              return (
                <div
                  key={val.id}
                  id={`core-value-${val.id}`}
                  className="group bg-white p-6 sm:p-7 rounded-sm border border-[#D6E3C5] hover:border-[#2C5F2D] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xs bg-[#E8F0DE] group-hover:bg-[#2C5F2D] border border-[#D6E3C5] group-hover:border-[#2C5F2D] flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6 text-[#2C5F2D] group-hover:text-white transition-colors" />
                    </div>

                    <h4 className="text-xl font-bold font-display text-[#22301E] tracking-tight group-hover:text-[#2C5F2D] transition-colors">
                      {val.name}
                    </h4>

                    <p className="text-sm text-[#5B6B55] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F6F7F3] flex items-center justify-between text-[11px] font-mono font-medium text-[#5B6B55]">
                    <span>PRINCIPLE</span>
                    <span className="text-[#2C5F2D] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
