import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LegalModal } from './components/common/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { LearningPage } from './pages/LearningPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { LmsApp } from './lms/LmsApp';
import { AppLoadingSplash } from './components/common/AppLoadingSplash';

import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedSolutionId, setSelectedSolutionId] = useState<string | undefined>();
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | undefined>();
  const [selectedArticleId, setSelectedArticleId] = useState<string | undefined>();

  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [brandMode, setBrandMode] = useState<'PAYROT' | 'AMIZENT'>('AMIZENT');

  const toggleBrandMode = () => {
    setBrandMode((prev) => (prev === 'PAYROT' ? 'AMIZENT' : 'PAYROT'));
  };

  // Synchronize with URL hash for browser history & bookmark support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: NavPage[] = ['home', 'about', 'services', 'solutions', 'industries', 'learning', 'insights', 'contact', 'lms'];
      if (validPages.includes(hash as NavPage)) {
        setCurrentPage(hash as NavPage);
      } else if (hash.startsWith('learn') || hash.includes('dashboard')) {
        setCurrentPage('lms');
      }
    };

    // Check initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    navigateTo('services');
  };

  const handleSelectSolution = (id: string) => {
    setSelectedSolutionId(id);
    navigateTo('solutions');
  };

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    navigateTo('industries');
  };

  const handleSelectArticle = (id: string) => {
    setSelectedArticleId(id);
    navigateTo('insights');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Full-Screen LMS Application Router (Phase 2)
  if (currentPage === 'lms') {
    return <LmsApp onExitLms={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#EAF1F8] text-[#14181F] selection:bg-[#1B58A6] selection:text-white">
      {/* Mobile & App Native Loading Splash Animation */}
      <AppLoadingSplash brandName={brandMode} durationMs={800} />

      {/* Global Sticky Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        brandMode={brandMode}
        onToggleBrand={toggleBrandMode}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenLegalModal={(type) => setLegalModalType(type)}
            brandMode={brandMode}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={selectedServiceId}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={navigateTo}
            selectedSolutionId={selectedSolutionId}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            selectedIndustryId={selectedIndustryId}
          />
        )}

        {currentPage === 'learning' && (
          <LearningPage onNavigate={navigateTo} />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            onNavigate={navigateTo}
            selectedArticleId={selectedArticleId}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            initialServiceInterest={selectedServiceId ? 'Technology Upskilling' : undefined}
          />
        )}
      </main>

      {/* Global Footer on Sub-Pages (HomePage has PayrotFinalCTAAndFooter) */}
      {currentPage !== 'home' && (
        <Footer
          onNavigate={navigateTo}
          onOpenLegalModal={(type) => setLegalModalType(type)}
        />
      )}

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#12457F] hover:bg-[#1B58A6] text-white shadow-elevated border border-white/20 transition-all duration-200 active:scale-90 animate-in fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
