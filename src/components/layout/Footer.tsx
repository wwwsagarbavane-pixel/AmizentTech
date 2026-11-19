import React from 'react';
import { NavPage } from '../../types';
import { Logo } from '../common/Logo';
import { Mail, MapPin, Phone, Globe, Shield, FileText, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#DCE7F2] border-t border-[#C8D7E8] text-[#14181F] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#C8D7E8]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" onClick={() => handleNav('home')} />
            <p className="text-sm font-semibold text-[#12457F] tracking-wide">
              "Your Friendly Agent to Upskill"
            </p>
            <p className="text-sm text-[#4A607A] leading-relaxed max-w-sm">
              AmIzent Tech Services empowers individuals and organizations with human-centric, future-ready technology upskilling, AI readiness, and enterprise capability building.
            </p>
            
            {/* Domain verification badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-semibold text-[#12457F]">
              <Globe className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Official Domain: AmizentTech.com</span>
            </div>

            {/* Social Links Placeholders (Clean editable placeholders) */}
            <div className="pt-2">
              <div className="text-xs font-bold text-[#8FAAC8] uppercase tracking-wider mb-2">Connect With Us</div>
              <div className="flex items-center gap-2">
                {['LinkedIn', 'Twitter / X', 'GitHub', 'YouTube'].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => handleNav('contact')}
                    className="px-2.5 py-1 text-xs font-semibold text-[#12457F] bg-[#EAF1F8] border border-[#C8D7E8] rounded-md hover:bg-[#1B58A6] hover:text-white hover:border-[#1B58A6] transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#12457F]">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('learning')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  Learning & Upskilling
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors">
                  Resources & Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#12457F]">Key Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('services')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors text-left">
                  Technology Upskilling
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors text-left">
                  AI & Emerging Tech
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors text-left">
                  Corporate Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors text-left">
                  Digital Skills Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors text-left">
                  Enterprise Upskilling
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('learning')} className="text-[#4A607A] hover:text-[#1B58A6] font-medium transition-colors text-left">
                  Interactive Learning Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Office & Contact Placeholders (Strictly no invented numbers/emails) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#12457F]">Inquiries</h4>
            <div className="space-y-2.5 text-xs text-[#4A607A]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#12457F] block">Direct Inquiries</span>
                  <span>inquiries@amizenttech.com</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#12457F] block">Corporate Headquarters</span>
                  <span>AmIzent Tech Services Corporate Office [Client Address Placeholder]</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#12457F] block">Telephone</span>
                  <span>[Client Phone Placeholder - Available on Request]</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-2 px-3 text-xs font-bold text-center bg-[#1B58A6] text-white rounded-lg hover:bg-[#154583] transition-colors"
                >
                  Contact Client Advisory
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A607A]">
          <div className="flex items-center gap-2">
            <span>© 2026 AmIzent Tech Services. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium text-[#12457F]">AmizentTech.com</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#1B58A6] transition-colors flex items-center gap-1 font-medium"
            >
              <Shield className="w-3.5 h-3.5 text-[#1B58A6]" />
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#1B58A6] transition-colors flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#1B58A6]" />
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
