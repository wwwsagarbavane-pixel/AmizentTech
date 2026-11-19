import React, { useState } from 'react';
import { Building2, Users, FolderGit2, Upload, UserPlus, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsDepartment } from '../../types/lmsTypes';

export const OrgDashboard: React.FC = () => {
  const { currentUser, theme } = useAuth();
  const isDark = theme === 'dark';

  const departments = LmsStorage.getDepartments();
  const courses = LmsStorage.getCourses();

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedDept, setSelectedDept] = useState(departments[0]?.id || '');
  const [selectedCourse, setSelectedCourse] = useState(courses[0]?.id || '');
  const [deadline, setDeadline] = useState('2026-03-31');
  const [assignSuccess, setAssignSuccess] = useState(false);

  // Bulk Import state
  const [csvText, setCsvText] = useState('name,email,department\nAlex Mercer,a.mercer@apexglobal.com,Cloud & Infrastructure Services\nPriya Patel,p.patel@apexglobal.com,AI & Autonomous Automation');
  const [importSuccess, setImportSuccess] = useState(false);

  const handleAssignTraining = (e: React.FormEvent) => {
    e.preventDefault();
    setAssignSuccess(true);
    setTimeout(() => {
      setAssignSuccess(false);
      setShowAssignModal(false);
    }, 1500);
  };

  const handleBulkImport = (e: React.FormEvent) => {
    e.preventDefault();
    setImportSuccess(true);
    setTimeout(() => {
      setImportSuccess(false);
      setShowImportModal(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
        isDark 
          ? 'bg-gradient-to-r from-[#1E1F30] via-[#2A2B42] to-[#1E1F30] border-white/10 text-white' 
          : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
      }`}>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase text-[#1E75E8] tracking-wider">
              Organization Enterprise Portal
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
              Clean-Core S/4HANA Tier
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Apex Global Enterprises
          </h2>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
            Workforce skill readiness, department capability matrix, and targeted enterprise learning assignments.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setShowImportModal(true)}
            className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Bulk CSV Import</span>
          </button>

          <button
            onClick={() => setShowAssignModal(true)}
            className="px-5 py-2 rounded-full bg-[#1E75E8] hover:bg-[#1665D8] text-white text-xs font-black shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Assign Course to Team</span>
          </button>
        </div>
      </div>

      {/* Seat Utilization & Workforce Health KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Seat Allocation Card */}
        <div className={`p-6 rounded-3xl border space-y-3 ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>Enterprise Seat Licenses</span>
            <span className="font-mono text-[#1E75E8]">342 / 500 Used</span>
          </div>

          <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[#12457F] via-[#1E75E8] to-[#38BDF8]" style={{ width: '68.4%' }} />
          </div>

          <div className="flex justify-between items-center text-[11px] text-slate-400">
            <span>158 Seats Available</span>
            <span className="text-emerald-500 font-bold">68.4% Active Utilization</span>
          </div>
        </div>

        {/* Average Skill IQ Card */}
        <div className={`p-6 rounded-3xl border space-y-2 ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="text-[10px] font-bold uppercase text-slate-400">Workforce Skill Benchmark</div>
          <div className="text-3xl font-black font-mono text-[#1E75E8]">275 IQ Avg</div>
          <div className="text-[11px] text-emerald-500 font-bold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +22.4 IQ gain over 90 days
          </div>
        </div>

        {/* Global Compliance & Completion */}
        <div className={`p-6 rounded-3xl border space-y-2 ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="text-[10px] font-bold uppercase text-slate-400">Mandatory Track Completion</div>
          <div className="text-3xl font-black font-mono text-emerald-500">85.1%</div>
          <div className="text-[11px] text-slate-400">Targeting 90% by Q1 Close</div>
        </div>

      </div>

      {/* Departments Breakdown */}
      <div className={`p-6 rounded-3xl border space-y-4 ${
        isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
      }`}>
        <h3 className="text-base font-black tracking-tight">Department Capability Matrix</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`p-5 rounded-2xl border space-y-3 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#1E75E8]/10 text-[#1E75E8] flex items-center justify-center font-bold">
                  <Building2 className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-black uppercase text-slate-400">
                  {dept.memberCount} Members
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm">{dept.name}</h4>
                <div className="text-[11px] text-slate-400 mt-0.5">Manager: {dept.managerName}</div>
              </div>

              <div className="pt-2 border-t border-slate-200/50 dark:border-white/10 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Avg Skill IQ:</span>
                  <span className="font-mono font-bold text-[#1E75E8]">{dept.averageSkillIq} IQ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Completion:</span>
                  <span className="font-mono font-bold text-emerald-500">{dept.courseCompletionRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assign Training Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-[#181924] text-[#122443] dark:text-white border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-black">Assign Training Program</h3>
            <p className="text-xs text-slate-400">Enrolls all employees in the selected department into this program with mandatory deadlines.</p>

            {assignSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Training assigned to {departments.find(d => d.id === selectedDept)?.name}!</span>
              </div>
            ) : (
              <form onSubmit={handleAssignTraining} className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Target Department</label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-xs outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                  >
                    {departments.map(d => (
                      <option key={d.id} value={d.id}>{d.name} ({d.memberCount} members)</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Program</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-xs outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                  >
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Mandatory Completion Deadline</label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-xs outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 font-mono"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAssignModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#1E75E8] text-white text-xs font-black shadow-md"
                  >
                    Confirm Assignment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Bulk Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-[#181924] text-[#122443] dark:text-white border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-black">Bulk Employee CSV Provisioning</h3>
            <p className="text-xs text-slate-400">Paste CSV data below with columns: name, email, department.</p>

            {importSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>2 employees successfully provisioned and assigned seat licenses!</span>
              </div>
            ) : (
              <form onSubmit={handleBulkImport} className="space-y-3">
                <textarea
                  rows={6}
                  value={csvText}
                  onChange={(e) => setCsvText(e.target.value)}
                  className="w-full p-3 rounded-xl border text-xs font-mono outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                />

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowImportModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#1E75E8] text-white text-xs font-black shadow-md"
                  >
                    Import Employees
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
