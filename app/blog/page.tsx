import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Guides & Engineering Insights | ImageSuite',
  description:
    'In-depth technical guides on image formats, web performance, lossy vs lossless compression, and in-browser Canvas graphics.',
  openGraph: {
    title: 'Guides & Engineering Insights | ImageSuite',
    description:
      'Learn how to optimize Core Web Vitals, compress graphics losslessly, and master modern formats like WebP, AVIF, and SVG.',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Image Engineering & Web Vitals</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Guides & Technical Articles
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical strategies, algorithmic explanations, and performance benchmarks for frontend engineers, designers, and web creators.
          </p>
        </div>

        {/* Featured Post Card */}
        {BLOG_POSTS[0] && (
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Article • {BLOG_POSTS[0].category}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
                  {BLOG_POSTS[0].title}
                </Link>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {BLOG_POSTS[0].date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  {BLOG_POSTS[0].readTime}
                </span>
                <span>•</span>
                <span>By {BLOG_POSTS[0].author.name}</span>
              </div>

              <div className="pt-4">
                <Link
                  href={`/blog/${BLOG_POSTS[0].slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-indigo-50 transition-all shadow-md group-hover:gap-3"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 font-semibold text-indigo-700">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700">
                    {post.author.avatar}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900">{post.author.name}</div>
                    <div className="text-slate-400 text-[11px]">{post.date}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="p-2 rounded-xl text-indigo-600 hover:bg-indigo-50 transition-colors"
                  aria-label={`Read ${post.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
