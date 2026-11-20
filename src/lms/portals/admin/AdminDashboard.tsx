import React, { useState } from 'react';
import { Users, Building2, BookOpen, ShieldAlert, CheckCircle2, Search, Filter, Plus, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsRole, LmsUser } from '../../types/lmsTypes';

export const AdminDashboard: React.FC = () => {
  const { theme, switchRole } = useAuth();
  const isDark = theme === 'dark';

  const [users, setUsers] = useState<LmsUser[]>(() => LmsStorage.getUsers());
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // New User Form State
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<LmsRole>('individual_learner');

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim()) return;

    const user: LmsUser = {
      id: `user_${Date.now()}`,
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      skillIq: 200,
      totalHoursLearned: 0,
      completedLabs: 0,
      certificatesCount: 0,
      enrolledCourseIds: ['course_ai_agents'],
      completedCourseIds: [],
      joinedDate: 'Feb 2026'
    };

    LmsStorage.addUser(user);
    setUsers(LmsStorage.getUsers());
    setShowAddUserModal(false);
    setNewUserName('');
    setNewUserEmail('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
        isDark 
          ? 'bg-gradient-to-r from-[#1E1F30] via-[#2A2B42] to-[#1E1F30] border-white/10 text-white' 
          : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
      }`}>
        <div className="space-y-1.5">
          <span className="text-[10px] font-black uppercase text-[#1E75E8] tracking-wider">
            Super Administrator Control Plane
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            System Governance &amp; Multi-Tenant Architecture
          </h2>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
            Role-based access management, global course approvals, and enterprise audit telemetry.
          </p>
        </div>

        <button
          onClick={() => setShowAddUserModal(true)}
          className="px-5 py-2.5 rounded-full bg-[#1E75E8] hover:bg-[#1665D8] text-white text-xs font-black shadow-md flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Provision New User</span>
        </button>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Total Provisioned Users</div>
          <div className="text-2xl font-black font-mono mt-1">{users.length * 284}</div>
          <div className="text-[10px] text-emerald-500 font-bold mt-1">99.8% System Uptime</div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Enterprise Tenants</div>
          <div className="text-2xl font-black font-mono text-[#1E75E8] mt-1">18 Orgs</div>
          <div className="text-[10px] text-slate-400 mt-1">Apex Global, Summit Health...</div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Active Courses</div>
          <div className="text-2xl font-black font-mono text-purple-400 mt-1">{LmsStorage.getCourses().length}</div>
          <div className="text-[10px] text-slate-400 mt-1">Verified Clean-Core Standards</div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Benchmark Skill IQ Avg</div>
          <div className="text-2xl font-black font-mono text-emerald-500 mt-1">274 IQ</div>
          <div className="text-[10px] text-emerald-500 font-bold mt-1">+14.2% YoY Velocity</div>
        </div>
      </div>

      {/* User Management Table */}
      <div className={`p-6 rounded-3xl border space-y-4 ${
        isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h3 className="text-base font-black tracking-tight">Active Identity &amp; Role Directory</h3>

          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-[#F0F6FD] border-[#DCE7F2]'
            }`}>
              <Search className="w-3.5 h-3.5 opacity-40" />
              <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-none text-xs outline-none w-36"
              />
            </div>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className={`px-3 py-1.5 rounded-xl border text-xs outline-none ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
              }`}
            >
              <option value="all">All Roles</option>
              <option value="individual_learner">Learner</option>
              <option value="corporate_learner">Corporate Learner</option>
              <option value="instructor">Instructor</option>
              <option value="org_admin">Org Admin</option>
              <option value="org_manager">Org Manager</option>
              <option value="super_admin">Super Admin</option>
            </select>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className={`border-b text-[10px] font-black uppercase tracking-wider ${
              isDark ? 'border-white/10 text-slate-400' : 'border-slate-100 text-[#758EA8]'
            }`}>
              <tr>
                <th className="py-3 px-3">User &amp; Email</th>
                <th className="py-3 px-3">Role</th>
                <th className="py-3 px-3">Organization</th>
                <th className="py-3 px-3">Skill IQ</th>
                <th className="py-3 px-3">Certificates</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/10">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={u.avatar}
                        alt={u.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold">{u.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{u.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#1E75E8]/10 text-[#1E75E8]">
                      {u.role.replace('_', ' ')}
                    </span>
                  </td>

                  <td className="py-3.5 px-3">
                    <span className="text-slate-400">
                      {u.organizationName || 'Independent Learner'}
                    </span>
                  </td>

                  <td className="py-3.5 px-3 font-mono font-bold text-[#1E75E8]">
                    {u.skillIq} IQ
                  </td>

                  <td className="py-3.5 px-3 font-mono">
                    {u.certificatesCount} Certs
                  </td>

                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => switchRole(u.role)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-[11px] font-bold hover:bg-[#1E75E8] hover:text-white transition-colors cursor-pointer"
                    >
                      Login as User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Provision User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-[#181924] text-[#122443] dark:text-white border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-black">Provision New System User</h3>

            <form onSubmit={handleCreateUser} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Zhang"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border text-xs outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Corporate Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. d.zhang@apexglobal.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl border text-xs outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400">Role Permission</label>
                <select
                  value={newUserRole}
                  onChange={(e) => setNewUserRole(e.target.value as LmsRole)}
                  className="w-full p-2.5 rounded-xl border text-xs outline-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                >
                  <option value="individual_learner">Learner</option>
                  <option value="corporate_learner">Corporate Learner</option>
                  <option value="instructor">Lead Instructor</option>
                  <option value="org_admin">Organization Admin</option>
                  <option value="org_manager">Organization Manager</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1E75E8] text-white text-xs font-black shadow-md"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
