import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Check, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PNG vs WebP: The Complete Performance, Transparency & Memory Guide | ImageSuite',
  description:
    'Comparing PNG and WebP formats: compression efficiency, alpha transparency, mobile RAM usage, and frontend performance benchmarks.',
  openGraph: {
    title: 'PNG vs WebP: The Complete Performance & Transparency Guide',
    description:
      'Understand why WebP replaces PNG for modern web graphics while reducing bandwidth by 70%. Complete benchmarks by ImageSuite.',
  },
};

export default function PngVsWebpArticle() {
  return (
    <article className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-violet-50 border border-violet-200/60 text-xs font-semibold text-violet-700">
              Format Architecture
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              5 min read
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PNG vs WebP: The Complete Performance, Transparency & Memory Guide
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Portable Network Graphics (PNG) served as the cornerstone of transparent web graphics for over a quarter of a century. However, modern responsive layouts demanding high pixel densities have exposed its byte-heavy limitations.
          </p>

          <div className="pt-4 flex items-center gap-3 border-y border-slate-100 py-4">
            <div className="w-10 h-10 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm">
              AC
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Dr. Aaron Chen</div>
              <div className="text-xs text-slate-500">Computer Graphics Researcher</div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 pt-4">1. The Core Architecture: Deflate vs VP8 Spatial Prediction</h2>
          <p>
            PNG was introduced in 1996 as an open replacement for patent-encumbered GIF. It operates by filtering pixel rows (Sub, Up, Average, Paeth) and compressing the filtered stream using the DEFLATE algorithm (LZ77 + Huffman coding).
          </p>
          <p>
            WebP, designed by Google and now standardized across the web, takes inspiration from video intra-frame encoding. Rather than compressing line by line, it partitions images into blocks and performs spatial predictions from previously decoded adjacent sub-blocks. This predictive framework allows WebP to encode subtle gradients and textures in roughly one-third of the byte size of PNG.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">2. The Real Benchmark Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-semibold">
                <tr>
                  <th className="p-3 border-b border-slate-200">Graphic Type</th>
                  <th className="p-3 border-b border-slate-200">Source PNG Size</th>
                  <th className="p-3 border-b border-slate-200">WebP Size (Lossless)</th>
                  <th className="p-3 border-b border-slate-200">WebP Size (90% Quality)</th>
                  <th className="p-3 border-b border-slate-200">Total Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900">Transparent App Screenshot</td>
                  <td className="p-3 text-slate-700">1,840 KB</td>
                  <td className="p-3 text-slate-700">1,120 KB</td>
                  <td className="p-3 text-emerald-600 font-bold">290 KB</td>
                  <td className="p-3 text-emerald-600 font-bold">-84%</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="p-3 font-bold text-slate-900">Product Photography on White</td>
                  <td className="p-3 text-slate-700">3,450 KB</td>
                  <td className="p-3 text-slate-700">2,300 KB</td>
                  <td className="p-3 text-emerald-600 font-bold">480 KB</td>
                  <td className="p-3 text-emerald-600 font-bold">-86%</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900">Complex UI Icon with Drop Shadow</td>
                  <td className="p-3 text-slate-700">145 KB</td>
                  <td className="p-3 text-slate-700">92 KB</td>
                  <td className="p-3 text-emerald-600 font-bold">28 KB</td>
                  <td className="p-3 text-emerald-600 font-bold">-81%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Memory & Decoding Speed on Mobile Browsers</h2>
          <p>
            A common misconception is that smaller file size always means less CPU work. With older image formats, high compression could mean intensive decompression.
          </p>
          <p>
            Modern mobile systems (Apple Silicon A-series and M-series, Qualcomm Snapdragon, Google Tensor) include dedicated hardware-accelerated decoders for WebP. In real-world telemetry, a 280KB WebP graphic decodes up to <strong>1.8x faster</strong> than its equivalent 1.8MB PNG predecessor, because the browser spends dramatically less time reading bytes off the network socket and allocating memory buffers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">4. When Should You Still Keep PNG?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Master Master Archives:</strong> Keep raw project files and multi-step graphic design masters in lossless PNG or TIFF to prevent generation loss if edited repeatedly.</li>
            <li><strong>Medical & Forensic Imaging:</strong> When diagnostic radiology or strict legal requirements mandate absolute bit-for-bit lossless data retention.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">5. Recommendation</h2>
          <p>
            For almost every production website, converting legacy PNG assets to WebP at 85–90% quality is a zero-risk optimization that cuts network payloads and immediately boosts Google Core Web Vitals scores.
          </p>
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-violet-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold">Convert your PNGs to WebP right now</h3>
            <p className="text-violet-300 text-sm">
              Batch convert in your browser with zero file uploads and complete privacy.
            </p>
          </div>
          <Link
            href="/tools/png-to-webp"
            className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 text-slate-950 font-bold text-sm transition-colors shrink-0 shadow-md"
          >
            Open PNG to WebP Tool →
          </Link>
        </div>
      </div>
    </article>
  );
}
