import React, { useState } from 'react';
import { Mail, Lock, Smartphone, ChevronRight, Eye, EyeOff, Play, BarChart2, Trophy, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LmsRole } from '../types/lmsTypes';

interface LoginProps {
  onRegisterIndividual: () => void;
  onRegisterOrg: () => void;
  onForgotPassword: () => void;
  onExitLms: () => void;
}

export const LoginPage: React.FC<LoginProps> = ({
  onRegisterIndividual,
  onForgotPassword,
  onExitLms
}) => {
  const { login } = useAuth();

  // Form State
  const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('email');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loginEmail = email.trim() || 'jason.jones@amizent.com';
    login(loginEmail, 'individual_learner');
  };

  const handleSocialLogin = (provider: string) => {
    login(`demo.${provider.toLowerCase()}@amizent.com`, 'individual_learner');
  };

  return (
    <div className="min-h-screen w-full relative bg-[#F6F9FD] text-[#0F172A] flex flex-col justify-between overflow-hidden select-none font-sans">
      
      {/* 1. Organic Background Vector Waves matching reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Soft pale blue fluid wave flowing from top-center towards mid-left */}
        <svg 
          className="absolute top-0 left-0 w-full h-[750px] text-[#E8F1FD]/80" 
          viewBox="0 0 1440 750" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L1440,0 L1440,240 C1250,330 1020,170 820,270 C640,370 500,560 250,530 C100,510 0,380 0,380 Z" 
            fill="currentColor" 
          />
        </svg>

        {/* Mid-screen delicate fluid wave layer */}
        <svg 
          className="absolute top-[10%] left-[-8%] w-[90%] h-[740px] text-[#DCEAFE]/50" 
          viewBox="0 0 1000 740" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,80 Q240,290 460,180 T940,330 C940,550 710,670 410,650 C150,630 0,510 0,510 Z" 
            fill="currentColor" 
          />
        </svg>

        {/* Bottom-left energetic blue wave gradient matching reference image */}
        <div className="absolute -bottom-6 -left-16 w-[580px] h-[340px] pointer-events-none z-0">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 580 340" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="blueWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="55%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
            <path 
              d="M0,340 L580,340 C460,255 380,205 280,225 C150,245 70,115 0,155 Z" 
              fill="url(#blueWaveGrad)" 
            />
          </svg>
        </div>

        {/* Subtle luminous ambient glowing circles */}
        <div className="absolute top-[18%] right-[12%] w-[500px] h-[500px] rounded-full bg-blue-100/35 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[25%] w-[450px] h-[450px] rounded-full bg-sky-100/40 blur-[110px]" />
      </div>

      {/* 2. Top Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-7 pb-2 flex items-center justify-between">
        
        {/* Left: AmIzent LMS Official Logo */}
        <button 
          onClick={onExitLms}
          title="Return to Public Website"
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <img
            src="/amizent-logo.png"
            alt="AmIzent Tech Services"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <span className="px-2 py-0.5 rounded-full bg-[#EBF4FF] text-[#2563EB] text-[10px] font-black tracking-wide uppercase">
            LMS
          </span>
        </button>

        {/* Right: Sign Up prompt link */}
        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <span className="text-slate-600 font-medium">Don't have an account?</span>
          <button
            onClick={onRegisterIndividual}
            className="font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            <span>Sign Up</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </header>

      {/* 3. Main Stage: Split Layout with Left Hero & Right Glass Card */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex items-center my-auto py-2">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Welcome Typography & 3 Bullets                    */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-start h-full pt-1 lg:pt-3 relative z-20">
            
            {/* Top Text & Features Group (Neatly constrained so woman image to the right has full room) */}
            <div className="relative z-20 max-w-sm lg:max-w-[340px] xl:max-w-[360px]">
              
              {/* Greeting */}
              <p className="text-lg sm:text-xl font-bold text-[#1E293B] tracking-tight mb-1">
                Welcome Back!
              </p>

              {/* Bold Dual-Color Headline */}
              <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] mb-3">
                <span className="text-[#2563EB] block">Continue Your</span>
                <span className="text-[#0F172A] block">Learning Journey</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed mb-6 sm:mb-7 max-w-[320px]">
                Sign in to access your courses, track progress and achieve your goals.
              </p>

              {/* 3 Value-Prop Feature Bullets matching reference */}
              <div className="space-y-3.5 mb-6">
                
                {/* 1. Access 1000+ Courses */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#2563EB] flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 shrink-0">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#1E293B] whitespace-nowrap">
                    Access 1000+ Courses
                  </span>
                </div>

                {/* 2. Track Your Progress */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#2563EB] flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 shrink-0">
                    <BarChart2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#1E293B] whitespace-nowrap">
                    Track Your Progress
                  </span>
                </div>

                {/* 3. Earn Certificates */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#2563EB] flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 shrink-0">
                    <Trophy className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#1E293B] whitespace-nowrap">
                    Earn Certificates
                  </span>
                </div>

              </div>
            </div>

            {/* Mobile-Only fallback image for smaller screens */}
            <div className="lg:hidden block mt-4 max-w-sm mx-auto">
              <img
                src="/smiling-woman-laptop.png"
                alt="Smiling woman with headphones working on laptop"
                className="w-full object-contain drop-shadow-xl"
              />
            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Exact Frosted Glass Sign-In Card                 */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end w-full relative z-20">
            <div className="w-full max-w-[490px] rounded-[36px] sm:rounded-[42px] bg-white/95 backdrop-blur-2xl border border-white/90 p-8 sm:p-11 shadow-[0_25px_70px_rgba(30,64,175,0.09),0_6px_20px_rgba(0,0,0,0.03)] transition-all">
              
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-[30px] font-black text-[#0F172A] tracking-tight leading-tight">
                  Sign In
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5">
                  Enter your credentials to access your account
                </p>
              </div>

              {/* Error Message banner if needed */}
              {errorMessage && (
                <div className="mb-5 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              {/* Login Method Pill Switcher (Email Login vs Mobile Login) */}
              <div className="p-1 rounded-full bg-[#F1F5F9] flex items-center mb-6">
                
                {/* Email Login Pill */}
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`flex-1 py-2.5 px-4 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    loginMethod === 'email'
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Login</span>
                </button>

                {/* Mobile Login Pill */}
                <button
                  type="button"
                  onClick={() => setLoginMethod('mobile')}
                  className={`flex-1 py-2.5 px-4 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    loginMethod === 'mobile'
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile Login</span>
                </button>

              </div>

              {/* Main Credentials Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {loginMethod === 'email' ? (
                  <>
                    {/* Input 1: Email Address */}
                    <div className="relative flex items-center rounded-2xl border border-slate-200/90 bg-white focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/15 transition-all px-4 py-3.5">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-[#0F172A] placeholder:text-slate-400 outline-none ml-3"
                      />
                    </div>

                    {/* Input 2: Password */}
                    <div className="relative flex items-center rounded-2xl border border-slate-200/90 bg-white focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/15 transition-all px-4 py-3.5">
                      <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-[#0F172A] placeholder:text-slate-400 outline-none ml-3"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors"
                        title={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Mobile Input 1: Phone Number */}
                    <div className="relative flex items-center rounded-2xl border border-slate-200/90 bg-white focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/15 transition-all px-4 py-3.5">
                      <Smartphone className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Enter your mobile number"
                        className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-[#0F172A] placeholder:text-slate-400 outline-none ml-3"
                      />
                    </div>

                    {/* Mobile Input 2: OTP Code */}
                    <div className="relative flex items-center rounded-2xl border border-slate-200/90 bg-white focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/15 transition-all px-4 py-3.5">
                      <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="Enter 6-digit OTP code"
                        className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-[#0F172A] placeholder:text-slate-400 outline-none ml-3"
                      />
                      <button
                        type="button"
                        onClick={() => alert('New OTP sent to ' + (mobileNumber || 'your registered number'))}
                        className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] hover:underline whitespace-nowrap cursor-pointer"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </>
                )}

                {/* Options Row: Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] accent-[#2563EB] cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-700">Remember me</span>
                  </label>

                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Primary CTA Button: Sign In > */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-bold text-sm sm:text-[15px] shadow-[0_8px_20px_rgba(37,99,235,0.32)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.42)] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99] mt-3"
                >
                  <span>Sign In</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>

              </form>

              {/* Divider: or continue with */}
              <div className="flex items-center gap-3 my-6">
                <span className="flex-1 h-[1px] bg-slate-200" />
                <span className="text-xs text-slate-400 font-medium px-1">or continue with</span>
                <span className="flex-1 h-[1px] bg-slate-200" />
              </div>

              {/* Social Login 3-Column Grid (Google, Microsoft, Apple) */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* 1. Google Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="py-2.5 px-3 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-xs font-bold text-slate-700 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google</span>
                </button>

                {/* 2. Microsoft Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Microsoft')}
                  className="py-2.5 px-3 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-xs font-bold text-slate-700 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 21 21">
                    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                  </svg>
                  <span>Microsoft</span>
                </button>

                {/* 3. Apple Button */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Apple')}
                  className="py-2.5 px-3 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-xs font-bold text-slate-700 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current text-slate-900" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.92-1 .04-2.17.67-2.82 1.44-.57.65-1.07 1.76-.94 2.8 1.11.09 2.19-.55 2.82-1.32" />
                  </svg>
                  <span>Apple</span>
                </button>

              </div>

              {/* Card Footer: Need help? Contact Support */}
              <div className="mt-8 text-center text-xs text-slate-500 font-medium">
                <span>Need help? </span>
                <button
                  type="button"
                  onClick={() => setShowSupportModal(true)}
                  className="font-bold text-[#2563EB] hover:text-[#1D4ED8] hover:underline cursor-pointer"
                >
                  Contact Support
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* 4. Hero Woman Image: Exact reference proportions, zero card overlap */}
      <div className="hidden lg:block absolute bottom-0 left-[12%] lg:left-[14%] xl:left-[15%] 2xl:left-[16%] pointer-events-none select-none z-10">
        <img
          src="/smiling-woman-laptop.png"
          alt="Smiling woman with headphones working on laptop"
          className="w-[380px] lg:w-[430px] xl:w-[480px] 2xl:w-[520px] max-h-[55vh] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(20,50,90,0.10)]"
        />
      </div>

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">AmIzent Learner Support</h3>
                <p className="text-xs text-slate-500">24/7 dedicated helpdesk for learners</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Support Desk:</span>
                <span className="font-bold text-[#0F172A]">support@amizent.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Learner Hotline:</span>
                <span className="font-bold text-[#0F172A]">+1 (800) 555-0199</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Average Response Time:</span>
                <span className="font-bold text-emerald-600">&lt; 5 minutes</span>
              </div>
            </div>

            <button
              onClick={() => setShowSupportModal(false)}
              className="w-full py-2.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
