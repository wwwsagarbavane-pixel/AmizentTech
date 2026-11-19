import React, { useState } from 'react';
import { Search, Bell, Settings, Bookmark, ArrowLeftRight, User, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsView } from '../../types/lmsTypes';

interface LmsTopBarTabsProps {
  currentTab?: string;
  onTabChange?: (tab: string) => void;
  onExitLms?: () => void;
}

export const LmsTopBarTabs: React.FC<LmsTopBarTabsProps> = ({
  currentTab = 'warehouse',
  onTabChange,
  onExitLms
}) => {
  const { currentUser, activeRole } = useAuth();
  const [activePill, setActivePill] = useState(currentTab);

  const tabs = [
    { key: 'warehouse', label: 'Warehouse' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'robot', label: 'Robot' },
    { key: 'pick_rates', label: 'Pick Rates' },
    { key: 'employees', label: 'Employees' },
    { key: 'inventory', label: 'Inventory' },
  ];

  const handlePillClick = (key: string) => {
    setActivePill(key);
    onTabChange?.(key);
  };

  return (
    <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 select-none">
      
      {/* 1. Left: Title + Subtitle Track Number (Exact match to image 2) */}
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Warehouse 1
            </h1>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
              Track 01
            </span>
          </div>
          <div className="text-xs font-bold text-slate-400 mt-0.5">
            №412589815
          </div>
        </div>
      </div>

      {/* 2. Center: Rounded Pill Tabs (Exact match to image 2) */}
      <div className="flex items-center gap-1 bg-[#EEF3F9] p-1.5 rounded-full border border-slate-200/60 overflow-x-auto max-w-full">
        {tabs.map((tab) => {
          const isActive = activePill === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => handlePillClick(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-white text-[#0B1B2B] shadow-sm font-black'
                  : 'text-slate-500 hover:text-[#0B1B2B]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 3. Right: Micro Stats Bar + Utility Action Icons (Exact match to image 2) */}
      <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
        
        {/* Micro Stat 1: 72 Robods */}
        <div className="flex items-center gap-2">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-black text-[#0B1B2B]">72</span>
              <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" />
            </div>
            <span className="text-[9px] font-bold text-slate-400 block -mt-0.5">Robods</span>
          </div>
          {/* Mini vertical bars */}
          <div className="flex items-end gap-0.5 h-4">
            <div className="w-1 bg-emerald-400 rounded-xs h-2" />
            <div className="w-1 bg-emerald-500 rounded-xs h-4" />
            <div className="w-1 bg-emerald-300 rounded-xs h-3" />
          </div>
        </div>

        {/* Micro Stat 2: 30 Associates */}
        <div className="flex items-center gap-2">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-black text-[#0B1B2B]">30</span>
              <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" />
            </div>
            <span className="text-[9px] font-bold text-slate-400 block -mt-0.5">Associates</span>
          </div>
          <div className="flex items-end gap-0.5 h-4">
            <div className="w-1 bg-blue-400 rounded-xs h-3" />
            <div className="w-1 bg-emerald-400 rounded-xs h-4" />
            <div className="w-1 bg-emerald-300 rounded-xs h-2" />
          </div>
        </div>

        {/* Micro Stat 3: 345 Throughput */}
        <div className="flex items-center gap-2">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-black text-[#0B1B2B]">345</span>
              <span className="w-1.5 h-1.5 rounded-sm bg-rose-500" />
            </div>
            <span className="text-[9px] font-bold text-slate-400 block -mt-0.5">Throughput</span>
          </div>
          <div className="flex items-end gap-0.5 h-4">
            <div className="w-1 bg-rose-400 rounded-xs h-3" />
            <div className="w-1 bg-rose-500 rounded-xs h-4" />
            <div className="w-1 bg-rose-300 rounded-xs h-2" />
          </div>
        </div>

        {/* Floor 1 ⇄ Floor 2 Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600">
          <span>Floor 1</span>
          <ArrowLeftRight className="w-3 h-3 text-slate-400" />
          <span>Floor 2</span>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 text-slate-500">
          <button className="w-7 h-7 rounded-full border border-slate-200/80 flex items-center justify-center hover:text-[#0B1B2B]">
            <Search className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-full border border-slate-200/80 flex items-center justify-center hover:text-[#0B1B2B]">
            <Bell className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-full border border-slate-200/80 flex items-center justify-center hover:text-[#0B1B2B]">
            <Settings className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-full border border-slate-200/80 flex items-center justify-center hover:text-[#0B1B2B]">
            <Bookmark className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
