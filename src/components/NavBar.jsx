import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
            <MessageCircle className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-lg">ChatterMix</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#community" className="hover:text-white">Community</a>
          <a href="#security" className="hover:text-white">Security</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition">
            <Sparkles className="h-4 w-4" />
            <span>Try Demo</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 hover:opacity-95 transition shadow-lg shadow-fuchsia-500/20">
            <span>Open Web App</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
