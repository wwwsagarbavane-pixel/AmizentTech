import React, { useState } from 'react';
import { ContactSubmission } from '../../types';
import { Button } from './Button';
import { CheckCircle2, AlertCircle, Send, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFormProps {
  initialServiceInterest?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialServiceInterest = 'Technology Upskilling' }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    serviceInterest: initialServiceInterest,
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactSubmission, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactSubmission, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please provide a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your objectives or requirements';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a bit more detail (min 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate enterprise form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#12457F', '#1B58A6', '#8FAAC8']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      phone: '',
      serviceInterest: 'Technology Upskilling',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F8FBFF] border border-[#1B58A6] rounded-3xl p-8 sm:p-10 shadow-premium text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-extrabold text-[#12457F]">
          Inquiry Successfully Received
        </h3>

        <p className="text-sm text-[#4A607A] max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-[#12457F]">{formData.fullName}</strong>. An AmIzent enterprise advisor will review your goals for <strong className="text-[#12457F]">{formData.companyName}</strong> and reply via <strong className="text-[#12457F]">{formData.workEmail}</strong> shortly.
        </p>

        <div className="pt-4 border-t border-[#C8D7E8]/70 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 sm:p-8 md:p-10 shadow-premium space-y-6">
      <div className="border-b border-[#C8D7E8]/70 pb-4">
        <h3 className="text-2xl font-extrabold text-[#12457F]">
          Start a Conversation
        </h3>
        <p className="text-sm text-[#4A607A] mt-1">
          Share your team's upskilling goals or enterprise technology needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#12457F] uppercase tracking-wider block">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Sarah Jenkins"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#14181F] focus:outline-none focus:ring-2 focus:ring-[#1B58A6]/30 transition-all ${
              errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-[#C8D7E8] focus:border-[#1B58A6]'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#12457F] uppercase tracking-wider block">
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            placeholder="e.g. s.jenkins@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#14181F] focus:outline-none focus:ring-2 focus:ring-[#1B58A6]/30 transition-all ${
              errors.workEmail ? 'border-rose-400 bg-rose-50/30' : 'border-[#C8D7E8] focus:border-[#1B58A6]'
            }`}
          />
          {errors.workEmail && (
            <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.workEmail}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#12457F] uppercase tracking-wider block">
            Company / Organization <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Apex Global Technologies"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#14181F] focus:outline-none focus:ring-2 focus:ring-[#1B58A6]/30 transition-all ${
              errors.companyName ? 'border-rose-400 bg-rose-50/30' : 'border-[#C8D7E8] focus:border-[#1B58A6]'
            }`}
          />
          {errors.companyName && (
            <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Phone (Optional) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#12457F] uppercase tracking-wider block">
            Phone Number <span className="text-[#8FAAC8] font-normal lowercase">(optional)</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#C8D7E8] text-sm text-[#14181F] focus:outline-none focus:border-[#1B58A6] focus:ring-2 focus:ring-[#1B58A6]/30 transition-all"
          />
        </div>
      </div>

      {/* Service Interest */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-[#12457F] uppercase tracking-wider block">
          Primary Area of Interest
        </label>
        <select
          value={formData.serviceInterest}
          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#C8D7E8] text-sm text-[#14181F] focus:outline-none focus:border-[#1B58A6] focus:ring-2 focus:ring-[#1B58A6]/30 transition-all cursor-pointer"
        >
          <option value="Technology Upskilling">Technology Upskilling</option>
          <option value="AI & Emerging Technology Learning">AI & Emerging Technology Learning</option>
          <option value="Corporate Training Programs">Corporate Training Programs</option>
          <option value="Digital Skills Development">Digital Skills Development</option>
          <option value="Enterprise Upskilling Solutions">Enterprise Upskilling Solutions</option>
          <option value="Custom Learning Solutions">Custom Learning Solutions</option>
          <option value="Technology Advisory & Consulting">Technology Advisory & Consulting</option>
          <option value="General Exploration">General Exploration</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-[#12457F] uppercase tracking-wider block">
          How can we help your team? <span className="text-rose-500">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your team size, technology priorities, timeline, or current challenges..."
          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#14181F] focus:outline-none focus:ring-2 focus:ring-[#1B58A6]/30 transition-all ${
            errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-[#C8D7E8] focus:border-[#1B58A6]'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#4A607A]">
          Direct confidential delivery to AmIzent Tech Services.
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Transmitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Submit Inquiry
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};
