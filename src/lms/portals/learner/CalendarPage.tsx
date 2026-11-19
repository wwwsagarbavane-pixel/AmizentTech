import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  Video,
  Award,
  FileCheck2,
  Check,
  X,
  Trash2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsCalendarEvent } from '../../types/lmsTypes';

export const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<LmsCalendarEvent[]>(() => LmsStorage.getCalendarEvents());
  const [currentView, setCurrentView] = useState<'month' | 'week' | 'day' | 'agenda'>('month');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<LmsCalendarEvent | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state for creating personal event
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('2026-02-22');
  const [newStartTime, setNewStartTime] = useState('14:00');
  const [newEndTime, setNewEndTime] = useState('15:00');
  const [newCategory, setNewCategory] = useState<LmsCalendarEvent['category']>('personal');
  const [newDesc, setNewDesc] = useState('');

  const filteredEvents = events.filter(e => {
    if (filterCategory === 'all') return true;
    return e.category === filterCategory;
  });

  const handleCreatePersonalEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEv: LmsCalendarEvent = {
      id: `ev_pers_${Date.now()}`,
      title: newTitle,
      description: newDesc || 'Personal Study Block',
      date: newDate,
      startTime: newStartTime,
      endTime: newEndTime,
      timeZone: 'EST',
      category: newCategory,
      isPersonal: true
    };

    LmsStorage.addCalendarEvent(newEv);
    setEvents(LmsStorage.getCalendarEvents());
    setShowAddModal(false);
    setNewTitle('');
    setNewDesc('');
  };

  const handleDeleteEvent = (id: string) => {
    LmsStorage.deleteCalendarEvent(id);
    setEvents(LmsStorage.getCalendarEvents());
    setSelectedEvent(null);
  };

  const getCategoryColor = (cat: LmsCalendarEvent['category']) => {
    switch (cat) {
      case 'live_class': return 'bg-blue-100 text-[#1B58A6] border-blue-200';
      case 'assessment': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'assignment': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'milestone': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'personal': default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">

      {/* 1. Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Learning Calendar
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
              {events.length} Events
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Masterclasses, submission deadlines, and scheduled skill assessments.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5 text-sky-400" />
          <span>Add Personal Event</span>
        </button>
      </div>

      {/* 2. Top Navigation Controls Bar: Month / Week / Day / Agenda */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-4 sm:p-5 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Previous / Today / Next + Month Label */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-slate-200/80 rounded-full p-1 bg-white/80">
            <button className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 text-xs font-bold text-[#2B62EE] cursor-pointer">
              Today
            </button>
            <button className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-sm font-black text-[#0B1B2B]">
            February 2026
          </span>
        </div>

        {/* Center: Category Filters Pill */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full text-xs font-bold p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80">
          {(['all', 'live_class', 'assessment', 'assignment', 'personal'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-full capitalize cursor-pointer transition-all ${filterCategory === cat
                  ? 'bg-[#0B1B2B] text-white font-black shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B2B]'
                }`}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Right: View Selector */}
        <div className="flex items-center gap-1 bg-[#F0F5FD]/80 backdrop-blur-md p-1 rounded-full text-xs font-bold border border-white/80">
          {(['month', 'week', 'day', 'agenda'] as const).map(v => (
            <button
              key={v}
              onClick={() => setCurrentView(v)}
              className={`px-3.5 py-1.5 rounded-full capitalize cursor-pointer transition-all ${currentView === v
                  ? 'bg-[#2B62EE] text-white font-black shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B2B]'
                }`}
            >
              {v}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Main Calendar Surface (Month Grid or Agenda List) */}
      {currentView === 'agenda' ? (
        // Agenda View in Frosted Glass
        <div className="bg-white/75 backdrop-blur-2xl rounded-[36px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
          <h3 className="text-base font-black text-[#0B1B2B] pb-2 border-b border-slate-100">
            Chronological Training Agenda
          </h3>
          <div className="space-y-3">
            {filteredEvents.map(e => (
              <div
                key={e.id}
                onClick={() => setSelectedEvent(e)}
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 hover:border-blue-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2B62EE] flex flex-col items-center justify-center flex-shrink-0 border border-blue-100">
                    <span className="text-[10px] font-bold uppercase">{e.date.split('-')[1]}</span>
                    <span className="text-base font-black font-mono leading-none">{e.date.split('-')[2]}</span>
                  </div>
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${getCategoryColor(e.category)}`}>
                      {e.category.replace('_', ' ')}
                    </span>
                    <h4 className="text-sm font-black text-[#0B1B2B] mt-1">{e.title}</h4>
                    <p className="text-xs text-slate-400">{e.startTime} - {e.endTime} {e.timeZone} {e.courseTitle && `• ${e.courseTitle}`}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {e.meetingUrl && (
                    <a
                      href={e.meetingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-xs font-black shadow-xs"
                      onClick={(ev) => ev.stopPropagation()}
                    >
                      Join Session
                    </a>
                  )}
                  <button className="px-4 py-1.5 rounded-full border border-slate-200/80 bg-white text-xs font-bold text-slate-700">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Month Grid View in Frosted Glass
        <div className="bg-white/75 backdrop-blur-2xl rounded-[36px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-x-auto">
          {/* Day of week headers */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-black text-slate-400 pb-3 border-b border-slate-100 min-w-[700px]">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Calendar Day Cells (28 days of Feb 2026) */}
          <div className="grid grid-cols-7 gap-2 pt-3 min-w-[700px]">
            {Array.from({ length: 28 }).map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `2026-02-${dayNum < 10 ? '0' + dayNum : dayNum}`;
              const dayEvents = filteredEvents.filter(e => e.date === dateStr);
              const isToday = dayNum === 18;

              return (
                <div
                  key={i}
                  className={`min-h-[105px] p-2 rounded-2xl border transition-all flex flex-col justify-between ${isToday
                      ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                      : 'bg-white/60 backdrop-blur-md border-white/80 hover:border-blue-100 shadow-xs'
                    }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono ${isToday ? 'bg-[#2B62EE] text-white font-black' : 'text-slate-600'
                      }`}>
                      {dayNum}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2B62EE]" />
                    )}
                  </div>

                  <div className="space-y-1 mt-1">
                    {dayEvents.slice(0, 2).map(ev => (
                      <div
                        key={ev.id}
                        onClick={() => setSelectedEvent(ev)}
                        className={`text-[10px] p-1 rounded-lg border font-bold truncate cursor-pointer hover:scale-102 transition-transform ${getCategoryColor(ev.category)}`}
                      >
                        {ev.startTime} {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[9px] text-slate-400 font-bold block text-right">+{dayEvents.length - 2} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Event Details Drawer Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-white/90 space-y-4 animate-in fade-in zoom-in-95 text-xs">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${getCategoryColor(selectedEvent.category)}`}>
                {selectedEvent.category.replace('_', ' ')}
              </span>
              <button onClick={() => setSelectedEvent(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-lg font-black text-[#0B1B2B]">
              {selectedEvent.title}
            </h3>

            <p className="text-[#4A607A] leading-relaxed">
              {selectedEvent.description}
            </p>

            <div className="space-y-2 p-3.5 rounded-2xl bg-white/70 border border-slate-100">
              <div className="flex justify-between"><span className="text-slate-400">Date:</span><span className="font-bold">{selectedEvent.date}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Time:</span><span className="font-bold">{selectedEvent.startTime} - {selectedEvent.endTime} ({selectedEvent.timeZone})</span></div>
              {selectedEvent.instructorName && (
                <div className="flex justify-between"><span className="text-slate-400">Instructor:</span><span className="font-bold">{selectedEvent.instructorName}</span></div>
              )}
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-slate-100">
              {selectedEvent.isPersonal ? (
                <button
                  onClick={() => handleDeleteEvent(selectedEvent.id)}
                  className="px-3.5 py-2 rounded-full text-rose-600 hover:bg-rose-50 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Event</span>
                </button>
              ) : <div />}

              <div className="flex gap-2">
                {selectedEvent.meetingUrl && (
                  <a
                    href={selectedEvent.meetingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white font-black"
                  >
                    Join Live Class
                  </a>
                )}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Personal Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreatePersonalEvent} className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-white/90 space-y-4 animate-in fade-in zoom-in-95 text-xs">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="text-base font-black text-[#0B1B2B]">Add Personal Study Block</h3>
              <button type="button" onClick={() => setShowAddModal(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-bold text-slate-600 block mb-1">Event Title</label>
                <input
                  type="text"
                  placeholder="e.g. LangGraph Checkpoint Review"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#2B62EE]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-600 block mb-1">Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white outline-none"
                  >
                    <option value="personal">Personal Study</option>
                    <option value="assignment">Assignment Work</option>
                    <option value="assessment">Assessment Prep</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-600 block mb-1">Start Time</label>
                  <input
                    type="time"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 block mb-1">End Time</label>
                  <input
                    type="time"
                    value={newEndTime}
                    onChange={(e) => setNewEndTime(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-full text-slate-500 font-bold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white font-black shadow-md cursor-pointer"
              >
                Save Event
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};