import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileCode2, 
  Sparkles, 
  Minimize2, 
  Scaling, 
  ShieldCheck, 
  Zap, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Gauge, 
  Layers, 
  Cpu,
  Clock
} from 'lucide-react';
import ToolWorkspace from '@/components/ToolWorkspace';
import { BLOG_POSTS } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'ImageSuite — Fast In-Browser Image Converter, Compressor & Resizer',
  description:
    'Free client-side image processing. Convert JPG to PNG, PNG to WebP, compress to exact target KB, and resize dimensions with 100% privacy and zero server uploads.',
  openGraph: {
    title: 'ImageSuite — Fast In-Browser Image Converter, Compressor & Resizer',
    description:
      'Zero server uploads. Convert JPG to PNG, PNG to WebP, compress to target KB, and resize directly on your GPU.',
  },
};

const CORE_TOOLS = [
  {
    id: 'jpg-to-png',
    title: 'JPG to PNG',
    badge: 'Lossless RGBA',
    description: 'Convert lossy JPG photos into crisp, lossless 24-bit PNG files with alpha channel transparency.',
    href: '/tools/jpg-to-png',
    icon: FileCode2,
    gradient: 'from-blue-600 to-indigo-600',
    stats: '100% Pixel Accuracy',
    features: ['Retains sharp typography', 'Creates alpha channels', 'Eliminates JPEG ringing artifacts'],
  },
  {
    id: 'png-to-webp',
    title: 'PNG to WebP',
    badge: 'Core Web Vitals',
    description: 'Transform heavy PNG assets into modern Google WebP graphics. Save 60%–85% bandwidth with zero perceptible loss.',
    href: '/tools/png-to-webp',
    icon: Sparkles,
    gradient: 'from-indigo-600 to-violet-600',
    stats: 'Up to 85% Size Reduction',
    features: ['Full alpha transparency', 'High-fidelity predictive coding', 'Fast mobile CPU decoding'],
  },
  {
    id: 'image-compressor',
    title: 'Image Compressor (Target KB)',
    badge: 'Precision Size',
    description: 'Specify an exact target file size (e.g. 50 KB, 100 KB, 200 KB) for government forms, email campaigns, and portals.',
    href: '/tools/image-compressor',
    icon: Minimize2,
    gradient: 'from-violet-600 to-fuchsia-600',
    stats: 'Guaranteed Under Target',
    features: ['Iterative binary search quality', 'Auto-rescales if needed', 'Real-time before/after compare'],
  },
  {
    id: 'image-resizer',
    title: 'Image Resizer',
    badge: 'Social & Web Presets',
    description: 'Scale pixel dimensions with high-quality bicubic smoothing. Instant presets for Instagram, YouTube, X/Twitter, and web banners.',
    href: '/tools/image-resizer',
    icon: Scaling,
    gradient: 'from-fuchsia-600 to-rose-600',
    stats: 'Bicubic Anti-Aliasing',
    features: ['Aspect ratio lock', 'Social media dimension presets', 'Export to WebP, JPG, or PNG'],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen space-y-20 sm:space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 overflow-hidden">
        {/* Soft background ambient gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-violet-200/30 to-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% In-Browser Canvas API • Zero Cloud Uploads • Complete Privacy</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Fast Image Tools.<br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                Processed Right on Your Device.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Convert, compress to exact target KB, and resize high-resolution images instantly. No server queues, no file retention, and no bandwidth limits.
            </p>
          </div>

          {/* Quick interactive jump or drop workspace right on homepage */}
          <div className="max-w-4xl mx-auto pt-4 text-left">
            <ToolWorkspace
              toolType="png-to-webp"
              title="Quick Image Studio"
              description="Drop any image below to instantly convert and optimize locally on your GPU."
            />
          </div>
        </div>
      </section>

      {/* Core Tools Grid Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Dedicated Creative Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Dedicated Tools
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Each utility is tailored for specific workflows with customized sliders, real-time comparisons, and batch zip downloading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CORE_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                id={`tool-card-${tool.id}`}
                className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {tool.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                      <Link href={tool.href}>{tool.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {tool.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                    {tool.stats}
                  </span>
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors"
                  >
                    <span>Open Tool</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Client-Side Canvas Matters Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5" />
                Browser Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Why 100% In-Browser Processing is Superior
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By rendering images directly on your local device through HTML5 Canvas and modern browser hardware acceleration, ImageSuite redefines how web tools should behave.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div className="space-y-3 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Absolute Privacy</h3>
                <p className="text-slate-400 leading-relaxed">
                  Your files are never serialized or sent across public networks. Perfect for confidential contracts, employee badges, medical forms, and high-value creative assets.
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Zero Queue Latency</h3>
                <p className="text-slate-400 leading-relaxed">
                  No waiting in line on congested cloud servers or hitting 5-file daily limits. Conversions execute at the raw speed of your computer&apos;s multi-core CPU and GPU.
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Automatic Metadata Sanitization</h3>
                <p className="text-slate-400 leading-relaxed">
                  Canvas pixel rendering naturally sheds hidden camera serials, lens telemetry, and GPS coordinates before export, keeping your location strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog & Engineering Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Guides</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Master Image Optimization
            </h2>
            <p className="text-slate-600 text-sm">
              In-depth research on formats, Core Web Vitals, and perceptual lossless compression.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 shrink-0"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-indigo-600 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Global FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about ImageSuite&apos;s privacy, formats, and client-side processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm text-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Is ImageSuite completely free to use?</h3>
            <p className="text-slate-600 leading-relaxed">
              Yes, 100% free with no account creation, subscriptions, or credit cards required. Because image rendering occurs on your client device, we do not incur expensive cloud GPU server bills and pass those savings directly to you.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">How does the Target KB Compressor guarantee size limits?</h3>
            <p className="text-slate-600 leading-relaxed">
              ImageSuite uses an iterative binary search on the canvas export quality. If an image is extremely dense and exceeds your limit even at lowest quality, ImageSuite calculates and applies proportional downscaling until the byte limit is strictly satisfied.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Can I convert or compress multiple images at once?</h3>
            <p className="text-slate-600 leading-relaxed">
              Yes! You can drop 20, 30, or more images at once. ImageSuite queues and renders each file sequentially in memory. Once completed, you can download any file individually or click &quot;Download All (.ZIP)&quot; to export the full batch.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Can ImageSuite work offline?</h3>
            <p className="text-slate-600 leading-relaxed">
              Yes. Once the web application is loaded in your browser tab, all image conversions, resizes, and compression algorithms operate entirely offline without requiring an active internet connection.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-violet-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Start Optimizing Your Images Now
            </h3>
            <p className="text-indigo-200 text-sm sm:text-base max-w-xl leading-relaxed">
              No account, no tracking, zero cloud uploads. Just fast, private browser image tools.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/tools/image-compressor"
              className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-indigo-50 transition-colors shadow-md"
            >
              Launch Compressor
            </Link>
            <Link
              href="/tools/png-to-webp"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors border border-indigo-400/40"
            >
              PNG to WebP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
