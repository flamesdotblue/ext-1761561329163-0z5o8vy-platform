import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full" style={{ height: '80vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              One social hub for chat, share, and video
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              A modern blend of your favorite social apps in one place. Message like WhatsApp, share moments like Instagram, and jump into crisp video calls like imo.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 hover:opacity-95 transition shadow-lg shadow-fuchsia-500/20">
                Get Started Free
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition">
                View Screens
              </button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-white/70">
              <div className="flex -space-x-2">
                <img alt="user" src="https://i.pravatar.cc/40?img=11" className="h-8 w-8 rounded-full border border-white/20" />
                <img alt="user" src="https://i.pravatar.cc/40?img=24" className="h-8 w-8 rounded-full border border-white/20" />
                <img alt="user" src="https://i.pravatar.cc/40?img=32" className="h-8 w-8 rounded-full border border-white/20" />
              </div>
              <span className="text-sm">Trusted by creators and communities</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-2xl">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 rounded-xl bg-slate-950/50 border border-white/10 p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500" />
                    <div>
                      <div className="h-2.5 w-24 bg-white/20 rounded" />
                      <div className="h-2 w-16 bg-white/10 rounded mt-1" />
                    </div>
                  </div>
                  <div className="h-36 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10" />
                  <div className="flex items-center gap-3 mt-3">
                    <div className="h-2.5 w-16 bg-white/15 rounded" />
                    <div className="h-2.5 w-10 bg-white/10 rounded" />
                    <div className="h-2.5 w-10 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 space-y-2">
                  <div className="h-8 w-full rounded-lg bg-white/10" />
                  <div className="h-8 w-full rounded-lg bg-white/10" />
                  <div className="h-8 w-full rounded-lg bg-white/10" />
                  <div className="h-8 w-full rounded-lg bg-white/10" />
                  <div className="h-8 w-full rounded-lg bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
