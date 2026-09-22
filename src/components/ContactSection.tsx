import { useState, FormEvent } from 'react';
import {
  MapPin,
  Mail,
  Send,
  Building,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { ORGANISATION_INFO } from '../data/nirvanaContent';

export default function ContactSection() {
  const [formType, setFormType] = useState<'general' | 'partner'>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const handlePartnerClick = () => {
    setFormType('partner');
    if (!formData.message) {
      setFormData((prev) => ({
        ...prev,
        message: 'We are interested in exploring institutional partnership or collaboration with NIRVANA.',
      }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-[#22301E] border-b border-[#D6E3C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E8F0DE] border border-[#97BC62]/40 text-[#2C5F2D] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#2C5F2D]" />
            <span>Communication &amp; Dialogue</span>
          </div>

          <h2
            id="contact-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22301E] font-display tracking-tight"
          >
            Connect With NIRVANA
          </h2>

          <p className="text-base sm:text-lg text-[#5B6B55] leading-relaxed">
            Reach out to our secretariat for general inquiries, youth forum participations, policy research consultancies, or community partnerships in Chennai and across Tamil Nadu.
          </p>
        </div>

        {/* Form and Institutional Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Institutional Location & Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#22301E] text-white p-8 sm:p-10 rounded-sm border border-[#374C32] shadow-lg space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#97BC62]">
                ORGANISATIONAL HEADQUARTERS
              </span>
              <h3 className="text-2xl font-extrabold font-display text-white tracking-tight">
                {ORGANISATION_INFO.fullName}
              </h3>
              <p className="text-sm text-[#C2CDBE] font-serif italic">
                “{ORGANISATION_INFO.tagline}”
              </p>
            </div>

            {/* Official Location */}
            <div className="space-y-4 pt-4 border-t border-[#374C32]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xs bg-[#1C2819] border border-[#374C32] flex items-center justify-center text-[#97BC62] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C2CDBE] block">
                    Location
                  </span>
                  <span className="text-base font-semibold text-white">
                    {ORGANISATION_INFO.headquarters}
                  </span>
                  <p className="text-xs text-[#C2CDBE] mt-0.5">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xs bg-[#1C2819] border border-[#374C32] flex items-center justify-center text-[#97BC62] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C2CDBE] block">
                    Established
                  </span>
                  <span className="text-base font-semibold text-white">
                    Year {ORGANISATION_INFO.establishedYear}
                  </span>
                  <p className="text-xs text-[#C2CDBE] mt-0.5">
                    Civic &amp; Public Policy Mandate
                  </p>
                </div>
              </div>
            </div>

            {/* Institutional Framework Statement */}
            <div className="p-4 rounded-xs bg-[#1C2819] border border-[#374C32] text-xs text-[#C2CDBE] space-y-1">
              <span className="font-bold text-[#97BC62] block uppercase tracking-wider">
                NIRVANA Civic Promise:
              </span>
              <p className="leading-relaxed">
                Reach • Inform • Support • Empower (RISE). Connecting youth ideas with democratic institutions for public good.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F6F7F3] p-8 sm:p-10 rounded-sm border border-[#D6E3C5] shadow-xs">
            {isSubmitted ? (
              <div
                id="contact-form-success"
                className="py-12 text-center space-y-4 animate-in fade-in"
              >
                <div className="w-14 h-14 bg-[#E8F0DE] text-[#2C5F2D] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#22301E]">
                  Message Received
                </h3>
                <p className="text-sm text-[#5B6B55] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to NIRVANA Centre for Youth &amp; Public Policy. Our communications team will review your message and connect back with you.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#2C5F2D] hover:bg-[#387639] text-white text-xs font-bold uppercase tracking-wider rounded-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#D6E3C5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22301E]">
                    {formType === 'partner' ? 'Institutional Partnership Request' : 'Direct Inquiry Form'}
                  </span>
                  <span className="text-[11px] text-[#5B6B55]">All fields required</span>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-colors"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify your inquiry, idea, or community topic..."
                    className="w-full px-4 py-3 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* Requested Buttons: [Send Message] and [Partner With Us] */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    id="contact-send-message-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id="contact-partner-with-us-btn"
                    type="button"
                    onClick={handlePartnerClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-[#E8F0DE]/60 border border-[#2C5F2D] text-[#2C5F2D] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                  >
                    <Building className="w-3.5 h-3.5 text-[#2C5F2D]" />
                    <span>Partner With Us</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
