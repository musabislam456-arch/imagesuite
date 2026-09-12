import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  Lock
} from 'lucide-react';
import { TOOLS_NAV } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'About ImageSuite — The Privacy-First Image Studio',
  description:
    'Learn about ImageSuite’s mission to provide fast, professional image processing tools powered entirely by your browser Canvas API without cloud uploads.',
  openGraph: {
    title: 'About ImageSuite — The Privacy-First Image Studio',
    description:
      'Zero server uploads. 100% in-browser GPU accelerated processing. Read our story and engineering philosophy.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client-Side Speed. Uncompromising Privacy.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We built ImageSuite to solve a fundamental flaw in modern web utilities: why should you upload sensitive personal photos, ID documents, or proprietary company mockups to a stranger&apos;s cloud server just to change a format or trim a few kilobytes?
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Zero Cloud Uploads</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every pixel calculation, format transcode, and quality quantization happens right in your device&apos;s memory via HTML5 Canvas. We don&apos;t run background upload servers, we don&apos;t maintain user accounts, and we never see your images.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">GPU Hardware Acceleration</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modern browsers tap directly into your GPU for sub-millisecond image manipulation. Because you bypass network latency and queue limits, bulk image processing finishes in seconds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Offline Independence</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Once you load ImageSuite in your browser, the tools continue working even if your Wi-Fi drops out or you are on an airplane. No subscription paywalls, no artificial daily file limits.
            </p>
          </div>
        </div>

        {/* Architecture Spotlight */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-indigo-400">
            <Lock className="w-3.5 h-3.5" />
            Technical Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How Browser-Based Processing Protects You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-base">Traditional Web Converters (Risky):</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Your image is serialized and sent over the public internet to a remote server.</li>
                <li>• The server saves it to temporary disk storage where cron jobs may or may not delete it.</li>
                <li>• Files can be logged or analyzed by backend scripts.</li>
                <li>• Upload speed is throttled by your upstream internet bandwidth.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-emerald-400 text-base">The ImageSuite Approach (Safe):</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Files are read into your browser&apos;s local memory sandbox via <code>URL.createObjectURL()</code>.</li>
                <li>• 2D Canvas contexts decode and re-encode pixel vectors directly.</li>
                <li>• No network request is initiated for image files.</li>
                <li>• Perfect compliance with GDPR, HIPAA, and corporate confidentiality policies.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools overview */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">Explore Our Tools</h2>
            <p className="text-sm text-slate-500 mt-1">
              Select any dedicated tool below to get started immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS_NAV.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                    <span>Open Tool</span>
                    <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
