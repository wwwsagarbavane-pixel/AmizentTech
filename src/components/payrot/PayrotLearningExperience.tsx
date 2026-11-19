import React from 'react';
import { NavPage } from '../../types';
import { Sparkles, ArrowRight, Smartphone, CheckCircle2, ArrowUpRight, BarChart3, Award, Terminal, Play, ShieldCheck } from 'lucide-react';

interface PayrotLearningExperienceProps {
  onNavigate: (page: NavPage) => void;
}

export const PayrotLearningExperience: React.FC<PayrotLearningExperienceProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#12457F]">
            INTERACTIVE AI LEARNING &amp;
          </h2>
          <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#12457F]">
            SKILL IQ™ PLATFORM
          </div>
        </div>

        {/* 3 Tall Cards (Exact PAYROT Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 (Left): White Card with Mascot & Giant Letters in Background */}
          <div className="bg-white rounded-[2rem] p-6 border border-[#C8D7E8] shadow-sm min-h-[480px] flex flex-col justify-between relative overflow-hidden group">
            {/* Giant Letters in Background */}
            <div className="absolute top-4 left-6 pointer-events-none select-none text-6xl font-black text-[#EAF1F8] tracking-widest uppercase">
              SKILL
            </div>

            {/* 3D Graduation Cap & Books in Center with Soft Glow */}
            <div className="relative z-10 my-auto flex items-center justify-center p-2">
              <div className="w-52 h-52 rounded-2xl overflow-hidden flex items-center justify-center shadow-xs">
                <img
                  src="/images/learning-grad-cap.png"
                  alt="AmIzent Learning Cap and Books"
                  className="w-full h-full object-cover filter drop-shadow-[0_12px_24px_rgba(18,69,127,0.18)]"
                />
              </div>
            </div>

            {/* Bottom Logo & Spinner */}
            <div className="relative z-10 pt-4 border-t border-[#C8D7E8]/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1B58A6]"></span>
                <span className="text-xs font-black text-[#12457F] uppercase tracking-wider">AI Skill Mentor</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-[#1B58A6] border-t-transparent animate-spin" />
            </div>
          </div>

          {/* Card 2 (Center): White Mobile Phone Mockup Screen with Skill IQ Data */}
          <div className="bg-white rounded-[2.5rem] p-4 sm:p-5 border-4 border-white shadow-2xl min-h-[500px] flex flex-col justify-between relative overflow-hidden transform md:-translate-y-3">
            
            {/* Top Bar with User Avatar & Name */}
            <div className="flex items-center justify-between pt-2 px-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#12457F] text-white flex items-center justify-center font-bold text-xs shadow">
                  JW
                </div>
                <div>
                  <div className="text-xs font-black text-[#12457F]">Jenny Wilson</div>
                  <div className="text-[10px] text-[#8FAAC8] font-bold">Lead Cloud Architect</div>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#EAF1F8] flex items-center justify-center text-[#12457F] text-xs font-bold">
                •••
              </div>
            </div>

            {/* Bright Royal Blue Skill IQ Card (284 / 300 Skill Score) */}
            <div className="my-4 p-5 rounded-2xl bg-gradient-to-r from-[#1B58A6] to-[#12457F] text-white shadow-lg relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] font-bold tracking-wider text-[#DCE7F2]">
                <span>AI &amp; CLOUD SKILL IQ™</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[9px] uppercase font-bold text-white">TOP 4%</span>
              </div>
              <div className="text-3xl font-black tracking-tight mt-2 flex items-baseline gap-2">
                <span>284</span>
                <span className="text-xs text-[#8FAAC8] font-semibold">/ 300 Proficient</span>
              </div>
              <div className="mt-4 flex justify-between items-end text-[10px] font-mono text-[#DCE7F2]/90">
                <span>Role: Solutions Architect</span>
                <span className="text-emerald-300 font-bold">12 Badges Earned</span>
              </div>
            </div>

            {/* 4 Round Quick-Action Buttons */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-[#12457F] my-1">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center text-[#1B58A6] shadow-sm">
                  <Terminal className="w-4 h-4" />
                </div>
                <span>Labs</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center text-[#12457F] shadow-sm">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span>Skill IQ</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center text-[#1B58A6] shadow-sm">
                  <Play className="w-4 h-4" />
                </div>
                <span>Interactive</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center text-[#12457F] shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <span>Badges</span>
              </div>
            </div>

            {/* Dark Navy Active Tracks List */}
            <div className="mt-4 p-4 rounded-2xl bg-[#0B2B50] text-white space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8FAAC8]">
                Active Milestones &amp; Labs
              </div>
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>AWS Bedrock GenAI Sandbox</span>
                <span className="text-emerald-400 font-bold">94% Done</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold pt-1 border-t border-white/10">
                <span>SAP S/4HANA Clean-Core Track</span>
                <span className="text-[#38BDF8] font-bold">Lab 6 Passed</span>
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="mt-3 pt-2 border-t border-[#C8D7E8]/60 flex justify-around text-[10px] font-bold text-[#8FAAC8]">
              <span className="text-[#1B58A6]">Curriculum</span>
              <span>Assessments</span>
              <span>Credentials</span>
            </div>
          </div>

          {/* Card 3 (Right): Hand Holding Royal Blue Card / Laptop Display */}
          <div className="bg-white rounded-[2rem] p-6 border border-[#C8D7E8] shadow-sm min-h-[480px] flex flex-col justify-between relative overflow-hidden">
            {/* High-Quality Learning Laptop */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-2 flex items-center justify-center bg-[#F1F6FC]">
              <img
                src="/images/learning-laptop.png"
                alt="AmIzent Online Learning Platform"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(18,69,127,0.12)]"
              />
            </div>

            {/* Bottom Copy: Apply for your AmIzent Enterprise Pass */}
            <div className="mt-6 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#12457F] tracking-tight leading-tight">
                Earn your <span className="block">verifiable</span> <span className="text-[#1B58A6]">AmIzent pass</span>
              </h3>
              <p className="text-xs text-[#4A607A]">
                Cryptographically verifiable role credentials, Pluralsight-aligned skill badges, and SAP enterprise accreditations.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C8D7E8]/60">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-xl bg-[#12457F] hover:bg-[#1B58A6] text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                REQUEST ACCREDITATION
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};