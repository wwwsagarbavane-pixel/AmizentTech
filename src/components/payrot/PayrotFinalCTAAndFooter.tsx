import React from 'react';
import { NavPage } from '../../types';

interface PayrotFinalCTAAndFooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const PayrotFinalCTAAndFooter: React.FC<PayrotFinalCTAAndFooterProps> = ({
  onNavigate,
  onOpenLegalModal
}) => {
  return (
    <footer className="bg-[#0B2B50] text-white py-16 relative overflow-hidden z-10 border-t border-[#12457F] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10 text-xs text-[#8FAAC8]">
          {/* Left Copyright */}
          <div className="font-bold uppercase tracking-wider text-white/90">
            © 2026 AMIZENT TECH SERVICES. ALL RIGHTS RESERVED.
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-bold text-[#DCE7F2]/80">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button>
            <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">Services</button>
            <button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors cursor-pointer">Solutions</button>
            <button onClick={() => onNavigate('learning')} className="hover:text-white transition-colors cursor-pointer">Learning</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
          </nav>

          {/* Right Legal Links */}
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Use
            </button>
          </div>
        </div>

        {/* Giant Bottom Watermark: AMIZENT */}
        <div className="mt-12 text-center pointer-events-none select-none overflow-hidden">
          <span className="text-[15vw] sm:text-[17vw] md:text-[18vw] font-black uppercase tracking-[0.2em] text-white/5 leading-none block">
            AMIZENT
          </span>
        </div>

      </div>
    </footer>
  );
};
