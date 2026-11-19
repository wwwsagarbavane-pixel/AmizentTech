import React, { useState } from 'react';
import { NavPage } from '../../types';
import { Button } from '../common/Button';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  TrendingUp, 
  Code2, 
  Compass, 
  Play, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: NavPage) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'paths' | 'sandbox' | 'telemetry'>('paths');

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#EAF1F8] border-b border-[#C8D7E8]">
      {/* PAYROT-style subtle decorative grid & soft blue gradient aura */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#8FAAC8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-0 w-[500px] h-[500px] bg-[#1B58A6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Conversion CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Friendly Agent Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B58A6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1B58A6]"></span>
              </span>
              <span className="text-xs md:text-sm font-bold text-[#12457F] tracking-wide">
                Your Friendly Agent to Upskill
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#8FAAC8]"></span>
              <span className="hidden sm:inline-block text-xs font-medium text-[#4A607A]">
                AmIzent Tech Services
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1] md:leading-[1.08]">
              Empowering People.{' '}
              <span className="text-[#1B58A6] block mt-1">
                Accelerating Possibilities.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed max-w-2xl font-normal">
              We help individuals and organizations build the skills, confidence, and capabilities needed to thrive in a rapidly evolving technology landscape.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => onNavigate('services')}
                className="shadow-premium"
              >
                Explore Our Services
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                Talk to Our Team
              </Button>
            </div>

            {/* Trust Points / Value Badges */}
            <div className="pt-6 border-t border-[#C8D7E8]/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-[#12457F]">Role-Based</div>
                <div className="text-xs text-[#4A607A] mt-0.5">Competency Roadmaps</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-[#1B58A6]">AI-Enabled</div>
                <div className="text-xs text-[#4A607A] mt-0.5">Interactive Learning</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-[#12457F]">Enterprise</div>
                <div className="text-xs text-[#4A607A] mt-0.5">Ready Architectures</div>
              </div>
            </div>
          </div>

          {/* Right Column: PAYROT-Inspired Tech Interface Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Interface Window */}
            <div className="relative bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-5 md:p-6 shadow-premium">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C8D7E8]/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C8D7E8]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8FAAC8]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#1B58A6]"></div>
                  <span className="text-xs font-bold text-[#12457F] ml-2">AmIzent Upskill Matrix</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCE7F2] text-[11px] font-semibold text-[#12457F]">
                  <Sparkles className="w-3 h-3 text-[#1B58A6]" />
                  <span>Agent Active</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex gap-2 my-4 p-1 bg-[#DCE7F2]/60 rounded-xl">
                <button
                  onClick={() => setActiveTab('paths')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'paths'
                      ? 'bg-white text-[#12457F] shadow-sm'
                      : 'text-[#4A607A] hover:text-[#12457F]'
                  }`}
                >
                  Skill Paths
                </button>
                <button
                  onClick={() => setActiveTab('sandbox')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'sandbox'
                      ? 'bg-white text-[#12457F] shadow-sm'
                      : 'text-[#4A607A] hover:text-[#12457F]'
                  }`}
                >
                  Live Labs
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'telemetry'
                      ? 'bg-white text-[#12457F] shadow-sm'
                      : 'text-[#4A607A] hover:text-[#12457F]'
                  }`}
                >
                  Growth Pulse
                </button>
              </div>

              {/* Tab 1: Skill Paths Content */}
              {activeTab === 'paths' && (
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-white border border-[#C8D7E8] space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#12457F] flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#1B58A6]" />
                        Generative AI & Agent Architecture
                      </span>
                      <span className="text-[11px] font-extrabold text-[#1B58A6] bg-[#DCE7F2] px-2 py-0.5 rounded-md">
                        Phase 3 of 4
                      </span>
                    </div>
                    <div className="w-full bg-[#EAF1F8] rounded-full h-2">
                      <div className="bg-[#1B58A6] h-2 rounded-full w-[78%] transition-all duration-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-[#4A607A]">
                      <span>Hands-on RAG & Tool Orchestration</span>
                      <span className="font-semibold text-[#12457F]">78% Mastery</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#C8D7E8] space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#12457F] flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-[#12457F]" />
                        Cloud Architecture & DevSecOps
                      </span>
                      <span className="text-[11px] font-extrabold text-[#12457F] bg-[#DCE7F2] px-2 py-0.5 rounded-md">
                        Phase 4 of 4
                      </span>
                    </div>
                    <div className="w-full bg-[#EAF1F8] rounded-full h-2">
                      <div className="bg-[#12457F] h-2 rounded-full w-[94%] transition-all duration-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-[#4A607A]">
                      <span>Production Kubernetes & Zero-Trust</span>
                      <span className="font-semibold text-[#12457F]">94% Mastery</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Live Labs Content */}
              {activeTab === 'sandbox' && (
                <div className="p-4 rounded-xl bg-white border border-[#C8D7E8] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#8FAAC8] border-b border-[#C8D7E8]/60 pb-2">
                    <span className="text-[11px]">amizent-sandbox-v2.0</span>
                    <span className="text-[10px] text-[#1B58A6] font-bold">● RUNNING</span>
                  </div>
                  <div className="space-y-1 text-[#14181F] text-[11px]">
                    <div className="text-[#12457F] font-bold">$ amizent eval --track ai-orchestration</div>
                    <div className="text-[#4A607A]">✓ Vector index instantiated: 1536 dims</div>
                    <div className="text-[#4A607A]">✓ Agent guardrails validated: 100% compliant</div>
                    <div className="text-[#1B58A6] font-bold">✓ Production checkpoint passed: Grade A</div>
                  </div>
                </div>
              )}

              {/* Tab 3: Growth Pulse */}
              {activeTab === 'telemetry' && (
                <div className="p-4 rounded-xl bg-white border border-[#C8D7E8] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#12457F]">Team Velocity Index</span>
                    <TrendingUp className="w-4 h-4 text-[#1B58A6]" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#12457F]">+64%</span>
                    <span className="text-xs text-[#4A607A]">improvement in commit velocity</span>
                  </div>
                  <div className="text-[11px] text-[#4A607A] leading-relaxed">
                    Measured across cohort participants before and after guided upskilling tracks.
                  </div>
                </div>
              )}

              {/* Bottom Quick Trigger */}
              <div className="mt-4 pt-3 border-t border-[#C8D7E8]/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1B58A6]/10 flex items-center justify-center text-[#1B58A6]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#12457F]">Verified Capability Framework</span>
                </div>
                <button
                  onClick={() => onNavigate('learning')}
                  className="text-xs font-bold text-[#1B58A6] hover:underline flex items-center gap-1"
                >
                  Explore Hub <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Floating Asymmetric Badge 1: Top Right */}
            <div className="absolute -top-4 -right-4 bg-white border border-[#C8D7E8] rounded-2xl p-3 shadow-lg hidden sm:flex items-center gap-3 animate-float-slow">
              <div className="p-2 rounded-xl bg-[#1B58A6] text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#12457F]">Practical Code Labs</div>
                <div className="text-[10px] text-[#4A607A]">Real-world sandboxes</div>
              </div>
            </div>

            {/* Floating Asymmetric Badge 2: Bottom Left */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-[#C8D7E8] rounded-2xl p-3 shadow-lg hidden sm:flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#DCE7F2] text-[#12457F]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#12457F]">Enterprise Verified</div>
                <div className="text-[10px] text-[#4A607A]">Zero unsupported claims</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
