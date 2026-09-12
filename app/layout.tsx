import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://imagesuite.toolbay.site'),
  title: 'ImageSuite — Fast In-Browser Image Converter & Compressor',
  description:
    'Free client-side image conversion and compression. Convert JPG to PNG, PNG to WebP, compress images to target size in KB, and resize with total privacy.',
  openGraph: {
    title: 'ImageSuite — Fast In-Browser Image Converter & Compressor',
    description:
      'Zero server uploads. Convert JPG to PNG, PNG to WebP, compress to target KB, and resize directly in your browser.',
    type: 'website',
    url: 'https://imagesuite.toolbay.site',
    siteName: 'ImageSuite',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImageSuite — Fast In-Browser Image Converter & Compressor',
    description:
      'Zero server uploads. Convert JPG to PNG, PNG to WebP, compress to target KB, and resize directly in your browser.',
  },
  verification: {
    google: '8dLMBNTBkGFQ3zq4GYwdQbjC1ciAalZ87g56dZR1mks',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* <!-- CHATBOT_SCRIPT_START --> */}
        {/* <!-- Paste client's chatbot <script> embed code here --> */}
        {/* <!-- CHATBOT_SCRIPT_END --> */}
      </body>
    </html>
  );
}
