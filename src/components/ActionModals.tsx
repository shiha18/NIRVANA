import { useState, FormEvent, useEffect } from 'react';
import { X, CheckCircle2, Send, AlertTriangle } from 'lucide-react';
import { CAMPAIGN_INFO, GET_INVOLVED_OPTIONS } from '../data/nirvanaContent';

interface ActionModalsProps {
  isOpenGetInvolved: boolean;
  onCloseGetInvolved: () => void;
  selectedGetInvolvedId?: string;

  isOpenSubmitIssue: boolean;
  onCloseSubmitIssue: () => void;
}

export default function ActionModals({
  isOpenGetInvolved,
  onCloseGetInvolved,
  selectedGetInvolvedId = 'volunteer',
  isOpenSubmitIssue,
  onCloseSubmitIssue,
}: ActionModalsProps) {
  // Get Involved State
  const [activeCategory, setActiveCategory] = useState(selectedGetInvolvedId);
  const [involvedSubmitted, setInvolvedSubmitted] = useState(false);
  const [involvedData, setInvolvedData] = useState({
    name: '',
    email: '',
    phone: '',
    ageGroup: '18–25',
    institution: '',
    notes: '',
  });

  // Issue Submission State
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const [issueData, setIssueData] = useState({
    name: '',
    email: '',
    locality: '',
    theme: CAMPAIGN_INFO.themes[0],
    description: '',
    proposedAction: '',
  });

  useEffect(() => {
    if (selectedGetInvolvedId) {
      setActiveCategory(selectedGetInvolvedId);
    }
  }, [selectedGetInvolvedId]);

  const handleInvolvedSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!involvedData.name || !involvedData.email) return;
    setInvolvedSubmitted(true);
  };

  const handleIssueSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!issueData.name || !issueData.locality || !issueData.description) return;
    setIssueSubmitted(true);
  };

  return (
    <>
      {/* 1. GET INVOLVED MODAL */}
      {isOpenGetInvolved && (
        <div
          id="get-involved-modal-backdrop"
          className="fixed inset-0 z-50 bg-[#22301E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onCloseGetInvolved}
        >
          <div
            id="get-involved-modal-dialog"
            className="bg-white rounded-sm border border-[#2C5F2D] shadow-2xl max-w-2xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D6E3C5] mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#2C5F2D] uppercase tracking-wider block">
                  PARTICIPATION PATHWAYS
                </span>
                <h3 className="text-2xl font-extrabold font-display text-[#22301E] tracking-tight">
                  Get Involved With NIRVANA
                </h3>
              </div>
              <button
                onClick={onCloseGetInvolved}
                className="p-1.5 text-[#5B6B55] hover:text-[#22301E] rounded-xs hover:bg-[#E8F0DE] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {involvedSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-[#E8F0DE] text-[#2C5F2D] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-display text-[#22301E]">
                  Registration Submitted
                </h4>
                <p className="text-sm text-[#5B6B55] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#22301E]">{involvedData.name}</strong>. Your expression of interest for the <strong className="text-[#2C5F2D]">{GET_INVOLVED_OPTIONS.find((o) => o.id === activeCategory)?.title}</strong> cohort in Chennai / Tamil Nadu has been logged. Our coordination team will reach out with onboarding materials.
                </p>
                <button
                  onClick={() => {
                    setInvolvedSubmitted(false);
                    onCloseGetInvolved();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#2C5F2D] hover:bg-[#387639] text-white text-xs font-bold uppercase tracking-wider rounded-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleInvolvedSubmit} className="space-y-5">
                {/* Category Selector Tabs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-2">
                    Select Pathway:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {GET_INVOLVED_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setActiveCategory(opt.id)}
                        className={`p-2.5 text-xs font-semibold rounded-xs border text-left transition-colors ${
                          activeCategory === opt.id
                            ? 'bg-[#2C5F2D] text-white border-[#2C5F2D]'
                            : 'bg-[#F6F7F3] text-[#22301E] border-[#D6E3C5] hover:border-[#97BC62]'
                        }`}
                      >
                        <div className="font-bold line-clamp-1">{opt.title}</div>
                        <div className={`text-[10px] ${activeCategory === opt.id ? 'text-[#E8F0DE]' : 'text-[#5B6B55]'}`}>
                          {opt.badge}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={involvedData.name}
                      onChange={(e) => setInvolvedData({ ...involvedData, name: e.target.value })}
                      placeholder="e.g., Aravind Kumar"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={involvedData.email}
                      onChange={(e) => setInvolvedData({ ...involvedData, email: e.target.value })}
                      placeholder="aravind@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={involvedData.phone}
                      onChange={(e) => setInvolvedData({ ...involvedData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                      College / Institution / Organisation
                    </label>
                    <input
                      type="text"
                      value={involvedData.institution}
                      onChange={(e) => setInvolvedData({ ...involvedData, institution: e.target.value })}
                      placeholder="University or Workplace"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                    How would you like to contribute?
                  </label>
                  <textarea
                    rows={3}
                    value={involvedData.notes}
                    onChange={(e) => setInvolvedData({ ...involvedData, notes: e.target.value })}
                    placeholder="Briefly state your civic interests, background, or goals..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] resize-none"
                  />
                </div>

                <div className="pt-3 border-t border-[#D6E3C5] flex items-center justify-between">
                  <span className="text-xs text-[#5B6B55]">
                    NIRVANA Youth &amp; Public Policy • Chennai, TN
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <span>Submit Application</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. SUBMIT COMMUNITY ISSUE MODAL (Campaign: My Community, My Voice) */}
      {isOpenSubmitIssue && (
        <div
          id="submit-issue-modal-backdrop"
          className="fixed inset-0 z-50 bg-[#22301E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onCloseSubmitIssue}
        >
          <div
            id="submit-issue-modal-dialog"
            className="bg-white rounded-sm border border-[#2C5F2D] shadow-2xl max-w-2xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D6E3C5] mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#2C5F2D] uppercase tracking-wider block">
                  MY COMMUNITY, MY VOICE
                </span>
                <h3 className="text-2xl font-extrabold font-display text-[#22301E] tracking-tight">
                  Submit a Community Issue
                </h3>
              </div>
              <button
                onClick={onCloseSubmitIssue}
                className="p-1.5 text-[#5B6B55] hover:text-[#22301E] rounded-xs hover:bg-[#E8F0DE] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {issueSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-[#E8F0DE] text-[#2C5F2D] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-display text-[#22301E]">
                  Community Issue Documented
                </h4>
                <p className="text-sm text-[#5B6B55] max-w-md mx-auto leading-relaxed">
                  Thank you for responsibly identifying this local issue in <strong className="text-[#22301E]">{issueData.locality}</strong> under <strong className="text-[#2C5F2D]">{issueData.theme}</strong>. NIRVANA youth facilitators will review your submission for verified community deliberation and structured escalation.
                </p>
                <button
                  onClick={() => {
                    setIssueSubmitted(false);
                    onCloseSubmitIssue();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#2C5F2D] hover:bg-[#387639] text-white text-xs font-bold uppercase tracking-wider rounded-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleIssueSubmit} className="space-y-4">
                <div className="p-3 bg-[#E8F0DE] border border-[#97BC62]/40 rounded-xs text-xs text-[#22301E] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#2C5F2D] shrink-0 mt-0.5" />
                  <span>
                    Objective: Encourage young people (ages 18–25) to identify local problems, communicate them responsibly, and participate in community improvement.
                  </span>
                </div>

                {/* Campaign Theme Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                    Campaign Theme *
                  </label>
                  <select
                    value={issueData.theme}
                    onChange={(e) => setIssueData({ ...issueData, theme: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                  >
                    {CAMPAIGN_INFO.themes.map((theme) => (
                      <option key={theme} value={theme}>
                        {theme}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={issueData.name}
                      onChange={(e) => setIssueData({ ...issueData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                      Neighborhood / Locality (Chennai / TN) *
                    </label>
                    <input
                      type="text"
                      required
                      value={issueData.locality}
                      onChange={(e) => setIssueData({ ...issueData, locality: e.target.value })}
                      placeholder="e.g., Mylapore, Chennai"
                      className="w-full px-3.5 py-2 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                    Describe the Problem Factually *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={issueData.description}
                    onChange={(e) => setIssueData({ ...issueData, description: e.target.value })}
                    placeholder="Provide specific details about the local challenge observed..."
                    className="w-full px-3.5 py-2 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#22301E] mb-1.5">
                    Proposed Civic Solution / Youth Action
                  </label>
                  <input
                    type="text"
                    value={issueData.proposedAction}
                    onChange={(e) => setIssueData({ ...issueData, proposedAction: e.target.value })}
                    placeholder="What action or institutional dialogue could help solve this?"
                    className="w-full px-3.5 py-2 bg-white border border-[#D6E3C5] rounded-xs text-sm text-[#22301E] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                  />
                </div>

                <div className="pt-3 border-t border-[#D6E3C5] flex items-center justify-between">
                  <span className="text-xs text-[#5B6B55]">
                    Responsible civic reporting
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2C5F2D] hover:bg-[#387639] border border-[#97BC62]/40 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <span>Submit Local Issue</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
