import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Minimize2, 
  ShieldCheck, 
  Target, 
  Layers, 
  ArrowRight, 
  HelpCircle,
  Gauge,
  CheckCircle2
} from 'lucide-react';
import ToolWorkspace from '@/components/ToolWorkspace';

export const metadata: Metadata = {
  title: 'Image Compressor — Compress to Exact Target Size in KB | ImageSuite',
  description:
    'Compress images to an exact target file size (e.g. 50KB, 100KB, 200KB) in your browser. Fast Canvas algorithm, visual quality comparison, and complete privacy.',
  openGraph: {
    title: 'Image Compressor — Compress to Exact Target Size in KB | ImageSuite',
    description:
      'Set an exact target file size in KB and compress images in your browser. No server uploads, batch support, instant downloads.',
  },
};

export default function ImageCompressorPage() {
  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Exact Target File Size Engine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Image Compressor to Target KB
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Need an image under 50KB for a government portal, under 100KB for an email campaign, or under 200KB for maximum mobile speed? Set your exact target KB limit below and let ImageSuite calculate the optimal compression.
          </p>
        </div>

        {/* Interactive Workspace */}
        <ToolWorkspace
          toolType="image-compressor"
          title="Target KB Compression Engine"
          description="Select your target size limit (e.g., 100 KB), choose your output format, and drop files to compress."
        />

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Iterative Binary Search</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ImageSuite tests compression ratios iteratively via hardware-accelerated Canvas encoding until reaching the closest possible size below your threshold.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Total Document Privacy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compress sensitive identity documents, passports, signatures, or proprietary design mockups with absolute confidence that no files leave your computer.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Strict Portal Compliance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Designed specifically for government portals, job applications, university submission portals, and e-commerce platforms with rigid maximum file size limits.
            </p>
          </div>
        </div>

        {/* Deep Dive & Technical Guide */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            How Target Size Compression Works
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Most online compressors only offer vague sliders like &quot;High, Medium, Low&quot; or quality percentages (0–100%). However, images vary wildly in entropy: a 4K photo with intricate tree foliage requires far more bytes than a graphic with solid flat colors.
            </p>
            <p>
              When you specify a target like <strong>100 KB</strong>, ImageSuite employs a two-tier compression engine:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Quality Stepping:</strong> It samples encoding qualities using a binary search to find the highest perceptual fidelity that remains below your specified byte budget.
              </li>
              <li>
                <strong>Dynamic Proportional Rescaling:</strong> If the original image is so large that even the lowest compression quality exceeds the byte limit, ImageSuite gently rescales pixel dimensions with high-quality bicubic interpolation until the file satisfies your target.
              </li>
            </ol>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs">
              <strong>Tip for passport & document portals:</strong> Portals that ask for &quot;less than 50KB or 100KB&quot; usually reject files even 1 byte over. ImageSuite is calibrated to always land strictly under the target threshold.
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
              <h3 className="font-semibold text-slate-900">What if my original is already smaller than the target?</h3>
              <p className="text-slate-600 leading-relaxed">
                If the original file is already smaller than your target limit, ImageSuite preserves its high quality and outputs the optimized file without unnecessarily degrading it.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Which format is best for target compression?</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>WebP</strong> produces the highest visual clarity at lower bitrates. However, if your portal requires <strong>JPG</strong>, simply toggle the output format to JPG above.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">How many images can I compress simultaneously?</h3>
              <p className="text-slate-600 leading-relaxed">
                You can compress dozens of images in parallel. Once ready, click &quot;Download All (.ZIP)&quot; to get all compressed files neatly packaged together.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Does ImageSuite store copies on a server?</h3>
              <p className="text-slate-600 leading-relaxed">
                No. All encoding runs in your local browser sandbox through the HTML5 Canvas API. We never see, transmit, or store your photos or confidential documents.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-slate-500">Need other image tasks?</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/tools/image-resizer"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Image Resizer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/tools/png-to-webp"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>PNG to WebP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
