import React, { useState } from 'react';
import { Video, Calendar, Clock, Users, Play, MessageSquare, Mic, MicOff, VideoOff, Sparkles, Send } from 'lucide-react';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsLiveClass } from '../../types/lmsTypes';

export const LiveClassesPage: React.FC = () => {
  const liveClasses = LmsStorage.getLiveClasses();
  const [activeSessionModal, setActiveSessionModal] = useState<LmsLiveClass | null>(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [chatMessages, setChatMessages] = useState<{ user: string; text: string }[]>([
    { user: 'Dr. Elena Rostova', text: 'Welcome team! Today we are tracing distributed agent memory.' },
    { user: 'Sophia Chen', text: 'Excited for the live vector indexing demo.' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setChatMessages(prev => [...prev, { user: 'You', text: inputMsg }]);
    setInputMsg('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Live Classes
            </h1>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Streams Active</span>
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Interactive masterclasses, architecture code reviews, and live labs with AmIzent Fellows.
          </p>
        </div>
      </div>

      {/* Live Class Cards Grid in Frosted Glass */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {liveClasses.map((live) => (
          <div
            key={live.id}
            className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="space-y-4">
              
              {/* Badge & Time */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#EEF4FF] text-[#2B62EE] text-[10px] font-black uppercase tracking-wider">
                  {live.status === 'upcoming' ? 'Scheduled Class' : 'Live Now'}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {live.durationMinutes} Minutes
                </span>
              </div>

              {/* Title & Course */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#2B62EE]">
                  {live.courseTitle}
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                  {live.title}
                </h3>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={live.instructorAvatar}
                  alt={live.instructorName}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2B62EE]/30"
                />
                <div>
                  <div className="text-xs font-black text-[#0B1B2B]">{live.instructorName}</div>
                  <div className="text-[10px] text-slate-400 font-bold">Lead Session Instructor</div>
                </div>
              </div>

            </div>

            {/* Footer Row: Attendees & Join Button */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>{live.attendeesCount} Registered</span>
              </div>

              <button
                onClick={() => setActiveSessionModal(live)}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-xs font-black shadow-[0_6px_18px_rgba(43,98,238,0.25)] flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Join Classroom</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Interactive Mock Classroom Modal */}
      {activeSessionModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white/95 backdrop-blur-2xl border border-white/90 rounded-[36px] w-full max-w-4xl h-[580px] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-red-600">LIVE STAGE</span>
                <span className="text-xs font-bold text-slate-600">| {activeSessionModal.title}</span>
              </div>
              <button
                onClick={() => setActiveSessionModal(null)}
                className="px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold hover:bg-red-100 transition-colors cursor-pointer"
              >
                Leave Session
              </button>
            </div>

            {/* Video Stage + Chat Split */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              
              {/* Virtual Video Screen (8 cols) */}
              <div className="md:col-span-8 bg-slate-900 relative flex flex-col justify-between p-4 text-white">
                <div className="flex justify-between items-center z-10">
                  <div className="bg-black/60 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-md">
                    <img
                      src={activeSessionModal.instructorAvatar}
                      alt="Instructor"
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{activeSessionModal.instructorName} (Host)</span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    1080p HD Stream
                  </span>
                </div>

                {/* Simulated Screen Content */}
                <div className="text-center space-y-3 my-auto">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#12457F] to-[#2B62EE] flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-500/30">
                    <Video className="w-8 h-8" />
                  </div>
                  <div className="font-mono text-xs text-sky-200">
                    Broadcasting: Architectural Defense Sandbox &amp; Neural Graph Trace
                  </div>
                </div>

                {/* Video Controls Bar */}
                <div className="flex items-center justify-center gap-3 z-10">
                  <button
                    onClick={() => setMicOn(!micOn)}
                    className={`p-3 rounded-full cursor-pointer transition-colors ${micOn ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-red-500 text-white'}`}
                  >
                    {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setCamOn(!camOn)}
                    className={`p-3 rounded-full cursor-pointer transition-colors ${camOn ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-red-500 text-white'}`}
                  >
                    {camOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Chat Panel (4 cols) in Frosted Glass */}
              <div className="md:col-span-4 bg-white/70 backdrop-blur-xl border-l border-slate-100 flex flex-col justify-between">
                <div className="p-3 border-b border-slate-100 font-bold text-xs text-[#0B1B2B] flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#2B62EE]" />
                  <span>Cohort Live Q&amp;A</span>
                </div>

                <div className="flex-1 p-3 space-y-3 overflow-y-auto text-xs">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-bold text-[10px] text-[#2B62EE]">{msg.user}</div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[#0B1B2B] text-[11px] leading-tight">
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMsg} className="p-3 border-t border-slate-100 flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask a technical question..."
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs outline-none focus:border-[#2B62EE]"
                  />
                  <button type="submit" className="px-3 py-1.5 rounded-full bg-[#0B1B2B] text-white text-xs font-bold shadow-xs">
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};