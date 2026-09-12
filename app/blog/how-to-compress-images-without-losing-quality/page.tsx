import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Compress Images Without Losing Quality: The Definitive Guide | ImageSuite',
  description:
    'Learn practical techniques to shrink image sizes by 70-80% with imperceptible visual loss. Chroma subsampling, target KB budgets, and metadata stripping explained.',
  openGraph: {
    title: 'How to Compress Images Without Losing Quality',
    description:
      'Master visual perception thresholds and smart browser compression. Comprehensive technical guide by ImageSuite.',
  },
};

export default function HowToCompressArticle() {
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
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-700">
              Compression Guide
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 min read
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How to Compress Images Without Losing Quality
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            The phrase &quot;lossless compression&quot; is often misunderstood. In digital imaging, you can eliminate up to 75% of file bulk while remaining 100% imperceptible to the human eye. Here is how modern perceptual compression works.
          </p>

          <div className="pt-4 flex items-center gap-3 border-y border-slate-100 py-4">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              MT
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Marcus Thorne</div>
              <div className="text-xs text-slate-500">Senior Digital Media Specialist</div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 pt-4">1. The Difference Between Mathematical and Perceptual Lossless</h2>
          <p>
            Pure <strong>mathematical lossless</strong> compression (like ZIP or raw PNG) guarantees that every bit is restored identically upon decompression. However, the human optical system is not a bit-for-bit optical sensor.
          </p>
          <p>
            Human eyes possess roughly 120 million rod cells (which detect luminance, or lightness and darkness) but only 6 to 7 million cone cells (which detect chrominance, or color). This biological asymmetry is the foundation of <strong>perceptual compression</strong>: algorithms deliberately discard high-frequency color variations that the human brain literally cannot resolve, saving enormous amounts of disk space.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">2. The 3 Hidden Causes of Image Bloat</h2>
          <p>
            When a photo taken with a mirrorless camera or modern smartphone weighs 12 megabytes, where are all those bytes actually going?
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unnecessary Resolution:</strong> A 48-megapixel camera captures 8000 × 6000 pixels. On a standard MacBook Retina display or mobile device, an image in a blog post rarely renders larger than 1200 pixels wide. Downsampling down to 2x display dimensions saves 80% of bytes before compression even begins.
            </li>
            <li>
              <strong>Embedded EXIF & ICC Color Profiles:</strong> Camera manufacturers embed thumbnail previews, GPS coordinates, shutter speeds, and massive 1MB color profile chunks into the image file header. Stripping this metadata produces zero visual change while shedding hundreds of kilobytes.
            </li>
            <li>
              <strong>Inefficient Quality Factors:</strong> Saving a JPEG at &quot;100% Quality&quot; in software like Photoshop disables quantization entirely, doubling or tripling file size compared to 85% with zero perceptible gain in sharpness.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">3. The Sweet Spot Quality Index</h2>
          <p>
            Extensive psychophysical testing using DSSIM (Structural Dissimilarity) metrics demonstrates how visual fidelity scales against file size:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs uppercase font-bold text-slate-400">Quality: 100%</div>
              <div className="text-xl font-bold text-slate-900 mt-1">2.4 MB</div>
              <p className="text-xs text-slate-500 mt-2">
                Extreme bloat. Imperceptible to the human eye. Severely penalizes mobile page load times.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300">
              <div className="text-xs uppercase font-bold text-emerald-600">Quality: 82% – 88%</div>
              <div className="text-xl font-bold text-emerald-700 mt-1">380 KB (-84%)</div>
              <p className="text-xs text-emerald-800 mt-2">
                The Golden Ratio. Visually indistinguishable from the original on Retina screens.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
              <div className="text-xs uppercase font-bold text-rose-500">Quality: Below 50%</div>
              <div className="text-xl font-bold text-slate-900 mt-1">95 KB (-96%)</div>
              <p className="text-xs text-rose-700 mt-2">
                Noticeable block artifacts and color smearing around edges and typography.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">4. Compressing to a Strict Target Size (e.g. 100 KB)</h2>
          <p>
            Frequently, online services (job portals, visa applications, government document gateways) enforce a strict ceiling: <em>&quot;File must be less than 100KB.&quot;</em>
          </p>
          <p>
            Manually guessing and checking with generic sliders is tedious. With ImageSuite&apos;s <strong>Target KB Compressor</strong>, an iterative binary search algorithm calculates the exact quality threshold on your browser Canvas and, if necessary, calculates the minimum necessary bicubic pixel scale to guarantee your final file lands safely under the required byte ceiling.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">5. Summary Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always resize dimensions first to match your largest intended display container (e.g. 1200px or 1920px max).</li>
            <li>Convert legacy JPEGs and PNGs to WebP format whenever possible.</li>
            <li>Set WebP quality to 80%–85% for photos and UI backgrounds.</li>
            <li>Use browser-based client-side tools so your proprietary graphics aren&apos;t retained by third-party servers.</li>
          </ul>
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold">Compress to Target KB Now</h3>
            <p className="text-emerald-300 text-sm">
              Use ImageSuite&apos;s Target KB compressor to achieve exact file size compliance in seconds.
            </p>
          </div>
          <Link
            href="/tools/image-compressor"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shrink-0 shadow-md"
          >
            Launch Target Compressor →
          </Link>
        </div>
      </div>
    </article>
  );
}
