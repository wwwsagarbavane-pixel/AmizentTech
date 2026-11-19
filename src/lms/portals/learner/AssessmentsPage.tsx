import React, { useState } from 'react';
import { Award, Clock, CheckCircle2, ArrowRight, PlayCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsAssessment } from '../../types/lmsTypes';

export const AssessmentsPage: React.FC = () => {
  const { currentUser } = useAuth();
  const assessments = LmsStorage.getAssessments();

  const [activeAssessment, setActiveAssessment] = useState<LmsAssessment | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [assessmentResult, setAssessmentResult] = useState<{ score: number; skillIq: number; passed: boolean } | null>(null);

  const handleStart = (assess: LmsAssessment) => {
    setActiveAssessment(assess);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setAssessmentResult(null);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNext = () => {
    if (!activeAssessment) return;

    if (currentQuestionIndex < activeAssessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate score & benchmark Skill IQ
      let correct = 0;
      activeAssessment.questions.forEach(q => {
        if (userAnswers[q.id] === q.correctOptionIndex) {
          correct++;
        }
      });

      const percent = Math.round((correct / activeAssessment.questions.length) * 100);
      const calculatedSkillIq = Math.min(300, Math.round(150 + (percent * 1.5)));

      // Persist in mock storage
      if (currentUser) {
        currentUser.skillIq = Math.max(currentUser.skillIq || 200, calculatedSkillIq);
        LmsStorage.updateUser(currentUser);
      }

      setAssessmentResult({
        score: percent,
        skillIq: calculatedSkillIq,
        passed: percent >= 70
      });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Skill &amp; Role Assessments
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
              Benchmark IQ {currentUser?.skillIq || 284}/300
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Adaptive questions calibrated with Fortune 500 panels. Verify proficiency from Novice to Expert.
          </p>
        </div>
      </div>

      {/* Assessment Modal / Quiz Screen */}
      {activeAssessment ? (
        <div className="bg-white/80 backdrop-blur-2xl p-7 sm:p-9 rounded-[36px] border border-white/90 shadow-[0_20px_50px_rgba(20,50,90,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-6">
          {assessmentResult ? (
            // Results Screen
            <div className="text-center py-8 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-[#0B1B2B]">Assessment Completed!</h3>
              <div className="p-5 rounded-3xl bg-white/70 border border-slate-100 space-y-2 shadow-xs">
                <div className="text-xs text-slate-400 font-bold uppercase">Calculated Skill IQ</div>
                <div className="text-4xl font-black font-mono text-[#2B62EE]">
                  {assessmentResult.skillIq} IQ
                </div>
                <div className="text-xs font-bold text-emerald-600">
                  Accuracy: {assessmentResult.score}% • Verified Proficient
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setActiveAssessment(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-black shadow-md cursor-pointer transition-all"
                >
                  Return to Assessments
                </button>
              </div>
            </div>
          ) : (
            // Active Question Screen
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs border-b pb-3 border-slate-100">
                <span className="font-bold text-[#2B62EE]">
                  Question {currentQuestionIndex + 1} of {activeAssessment.questions.length}
                </span>
                <span className="flex items-center gap-1 font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5" /> 18:45 Remaining
                </span>
              </div>

              {/* Question Text */}
              {(() => {
                const q = activeAssessment.questions[currentQuestionIndex];
                if (!q) return null;

                return (
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-black text-[#0B1B2B] tracking-tight">
                      {q.question}
                    </h3>

                    <div className="space-y-2.5">
                      {q.options.map((opt, i) => {
                        const isSelected = userAnswers[q.id] === i;
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelectOption(q.id, i)}
                            className={`w-full text-left p-4 rounded-2xl text-xs sm:text-sm font-medium transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-blue-50/80 border-[#2B62EE] text-[#2B62EE] font-bold shadow-xs'
                                : 'bg-white/60 border-slate-200/70 hover:bg-white text-slate-700'
                            }`}
                          >
                            <span className="font-mono mr-2 text-slate-400">[{String.fromCharCode(65 + i)}]</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveAssessment(null)}
                  className="text-xs font-bold text-slate-400 hover:text-red-500 cursor-pointer"
                >
                  Exit Assessment
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-xs font-black shadow-[0_6px_18px_rgba(43,98,238,0.25)] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{currentQuestionIndex === activeAssessment.questions.length - 1 ? 'Finish & Submit' : 'Next Question'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}
        </div>
      ) : (
        // Assessment Catalog Cards in Frosted Glass
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assessments.map((assess) => (
            <div
              key={assess.id}
              className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#2B62EE]">
                    {assess.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" /> {assess.durationMinutes}m
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                  {assess.title}
                </h3>

                <p className="text-xs text-[#758EA8]">
                  Target Benchmark: <strong className="text-emerald-600">{assess.benchmarkTarget}</strong>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Best Score</div>
                  <div className="text-sm font-black font-mono text-[#2B62EE]">
                    {assess.userBestScore ? `${assess.userBestScore} / 300 IQ` : 'Not Taken'}
                  </div>
                </div>

                <button
                  onClick={() => handleStart(assess)}
                  className="px-5 py-2.5 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-black shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-sky-400" />
                  <span>Take Assessment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};