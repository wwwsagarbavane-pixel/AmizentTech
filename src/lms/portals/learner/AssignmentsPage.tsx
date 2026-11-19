import React, { useState } from 'react';
import { 
  FileCheck2, 
  Clock, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Check, 
  X, 
  Sparkles,
  Paperclip
} from 'lucide-react';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsAssignment } from '../../types/lmsTypes';

export const AssignmentsPage: React.FC = () => {
  const [assignments, setAssignments] = useState<LmsAssignment[]>(() => LmsStorage.getAssignments());
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'submitted' | 'graded'>('all');
  const [selectedAssignment, setSelectedAssignment] = useState<LmsAssignment | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [submissionReceipt, setSubmissionReceipt] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pendingCount = assignments.filter(a => a.status === 'pending').length;
  const submittedCount = assignments.filter(a => a.status === 'submitted').length;
  const gradedCount = assignments.filter(a => a.status === 'graded').length;

  const filteredAssignments = assignments.filter(a => {
    if (activeTab === 'all') return true;
    return a.status === activeTab;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAssignment) return;

    setIsSubmitting(true);
    setTimeout(() => {
      LmsStorage.submitAssignment(selectedAssignment.id);
      setAssignments(LmsStorage.getAssignments());
      setIsSubmitting(false);
      setSubmissionReceipt(`REC-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Assignments &amp; Projects
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
              {assignments.length} Total
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Architecture diagrams, code deliverables, and peer evaluations.
          </p>
        </div>
      </div>

      {/* 2. Summary KPI Cards in Frosted Glass */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Total Assigned</span>
          <div className="text-2xl font-black text-[#0B1B2B] mt-1 font-mono">{assignments.length}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Pending Work</span>
          <div className="text-2xl font-black text-rose-500 mt-1 font-mono">{pendingCount}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Under Review</span>
          <div className="text-2xl font-black text-amber-500 mt-1 font-mono">{submittedCount}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Graded &amp; Passed</span>
          <div className="text-2xl font-black text-emerald-500 mt-1 font-mono">{gradedCount}</div>
        </div>
      </div>

      {/* 3. Main Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 text-xs font-bold w-fit">
        {(['all', 'pending', 'submitted', 'graded'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full capitalize cursor-pointer transition-all ${
              activeTab === tab
                ? 'bg-[#0B1B2B] text-white font-black shadow-xs'
                : 'text-slate-600 hover:text-[#0B1B2B]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 4. Assignment Cards & Table in Frosted Glass */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[36px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-x-auto">
        <table className="w-full text-left text-xs min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
              <th className="pb-3 pl-2">Assignment Title</th>
              <th className="pb-3">Course</th>
              <th className="pb-3">Due Date</th>
              <th className="pb-3">Max Marks</th>
              <th className="pb-3">Status</th>
              <th className="pb-3 text-right pr-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/70">
            {filteredAssignments.map((a) => (
              <tr key={a.id} className="hover:bg-white/60 transition-colors">
                <td className="py-4 pl-2 font-black text-[#0B1B2B] flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#2B62EE] flex-shrink-0" />
                  <span>{a.title}</span>
                </td>
                <td className="py-4 text-slate-500 font-medium">{a.courseTitle}</td>
                <td className="py-4 font-mono font-bold text-slate-600">{a.dueDate}</td>
                <td className="py-4 font-mono font-black">{a.score ? `${a.score} / ` : ''}{a.maxScore} pts</td>
                <td className="py-4">
                  {a.status === 'graded' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px]">Graded ({a.score} pts)</span>
                  ) : a.status === 'submitted' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold text-[10px]">Under Review</span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px]">Pending</span>
                  )}
                </td>
                <td className="py-4 text-right pr-2">
                  <button
                    onClick={() => { setSelectedAssignment(a); setSubmissionReceipt(null); }}
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white font-black text-[11px] cursor-pointer shadow-xs"
                  >
                    {a.status === 'pending' ? 'Submit' : 'View Details'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assignment Detail & Submission Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-white/90 space-y-5 animate-in fade-in zoom-in-95 text-xs">
            
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase text-[#2B62EE]">{selectedAssignment.courseTitle}</span>
                <h3 className="text-lg font-black text-[#0B1B2B] mt-0.5">{selectedAssignment.title}</h3>
              </div>
              <button onClick={() => setSelectedAssignment(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submissionReceipt ? (
              // Submission Success Receipt View
              <div className="py-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-base font-black text-[#0B1B2B]">Assignment Submitted Successfully!</h4>
                <p className="text-slate-500">Your deliverable has been queued for instructor evaluation.</p>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-xs font-bold text-slate-700">
                  Receipt ID: {submissionReceipt}
                </div>
                <button
                  onClick={() => setSelectedAssignment(null)}
                  className="px-6 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white font-black shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              // Submission or Evaluation Form
              <div className="space-y-4">
                
                <div className="p-4 rounded-2xl bg-white/70 border border-slate-100 space-y-1.5">
                  <div className="font-bold text-[#0B1B2B]">Instructions &amp; Criteria</div>
                  <p className="text-[#4A607A] leading-relaxed">
                    Upload your architecture artifact (ZIP, PDF, or Terraform repo link). Ensure zero hardcoded credentials and include automated linting outputs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-500">
                  <div className="p-3 rounded-xl bg-white/70 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Due Date</span>
                    <span className="font-mono font-bold text-[#0B1B2B]">{selectedAssignment.dueDate}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Max Score</span>
                    <span className="font-mono font-bold text-[#0B1B2B]">{selectedAssignment.maxScore} points</span>
                  </div>
                </div>

                {selectedAssignment.status === 'graded' && (
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                    <div className="flex justify-between items-center font-bold text-emerald-800">
                      <span>Evaluated Score</span>
                      <span className="text-base font-mono font-black">{selectedAssignment.score} / {selectedAssignment.maxScore}</span>
                    </div>
                    <p className="text-emerald-700 leading-relaxed">
                      Feedback: {selectedAssignment.feedback}
                    </p>
                  </div>
                )}

                {selectedAssignment.status === 'pending' && (
                  <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                    <label className="font-bold text-[#0B1B2B] block">Upload Deliverable</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-2 hover:border-[#2B62EE] transition-colors bg-white/50">
                      <Upload className="w-8 h-8 text-[#2B62EE] mx-auto" />
                      <div className="font-bold text-[#0B1B2B]">Drag &amp; drop files or browse</div>
                      <div className="text-[10px] text-slate-400">PDF, ZIP, TF, or MD up to 25MB</div>
                      <input 
                        type="file" 
                        onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                        className="hidden" 
                        id="asg_file_input"
                      />
                      <label 
                        htmlFor="asg_file_input"
                        className="inline-block mt-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold cursor-pointer hover:bg-slate-200"
                      >
                        {uploadFile ? uploadFile.name : 'Select File'}
                      </label>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedAssignment(null)}
                        className="px-4 py-2 rounded-full text-slate-500 font-bold hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white font-black shadow-md cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? 'Uploading...' : 'Submit Deliverable'}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};