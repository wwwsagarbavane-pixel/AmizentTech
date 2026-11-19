import React, { useState, useEffect, useRef } from 'react';
import { NavPage } from '../../types';
import {
  ArrowRight,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Layers,
  Cpu,
  Cloud,
  Shield,
  Terminal,
  Award,
  BarChart3,
  Building2,
  Users,
  BookOpen,
  FileText,
  Calendar,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Video,
  Play,
  GraduationCap,
  Search,
  LogIn
} from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  brandMode?: 'PAYROT' | 'AMIZENT';
  onToggleBrand?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  brandMode = 'AMIZENT',
  onToggleBrand
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isPayrot = brandMode === 'PAYROT';
  const firstTabLabel = isPayrot ? 'Payrot' : 'AmIzent';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-3.5 border-none ${scrolled || activeDropdown
        ? 'bg-white/98 backdrop-blur-2xl shadow-[0_12px_40px_rgba(18,69,127,0.08)]'
        : 'bg-[#D8E6F3]/40 backdrop-blur-xl'
        }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo on Left: Navy Emblem + Bold Text */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded-full bg-[#0B1B2B] flex items-center justify-center text-white shadow-sm group-hover:bg-[#1E75E8] transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>

            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-[#0B1B2B] uppercase font-sans">
                {isPayrot ? 'PAYROT' : 'AMIZENT'}
              </span>
            </div>
          </div>

          {/* Center Navigation Links: Why Pluralsight, Solutions, Learn, Resources, For individuals (Exact match to media_1794996446362_4b1efe5a.png) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] sm:text-[15px] font-medium text-[#0B1B2B]">

            {/* 1. Why Pluralsight / Why AmIzent */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('why')}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative font-medium ${activeDropdown === 'why' ? 'text-[#0B1B2B] font-semibold' : 'text-[#0B1B2B] hover:text-[#E11D48]'
                  }`}
              >
                <span>{firstTabLabel}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${activeDropdown === 'why' ? 'rotate-180 text-[#0B1B2B]' : 'text-[#0B1B2B]/75'
                  }`} />
                {activeDropdown === 'why' && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-[3px] bg-[#E11D48] rounded-t-sm" />
                )}
              </button>
            </div>

            {/* 2. Solutions */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('solutions')}
            >
              <button
                onClick={() => handleNavClick('solutions')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative font-medium ${activeDropdown === 'solutions' ? 'text-[#0B1B2B] font-semibold' : 'text-[#0B1B2B] hover:text-[#E11D48]'
                  }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${activeDropdown === 'solutions' ? 'rotate-180 text-[#0B1B2B]' : 'text-[#0B1B2B]/75'
                  }`} />
                {activeDropdown === 'solutions' && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-[3px] bg-[#E11D48] rounded-t-sm" />
                )}
              </button>
            </div>

            {/* 3. Learn */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('learn')}
            >
              <button
                onClick={() => handleNavClick('learning')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative font-medium ${activeDropdown === 'learn' ? 'text-[#0B1B2B] font-semibold' : 'text-[#0B1B2B] hover:text-[#E11D48]'
                  }`}
              >
                <span>Learn</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${activeDropdown === 'learn' ? 'rotate-180 text-[#0B1B2B]' : 'text-[#0B1B2B]/75'
                  }`} />
                {activeDropdown === 'learn' && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-[3px] bg-[#E11D48] rounded-t-sm" />
                )}
              </button>
            </div>

            {/* 4. Resources */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('resources')}
            >
              <button
                onClick={() => handleNavClick('insights')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative font-medium ${activeDropdown === 'resources' ? 'text-[#0B1B2B] font-semibold' : 'text-[#0B1B2B] hover:text-[#E11D48]'
                  }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${activeDropdown === 'resources' ? 'rotate-180 text-[#0B1B2B]' : 'text-[#0B1B2B]/75'
                  }`} />
                {activeDropdown === 'resources' && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-[3px] bg-[#E11D48] rounded-t-sm" />
                )}
              </button>
            </div>

            {/* 5. For individuals */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('individuals')}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative font-medium ${activeDropdown === 'individuals' ? 'text-[#0B1B2B] font-semibold' : 'text-[#0B1B2B] hover:text-[#E11D48]'
                  }`}
              >
                <span>For individuals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${activeDropdown === 'individuals' ? 'rotate-180 text-[#0B1B2B]' : 'text-[#0B1B2B]/75'
                  }`} />
                {activeDropdown === 'individuals' && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-[3px] bg-[#E11D48] rounded-t-sm" />
                )}
              </button>
            </div>

          </nav>

          {/* Right Action: Search, Contact sales, LMS Portal & Reference Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={() => handleNavClick('learning')}
              title="Search courses & topics"
              className="p-2 rounded-full text-[#0B1B2B] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Contact sales Pill Button matching media_1794993831704_7e6bb81a.jpg */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-1.5 rounded-full border border-[#0B1B2B] hover:bg-[#0B1B2B] hover:text-white text-[#0B1B2B] text-xs font-bold transition-all cursor-pointer"
            >
              Contact sales
            </button>

            {/* Log in Button */}
            <button
              onClick={() => handleNavClick('lms')}
              className="px-5 py-2 rounded-full bg-[#12457F] hover:bg-[#1E75E8] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Log in</span>
            </button>
          </div>

          {/* Mobile Actions: Clean & Spacious (No cramped Demo button) */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={() => handleNavClick('lms')}
              className="px-4 py-2 rounded-full bg-[#12457F] hover:bg-[#1E75E8] text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Log in</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl bg-white/60 hover:bg-white text-[#0B1B2B] shadow-2xs border border-slate-200/60 transition-all cursor-pointer active:scale-95"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MEGA DROPDOWNS (Exact match to uploaded user screenshots)                  */}
      {/* ========================================================================= */}
      {activeDropdown && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 pt-2 px-4 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
          onMouseEnter={() => {
            if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 shadow-[0_25px_70px_rgba(18,69,127,0.18)] border border-slate-100 ring-1 ring-black/5">

            {/* 1. WHY AMIZENT DROPDOWN (Screenshot media_1794993831719_258d74bc.jpg) */}
            {activeDropdown === 'why' && (
              <div className="grid grid-cols-12 gap-8 text-left">

                {/* Column 1: Expert-led content & Skill validation */}
                <div className="col-span-4 space-y-6 border-r border-slate-100 pr-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Expert-led content</span>
                    </div>
                    <div className="space-y-3">
                      <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Courses</div>
                        <div className="text-[11px] text-[#5A7394]">Learn from the best with 6,500+ expert-led courses</div>
                      </div>
                      <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Learning paths</div>
                        <div className="text-[11px] text-[#5A7394]">Go from foundation to expert with curated learning journeys</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                      <Award className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>Skill validation</span>
                    </div>
                    <div className="space-y-3">
                      <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Skill IQ™</div>
                        <div className="text-[11px] text-[#5A7394]">Benchmark skills with over 500 skill assessments</div>
                      </div>
                      <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Certification prep</div>
                        <div className="text-[11px] text-[#5A7394]">Get test-ready with practice exams and certification paths</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Immersive experiences */}
                <div className="col-span-4 space-y-4 border-r border-slate-100 pr-6">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <Cpu className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Immersive experiences</span>
                  </div>
                  <div className="space-y-4">
                    <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                      <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Hands-on labs</div>
                      <div className="text-[11px] text-[#5A7394]">Test skills with 2,500+ real-world cloud scenarios</div>
                    </div>
                    <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                      <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Sandboxes</div>
                      <div className="text-[11px] text-[#5A7394]">Practice skills freely and explore tools in a secure virtual environment</div>
                    </div>
                    <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                      <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">AmIzent AI Skill Mentor (Iris AI)</div>
                      <div className="text-[11px] text-[#5A7394]">Your AI assistant throughout the learning journey</div>
                    </div>
                    <div onClick={() => handleNavClick('learning')} className="cursor-pointer group">
                      <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Clixie Interactive Video Checkpoints</div>
                      <div className="text-[11px] text-[#5A7394]">28+ interactive element types with automated in-stream quizzes</div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Leader tools & Professional services */}
                <div className="col-span-4 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                      <BarChart3 className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>Leader tools</span>
                    </div>
                    <div className="space-y-3">
                      <div onClick={() => handleNavClick('solutions')} className="cursor-pointer group">
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Advanced analytics</div>
                        <div className="text-[11px] text-[#5A7394]">Measure progress and celebrate wins with actionable insights</div>
                      </div>
                      <div onClick={() => handleNavClick('solutions')} className="cursor-pointer group">
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">Integrations</div>
                        <div className="text-[11px] text-[#5A7394]">Connect AmIzent to your org's everyday tools (Teams, Canvas, Webex)</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                      <Building2 className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>Professional services</span>
                    </div>
                    <div onClick={() => handleNavClick('services')} className="cursor-pointer group">
                      <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">ProServ &amp; SAP Transformation</div>
                      <div className="text-[11px] text-[#5A7394]">Set your org up for success with expert service consultants (Applexus Partnership)</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* 2. SOLUTIONS DROPDOWN (Screenshot media_1794993831633_0fad48e3.png) */}
            {activeDropdown === 'solutions' && (
              <div className="grid grid-cols-12 gap-8 text-left">

                {/* Column 1: Solutions we provide (6 cols) */}
                <div className="col-span-7 space-y-4 border-r border-slate-100 pr-8">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Solutions we provide</span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { title: 'AI Academy', desc: 'Pragmatic AI skills for business professionals' },
                      { title: 'AI Ready', desc: 'Production-ready AI skills for software and DevOps teams' },
                      { title: 'Cloud Ready', desc: 'Structured cloud learning, from fundamentals to specialization' },
                      { title: 'Secure Ready', desc: 'Role-aligned security skill development and validation' },
                      { title: 'SAP S/4HANA Clean-Core', desc: 'Applexus-powered ERP modernization, RISE/GROW & BTP' },
                      { title: 'Instructor-led training', desc: 'Live workshops and programs for crucial initiatives' }
                    ].map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleNavClick('solutions')}
                        className="cursor-pointer group hover:bg-[#F8FBFF] p-2 rounded-xl transition-colors"
                      >
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8] flex items-center justify-between">
                          <span>{item.title}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#1E75E8]" />
                        </div>
                        <div className="text-[11px] text-[#5A7394] mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Who we serve (5 cols) */}
                <div className="col-span-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <Building2 className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Who we serve</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: 'Enterprise', desc: 'Workforce capability scaling for 1,000+ member organizations' },
                      { title: 'Small business', desc: 'Targeted agile upskilling for high-velocity squads' },
                      { title: 'Public sector', desc: 'Government, compliance and defense capability tracks' },
                      { title: 'Nonprofits', desc: 'Accessible digital fluency and technical enablement' },
                      { title: 'SAP & ERP Enterprises', desc: 'Clean-core digital transformation with Applexus' }
                    ].map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleNavClick('solutions')}
                        className="cursor-pointer group hover:bg-[#F8FBFF] p-2 rounded-xl transition-colors"
                      >
                        <div className="text-xs font-black text-[#122443] group-hover:text-[#1E75E8]">{item.title}</div>
                        <div className="text-[11px] text-[#5A7394] mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 3. LEARN DROPDOWN (Screenshot media_1794993831625_c2a013d7.png) */}
            {activeDropdown === 'learn' && (
              <div className="max-w-md mx-auto text-left space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                  <Terminal className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Learn</span>
                </div>

                <div className="space-y-1">
                  {[
                    'Artificial intelligence',
                    'Cloud',
                    'Data',
                    'IT Ops',
                    'Security',
                    'Software development',
                    'SAP S/4HANA & Clean-Core Cloud',
                    'Business & professional development'
                  ].map((topic) => (
                    <div
                      key={topic}
                      onClick={() => handleNavClick('learning')}
                      className="px-3 py-2 rounded-xl text-xs font-black text-[#122443] hover:text-[#1E75E8] hover:bg-[#F0F6FD] cursor-pointer transition-colors"
                    >
                      {topic}
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('learning')}
                    className="text-xs font-black text-[#E11D48] hover:text-[#BE123C] flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Browse all topics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 4. RESOURCES DROPDOWN (Screenshot media_1794993831704_7e6bb81a.jpg) */}
            {activeDropdown === 'resources' && (
              <div className="grid grid-cols-12 gap-8 text-left">

                {/* Column 1: Learn */}
                <div className="col-span-3 space-y-3 border-r border-slate-100 pr-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <BookOpen className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Learn</span>
                  </div>
                  <div className="space-y-2 text-xs font-bold text-[#122443]">
                    {['Case studies', 'Podcasts', 'Reports', 'Tech guides', 'Video series'].map((item) => (
                      <div key={item} onClick={() => handleNavClick('insights')} className="hover:text-[#1E75E8] cursor-pointer py-1">{item}</div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button onClick={() => handleNavClick('insights')} className="text-xs font-black text-[#E11D48] flex items-center gap-1 hover:underline cursor-pointer">
                      <span>Resource hub</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Column 2: Connect */}
                <div className="col-span-2 space-y-3 border-r border-slate-100 pr-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <Calendar className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Connect</span>
                  </div>
                  <div className="space-y-2 text-xs font-bold text-[#122443]">
                    {['Events', 'Webinars'].map((item) => (
                      <div key={item} onClick={() => handleNavClick('contact')} className="hover:text-[#1E75E8] cursor-pointer py-1">{item}</div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Blog */}
                <div className="col-span-3 space-y-3 border-r border-slate-100 pr-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <FileText className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Blog</span>
                  </div>
                  <div className="space-y-2 text-xs font-bold text-[#122443]">
                    {['Blog home', 'Software dev', 'Cloud', 'IT Ops', 'Data', 'Security'].map((item) => (
                      <div key={item} onClick={() => handleNavClick('insights')} className="hover:text-[#1E75E8] cursor-pointer py-1">{item}</div>
                    ))}
                  </div>
                </div>

                {/* Column 4: Featured resource */}
                <div className="col-span-4 space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-[#12457F] pb-1 border-b border-slate-100">
                    Featured resource
                  </div>
                  <div className="p-3 bg-gradient-to-br from-[#F8FBFF] to-white rounded-2xl border border-slate-200 space-y-2">
                    <div className="aspect-[16/9] rounded-xl bg-gradient-to-tr from-[#1E75E8] to-[#0B2B50] flex flex-col justify-center items-center text-white p-4 shadow-sm text-center">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#38BDF8]">REPORT</span>
                      <span className="text-base font-black tracking-tight mt-1">2026 Tech Forecast</span>
                      <span className="text-[10px] text-white/80 mt-1">Generative AI, SAP Cloud &amp; Workforce Agility</span>
                    </div>
                    <p className="text-[11px] text-[#5A7394] leading-relaxed">
                      1,500+ tech insiders share what's shifting fastest in enterprise IT.
                    </p>
                    <button
                      onClick={() => handleNavClick('insights')}
                      className="text-xs font-black text-[#E11D48] flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Download the forecast</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* 5. FOR INDIVIDUALS DROPDOWN (Screenshot media_1794993831601_87376f31.png) */}
            {activeDropdown === 'individuals' && (
              <div className="max-w-2xl mx-auto grid grid-cols-2 gap-8 text-left">

                {/* Column 1: Individuals */}
                <div className="space-y-4 border-r border-slate-100 pr-6">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <Users className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Individuals</span>
                  </div>
                  <div className="space-y-3 text-xs font-bold text-[#122443]">
                    <div onClick={() => handleNavClick('contact')} className="hover:text-[#1E75E8] cursor-pointer py-1">Try for free</div>
                    <div onClick={() => handleNavClick('contact')} className="hover:text-[#1E75E8] cursor-pointer py-1">Gift AmIzent Tech Pass</div>
                  </div>
                </div>

                {/* Column 2: Plans */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11D48] pb-1 border-b border-slate-100">
                    <Layers className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Plans</span>
                  </div>
                  <div className="space-y-3 text-xs font-bold text-[#122443]">
                    <div onClick={() => handleNavClick('services')} className="hover:text-[#1E75E8] cursor-pointer py-1">Core Tech</div>
                    <div onClick={() => handleNavClick('services')} className="hover:text-[#1E75E8] cursor-pointer py-1">AI+</div>
                    <div onClick={() => handleNavClick('services')} className="hover:text-[#1E75E8] cursor-pointer py-1">
                      <div>Cloud+</div>
                      <div className="text-[10px] text-[#758EA8] font-normal">Multi-cloud courses &amp; hands-on labs</div>
                    </div>
                    <div onClick={() => handleNavClick('services')} className="hover:text-[#1E75E8] cursor-pointer py-1">Security+</div>
                    <div onClick={() => handleNavClick('services')} className="hover:text-[#1E75E8] cursor-pointer py-1">Data+</div>
                    <div onClick={() => handleNavClick('services')} className="hover:text-[#1E75E8] cursor-pointer py-1 text-[#1E75E8] font-black">Complete Enterprise Pass</div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE ACCORDION DRAWER                                                   */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-slate-100 shadow-2xl py-6 px-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4">
          <div className="space-y-4 text-left">

            {/* 1. Why AmIzent */}
            <div className="border-b border-slate-100 pb-3">
              <div
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'why' ? null : 'why')}
                className="flex items-center justify-between text-sm font-black text-[#122443] cursor-pointer py-1"
              >
                <span>Why AmIzent</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'why' ? 'rotate-180 text-[#1E75E8]' : 'text-slate-400'}`} />
              </div>
              {mobileExpandedSection === 'why' && (
                <div className="pl-3 pt-2 space-y-2 text-xs text-[#5A7394]">
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Courses &amp; Learning Paths</div>
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Hands-on Cloud Labs &amp; Sandboxes</div>
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Skill IQ™ &amp; Certification Prep</div>
                  <div onClick={() => handleNavClick('services')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">SAP &amp; Cloud ProServ Consulting</div>
                </div>
              )}
            </div>

            {/* 2. Solutions */}
            <div className="border-b border-slate-100 pb-3">
              <div
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'solutions' ? null : 'solutions')}
                className="flex items-center justify-between text-sm font-black text-[#122443] cursor-pointer py-1"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'solutions' ? 'rotate-180 text-[#1E75E8]' : 'text-slate-400'}`} />
              </div>
              {mobileExpandedSection === 'solutions' && (
                <div className="pl-3 pt-2 space-y-2 text-xs text-[#5A7394]">
                  <div onClick={() => handleNavClick('solutions')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">AI Academy &amp; AI Ready</div>
                  <div onClick={() => handleNavClick('solutions')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Cloud Ready &amp; Secure Ready</div>
                  <div onClick={() => handleNavClick('solutions')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">SAP S/4HANA Clean-Core Transformation</div>
                  <div onClick={() => handleNavClick('solutions')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Enterprise &amp; Small Business Tracks</div>
                </div>
              )}
            </div>

            {/* 3. Learn */}
            <div className="border-b border-slate-100 pb-3">
              <div
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'learn' ? null : 'learn')}
                className="flex items-center justify-between text-sm font-black text-[#122443] cursor-pointer py-1"
              >
                <span>Learn</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'learn' ? 'rotate-180 text-[#1E75E8]' : 'text-slate-400'}`} />
              </div>
              {mobileExpandedSection === 'learn' && (
                <div className="pl-3 pt-2 space-y-2 text-xs text-[#5A7394]">
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Artificial Intelligence</div>
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Cloud Computing (AWS, Azure, GCP)</div>
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Data &amp; Modern Data Estates</div>
                  <div onClick={() => handleNavClick('learning')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Cybersecurity &amp; DevSecOps</div>
                </div>
              )}
            </div>

            {/* 4. Resources */}
            <div className="border-b border-slate-100 pb-3">
              <div
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'resources' ? null : 'resources')}
                className="flex items-center justify-between text-sm font-black text-[#122443] cursor-pointer py-1"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'resources' ? 'rotate-180 text-[#1E75E8]' : 'text-slate-400'}`} />
              </div>
              {mobileExpandedSection === 'resources' && (
                <div className="pl-3 pt-2 space-y-2 text-xs text-[#5A7394]">
                  <div onClick={() => handleNavClick('insights')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">2026 Tech Forecast Report</div>
                  <div onClick={() => handleNavClick('insights')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Case Studies &amp; Tech Guides</div>
                  <div onClick={() => handleNavClick('contact')} className="py-1 hover:text-[#1E75E8] cursor-pointer font-bold">Events &amp; Webinars</div>
                </div>
              )}
            </div>

            {/* 5. For Individuals */}
            <div className="border-b border-slate-100 pb-3">
              <div
                onClick={() => handleNavClick('services')}
                className="flex items-center justify-between text-sm font-black text-[#122443] cursor-pointer py-1"
              >
                <span>For individuals</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-full bg-[#1E75E8] text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <span>Contact Sales / Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
