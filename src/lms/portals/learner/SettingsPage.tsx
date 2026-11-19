import React, { useState } from 'react';
import { 
  Settings, 
  ShieldCheck, 
  Bell, 
  Eye, 
  Moon, 
  Sun, 
  Globe, 
  Key, 
  Smartphone, 
  LifeBuoy, 
  CheckCircle2, 
  AlertCircle, 
  Save, 
  X, 
  Lock, 
  Plus, 
  Send
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsUserSettingsData, LmsView } from '../../types/lmsTypes';

interface SettingsProps {
  onSelectView?: (view: LmsView) => void;
}

export const SettingsPage: React.FC<SettingsProps> = ({ onSelectView }) => {
  const { currentUser, theme, toggleTheme } = useAuth();
  const isDark = theme === 'dark';

  const [settings, setSettings] = useState<LmsUserSettingsData>(() => LmsStorage.getUserSettings());
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'notifications' | 'privacy' | 'appearance' | 'support'>('general');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Password Change Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Support Ticket Form State
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Hands-on Labs');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketSuccess, setTicketSuccess] = useState<string | null>(null);

  const handleSaveGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    LmsStorage.updateUserSettings(settings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword) {
      setPasswordMessage({ type: 'error', text: 'Please enter your current password.' });
      return;
    }
    if (newPassword.length < 8) {
      setPasswordMessage({ type: 'error', text: 'New password must be at least 8 characters long.' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    setPasswordMessage({ type: 'success', text: 'Password successfully updated!' });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPasswordMessage(null), 3000);
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketDescription.trim()) return;

    LmsStorage.addSupportTicket({
      subject: ticketSubject,
      category: ticketCategory,
      description: ticketDescription
    });
    setSettings(LmsStorage.getUserSettings());
    setTicketSuccess('Support ticket submitted! Ticket ID generated.');
    setTicketSubject('');
    setTicketDescription('');
    setTimeout(() => setTicketSuccess(null), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Top Banner */}
      <div className={`relative overflow-hidden rounded-[36px] p-7 sm:p-8 border transition-all ${
        isDark 
          ? 'bg-gradient-to-r from-[#10131F] via-[#161C30] to-[#12234A] border-white/10 text-white' 
          : 'bg-gradient-to-r from-[#12457F] via-[#16559C] to-[#1B58A6] border-[#12457F] text-white shadow-[0_20px_50px_rgba(18,69,127,0.18)]'
      }`}>
        <div className="max-w-2xl space-y-2.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-sky-200">
            Account Governance &amp; Controls
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Learner Account Settings
          </h1>
          <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-normal">
            Configure learning goals, password credentials, notification triggers, privacy visibility, and support tickets.
          </p>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Preferences updated and persisted.</span>
        </div>
      )}

      {/* 2. Settings Tabs Navigation */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#EEF4FF] dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs font-bold overflow-x-auto max-w-full">
        {(['general', 'security', 'notifications', 'privacy', 'appearance', 'support'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full capitalize whitespace-nowrap cursor-pointer transition-all ${
              activeTab === tab
                ? 'bg-[#12457F] text-white font-black shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#12457F]'
            }`}
          >
            {tab === 'support' ? 'Help & Support' : tab}
          </button>
        ))}
      </div>

      {/* 3. Settings View Surfaces */}
      <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl rounded-[32px] p-7 border border-white/90 dark:border-white/10 shadow-[0_15px_40px_rgba(20,50,90,0.05)] text-xs">
        
        {/* TAB 1: General Preferences */}
        {activeTab === 'general' && (
          <form onSubmit={handleSaveGeneral} className="space-y-5">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              General Learning Preferences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-500 block mb-1">Preferred Learning Format</label>
                <select
                  value={settings.preferredFormat}
                  onChange={(e) => setSettings({ ...settings, preferredFormat: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                >
                  <option value="blended">Interactive Blended (Video + Labs + Live)</option>
                  <option value="self_paced">Self-Paced On-Demand</option>
                  <option value="live">Live Instructor-Led</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Weekly Learning Goal Target</label>
                <input
                  type="number"
                  value={settings.weeklyGoalHours}
                  onChange={(e) => setSettings({ ...settings, weeklyGoalHours: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium font-mono"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Hours per week target</span>
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Preferred Language</label>
                <input
                  type="text"
                  value={settings.preferredLanguage}
                  onChange={(e) => setSettings({ ...settings, preferredLanguage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Default Calendar View</label>
                <select
                  value={settings.defaultCalendarView}
                  onChange={(e) => setSettings({ ...settings, defaultCalendarView: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                >
                  <option value="month">Month View</option>
                  <option value="week">Week View</option>
                  <option value="agenda">Agenda View</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#12457F] hover:bg-[#1B58A6] text-white font-black shadow-md cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: Account Security (Password change) */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Account Security &amp; Credentials
            </h3>

            {passwordMessage && (
              <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${
                passwordMessage.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}>
                {passwordMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{passwordMessage.text}</span>
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
              <div>
                <label className="font-bold text-slate-500 block mb-1">Current Password *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">New Password (8+ characters) *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Confirm New Password *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#12457F] hover:bg-[#1B58A6] text-white font-black shadow-md cursor-pointer"
              >
                Update Password
              </button>
            </form>

            <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-3">
              <h4 className="font-black text-[#0B1B2B] dark:text-white">Active Sessions &amp; Two-Factor Auth</h4>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0B1B2B] dark:text-white">Chrome on Windows (Current Active Session)</div>
                  <div className="text-[10px] text-slate-400">San Francisco, CA • IP: 192.168.1.45 • Verified Device</div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black">Active</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Notifications Preferences */}
        {activeTab === 'notifications' && (
          <div className="space-y-5">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Notification Dispatcher Preferences
            </h3>

            <div className="space-y-3">
              {[
                { key: 'courseUpdates', label: 'Course Curriculum Updates & Releases', desc: 'Notify when instructors add new video lessons or sandbox labs.' },
                { key: 'liveClassReminders', label: 'Live Masterclass Reminders', desc: 'Send reminder 15 minutes prior to live interactive sessions.' },
                { key: 'assessmentDeadlines', label: 'Skill IQ & Assessment Deadlines', desc: 'Alert 48 hours before quarterly assessment deadlines.' },
                { key: 'assignmentDeadlines', label: 'Assignment Grading Feedback', desc: 'Notify when instructor completes architecture rubric grading.' },
                { key: 'certificates', label: 'Verified Certificate Issuance', desc: 'Send instant email and in-app alert when course credential passes verification.' }
              ].map(item => {
                const isChecked = (settings.notifications as any)[item.key];
                return (
                  <div key={item.key} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5">
                    <div>
                      <div className="font-bold text-[#0B1B2B] dark:text-white">{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        const updated = {
                          ...settings,
                          notifications: {
                            ...settings.notifications,
                            [item.key]: e.target.checked
                          }
                        };
                        setSettings(updated);
                        LmsStorage.updateUserSettings(updated);
                      }}
                      className="w-4 h-4 accent-[#12457F] cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: Privacy Settings */}
        {activeTab === 'privacy' && (
          <div className="space-y-5">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Privacy &amp; Data Control
            </h3>

            <div className="space-y-4 max-w-md">
              <div>
                <label className="font-bold text-slate-500 block mb-1">Profile Visibility</label>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => {
                    const upd = { ...settings, privacy: { ...settings.privacy, profileVisibility: e.target.value as any } };
                    setSettings(upd);
                    LmsStorage.updateUserSettings(upd);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                >
                  <option value="public">Public (Visible to Enterprise Recruiters)</option>
                  <option value="org">Organization Only (My Company Cohort)</option>
                  <option value="private">Private (Only Me)</option>
                </select>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={() => alert('Exporting full GDPR personal data archive in JSON...')}
                  className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 font-bold text-slate-700 dark:text-slate-300"
                >
                  Download My Data Archive
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Appearance */}
        {activeTab === 'appearance' && (
          <div className="space-y-5">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Visual Theme &amp; Workspace Mode
            </h3>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div 
                onClick={() => { if (isDark) toggleTheme(); }}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  !isDark ? 'border-[#12457F] bg-blue-50/50' : 'border-slate-200 bg-white'
                }`}
              >
                <Sun className="w-6 h-6 text-amber-500 mb-2" />
                <h4 className="font-black text-[#0B1B2B]">Light (Frosted Alabaster)</h4>
                <p className="text-[10px] text-slate-400">Clean white surfaces &amp; light-blue glass</p>
              </div>

              <div 
                onClick={() => { if (!isDark) toggleTheme(); }}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  isDark ? 'border-[#1E75E8] bg-slate-900' : 'border-slate-200 bg-slate-950 text-white'
                }`}
              >
                <Moon className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="font-black text-white">Dark (Midnight Vault)</h4>
                <p className="text-[10px] text-slate-400">Deep obsidian background &amp; neon glows</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: Help & Support */}
        {activeTab === 'support' && (
          <div className="space-y-6">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Help Center &amp; Support Ticket Submission
            </h3>

            {ticketSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{ticketSuccess}</span>
              </div>
            )}

            <form onSubmit={handleCreateTicket} className="space-y-3 max-w-lg">
              <div>
                <label className="font-bold text-slate-500 block mb-1">Ticket Subject *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Question on Module 4 Cloud Sandbox Lab"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Issue Category</label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                >
                  <option value="Hands-on Labs">Hands-on Labs &amp; Sandboxes</option>
                  <option value="Certifications">Certificate Verification</option>
                  <option value="Billing">Billing &amp; Course Enrollment</option>
                  <option value="Technical">Video Player / Platform Technical</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Issue Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain the problem or inquiry in detail..."
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent font-medium"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#12457F] hover:bg-[#1B58A6] text-white font-black shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Ticket</span>
              </button>
            </form>

            <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-3">
              <h4 className="font-black text-[#0B1B2B] dark:text-white">Recent Support Tickets</h4>
              {settings.supportTickets?.map(tick => (
                <div key={tick.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block">{tick.id} • {tick.date}</span>
                    <strong className="text-[#0B1B2B] dark:text-white">{tick.subject}</strong>
                    <span className="text-[10px] text-slate-500 block">{tick.category}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md font-bold text-[10px] ${
                    tick.status === 'resolved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {tick.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
