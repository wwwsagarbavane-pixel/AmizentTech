import React, { useState } from 'react';
import { Award, Download, CheckCircle2, QrCode, Printer, ShieldCheck, Share2, Sparkles, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsCertificate } from '../../types/lmsTypes';

export const CertificatesPage: React.FC = () => {
  const { currentUser } = useAuth();
  const certificates = LmsStorage.getCertificates();
  const [selectedCert, setSelectedCert] = useState<LmsCertificate | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Certificates &amp; Credentials
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
              {certificates.length} Verified
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Digitally signed enterprise credentials with cryptographic verification.
          </p>
        </div>
      </div>

      {/* Certificates Cards Grid in Frosted Glass */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="space-y-4">
              
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified 2026</span>
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {cert.certificateNumber}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#2B62EE]">
                  {cert.category}
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                  {cert.courseTitle}
                </h3>
              </div>

              {/* Recipient & Score */}
              <div className="p-4 rounded-2xl bg-white/70 border border-slate-100 flex items-center justify-between text-xs shadow-xs">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Issued To</div>
                  <div className="font-black text-sm text-[#0B1B2B]">{cert.recipientName}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Score</div>
                  <div className="font-mono font-black text-emerald-600 text-sm">{cert.gradeScore}%</div>
                </div>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Issued: {cert.issueDate}
              </span>

              <button
                onClick={() => setSelectedCert(cert)}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-xs font-black shadow-[0_6px_18px_rgba(43,98,238,0.25)] flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
              >
                <Award className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Printable / Verifiable Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white/95 backdrop-blur-2xl text-[#0B1B2B] border border-white/90 rounded-[36px] w-full max-w-3xl p-8 sm:p-12 shadow-2xl relative space-y-6">
            
            {/* Action Bar */}
            <div className="flex justify-between items-center border-b pb-4 border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-[#2B62EE]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#12457F]">
                  AmIzent Tech Services • Official Credential
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 cursor-pointer"
                  title="Print / Save PDF"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Formal Certificate Document Surface */}
            <div className="p-8 sm:p-12 border-4 border-[#2B62EE]/20 rounded-3xl bg-white text-center space-y-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#12457F] via-[#2B62EE] to-[#38BDF8]" />

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2B62EE]">
                  CERTIFICATE OF COMPETENCY
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1B2B]">
                  AmIzent Enterprise Institute
                </h2>
              </div>

              <p className="text-xs text-slate-500 italic">This is to certify that</p>

              <div className="text-2xl sm:text-3xl font-black text-[#2B62EE] underline decoration-[#2B62EE]/30 underline-offset-8">
                {selectedCert.recipientName}
              </div>

              <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                has successfully completed all requirements, architecture defense checkpoints, and live labs for
              </p>

              <div className="text-lg sm:text-xl font-black text-[#0B1B2B]">
                {selectedCert.courseTitle}
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Credential ID</span>
                  <span className="font-bold">{selectedCert.certificateNumber}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Grade &amp; Telemetry</span>
                  <span className="font-bold text-emerald-600">{selectedCert.gradeScore}% • Proficient</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Issue Date</span>
                  <span className="font-bold">{selectedCert.issueDate}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};