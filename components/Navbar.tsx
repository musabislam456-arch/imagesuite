'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Layers, 
  Menu, 
  X, 
  Minimize2, 
  BookOpen, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import { TOOLS_NAV } from '@/lib/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          id="navbar-brand-logo"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              ImageSuite
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1">
              Private Canvas Tools
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Tools Menu with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <button
              type="button"
              id="nav-tools-dropdown-btn"
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith('/tools')
                  ? 'text-indigo-600 bg-indigo-50/70 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>Image Tools</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
            </button>

            {/* Dropdown Menu */}
            {toolsDropdownOpen && (
              <div 
                id="nav-tools-dropdown-menu"
                className="absolute left-0 top-full mt-1 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                  Core Browser Tools
                </div>
                <div className="space-y-1">
                  {TOOLS_NAV.map((tool) => {
                    const Icon = tool.icon;
                    const isActive = pathname === tool.href;
                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setToolsDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors ${
                          isActive
                            ? 'bg-indigo-50/80 text-indigo-900'
                            : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        <div className={`p-2 rounded-lg mt-0.5 ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">{tool.name}</span>
                            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              {tool.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {tool.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-2 bg-slate-50/60 rounded-xl flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Zero server uploads
                  </span>
                  <Link 
                    href="/privacy" 
                    className="text-xs font-medium text-indigo-600 hover:underline"
                    onClick={() => setToolsDropdownOpen(false)}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            id="nav-link-blog"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname.startsWith('/blog')
                ? 'text-indigo-600 bg-indigo-50/70 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Guides & Blog
          </Link>

          <Link
            href="/about"
            id="nav-link-about"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/about'
                ? 'text-indigo-600 bg-indigo-50/70 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            id="nav-link-contact"
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/contact'
                ? 'text-indigo-600 bg-indigo-50/70 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button & Privacy Tag */}
        <div className="hidden md:flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[12px] font-medium text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            100% In-Browser
          </div>
          <Link
            href="/tools/image-compressor"
            id="nav-cta-compressor"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <Minimize2 className="w-4 h-4" />
            <span>Compress Image</span>
          </Link>
        </div>

        {/* Mobile menu hamburger */}
        <button
          type="button"
          id="nav-mobile-toggle-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3">
            Tools
          </div>
          <div className="grid grid-cols-1 gap-1">
            {TOOLS_NAV.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  <Icon className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              Guides & Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/tools/image-compressor"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm shadow-sm"
            >
              <Minimize2 className="w-4 h-4" />
              Launch Image Compressor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
