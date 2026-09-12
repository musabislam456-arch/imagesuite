import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Scaling, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowRight, 
  HelpCircle,
  Maximize2,
  Lock
} from 'lucide-react';
import ToolWorkspace from '@/components/ToolWorkspace';

export const metadata: Metadata = {
  title: 'Image Resizer — Resize Dimensions in Pixels or % | ImageSuite',
  description:
    'Resize images online for social media, websites, and banners. Maintain aspect ratio, choose from presets, and export to WebP, JPG, or PNG in your browser.',
  openGraph: {
    title: 'Image Resizer — Resize Dimensions in Pixels or % | ImageSuite',
    description:
      'High-quality browser-based image resizing with presets for Instagram, Twitter, YouTube, and websites. 100% private.',
  },
};

export default function ImageResizerPage() {
  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <Scaling className="w-3.5 h-3.5" />
            <span>High-Quality Canvas Bicubic Scaling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Resize Image Dimensions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Scale pixel dimensions for Instagram, X/Twitter, YouTube thumbnails, email headers, or responsive website breakpoints. Keep aspect ratio locked or customize free-form dimensions.
          </p>
        </div>

        {/* Interactive Workspace */}
        <ToolWorkspace
          toolType="image-resizer"
          title="Image Resizing Studio"
          description="Choose a preset below or enter exact width and height in pixels. ImageSuite scales your graphics with high-fidelity anti-aliasing."
        />

        {/* Popular Presets Quick Guide */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Standard Aspect Ratios & Dimension Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Social Media Posts</span>
              <ul className="space-y-1 text-slate-600 text-xs">
                <li>• Instagram Square: 1080 × 1080 px (1:1)</li>
                <li>• Instagram Story / Reel: 1080 × 1920 px (9:16)</li>
                <li>• Twitter / X Feed: 1200 × 675 px (16:9)</li>
                <li>• LinkedIn Feed: 1200 × 627 px (1.91:1)</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Video & Displays</span>
              <ul className="space-y-1 text-slate-600 text-xs">
                <li>• YouTube Thumbnail: 1280 × 720 px (16:9)</li>
                <li>• Full HD Display: 1920 × 1080 px</li>
                <li>• 4K Ultra HD: 3840 × 2160 px</li>
                <li>• Twitch Video Player: 1920 × 1080 px</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Web Design & Email</span>
              <ul className="space-y-1 text-slate-600 text-xs">
                <li>• Open Graph / Twitter Card: 1200 × 630 px</li>
                <li>• Email Newsletter Hero: 600 × 400 px</li>
                <li>• Website Blog Thumbnail: 800 × 450 px</li>
                <li>• Avatar / Profile Picture: 400 × 400 px</li>
              </ul>
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
              <h3 className="font-semibold text-slate-900">Will my image look blurry when resized?</h3>
              <p className="text-slate-600 leading-relaxed">
                Downscaling (reducing size) always produces razor-sharp results due to our browser Canvas bicubic filtering (`imageSmoothingQuality = &apos;high&apos;`). Upscaling small images significantly beyond their natural resolution will reveal pixelation, which is physically unavoidable for raster graphics.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">How does the Aspect Ratio Lock work?</h3>
              <p className="text-slate-600 leading-relaxed">
                When the aspect ratio lock is enabled (default), ImageSuite automatically calculates and scales the image proportionately so your graphics never stretch or distort.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Can I change the format while resizing?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes! You can choose to export the resized image as WebP (for maximum web efficiency), JPG (universal compatibility), or PNG (transparency).
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-slate-900">Can I resize in bulk?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, drop as many images as you need. All files in the queue will be processed with your chosen dimension settings, and you can download the entire batch as a ZIP.
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
              <span>Image Compressor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/tools/jpg-to-png"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>JPG to PNG</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
