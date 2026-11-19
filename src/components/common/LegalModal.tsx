import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14181F]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-150 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C8D7E8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#EAF1F8] text-[#1B58A6]">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#12457F]">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-[#4A607A]">AmIzent Tech Services • AmizentTech.com</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#4A607A] hover:bg-[#DCE7F2] hover:text-[#12457F] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#4A607A] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-[#12457F]">
                Effective Date: November 2026 | AmIzent Tech Services Privacy Framework
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">1. Commitment to Data Integrity</h4>
              <p>
                At AmIzent Tech Services ("AmIzent", "we", "our"), we operate with the highest standards of confidentiality regarding corporate inquiries, team upskilling roadmaps, and personal identifying information. We never sell, rent, or distribute client contact information to third-party data brokers.
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">2. Information Collection & Use</h4>
              <p>
                When you submit an enterprise inquiry through AmizentTech.com, we collect your name, corporate email address, organization name, and stated technical priorities strictly to evaluate and respond to your advisory request.
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">3. Enterprise Learning Telemetry</h4>
              <p>
                In cohort training environments, learning telemetry and checkpoint accuracy data are retained strictly for the sponsoring organization's capability reporting and learner milestone verification.
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">4. Contact & Inquiries</h4>
              <p>
                For questions regarding data practices or to request data removal, reach out directly to privacy@amizenttech.com or submit an inquiry through our contact form.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#12457F]">
                Effective Date: November 2026 | AmIzent Tech Services Standard Terms
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">1. Scope of Corporate Website</h4>
              <p>
                The materials presented on AmizentTech.com are for informational and conceptual presentation of corporate technology upskilling services, AI enablement programs, and enterprise advisory capabilities.
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">2. Service Customization</h4>
              <p>
                All curriculum tracks, cohort schedules, deliverables, and service levels are formalized via explicit written statements of work (SOW) mutually executed between AmIzent Tech Services and client entities.
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">3. Intellectual Property</h4>
              <p>
                The AmIzent Tech Services brand, "Your Friendly Agent to Upskill" tagline, logos, visual architecture, and proprietary curriculum blueprints remain the exclusive property of AmIzent Tech Services.
              </p>
              <h4 className="font-bold text-[#12457F] text-sm pt-2">4. Governing Standards</h4>
              <p>
                These terms are governed by standard international commercial fair-dealing practices. For contract inquiries, please engage our team through the official contact portal.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#C8D7E8] bg-[#DCE7F2]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1B58A6] text-white text-xs font-bold hover:bg-[#154583] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
