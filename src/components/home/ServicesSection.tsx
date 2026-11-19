import React, { useState } from 'react';
import { NavPage } from '../../types';
import { servicesData } from '../../data/servicesData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { 
  Layers, 
  Sparkles, 
  Users, 
  Zap, 
  BookOpen, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (page: NavPage) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Capability Building', 'Innovation & Intelligence', 'Enterprise Enablement', 'Workforce Modernization'];

  const filteredServices = selectedCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory || s.badge?.includes(selectedCategory));

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-[#1B58A6]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#1B58A6]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#12457F]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#1B58A6]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#12457F]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#1B58A6]" />;
      default: return <Layers className="w-5 h-5 text-[#1B58A6]" />;
    }
  };

  const handleLearnMore = (id: string) => {
    onSelectService?.(id);
    onNavigate('services');
  };

  return (
    <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Our Core Capabilities"
            title="Strategic Services Built for"
            highlightedText="Enterprise Growth."
            subtitle="Inspired by the world-class learning frameworks of Pluralsight and Applexus, our programs empower your teams with scalable technology excellence."
          />

          <Button
            variant="outline"
            size="md"
            withArrow
            onClick={() => onNavigate('services')}
            className="self-start md:self-end"
          >
            View Full Service Catalog
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#12457F] text-white shadow-sm'
                  : 'bg-[#F8FBFF] text-[#4A607A] border border-[#C8D7E8] hover:border-[#1B58A6] hover:text-[#12457F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric & Responsive Cards Grid (PAYROT Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-2xl p-7 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#12457F] bg-[#DCE7F2] border border-[#C8D7E8]/80 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-bold text-[#8FAAC8] uppercase tracking-wider mb-1">
                  {service.category}
                </div>

                <h3 className="text-xl font-extrabold text-[#12457F] mb-3 group-hover:text-[#1B58A6] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Micro Features List */}
                <div className="space-y-2 mb-6 border-t border-[#C8D7E8]/60 pt-4">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#4A607A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B58A6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleLearnMore(service.id)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#EAF1F8] hover:bg-[#1B58A6] text-[#12457F] hover:text-white border border-[#C8D7E8] hover:border-[#1B58A6] text-xs font-bold transition-all duration-200 group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding client customization */}
        <div className="mt-10 p-4 rounded-xl bg-[#F8FBFF]/70 border border-[#C8D7E8] text-center">
          <p className="text-xs text-[#4A607A]">
            <span className="font-bold text-[#12457F]">Client Advisory Notice:</span> All service paths are customizable according to internal enterprise tech stacks and specific organizational learning goals.
          </p>
        </div>

      </div>
    </section>
  );
};
