import React from 'react';
import { NavPage } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { 
  HeartHandshake, 
  Target, 
  Sparkles, 
  Compass, 
  Users, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Hero Banner: About AmIzent (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <Sparkles className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>About AmIzent Tech Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Your Friendly Agent{' '}
              <span className="text-[#1B58A6] block mt-1">To Upskill.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              We are a specialized technology and capability partner dedicated to helping professionals and organizations bridge capability gaps and achieve verified technical excellence.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('services')}
              >
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Secondary Background: #DCE7F2) */}
      <section className="py-20 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Brand Mission */}
            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1B58A6]/10 text-[#1B58A6] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#8FAAC8] uppercase tracking-wider mb-2">Our Purpose</div>
                <h3 className="text-2xl font-extrabold text-[#12457F] mb-4">The AmIzent Mission</h3>
                <p className="text-sm md:text-base text-[#4A607A] leading-relaxed">
                  To democratize enterprise-grade technology proficiencies by designing accessible, hands-on, and respectful learning experiences that empower human potential in a digital-first economy.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#C8D7E8]/70 text-xs font-bold text-[#1B58A6] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Focused on genuine human confidence
              </div>
            </div>

            {/* Brand Vision */}
            <div className="bg-white border border-[#C8D7E8] rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#12457F]/10 text-[#12457F] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#8FAAC8] uppercase tracking-wider mb-2">Our Aspiration</div>
                <h3 className="text-2xl font-extrabold text-[#12457F] mb-4">The AmIzent Vision</h3>
                <p className="text-sm md:text-base text-[#4A607A] leading-relaxed">
                  To be the most trusted, empathetic technology enablement partner worldwide, recognized for transforming organizations through sustainable internal capability building rather than superficial hype.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#C8D7E8]/70 text-xs font-bold text-[#12457F] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B58A6]" />
                Sustainable long-term competence
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* People-First Philosophy (Primary Background: #EAF1F8) */}
      <section className="py-20 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Company Philosophy"
            title="People-First,"
            highlightedText="Technology-Driven."
            subtitle="Too often, digital transformation prioritizes tooling over people. We reverse that dynamic by anchoring every technical curriculum in human cognitive clarity."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] text-[#1B58A6] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#12457F] mb-2">The "Friendly Agent" Promise</h4>
              <p className="text-sm text-[#4A607A] leading-relaxed">
                We believe nobody should feel inadequate in front of modern code or AI architectures. We teach with patience, clear metaphors, and guided step-by-step problem solving.
              </p>
            </div>

            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] text-[#12457F] flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#12457F] mb-2">Active Cognitive Retention</h4>
              <p className="text-sm text-[#4A607A] leading-relaxed">
                Watching a video is not learning. Writing code, architecting microservices, and debugging real deployment pipelines is how authentic competency is cemented.
              </p>
            </div>

            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] text-[#1B58A6] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#12457F] mb-2">Enterprise-Grade Truth</h4>
              <p className="text-sm text-[#4A607A] leading-relaxed">
                We operate with absolute transparency. We do not invent arbitrary statistics or make exaggerated claims; our value is demonstrated directly in production velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AmIzent (Secondary Background: #DCE7F2) */}
      <section className="py-20 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#12457F] mb-6">
              Why Choose AmIzent Tech Services?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#4A607A]">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B58A6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#12457F] block">Production-Mirroring Sandboxes:</strong>
                    Learners build inside environments that reflect real production architectures, CI/CD gates, and security boundaries.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B58A6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#12457F] block">Curriculum Agility:</strong>
                    Our modular learning modules adapt in real time as cloud providers update APIs and AI frameworks release new capabilities.
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B58A6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#12457F] block">Internal Talent Preservation:</strong>
                    We help enterprises retrain experienced team members, preserving decades of invaluable institutional domain logic.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B58A6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#12457F] block">Dedicated Corporate Guidance:</strong>
                    From skill diagnostic to post-program reviews, our advisory team stays aligned with your executive priorities.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C8D7E8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#4A607A]">
                AmIzent Tech Services • Official Domain: AmizentTech.com
              </span>
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Inquire With Our Advisory Team
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
