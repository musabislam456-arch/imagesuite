import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileCode2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  HelpCircle 
} from 'lucide-react';
import ToolWorkspace from '@/components/ToolWorkspace';

export const metadata: Metadata = {
  title: 'JPG to PNG Converter — 100% Free & In-Browser | ImageSuite',
  description:
    'Convert JPG to high-definition PNG format losslessly in your browser. Fast, client-side Canvas processing with zero file uploads and complete privacy.',
  openGraph: {
    title: 'JPG to PNG Converter — 100% Free & In-Browser | ImageSuite',
    description:
      'Convert JPG images to PNG losslessly in your browser. No registration, no server uploads, unlimited batch conversion.',
  },
};

export default function JpgToPngPage() {
  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Lossless Raster Conversion</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Convert JPG to PNG
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transform lossy JPEG photos into clean, lossless 24-bit PNG files with transparent alpha channels. Rendered 100% locally on your computer via the HTML5 Canvas API.
          </p>
        </div>

        {/* Interactive Workspace */}
        <ToolWorkspace
          toolType="jpg-to-png"
          title="JPG to PNG Converter Studio"
          description="Drop single or batch JPG files. ImageSuite renders each image on an in-memory Canvas and exports pristine PNGs."
        />

        {/* How It Works Section */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">
              How to Convert JPG to PNG in 3 Steps
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              No software installations, no server upload delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                1
              </div>
              <h3 className="font-semibold text-slate-900 text-base">Select or Drop JPG Files</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Drag JPG or JPEG files directly into the box or click to select from your device. You can also paste from clipboard (Ctrl+V).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                2
              </div>
              <h3 className="font-semibold text-slate-900 text-base">Instant Canvas Decoding</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your browser immediately draws the decoded pixel matrix into an in-memory canvas buffer, preparing lossless RGBA output.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                3
              </div>
              <h3 className="font-semibold text-slate-900 text-base">Download Individual or ZIP</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Download your new PNG files individually or click &quot;Download All&quot; to export an organized .ZIP file in a single click.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Dive & Comparison Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Why Convert JPG to PNG?
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Lossless Compression:</strong> While JPEG is lossy (discarding subtle color frequencies every time you re-save), PNG uses the DEFLATE algorithm, ensuring no pixel detail is ever degraded during subsequent edits.
              </p>
              <p>
                <strong>Alpha Channel Transparency:</strong> PNG supports true 8-bit alpha channels (256 levels of opacity), making it the gold standard for logos, UI graphics, overlays, and icons.
              </p>
              <p>
                <strong>Crisp Sharp Edges:</strong> PNG eliminates the high-frequency ringing and fuzzy edge artifacts that plague JPEG compression around typography, diagrams, and vector illustrations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Privacy Guarantee
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                Traditional online converters transmit your confidential images to remote cloud servers, where they may be logged, analyzed, or retained in temporary caches.
              </p>
              <p>
                ImageSuite operates entirely inside your client browser sandbox using modern JavaScript Canvas APIs. Your images never leave your device, making it 100% compliant with strict enterprise data protection policies (GDPR, HIPAA, SOC-2).
              </p>
              <div className="pt-2 flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Zero Server Uploads • Offline Capable</span>
              </div>
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
              <h3 className="font-semibold text-slate-900">Does converting JPG to PNG increase file size?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, in many cases. Because PNG is a lossless format, it preserves the exact pixel values without discarding high frequencies. If you need smaller file sizes with transparency, try our PNG to WebP tool.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Can I convert multiple JPGs at once?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes! You can drop dozens of JPG files simultaneously. They will all be converted in parallel using your browser&apos;s rendering engine, and you can download them all in a single ZIP bundle.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Is there any file size limit?</h3>
              <p className="text-slate-600 leading-relaxed">
                Because processing happens on your local device&apos;s memory and GPU, there is no artificial cloud upload limit. You can convert high-resolution 4K or 8K photos effortlessly.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Will EXIF metadata be stripped?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes. For privacy and security reasons, browser canvas rendering automatically strips geolocation, camera serial numbers, and sensitive EXIF tags, protecting your anonymity.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-slate-500">Need other image tasks?</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/tools/png-to-webp"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>PNG to WebP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/tools/image-compressor"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Image Compressor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
