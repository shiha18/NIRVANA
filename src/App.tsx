/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyNirvanaSection from './components/WhyNirvanaSection';
import ApproachSection from './components/ApproachSection';
import RiseModelSection from './components/RiseModelSection';
import ProgrammesSection from './components/ProgrammesSection';
import PolicyFrameworkSection from './components/PolicyFrameworkSection';
import CampaignSection from './components/CampaignSection';
import StakeholdersSection from './components/StakeholdersSection';
import Roadmap2030Section from './components/Roadmap2030Section';
import GetInvolvedSection from './components/GetInvolvedSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ActionModals from './components/ActionModals';

export default function App() {
  const [isOpenGetInvolved, setIsOpenGetInvolved] = useState(false);
  const [selectedInvolvedOption, setSelectedInvolvedOption] = useState('volunteer');
  const [isOpenSubmitIssue, setIsOpenSubmitIssue] = useState(false);

  const handleOpenGetInvolved = (optionId: string = 'volunteer') => {
    setSelectedInvolvedOption(optionId);
    setIsOpenGetInvolved(true);
  };

  const handleOpenSubmitIssue = () => {
    setIsOpenSubmitIssue(true);
  };

  return (
    <div id="nirvana-app-root" className="min-h-screen bg-[#F6F7F3] text-[#22301E] flex flex-col font-sans">
      {/* Primary Navigation Header */}
      <Navbar onOpenGetInvolved={() => handleOpenGetInvolved('volunteer')} />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        {/* 1. HOME: Hero & RISE badge preview */}
        <Hero onOpenGetInvolved={() => handleOpenGetInvolved('volunteer')} />

        {/* 2. ABOUT NIRVANA: Overview, Vision, Mission, Core Values */}
        <AboutSection />

        {/* 3. WHY NIRVANA?: The 6 Systemic Challenges */}
        <WhyNirvanaSection />

        {/* 4. OUR APPROACH: NIRVANA's Core Ideas & Thesis */}
        <ApproachSection />

        {/* 5. RISE FRAMEWORK: The NIRVANA RISE Model (Reach, Inform, Support, Empower) */}
        <RiseModelSection />

        {/* 6. OUR PROGRAMMES: Flagship Programmes (Policy Forum, Civic Connect, Policy Lab, Community Action) */}
        <ProgrammesSection onOpenGetInvolved={() => handleOpenGetInvolved('youth-programmes')} />

        {/* 7. POLICY FRAMEWORK: NIRVANA's Core Policies Grid */}
        <PolicyFrameworkSection />

        {/* 8. MY COMMUNITY, MY VOICE: Campaign Pipeline & Youth Action */}
        <CampaignSection
          onOpenSubmitIssue={handleOpenSubmitIssue}
          onOpenGetInvolved={() => handleOpenGetInvolved('volunteer')}
        />

        {/* 9. STAKEHOLDERS: Central NIRVANA Node & Surrounding Ecosystem */}
        <StakeholdersSection />

        {/* 10. NIRVANA 2030: Future Vision & Strategic Roadmap */}
        <Roadmap2030Section />

        {/* 11. GET INVOLVED: 5 Strong Participation Pathways */}
        <GetInvolvedSection onSelectOption={handleOpenGetInvolved} />

        {/* 12. CONTACT: Connect With NIRVANA (Chennai HQ & Inquiry Form) */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Action Modals */}
      <ActionModals
        isOpenGetInvolved={isOpenGetInvolved}
        onCloseGetInvolved={() => setIsOpenGetInvolved(false)}
        selectedGetInvolvedId={selectedInvolvedOption}
        isOpenSubmitIssue={isOpenSubmitIssue}
        onCloseSubmitIssue={() => setIsOpenSubmitIssue(false)}
      />
    </div>
  );
}
