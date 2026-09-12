import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowRight, 
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import ToolWorkspace from '@/components/ToolWorkspace';

export const metadata: Metadata = {
  title: 'PNG to WebP Converter — Reduce File Size by up to 80% | ImageSuite',
  description:
    'Convert PNG images to modern WebP format right in your browser. Preserve transparency, customize quality, and boost Core Web Vitals with zero uploads.',
  openGraph: {
    title: 'PNG to WebP Converter — Reduce File Size by up to 80% | ImageSuite',
    description:
      'Convert PNG to WebP with custom quality and instant before/after preview. 100% private in-browser canvas conversion.',
  },
};

export default function PngToWebpPage() {
  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Web Image Format</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Convert PNG to WebP
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Slash file sizes by 60%–85% without sacrificing visual sharpness or alpha transparency. Dramatically accelerate page load speeds and optimize your Google Core Web Vitals (LCP).
          </p>
        </div>

        {/* Interactive Workspace */}
        <ToolWorkspace
          toolType="png-to-webp"
          title="PNG to WebP Conversion Studio"
          description="Drop your PNG images, adjust compression quality (default 85%), and inspect the real-time size reduction."
        />

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Massive Compression</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              WebP offers both lossy and lossless predictive coding, resulting in 26% smaller files than PNG and 25-34% smaller than JPEG at equivalent visual quality.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Alpha Transparency</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike JPEG, WebP retains full 8-bit alpha channel transparency while adding only 22% additional bytes compared to opaque images.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">97%+ Browser Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Supported natively across Chrome, Safari, Firefox, Edge, iOS Safari, Android Chrome, and all modern email clients.
            </p>
          </div>
        </div>

        {/* Deep Dive & Technical Explanation */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Why WebP is the Modern Standard for Web Performance
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              WebP was developed by Google using the VP8 video codec keyframe compression algorithms. In traditional PNG compression, data is organized in rows and compressed with standard Deflate (LZ77 + Huffman coding).
            </p>
            <p>
              In contrast, WebP employs predictive spatial block modeling: it divides the image into blocks and predicts neighboring pixel values based on adjacent blocks. It only encodes the residual difference between the predicted and actual pixel values. This mathematical efficiency is why WebP can represent complex gradients and textures at a fraction of PNG&apos;s byte weight.
            </p>
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-indigo-950 font-medium text-xs sm:text-sm">
              💡 <strong>Pro Tip:</strong> Setting quality to 85% yields visually indistinguishable differences compared to source PNG files while slashing bandwidth and speeding up Largest Contentful Paint (LCP).
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Will my transparent background remain intact?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, absolutely! WebP fully preserves transparent backgrounds with smooth alpha gradient blending, exactly like PNG.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">What quality setting should I choose?</h3>
              <p className="text-slate-600 leading-relaxed">
                We recommend 85% for most web images, UI icons, and hero headers. If you need maximum sharpness for photography portfolios, 92–95% is ideal.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Can I view before/after comparisons?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes! Once converted, click the &quot;Compare&quot; button next to any image to open the split interactive slider and inspect pixel fidelity.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Is this tool free and private?</h3>
              <p className="text-slate-600 leading-relaxed">
                100% free with no account creation or file count limits. Everything runs directly on your local device via your browser Canvas API.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-slate-500">Need other image tasks?</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/tools/image-compressor"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Target KB Compressor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/tools/image-resizer"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Image Resizer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
