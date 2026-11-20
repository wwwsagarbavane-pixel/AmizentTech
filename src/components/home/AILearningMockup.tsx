import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Play, 
  Pause, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  RotateCcw, 
  Volume2, 
  Maximize2, 
  Languages, 
  BarChart2, 
  AlertCircle,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const AILearningMockup: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeLang, setActiveLang] = useState<'EN' | 'ES' | 'DE' | 'JA'>('EN');

  const quizOptions = [
    { id: 1, text: 'Rely purely on high-temperature system prompts without schemas', correct: false },
    { id: 2, text: 'Enforce JSON Schema validation & deterministic tool execution gates', correct: true },
    { id: 3, text: 'Disable error handling to increase agent reasoning speed', correct: false },
  ];

  const handleSelectAnswer = (id: number) => {
    if (quizSubmitted) return;
    setSelectedAnswer(id);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setQuizSubmitted(true);
    if (selectedAnswer === 2) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#12457F', '#1B58A6', '#8FAAC8']
        });
      } catch (e) {
        // Fallback gracefully if confetti fails
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setQuizSubmitted(false);
  };

  return (
    <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-bold text-[#12457F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1B58A6]" />
            <span>Interactive Learning Engine • Inspired by Clixie AI &amp; Pluralsight Skill Labs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#12457F] tracking-tight leading-tight">
            Make Learning More Engaging.{' '}
            <span className="text-[#1B58A6] block mt-1">More Interactive. More Impactful.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A607A] leading-relaxed">
            Experience how modern interactive video architectures, in-stream checkpoints, and adaptive assessments elevate technical capability retention.
          </p>

          {/* Important Regulatory Compliance Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FBFF] border border-[#C8D7E8] text-xs text-[#4A607A]">
            <AlertCircle className="w-4 h-4 text-[#1B58A6] shrink-0" />
            <span>
              <strong>Concept Prototype:</strong> Illustrates prospective interactive architectures designed for enterprise clients.
            </span>
          </div>
        </div>

        {/* Video Player & Interactive Quiz Mockup Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Main Video Player Mockup (7 cols) */}
          <div className="lg:col-span-7 bg-[#14181F] rounded-3xl p-4 md:p-6 shadow-elevated border border-[#C8D7E8] text-white relative">
            {/* Top Bar of the Video Player */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="font-semibold text-slate-300">Live Lesson: Architecting Deterministic Agent Guardrails</span>
              </div>
              
              {/* Multi-language Selector */}
              <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-lg text-[11px]">
                <Languages className="w-3.5 h-3.5 text-[#8FAAC8]" />
                {(['EN', 'ES', 'DE', 'JA'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-1.5 py-0.5 rounded font-bold transition-colors ${
                      activeLang === lang ? 'bg-[#1B58A6] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Viewport / Visual Simulator */}
            <div className="relative aspect-video bg-[#0E1726] rounded-2xl overflow-hidden my-4 flex flex-col justify-center items-center p-6 border border-white/5">
              {/* Background Mockup Diagram */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              <div className="z-10 text-center space-y-3">
                <div 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#1B58A6] hover:bg-[#154583] text-white flex items-center justify-center cursor-pointer shadow-lg mx-auto transition-transform hover:scale-105 active:scale-95"
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                </div>
                <div className="text-sm font-bold text-slate-200">
                  {isPlaying ? 'Simulation Running...' : 'Click to Preview Interactive Video'}
                </div>
                <div className="text-xs text-slate-400 max-w-sm">
                  Video pauses automatically at 03:15 for formative knowledge checkpoint.
                </div>
              </div>

              {/* In-Video Checkpoint Marker Badge */}
              <div className="absolute top-3 left-3 bg-[#1B58A6]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Checkpoint 02 Active
              </div>
            </div>

            {/* Interactive Timeline & Scrubber with Checkpoints */}
            <div className="space-y-2">
              <div className="relative w-full h-2 bg-slate-700 rounded-full cursor-pointer">
                <div className="h-2 bg-[#1B58A6] rounded-full w-[45%]"></div>
                {/* Checkpoint pins */}
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-slate-900" title="Quiz Checkpoint 1" />
                <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#1B58A6] shadow" title="Active Checkpoint" />
                <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#8FAAC8] rounded-full border-2 border-slate-900" title="Architecture Review" />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <div className="flex items-center gap-2">
                  <span>03:15</span>
                  <span>/</span>
                  <span>08:45</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    Interactive Quiz At 03:15
                  </span>
                  <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                  <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Interactive Quiz Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 shadow-premium relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C8D7E8]/70">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#1B58A6]/10 text-[#1B58A6]">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#12457F] uppercase tracking-wider">
                  Formative Checkpoint
                </span>
              </div>
              <span className="text-[11px] font-extrabold text-[#1B58A6] bg-[#DCE7F2] px-2 py-0.5 rounded">
                100 XP
              </span>
            </div>

            <h4 className="text-base font-extrabold text-[#12457F] leading-snug mb-4">
              How do you ensure autonomous agents do not execute unintended database modifications?
            </h4>

            {/* Answer Options */}
            <div className="space-y-2.5 mb-5">
              {quizOptions.map((opt) => {
                const isSelected = selectedAnswer === opt.id;
                let borderStyle = 'border-[#C8D7E8] hover:border-[#8FAAC8] bg-white';
                
                if (isSelected) {
                  borderStyle = 'border-[#1B58A6] bg-[#EAF1F8] font-semibold';
                }

                if (quizSubmitted) {
                  if (opt.correct) {
                    borderStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (isSelected && !opt.correct) {
                    borderStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                  }
                }

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectAnswer(opt.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all duration-150 flex items-start gap-2.5 ${borderStyle}`}
                  >
                    <span className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center text-[10px] ${
                      isSelected ? 'border-[#1B58A6] bg-[#1B58A6] text-white' : 'border-slate-300'
                    }`}>
                      {isSelected ? '✓' : ''}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Feedback & Actions */}
            {quizSubmitted ? (
              <div className="space-y-3">
                <div className={`p-3 rounded-xl text-xs ${selectedAnswer === 2 ? 'bg-emerald-100/70 text-emerald-900' : 'bg-amber-100/70 text-amber-900'}`}>
                  {selectedAnswer === 2 ? (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Correct!</strong> Deterministic tool gating prevents unauthorized mutations before execution.</span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span><strong>Review Concept:</strong> High-temperature outputs are probabilistic; production systems require schema enforcement.</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-2 px-4 rounded-xl bg-[#DCE7F2] hover:bg-[#C8D7E8] text-[#12457F] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Try Another Scenario
                </button>
              </div>
            ) : (
              <button
                disabled={selectedAnswer === null}
                onClick={handleCheckAnswer}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1B58A6] hover:bg-[#154583] text-white text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              >
                Submit Answer
              </button>
            )}

            {/* Analytics mini widget */}
            <div className="mt-5 pt-3 border-t border-[#C8D7E8]/70 flex items-center justify-between text-[11px] text-[#4A607A]">
              <span className="flex items-center gap-1">
                <BarChart2 className="w-3.5 h-3.5 text-[#1B58A6]" />
                Retention telemetry logged
              </span>
              <span className="font-bold text-[#12457F]">94.2% Class Accuracy</span>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid for Clixie AI Inspiration */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
            <div className="text-sm font-extrabold text-[#12457F] mb-1">Interactive Video</div>
            <p className="text-xs text-[#4A607A]">Embedded questions, branching chapters, and real-time knowledge verification.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
            <div className="text-sm font-extrabold text-[#12457F] mb-1">Embedded Sandboxes</div>
            <p className="text-xs text-[#4A607A]">Learners execute real code in-browser directly adjacent to video lectures.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
            <div className="text-sm font-extrabold text-[#12457F] mb-1">Telemetry Analytics</div>
            <p className="text-xs text-[#4A607A]">Precise heatmaps showing comprehension drops and concept mastery.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8]">
            <div className="text-sm font-extrabold text-[#12457F] mb-1">Adaptive Pathways</div>
            <p className="text-xs text-[#4A607A]">Dynamic curriculum adjustment based on student checkpoint performance.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
