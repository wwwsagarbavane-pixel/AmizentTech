import React, { useState } from 'react';
import { ArrowLeft, Building2, Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface OrgRegisterProps {
  onBackToLogin: () => void;
  onExitLms: () => void;
}

export const RegisterOrgPage: React.FC<OrgRegisterProps> = ({
  onBackToLogin,
  onExitLms
}) => {
  const { registerOrganization, theme } = useAuth();
  const isDark = theme === 'dark';

  const [orgName, setOrgName] = useState('');
  const [domain, setDomain] = useState('');
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState('Global S/4HANA Clean-Core');
  const [seats, setSeats] = useState(250);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim() || !adminName.trim() || !email.trim()) return;

    registerOrganization({ orgName, adminName, email });
    setSuccess(true);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between p-4 sm:p-8 select-none transition-colors ${
      isDark ? 'bg-[#0E0F17] text-white' : 'bg-[#EAF1F8] text-[#122443]'
    }`}>
      
      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <button
          onClick={onBackToLogin}
          className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white' : 'text-[#12457F] hover:text-[#1E75E8]'
          }`}
        >
          <ArrowLeft className="w-4 h-4 text-[#1E75E8]" />
          <span>Back to Sign In</span>
        </button>

        <span className="font-mono text-xs font-bold text-[#1E75E8]">
          ENTERPRISE TENANT ONBOARDING
        </span>
      </div>

      {/* Main Registration Card */}
      <div className="max-w-lg mx-auto w-full my-auto py-8">
        <div className={`p-8 rounded-3xl border shadow-2xl space-y-6 ${
          isDark ? 'bg-[#181924] border-white/10' : 'bg-white border-[#DCE7F2]'
        }`}>
          <div className="space-y-1">
            <h2 className="text-xl font-black tracking-tight">Register Enterprise Organization</h2>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
              Deploy enterprise skill telemetry, custom learning paths, and department benchmarks.
            </p>
          </div>

          {success ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold">{orgName} Tenant Initialized!</h3>
              <p className="text-xs text-slate-400">Welcome {adminName}. Your organization license is activated.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Global"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Company Domain</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. apexglobal.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Admin Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Thorne"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="m.thorne@apexglobal.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Plan Tier</label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none ${
                      isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
                    }`}
                  >
                    <option>Global S/4HANA Clean-Core</option>
                    <option>Enterprise Growth</option>
                    <option>Innovation Hub</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400">Learner Seats</label>
                  <input
                    type="number"
                    min="10"
                    value={seats}
                    onChange={(e) => setSeats(Number(e.target.value))}
                    className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none font-mono ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1E75E8] hover:bg-[#1665D8] text-white text-xs font-black uppercase tracking-wider shadow-md cursor-pointer transition-all active:scale-95"
              >
                Provision Organization Tenant
              </button>
            </form>
          )}

          <div className="pt-2 text-center text-xs text-slate-400">
            Already have an organization workspace?{' '}
            <button onClick={onBackToLogin} className="text-[#1E75E8] font-bold hover:underline">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] text-slate-400 font-mono">
        © 2026 AmIzent Tech Services. Enterprise Multi-Tenant Engine.
      </div>

    </div>
  );
};
