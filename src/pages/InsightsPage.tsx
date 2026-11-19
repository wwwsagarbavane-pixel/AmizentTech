import React, { useState } from 'react';
import { NavPage, InsightArticle } from '../types';
import { insightsData } from '../data/insightsData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { 
  Search, 
  Clock, 
  Tag, 
  ArrowRight, 
  X, 
  BookOpen, 
  Share2, 
  Check, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: NavPage) => void;
  selectedArticleId?: string;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, selectedArticleId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(
    selectedArticleId ? insightsData.find(a => a.id === selectedArticleId) || null : null
  );
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Technology Insights', 'AI & Innovation', 'Learning & Development', 'Industry Trends', 'Digital Transformation'];

  const filteredArticles = insightsData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Insights Hero (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <BookOpen className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Resources & Engineering Commentary</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Insights on Modern Tech,{' '}
              <span className="text-[#1B58A6] block mt-1">Talent & Architecture.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              Explore critical analysis, instructional design methodology, and strategic guidance curated by AmIzent technology advisors.
            </p>
          </div>

          {/* Search Bar & Category Filter Bar */}
          <div className="mt-10 space-y-4 max-w-4xl">
            <div className="relative">
              <Search className="w-5 h-5 text-[#8FAAC8] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, keyword, or technology (e.g. AI, Cloud, DORA)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#C8D7E8] text-sm text-[#14181F] focus:outline-none focus:border-[#1B58A6] focus:ring-2 focus:ring-[#1B58A6]/20 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8FAAC8] hover:text-[#12457F]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 pt-2">
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
          </div>
        </div>
      </section>

      {/* Articles Listing Grid (Secondary Background: #DCE7F2) */}
      <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredArticles.length === 0 ? (
            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-12 text-center max-w-xl mx-auto space-y-4">
              <div className="text-2xl font-bold text-[#12457F]">No Matching Articles</div>
              <p className="text-sm text-[#4A607A]">
                Try adjusting your search criteria or selecting a different category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-4 py-2 rounded-xl bg-[#1B58A6] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image Placeholder */}
                    <div className="h-44 rounded-2xl bg-[#EAF1F8] border border-[#C8D7E8] p-5 mb-5 flex flex-col justify-between group-hover:border-[#1B58A6] transition-colors relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-extrabold text-[#12457F] bg-white px-3 py-1 rounded-full shadow-sm">
                          {article.category}
                        </span>
                        <span className="text-xs text-[#4A607A] font-semibold">{article.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#12457F] font-bold">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#1B58A6]" />
                          {article.readTime}
                        </span>
                        <span className="text-[10px] text-[#8FAAC8] uppercase tracking-wider">Demo Content</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#12457F] mb-3 group-hover:text-[#1B58A6] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom Bar: Tags & Action */}
                  <div className="pt-4 border-t border-[#C8D7E8]/70 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 1).map((t) => (
                        <span key={t} className="text-[11px] font-semibold text-[#8FAAC8]">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1B58A6] hover:underline"
                    >
                      <span>Read Story</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Reader Drawer / Modal for Full Article View */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14181F]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#C8D7E8] flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#4A607A] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1B58A6]" />
                  {activeArticle.readTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl text-[#4A607A] hover:bg-[#DCE7F2] transition-colors"
                  title="Copy link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl text-[#4A607A] hover:bg-[#DCE7F2] transition-colors"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12457F] leading-snug">
                {activeArticle.title}
              </h2>

              <div className="p-4 rounded-2xl bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-semibold text-[#12457F] italic">
                "{activeArticle.excerpt}"
              </div>

              <div className="space-y-4 text-sm md:text-base text-[#14181F] leading-relaxed">
                {activeArticle.bodyParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-[#C8D7E8] flex flex-wrap gap-2">
                {activeArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white border border-[#C8D7E8] text-xs font-semibold text-[#12457F]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#C8D7E8] bg-[#DCE7F2]/40 flex items-center justify-between">
              <span className="text-xs text-[#4A607A]">
                AmIzent Tech Services Editorial Archive
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-xl bg-[#1B58A6] text-white text-xs font-bold hover:bg-[#154583] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
