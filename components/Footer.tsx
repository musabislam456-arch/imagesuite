import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, Zap, Lock } from 'lucide-react';
import { TOOLS_NAV } from '@/lib/navigation';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner: Architecture & Trust Highlight */}
        <div className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                Your Images Never Leave Your Browser
              </h3>
              <p className="text-slate-400 text-sm mt-0.5">
                Powered by modern HTML5 Canvas & WebAssembly. Zero cloud storage, zero transmission risks, full GDPR and HIPAA document safety.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-xs font-mono text-slate-300">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              100% Client-Side
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-xs font-mono text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Instant Speed
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-sm">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">ImageSuite</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              ImageSuite is the professional, privacy-first web utility for digital creators, developers, and photographers. Convert, resize, and compress high-resolution graphics directly on your GPU without cloud servers.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-xs">Built for the modern web with Canvas API</span>
            </div>
          </div>

          {/* Col 2: Core Tools */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Core Image Tools
            </p>
            <ul className="space-y-2">
              {TOOLS_NAV.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Guides */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Guides & Insights
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/best-image-format-for-web-in-2026"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Best Web Formats 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-compress-images-without-losing-quality"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Lossless Compression Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/png-vs-webp-performance-guide"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PNG vs WebP Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors font-medium text-indigo-400"
                >
                  All Engineering Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Company */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Company & Trust
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ImageSuite Inc. All rights reserved. Made for speed and privacy.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
