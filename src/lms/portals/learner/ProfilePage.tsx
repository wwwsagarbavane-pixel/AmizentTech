import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Building2, 
  Globe, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Edit3, 
  Save, 
  X, 
  Camera, 
  Plus, 
  Trash2,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsUserProfileData, LmsView } from '../../types/lmsTypes';

interface ProfileProps {
  onSelectView?: (view: LmsView) => void;
}

export const ProfilePage: React.FC<ProfileProps> = ({ onSelectView }) => {
  const { currentUser, theme } = useAuth();
  const isDark = theme === 'dark';

  const [profile, setProfile] = useState<LmsUserProfileData>(() => LmsStorage.getUserProfile());
  const [activeTab, setActiveTab] = useState<'personal' | 'professional' | 'skills' | 'history' | 'org' | 'account'>('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState<LmsUserProfileData>(profile);
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    LmsStorage.updateUserProfile(formData);
    setProfile(formData);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Profile Header Card */}
      <div className={`relative overflow-hidden rounded-[36px] p-7 sm:p-9 border transition-all ${
        isDark 
          ? 'bg-gradient-to-r from-[#10131F] via-[#161C30] to-[#12234A] border-white/10 text-white' 
          : 'bg-gradient-to-r from-[#12457F] via-[#16559C] to-[#1B58A6] border-[#12457F] text-white shadow-[0_20px_50px_rgba(18,69,127,0.18)]'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <img
                src={formData.avatar}
                alt={formData.fullName}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover border-4 border-white/80 shadow-xl"
              />
              <button
                title="Change Avatar Photo"
                onClick={() => {
                  const newUrl = prompt('Enter image URL for avatar:', formData.avatar);
                  if (newUrl) setFormData(prev => ({ ...prev, avatar: newUrl }));
                }}
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-[#12457F] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{formData.fullName}</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold text-sky-100">
                  Skill IQ 284
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sky-200 font-medium">
                {formData.jobTitle} • {formData.company}
              </p>
              <div className="flex items-center gap-3 text-xs text-sky-100/80 pt-1">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {formData.location}</span>
                <span>•</span>
                <span>Member since Jan 2026</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2.5 rounded-full bg-white text-[#12457F] text-xs font-black shadow-lg hover:shadow-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            )}
          </div>
        </div>

        {/* Profile Completion Strip */}
        <div className="mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-sky-100 font-bold">Profile Completion: 92%</span>
          <div className="w-full sm:w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '92%' }} />
          </div>
        </div>
      </div>

      {/* Success Notification Alert */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Profile changes saved and synchronized across your AmIzent learner account!</span>
        </div>
      )}

      {/* 2. Profile Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#EEF4FF] dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs font-bold overflow-x-auto max-w-full">
        {(['personal', 'professional', 'skills', 'history', 'org', 'account'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full capitalize whitespace-nowrap cursor-pointer transition-all ${
              activeTab === tab
                ? 'bg-[#12457F] text-white font-black shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#12457F]'
            }`}
          >
            {tab === 'org' ? 'Organization' : tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* 3. Tab Content Surfaces */}
      <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl rounded-[32px] p-7 border border-white/90 dark:border-white/10 shadow-[0_15px_40px_rgba(20,50,90,0.05)] text-xs">
        
        {/* TAB 1: Personal Information */}
        {activeTab === 'personal' && (
          <div className="space-y-5">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-500 block mb-1">Full Legal Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Display Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Email Address</label>
                <input
                  type="email"
                  disabled
                  value={formData.email}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Phone Number</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-bold text-slate-500 block mb-1">Bio / Profile Summary</label>
                <textarea
                  rows={3}
                  disabled={!isEditing}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Professional Information */}
        {activeTab === 'professional' && (
          <div className="space-y-5">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-3 border-b border-slate-100 dark:border-white/10">
              Professional &amp; Career Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-500 block mb-1">Current Job Title</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Industry</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Experience Level</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">LinkedIn Profile</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-500 block mb-1">Portfolio / GitHub</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent disabled:opacity-70 font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Skills & Interests */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-2 border-b border-slate-100 dark:border-white/10">
                Verified Technical Competencies
              </h3>
              
              <div className="flex flex-wrap gap-2 pt-3">
                {formData.skills.map((s, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-xs font-bold text-[#1B58A6] dark:text-sky-300 flex items-center gap-2"
                  >
                    <span>{s}</span>
                    {isEditing && (
                      <button onClick={() => handleRemoveSkill(s)} className="text-rose-500 hover:text-rose-700">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {isEditing && (
                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="text"
                    placeholder="Add new skill (e.g. AWS Transit Gateway)..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 outline-none"
                  />
                  <button
                    onClick={handleAddSkill}
                    className="px-4 py-2 rounded-xl bg-[#12457F] text-white font-bold"
                  >
                    Add Skill
                  </button>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-2 border-b border-slate-100 dark:border-white/10">
                Career Goals
              </h3>
              <div className="space-y-2 pt-3">
                {formData.goals.map((g, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Learning History */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-2 border-b border-slate-100 dark:border-white/10">
              Verified Learning Log &amp; Records
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-between">
                <div>
                  <div className="font-black text-[#0B1B2B] dark:text-white">Autonomous AI Agents &amp; LangGraph</div>
                  <div className="text-[10px] text-slate-400">Enrolled Jan 2026 • 45% Completed</div>
                </div>
                <span className="font-mono font-bold text-blue-600">Active</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-between">
                <div>
                  <div className="font-black text-[#0B1B2B] dark:text-white">Applexus S/4HANA Clean-Core Cloud</div>
                  <div className="text-[10px] text-slate-400">Completed Jan 28, 2026 • Verified Certificate</div>
                </div>
                <span className="font-mono font-bold text-emerald-600">Passed (92%)</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Organization Details */}
        {activeTab === 'org' && (
          <div className="space-y-4">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-2 border-b border-slate-100 dark:border-white/10">
              Corporate Organization Affiliation
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5"><span className="text-slate-400 block">Organization</span><strong>{formData.orgDetails?.orgName}</strong></div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5"><span className="text-slate-400 block">Department</span><strong>{formData.orgDetails?.department}</strong></div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5"><span className="text-slate-400 block">Employee ID</span><strong className="font-mono">{formData.orgDetails?.employeeId}</strong></div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5"><span className="text-slate-400 block">Manager</span><strong>{formData.orgDetails?.manager}</strong></div>
            </div>
          </div>
        )}

        {/* TAB 6: Account Information */}
        {activeTab === 'account' && (
          <div className="space-y-4">
            <h3 className="text-base font-black text-[#0B1B2B] dark:text-white pb-2 border-b border-slate-100 dark:border-white/10">
              Account Security &amp; Identifier
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5"><span className="text-slate-500">Account ID:</span><span className="font-mono font-bold">{currentUser?.id || 'usr_8849'}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5"><span className="text-slate-500">Account Status:</span><span className="font-bold text-emerald-600">Active &amp; Verified</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5"><span className="text-slate-500">Registered:</span><span className="font-bold">January 2026</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5"><span className="text-slate-500">Two-Factor Authentication:</span><span className="font-bold text-[#1B58A6]">Enabled (TOTP Authenticator)</span></div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
