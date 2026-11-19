import React from 'react';
import { NavPage } from '../types';
import { servicesData } from '../data/servicesData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { CustomerImpactSection } from '../components/payrot/CustomerImpactSection';
import { 
  Layers, 
  Sparkles, 
  Users, 
  Zap, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: NavPage) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-[#1B58A6]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#1B58A6]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#12457F]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#1B58A6]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#12457F]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#1B58A6]" />;
      default: return <Layers className="w-6 h-6 text-[#1B58A6]" />;
    }
  };

  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Services Hero (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <Layers className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Comprehensive Service Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Capability Building{' '}
              <span className="text-[#1B58A6] block mt-1">Engineered for Scale.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              From targeted technology upskilling to enterprise-wide AI readiness and strategic technical consulting, AmIzent delivers structured pathways that accelerate organizational delivery.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Request Service Brief
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Detailed Service Descriptions (Secondary Background: #DCE7F2) */}
      <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#12457F]">
              Our Specialized Offerings
            </h2>
            <p className="text-sm md:text-base text-[#4A607A] mt-2">
              Structured to support every stage of enterprise technical capability transformation.
            </p>
          </div>

          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-8 sm:p-10 shadow-sm transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Title & Full Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center">
                          {renderIcon(service.icon)}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#1B58A6] uppercase tracking-wider block">
                            {service.category}
                          </span>
                          <h3 className="text-2xl font-extrabold text-[#12457F]">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-[#4A607A] leading-relaxed pt-2">
                        {service.fullDescription}
                      </p>

                      {/* Key Features */}
                      <div className="pt-4 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                          Core Curriculum Components
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-[#14181F] bg-white p-2.5 rounded-xl border border-[#C8D7E8]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1B58A6] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Key Deliverables & Action (5 cols) */}
                    <div className="lg:col-span-5 bg-[#EAF1F8] rounded-2xl p-6 border border-[#C8D7E8] space-y-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#12457F] border-b border-[#C8D7E8] pb-2">
                        Tangible Client Deliverables
                      </div>

                      <div className="space-y-2.5">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#12457F] font-semibold">
                            <span className="w-2 h-2 rounded-full bg-[#1B58A6] shrink-0 mt-1.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#C8D7E8]">
                        <Button
                          variant="primary"
                          size="sm"
                          withArrow
                          className="w-full"
                          onClick={() => onNavigate('contact')}
                        >
                          Inquire for Your Team
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* How Our Services Work (Primary Background: #EAF1F8) */}
      <section className="py-20 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Service Execution"
            title="How We Deliver"
            highlightedText="Measurable Transformation."
            subtitle="Our structured engagement model ensures zero disruption to your daily sprint cycles."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
              <span className="text-2xl font-black text-[#8FAAC8] block mb-2">Stage 1</span>
              <h4 className="text-base font-bold text-[#12457F] mb-2">Discovery & Gap Assessment</h4>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                We assess current team competencies, review target stack roadmaps, and construct tailored learning milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
              <span className="text-2xl font-black text-[#1B58A6] block mb-2">Stage 2</span>
              <h4 className="text-base font-bold text-[#12457F] mb-2">Interactive Cohort Delivery</h4>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                Learners work through code challenges, micro-modules, and mentor reviews aligned with their weekly sprint cadence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
              <span className="text-2xl font-black text-[#12457F] block mb-2">Stage 3</span>
              <h4 className="text-base font-bold text-[#12457F] mb-2">Production Capstone & Review</h4>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                Participants deliver real capstone implementations that solve tangible business challenges within your tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER IMPACT SECTION (Replaces FAQ section) */}
      <CustomerImpactSection onNavigate={onNavigate} />

    </div>
  );
};
