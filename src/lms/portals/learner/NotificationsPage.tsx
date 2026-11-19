import React, { useState } from 'react';
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  Star, 
  Video, 
  Award, 
  FileCheck2, 
  BookOpen, 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  X,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsNotification, LmsView } from '../../types/lmsTypes';

interface NotificationsProps {
  onSelectView?: (view: LmsView) => void;
}

export const NotificationsPage: React.FC<NotificationsProps> = ({ onSelectView }) => {
  const { currentUser, theme } = useAuth();
  const isDark = theme === 'dark';

  const [notifications, setNotifications] = useState<LmsNotification[]>(() => LmsStorage.getNotifications());
  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'read' | 'important'>('all');
  const [starredIds, setStarredIds] = useState<string[]>(['notif_1']);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const readCount = notifications.filter(n => n.isRead).length;

  const filteredNotifs = notifications.filter(n => {
    if (activeTab === 'unread') return !n.isRead;
    if (activeTab === 'read') return n.isRead;
    if (activeTab === 'important') return starredIds.includes(n.id);
    return true;
  });

  const handleMarkAllRead = () => {
    LmsStorage.markAllNotificationsRead();
    setNotifications(LmsStorage.getNotifications());
  };

  const handleMarkRead = (id: string) => {
    LmsStorage.markNotificationRead(id);
    setNotifications(LmsStorage.getNotifications());
  };

  const handleDelete = (id: string) => {
    LmsStorage.deleteNotification(id);
    setNotifications(LmsStorage.getNotifications());
  };

  const toggleStar = (id: string) => {
    setStarredIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getNotificationIcon = (type: LmsNotification['type']) => {
    switch (type) {
      case 'live': return <Video className="w-4 h-4 text-amber-500" />;
      case 'grade': return <Award className="w-4 h-4 text-purple-500" />;
      case 'course': return <BookOpen className="w-4 h-4 text-[#1B58A6]" />;
      default: return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Header Banner */}
      <div className={`relative overflow-hidden rounded-[36px] p-7 sm:p-8 border transition-all ${
        isDark 
          ? 'bg-gradient-to-r from-[#10131F] via-[#161C30] to-[#12234A] border-white/10 text-white' 
          : 'bg-gradient-to-r from-[#12457F] via-[#16559C] to-[#1B58A6] border-[#12457F] text-white shadow-[0_20px_50px_rgba(18,69,127,0.18)]'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-200">
              Real-Time Alert Dispatcher
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Notification Center
            </h1>
            <p className="text-xs text-sky-100/90 max-w-xl font-normal">
              Stay informed on upcoming live classes, evaluation grades, verified certificates, and cohort mentions.
            </p>
          </div>

          <button
            onClick={handleMarkAllRead}
            className="px-5 py-2.5 rounded-full bg-white text-[#12457F] text-xs font-black shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <CheckCheck className="w-4 h-4 text-[#1B58A6]" />
            <span>Mark All as Read</span>
          </button>
        </div>
      </div>

      {/* 2. Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl p-5 rounded-[26px] border border-white/90 dark:border-white/10 shadow-[0_15px_40px_rgba(20,50,90,0.05)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Total Alerts</span>
          <div className="text-2xl font-black text-[#0B1B2B] dark:text-white mt-1 font-mono">{notifications.length}</div>
        </div>

        <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl p-5 rounded-[26px] border border-white/90 dark:border-white/10 shadow-[0_15px_40px_rgba(20,50,90,0.05)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Unread</span>
          <div className="text-2xl font-black text-rose-500 mt-1 font-mono">{unreadCount}</div>
        </div>

        <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl p-5 rounded-[26px] border border-white/90 dark:border-white/10 shadow-[0_15px_40px_rgba(20,50,90,0.05)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Read</span>
          <div className="text-2xl font-black text-emerald-500 mt-1 font-mono">{readCount}</div>
        </div>

        <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl p-5 rounded-[26px] border border-white/90 dark:border-white/10 shadow-[0_15px_40px_rgba(20,50,90,0.05)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Important</span>
          <div className="text-2xl font-black text-amber-500 mt-1 font-mono">{starredIds.length}</div>
        </div>
      </div>

      {/* 3. Navigation Filter Pills */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#EEF4FF] dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs font-bold w-fit">
        {(['all', 'unread', 'read', 'important'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full capitalize cursor-pointer transition-all ${
              activeTab === tab
                ? 'bg-[#12457F] text-white font-black shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#12457F]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 4. Notifications List */}
      <div className="space-y-3">
        {filteredNotifs.length === 0 ? (
          <div className="bg-white/85 dark:bg-[#12131C] backdrop-blur-xl rounded-[32px] p-12 text-center text-slate-400 border border-white/90 dark:border-white/10">
            <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-500 mb-2" />
            <h4 className="font-black text-[#0B1B2B] dark:text-white">All caught up!</h4>
            <p className="text-xs mt-1">No alerts matching this filter.</p>
          </div>
        ) : (
          filteredNotifs.map((n) => {
            const isStarred = starredIds.includes(n.id);
            return (
              <div
                key={n.id}
                className={`p-5 rounded-[24px] border transition-all flex items-start justify-between gap-4 ${
                  !n.isRead
                    ? 'bg-white dark:bg-[#161824] border-blue-200 dark:border-blue-900/40 shadow-sm'
                    : 'bg-white/70 dark:bg-white/5 border-slate-100 dark:border-white/5 opacity-80'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {getNotificationIcon(n.type)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-black text-[#0B1B2B] dark:text-white leading-snug">
                        {n.title}
                      </h4>
                      {!n.isRead && (
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {n.message}
                    </p>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {n.timestamp}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleStar(n.id)}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-amber-500 cursor-pointer"
                  >
                    <Star className={`w-4 h-4 ${isStarred ? 'text-amber-500 fill-amber-500' : ''}`} />
                  </button>

                  {!n.isRead && (
                    <button
                      onClick={() => handleMarkRead(n.id)}
                      className="px-3 py-1 rounded-full text-[11px] font-bold text-[#1B58A6] hover:bg-blue-50 cursor-pointer"
                    >
                      Mark read
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(n.id)}
                    className="p-1.5 rounded-full hover:bg-rose-50 text-slate-400 hover:text-rose-600 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
