import React from 'react';
import { NavPage } from '../types';
import { PayrotHero } from '../components/payrot/PayrotHero';
import { PayrotTrustedBy } from '../components/payrot/PayrotTrustedBy';
import { PayrotIntroduction } from '../components/payrot/PayrotIntroduction';
import { PayrotLargeFeatureBlock } from '../components/payrot/PayrotLargeFeatureBlock';
import { InteractiveTrainingSection } from '../components/payrot/InteractiveTrainingSection';
import { PayrotLearningExperience } from '../components/payrot/PayrotLearningExperience';
import { CustomerImpactSection } from '../components/payrot/CustomerImpactSection';
import { PayrotFinalCTAAndFooter } from '../components/payrot/PayrotFinalCTAAndFooter';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
  brandMode?: 'PAYROT' | 'AMIZENT';
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenLegalModal, brandMode = 'PAYROT' }) => {
  return (
    <div className="w-full bg-[#FFFFFF] selection:bg-[#1B58A6] selection:text-white">

      {/* SECTION 1: HERO (Recreating PAYROT Hero with giant AMIZENT watermark, 3D Agent, Floating Cards & Scalloped Bottom) */}
      <PayrotHero onNavigate={onNavigate} brandMode={brandMode} />

      {/* SECTION 1.5: TRUSTED BY GLOBAL ENTERPRISE TEAMS (Directly under Hero Section) */}
      <PayrotTrustedBy />

      {/* SECTION 2: FEATURED INTRODUCTION ("HIRE AND UPSKILL GLOBALLY WITH AMIZENT TECH") */}
      <PayrotIntroduction onNavigate={onNavigate} brandMode={brandMode} />

      {/* SECTION 3: LARGE FEATURE BLOCK ("GROW BEYOND YOUR LIMITS." in Scalloped Navy Container with 3D Globe) */}
      <PayrotLargeFeatureBlock onNavigate={onNavigate} />

      {/* SECTION 4: INTERACTIVE ONBOARDING TRAINING (Multilingual Video Localization & Interactive Checkpoints) */}
      <InteractiveTrainingSection onNavigate={onNavigate} />

      {/* SECTION 5: LEARNING EXPERIENCE ("USER FRIENDLY MOBILE & WEB LEARNING" with 3 Tall Phone Panels) */}
      <PayrotLearningExperience onNavigate={onNavigate} />

      {/* SECTION 6: CUSTOMER IMPACT ("Workforce readiness in action") */}
      <CustomerImpactSection onNavigate={onNavigate} />

      {/* SECTION 8: OVERLAPPING FINAL CTA & DARK NAVY FOOTER WITH GIANT WATERMARK */}
      <PayrotFinalCTAAndFooter
        onNavigate={onNavigate}
        onOpenLegalModal={onOpenLegalModal}
      />

    </div>
  );
};
