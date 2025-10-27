import React from 'react';
import { Camera, MessageCircle, Video, Shield, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition shadow-lg/10">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-md shadow-fuchsia-500/20">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
    {children}
  </div>
);

const ChatPreview = () => (
  <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3 space-y-2">
    <div className="flex items-start gap-2">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
      <div className="max-w-[75%] bg-white/10 rounded-2xl rounded-tl-sm p-2 text-sm">Hey! Are we still on for tonight? 🙂</div>
    </div>
    <div className="flex items-start gap-2 justify-end">
      <div className="max-w-[75%] bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-2xl rounded-tr-sm p-2 text-sm">Absolutely! Sending location now.</div>
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500" />
    </div>
    <div className="flex items-start gap-2">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
      <div className="max-w-[75%] bg-white/10 rounded-2xl rounded-tl-sm p-2 text-sm">Voice note: 0:23</div>
    </div>
  </div>
);

const FeedPreview = () => (
  <div className="rounded-xl border border-white/10 bg-slate-950/50 overflow-hidden">
    <div className="p-3 flex items-center gap-2">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-orange-400" />
      <div className="h-2.5 w-24 bg-white/20 rounded" />
    </div>
    <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-900" />
    <div className="p-3 flex items-center gap-4">
      <div className="h-2.5 w-16 bg-white/15 rounded" />
      <div className="h-2.5 w-10 bg-white/10 rounded" />
      <div className="h-2.5 w-10 bg-white/10 rounded" />
    </div>
  </div>
);

const CallPreview = () => (
  <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
    <div className="grid grid-cols-3 gap-2">
      <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-900" />
      <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-900" />
      <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-900" />
    </div>
    <div className="mt-3 flex items-center justify-center gap-3">
      <div className="h-10 w-10 rounded-full bg-emerald-500/90" />
      <div className="h-10 w-10 rounded-full bg-red-500/90" />
      <div className="h-10 w-10 rounded-full bg-white/15" />
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you love, reimagined together</h2>
          <p className="mt-3 text-white/70">A fast, secure, and delightful experience that merges messaging, media sharing, and video calling into one cohesive flow.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={MessageCircle} title="Real-time chat" desc="Fast, reliable messaging with read receipts, media, and voice notes.">
            <ChatPreview />
          </FeatureCard>

          <FeatureCard icon={Camera} title="Creative feed" desc="Share photos, reels, and stories with powerful editing tools.">
            <FeedPreview />
          </FeatureCard>

          <FeatureCard icon={Video} title="Crystal calls" desc="Group video with noise suppression and screen share.">
            <CallPreview />
          </FeatureCard>

          <FeatureCard icon={Shield} title="Private by default" desc="End-to-end encryption and granular privacy controls.">
            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Encrypted chats</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Hidden numbers</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Session safety</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard icon={Users} title="Communities" desc="Channels, groups, and broadcast lists for any size.">
            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600" />
                <div className="h-2.5 w-36 bg-white/20 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-8 w-full rounded-lg bg-white/10" />
                <div className="h-8 w-full rounded-lg bg-white/10" />
                <div className="h-8 w-full rounded-lg bg-white/10" />
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
