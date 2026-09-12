export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-image-format-for-web-in-2026',
    title: 'Best Image Format for Web in 2026: WebP, AVIF, JPEG XL, or SVG?',
    excerpt:
      'A deep dive into 2026 browser support matrices, compression ratios, decoding latencies, and why WebP remains the production sweet spot for modern Core Web Vitals.',
    date: 'February 28, 2026',
    readTime: '6 min read',
    category: 'Performance',
    author: {
      name: 'Elena Vance',
      role: 'Principal Web Performance Architect',
      avatar: 'EV',
    },
  },
  {
    slug: 'how-to-compress-images-without-losing-quality',
    title: 'How to Compress Images Without Losing Quality: The Definitive Guide',
    excerpt:
      'Master human visual perception thresholds, chroma subsampling (4:2:0 vs 4:4:4), and metadata stripping to trim up to 80% off image weight without visible degradation.',
    date: 'January 14, 2026',
    readTime: '8 min read',
    category: 'Guides',
    author: {
      name: 'Marcus Thorne',
      role: 'Senior Digital Media Specialist',
      avatar: 'MT',
    },
  },
  {
    slug: 'png-vs-webp-performance-guide',
    title: 'PNG vs WebP: The Complete Performance, Transparency & Memory Guide',
    excerpt:
      'Why modern web engineering teams are migrating legacy PNG assets to WebP. Explore alpha channel byte costs, predictive coding algorithms, and mobile RAM impact.',
    date: 'January 02, 2026',
    readTime: '5 min read',
    category: 'Optimization',
    author: {
      name: 'Dr. Aaron Chen',
      role: 'Computer Graphics Researcher',
      avatar: 'AC',
    },
  },
];
