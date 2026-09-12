import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | ImageSuite',
  description:
    'Read the terms of service for ImageSuite, the private in-browser image conversion and compression platform.',
  openGraph: {
    title: 'Terms of Service | ImageSuite',
    description: 'Terms of service governing the usage of ImageSuite browser tools.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: January 1, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ImageSuite (&quot;the Service&quot;), you acknowledge and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using the website and its associated utilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Description of the Service</h2>
            <p>
              ImageSuite provides free browser-based graphic utilities, including but not limited to JPG-to-PNG conversion, PNG-to-WebP conversion, image compression to targeted kilobyte ceilings, and dimension resizing. All image transformation processes occur locally within your browser client via HTML5 Canvas technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property Rights & Ownership of Files</h2>
            <p>
              <strong>You retain 100% full, unencumbered ownership of all images, logos, graphics, and files you process through ImageSuite.</strong> Because processing is strictly client-side, ImageSuite never takes possession, holds a license to, or reproduces any part of your user content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Acceptable Use</h2>
            <p>
              You agree to use ImageSuite only for lawful purposes. You agree not to attempt to reverse engineer, disrupt, or introduce malicious script injections into the application code or infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. ImageSuite does not guarantee that conversions will meet every specific third-party portal specification or that browser hardware acceleration will behave identically on all legacy hardware.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Limitation of Liability</h2>
            <p>
              Under no circumstances shall ImageSuite, its creators, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Service, including any loss of data. We encourage users to maintain backups of their original media before processing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Continued use of ImageSuite following any posted revisions constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">8. Contact Information</h2>
            <p>
              For any questions regarding these Terms, please contact us at <a href="mailto:legal@imagesuite.app" className="text-indigo-600 font-semibold hover:underline">legal@imagesuite.app</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
