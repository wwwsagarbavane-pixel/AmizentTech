import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface RegisterProps {
  onBackToLogin: () => void;
  onExitLms: () => void;
}

export const RegisterIndividualPage: React.FC<RegisterProps> = ({
  onBackToLogin,
  onExitLms
}) => {
  const { registerIndividual, theme } = useAuth();
  const isDark = theme === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [primaryInterest, setPrimaryInterest] = useState('Generative AI & Agentic Swarms');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    registerIndividual({ name, email });
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

        <div className="flex items-center gap-3">
          <img src="/amizent-logo.png" alt="AmIzent" className="h-7 w-auto object-contain" />
          <span className="font-mono text-xs font-bold text-[#1E75E8]">
            STUDENT ENROLLMENT
          </span>
        </div>
      </div>

      {/* Main Registration Card */}
      <div className="max-w-md mx-auto w-full my-auto py-8">
        <div className={`p-8 rounded-3xl border shadow-2xl space-y-6 ${
          isDark ? 'bg-[#181924] border-white/10' : 'bg-white border-[#DCE7F2]'
        }`}>
          <div className="space-y-1">
            <h2 className="text-xl font-black tracking-tight">Create Individual Account</h2>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
              Join over 150K+ developers benchmarking skills on AmIzent.
            </p>
          </div>

          {success ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold">Welcome aboard, {name}!</h3>
              <p className="text-xs text-slate-400">Your profile and Skill IQ tracking pass have been initialized.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Full Name</label>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border mt-1 ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                }`}>
                  <User className="w-4 h-4 opacity-40" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jason Jones"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-none text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Email Address</label>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border mt-1 ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                }`}>
                  <Mail className="w-4 h-4 opacity-40" />
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-none text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Password</label>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border mt-1 ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                }`}>
                  <Lock className="w-4 h-4 opacity-40" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-none text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Primary Skill Focus</label>
                <select
                  value={primaryInterest}
                  onChange={(e) => setPrimaryInterest(e.target.value)}
                  className={`w-full p-2.5 rounded-xl border mt-1 text-xs outline-none ${
                    isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
                  }`}
                >
                  <option>Generative AI &amp; Agentic Swarms</option>
                  <option>SAP S/4HANA Clean-Core Architecture</option>
                  <option>Multi-Cloud Zero-Trust Cybersecurity</option>
                  <option>Interactive EdTech &amp; Video Engineering</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1E75E8] hover:bg-[#1665D8] text-white text-xs font-black uppercase tracking-wider shadow-md cursor-pointer transition-all active:scale-95"
              >
                Create Account &amp; Start Learning
              </button>
            </form>
          )}

          <div className="pt-2 text-center text-xs text-slate-400">
            Already registered?{' '}
            <button onClick={onBackToLogin} className="text-[#1E75E8] font-bold hover:underline">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] text-slate-400 font-mono">
        © 2026 AmIzent Tech Services.
      </div>

    </div>
  );
};
