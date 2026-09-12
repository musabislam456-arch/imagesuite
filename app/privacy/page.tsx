import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, ServerOff, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — 100% Client-Side Architecture | ImageSuite',
  description:
    'Our commitment to your data privacy. Learn why ImageSuite never uploads, inspects, or stores your images on any server.',
  openGraph: {
    title: 'Privacy Policy | ImageSuite',
    description: 'Zero server uploads. 100% client-side image processing. Complete privacy by design.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-Knowledge Data Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: January 1, 2026 • Effective Date: January 1, 2026
          </p>
        </div>

        {/* Highlight Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-bold">
            <Lock className="w-4 h-4" />
            Core Privacy Principle
          </div>
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            ImageSuite operates exclusively via client-side Web Technologies (HTML5 Canvas and browser APIs). Your images, graphics, photos, documents, and files are NEVER transmitted over the network to any remote server or stored in any database.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Do NOT Collect</h2>
            <p>
              Unlike conventional online utilities that require uploading files to cloud storage buckets (e.g. AWS S3 or Google Cloud Storage) for conversion, ImageSuite relies entirely on local execution:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>No Image Content:</strong> We do not receive, process, or view your original or converted images.</li>
              <li><strong>No Metadata Extraction:</strong> We do not log EXIF metadata (camera serial numbers, geolocation coordinates, lens settings, timestamps). In fact, browser canvas re-encoding strips metadata automatically.</li>
              <li><strong>No User Profiles:</strong> We do not require accounts, logins, passwords, or credit cards to use our core image tools.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. How In-Browser Processing Works</h2>
            <p>
              When you drag a file into ImageSuite:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-600">
              <li>Your web browser generates a temporary local object pointer (<code>blob:http://...</code>) referencing the file in your system&apos;s active RAM.</li>
              <li>The image is drawn onto an invisible HTML5 <code>&lt;canvas&gt;</code> element inside your browser sandbox.</li>
              <li>The canvas outputs compressed or converted pixel data directly to a downloadable file on your local hard drive.</li>
              <li>The temporary memory pointers are released and garbage-collected as soon as you clear the queue or close the browser tab.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Analytics & Telemetry</h2>
            <p>
              We may utilize privacy-preserving, aggregate web analytics (such as measuring total page views or identifying broken links) to maintain site uptime and performance. These analytics do not track individual identity, do not track file names, and do not inspect file contents.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Third-Party Integrations</h2>
            <p>
              If third-party customer support chat widgets (such as Crisp or Tawk) are enabled on the site, any information you voluntarily type into the chat is governed by the respective chat provider&apos;s privacy terms. We do not use third-party advertising cookies or cross-site tracking pixels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Regulatory Compliance (GDPR, CCPA & HIPAA)</h2>
            <p>
              Because ImageSuite never transfers, stores, or processes personal data on remote servers, using ImageSuite to format employee badges, medical scans, identity records, or internal corporate schematics is inherently compliant with GDPR Article 25 (Data Protection by Design and by Default) and HIPAA physical safeguards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Contact for Privacy Inquiries</h2>
            <p>
              For legal inquiries regarding our privacy standards or technical architecture, please email us at <a href="mailto:privacy@imagesuite.app" className="text-indigo-600 font-semibold hover:underline">privacy@imagesuite.app</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
