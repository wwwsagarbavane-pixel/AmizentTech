import React from 'react';
import { NavPage } from '../../types';
import { insightsData } from '../../data/insightsData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Clock, ArrowRight, Tag, BookOpen, ChevronRight } from 'lucide-react';

interface InsightsSectionProps {
  onNavigate: (page: NavPage) => void;
  onSelectArticle?: (articleId: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigate, onSelectArticle }) => {
  const featuredArticles = insightsData.slice(0, 3);

  const handleReadArticle = (id: string) => {
    onSelectArticle?.(id);
    onNavigate('insights');
  };

  return (
    <section className="py-24 bg-[#EAF1F8] border-b border-[#C8D7E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="Thought Leadership"
            title="Perspectives on Technology,"
            highlightedText="Talent & Engineering."
            subtitle="In-depth analysis, research summaries, and strategic commentary from our technology advisors."
          />

          <Button
            variant="outline"
            size="md"
            withArrow
            onClick={() => onNavigate('insights')}
            className="self-start md:self-end"
          >
            Explore All Insights
          </Button>
        </div>

        {/* Editorial Articles Grid (PAYROT Magazine Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, idx) => (
            <article
              key={article.id}
              className="group bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-6 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Editorial Header with category badge & date */}
                <div className="h-44 rounded-2xl bg-[#DCE7F2] border border-[#C8D7E8] p-5 mb-5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#1B58A6] transition-colors">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-extrabold text-[#12457F] bg-white px-3 py-1 rounded-full shadow-sm">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#4A607A] font-semibold">{article.date}</span>
                  </div>

                  {/* Graphical Accent */}
                  <div className="z-10 flex items-center justify-between text-xs text-[#12457F] font-bold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1B58A6]" />
                      {article.readTime}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8FAAC8]">Editorial Demo</span>
                  </div>

                  {/* Ambient subtle glow */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#1B58A6]/10 rounded-full blur-xl pointer-events-none" />
                </div>

                <h3 className="text-lg font-extrabold text-[#12457F] mb-3 group-hover:text-[#1B58A6] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs md:text-sm text-[#4A607A] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read More Action */}
              <div className="pt-4 border-t border-[#C8D7E8]/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#8FAAC8]">
                  #{article.tags[0]}
                </span>
                <button
                  onClick={() => handleReadArticle(article.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B58A6] group-hover:underline"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
