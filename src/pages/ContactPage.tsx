import React from 'react';
import { NavPage } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/common/ContactForm';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
  initialServiceInterest?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, initialServiceInterest }) => {
  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Contact Hero (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <MessageSquare className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Direct Enterprise Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Let's Start a{' '}
              <span className="text-[#1B58A6] block mt-1">Conversation.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              Whether you are looking to upskill engineering cohorts, architect AI-ready capability, or explore custom corporate learning academies, we are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Form & Official Inquiries Info (Secondary Background: #DCE7F2) */}
      <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm initialServiceInterest={initialServiceInterest} />
            </div>

            {/* Right: Client Inquiries & Placeholders (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Engagement Standards Card */}
              <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1B58A6] mb-1">
                    Engagement Protocol
                  </div>
                  <h3 className="text-xl font-extrabold text-[#12457F]">
                    What Happens Next?
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8] text-[#1B58A6] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-xs text-[#12457F] block">Confidential Review:</strong>
                      <p className="text-xs text-[#4A607A] leading-relaxed">An enterprise learning architect reviews your stack profile and team objectives.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8] text-[#1B58A6] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-xs text-[#12457F] block">Curriculum Blueprinting:</strong>
                      <p className="text-xs text-[#4A607A] leading-relaxed">We outline tailored skill roadmaps, sandboxes, and milestone targets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8] text-[#1B58A6] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-xs text-[#12457F] block">Collaborative Discovery Call:</strong>
                      <p className="text-xs text-[#4A607A] leading-relaxed">A low-pressure, friendly consultation to confirm fit and alignment.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C8D7E8]/70 flex items-center gap-2 text-xs font-bold text-[#12457F]">
                  <ShieldCheck className="w-4 h-4 text-[#1B58A6]" />
                  <span>Strict NDA and confidential data protection</span>
                </div>
              </div>

              {/* Official Verified Channel Information */}
              <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                  Official Contact Channels
                </div>

                <div className="space-y-3.5 text-xs text-[#4A607A]">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#12457F] block">Corporate Inquiries Email</span>
                      <span>inquiries@amizenttech.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#12457F] block">Registered Web Domain</span>
                      <span>AmizentTech.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#12457F] block">Headquarters Office Location</span>
                      <span>AmIzent Tech Services Corporate Office [Client Address Placeholder]</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#1B58A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#12457F] block">Phone / Switchboard</span>
                      <span>[Client Phone Placeholder - Provided upon initial inquiry]</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#8FAAC8] italic">
                  Note: Contact details adhere strictly to client confidentiality guidelines.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
