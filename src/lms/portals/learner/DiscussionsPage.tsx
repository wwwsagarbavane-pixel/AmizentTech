import React, { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Plus, 
  Heart, 
  Bookmark, 
  Send, 
  CheckCircle2, 
  X, 
  Clock, 
  User,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsDiscussion, LmsDiscussionReply } from '../../types/lmsTypes';

export const DiscussionsPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [discussions, setDiscussions] = useState<LmsDiscussion[]>(() => LmsStorage.getDiscussions());
  const [activeTab, setActiveTab] = useState<'all' | 'my' | 'following' | 'course'>('all');
  const [search, setSearch] = useState('');
  const [selectedDiscussion, setSelectedDiscussion] = useState<LmsDiscussion | null>(null);

  // New discussion modal state
  const [showNewModal, setShowNewModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('AI Engineering');
  const [newCourseTitle, setNewCourseTitle] = useState('Autonomous AI Agents');

  // Reply form state
  const [replyContent, setReplyContent] = useState('');

  const filteredDiscussions = discussions.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase()) || 
                          d.content.toLowerCase().includes(search.toLowerCase()) ||
                          (d.tags || []).some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
    if (!matchesSearch) return false;

    if (activeTab === 'my') return d.authorId === currentUser?.id;
    if (activeTab === 'following') return d.isFollowing;
    if (activeTab === 'course') return d.courseTitle !== undefined;
    return true;
  });

  const handleCreateDiscussion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newDisc: LmsDiscussion = {
      id: `disc_${Date.now()}`,
      title: newTitle,
      content: newContent,
      previewText: newContent.slice(0, 100),
      viewsCount: 1,
      createdDate: 'Just now',
      authorId: currentUser?.id || 'u_1',
      authorName: currentUser?.name || 'Jason Jones',
      authorAvatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      category: newCategory,
      courseTitle: newCourseTitle,
      createdAt: 'Just now',
      likesCount: 1,
      isLiked: true,
      isFollowing: true,
      repliesCount: 0,
      tags: ['Discussion', newCategory],
      replies: []
    };

    LmsStorage.addDiscussion(newDisc);
    setDiscussions(LmsStorage.getDiscussions());
    setShowNewModal(false);
    setNewTitle('');
    setNewContent('');
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDiscussion || !replyContent.trim()) return;

    const reply: LmsDiscussionReply = {
      id: `rep_${Date.now()}`,
      authorId: currentUser?.id || 'u_1',
      authorName: currentUser?.name || 'Jason Jones',
      authorAvatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      content: replyContent,
      createdDate: 'Just now',
      createdAt: 'Just now',
      likesCount: 0
    };

    LmsStorage.addReplyToDiscussion(selectedDiscussion.id, reply);
    const updated = LmsStorage.getDiscussions();
    setDiscussions(updated);
    setSelectedDiscussion(updated.find(d => d.id === selectedDiscussion.id) || null);
    setReplyContent('');
  };

  const handleToggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    LmsStorage.toggleLikeDiscussion(id);
    const updated = LmsStorage.getDiscussions();
    setDiscussions(updated);
    if (selectedDiscussion && selectedDiscussion.id === id) {
      setSelectedDiscussion(updated.find(d => d.id === id) || null);
    }
  };

  const handleToggleFollow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    LmsStorage.toggleFollowDiscussion(id);
    const updated = LmsStorage.getDiscussions();
    setDiscussions(updated);
    if (selectedDiscussion && selectedDiscussion.id === id) {
      setSelectedDiscussion(updated.find(d => d.id === id) || null);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Cohort Community Discussions
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
              {discussions.length} Threads
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Collaborate with enterprise engineers, share architectural patterns, and consult certified instructors.
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="px-5 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5 text-sky-400" />
          <span>New Discussion</span>
        </button>
      </div>

      {/* 2. Search & Filter Bar in Frosted Glass */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-4 sm:p-5 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="w-full md:w-80 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 text-xs shadow-xs focus-within:border-[#2B62EE]">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search topics, keywords, courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-[#0B1B2B]"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 text-xs font-bold">
          {(['all', 'my', 'following', 'course'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full capitalize cursor-pointer transition-all ${
                activeTab === tab
                  ? 'bg-[#0B1B2B] text-white font-black shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B2B]'
              }`}
            >
              {tab === 'all' ? 'All Threads' : tab === 'my' ? 'My Posts' : tab === 'following' ? 'Following' : 'By Course'}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Thread Detail or Thread List */}
      {selectedDiscussion ? (
        // Thread Detail View in Frosted Glass
        <div className="bg-white/75 backdrop-blur-2xl rounded-[36px] p-6 sm:p-8 border border-white/90 shadow-[0_20px_50px_rgba(20,50,90,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-6">
          <button
            onClick={() => setSelectedDiscussion(null)}
            className="text-xs font-bold text-[#2B62EE] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Discussions</span>
          </button>

          {/* Original Post */}
          <div className="space-y-4 pb-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedDiscussion.authorAvatar}
                  alt={selectedDiscussion.authorName}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2B62EE]/20"
                />
                <div>
                  <div className="font-black text-sm text-[#0B1B2B]">{selectedDiscussion.authorName}</div>
                  <div className="text-[10px] text-slate-400">{selectedDiscussion.createdAt} • {selectedDiscussion.courseTitle}</div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1B58A6] text-[10px] font-bold">
                {selectedDiscussion.category}
              </span>
            </div>

            <h2 className="text-xl font-black text-[#0B1B2B]">
              {selectedDiscussion.title}
            </h2>

            <p className="text-sm text-[#4A607A] leading-relaxed">
              {selectedDiscussion.content}
            </p>

            {/* Interaction Bar */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={(e) => handleToggleLike(selectedDiscussion.id, e)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                  selectedDiscussion.isLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${selectedDiscussion.isLiked ? 'fill-rose-500' : ''}`} />
                <span>{selectedDiscussion.likesCount} Helpful</span>
              </button>

              <button
                onClick={(e) => handleToggleFollow(selectedDiscussion.id, e)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                  selectedDiscussion.isFollowing
                    ? 'bg-blue-50 border-blue-200 text-[#2B62EE]'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${selectedDiscussion.isFollowing ? 'fill-[#2B62EE]' : ''}`} />
                <span>{selectedDiscussion.isFollowing ? 'Following' : 'Follow Thread'}</span>
              </button>
            </div>
          </div>

          {/* Replies Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-[#0B1B2B]">
              Replies ({selectedDiscussion.replies.length})
            </h3>

            <div className="space-y-3">
              {selectedDiscussion.replies.map(r => (
                <div key={r.id} className="p-4 rounded-2xl bg-white/70 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img src={r.authorAvatar} alt={r.authorName} className="w-6 h-6 rounded-full object-cover" />
                      <span className="font-bold text-[#0B1B2B]">{r.authorName}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{r.createdAt}</span>
                  </div>
                  <p className="text-xs text-[#4A607A] leading-relaxed pl-8">
                    {r.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Reply Input Form */}
            <form onSubmit={handleSendReply} className="pt-4 flex gap-3">
              <input
                type="text"
                placeholder="Share your architectural perspective or technical solution..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs outline-none focus:border-[#2B62EE]"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-black shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Reply</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        // Discussion Cards Grid in Frosted Glass
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDiscussions.map((d) => (
            <div
              key={d.id}
              onClick={() => setSelectedDiscussion(d)}
              className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={d.authorAvatar}
                    alt={d.authorName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-bold text-[#0B1B2B] text-xs">{d.authorName}</span>
                  <span className="text-[10px] text-slate-400">• {d.createdAt}</span>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1B58A6] font-bold text-[10px]">
                  {d.category}
                </span>
              </div>

              <h3 className="text-base font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                {d.title}
              </h3>

              <p className="text-xs text-[#758EA8] line-clamp-2 leading-relaxed">
                {d.content}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Heart className={`w-3.5 h-3.5 ${d.isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
                    <span>{d.likesCount}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{d.repliesCount} Replies</span>
                  </span>
                </div>

                <span className="text-[10px] font-bold text-[#2B62EE]">
                  {d.courseTitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New Discussion Modal */}
      {showNewModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateDiscussion} className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-white/90 space-y-4 animate-in fade-in zoom-in-95 text-xs">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="text-base font-black text-[#0B1B2B]">Start New Cohort Discussion</h3>
              <button type="button" onClick={() => setShowNewModal(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-bold text-slate-600 block mb-1">Topic Title</label>
                <input
                  type="text"
                  placeholder="e.g. How to structure LangGraph checkpoints in AWS Lambda?"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#2B62EE]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-600 block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white outline-none"
                  >
                    <option value="AI Engineering">AI Engineering</option>
                    <option value="Cloud Security">Cloud Security</option>
                    <option value="SAP Architecture">SAP Architecture</option>
                    <option value="Career & Certification">Career &amp; Certification</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-600 block mb-1">Related Course</label>
                  <input
                    type="text"
                    value={newCourseTitle}
                    onChange={(e) => setNewCourseTitle(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-600 block mb-1">Detailed Explanation</label>
                <textarea
                  rows={4}
                  placeholder="Provide architectural context, code snippets, or error logs..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#2B62EE]"
                  required
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowNewModal(false)}
                className="px-4 py-2 rounded-full text-slate-500 font-bold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white font-black shadow-md cursor-pointer"
              >
                Publish Topic
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};