import { FileCode2, Sparkles, Minimize2, Scaling, LucideIcon } from 'lucide-react';

export interface ToolNavItem {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  badge: string;
}

export const TOOLS_NAV: ToolNavItem[] = [
  {
    name: 'JPG to PNG',
    href: '/tools/jpg-to-png',
    description: 'Convert JPG to lossless PNG with alpha channel',
    icon: FileCode2,
    badge: 'Lossless',
  },
  {
    name: 'PNG to WebP',
    href: '/tools/png-to-webp',
    description: 'Convert PNG to next-gen WebP for 3x faster web loads',
    icon: Sparkles,
    badge: 'Web Vitals',
  },
  {
    name: 'Image Compressor',
    href: '/tools/image-compressor',
    description: 'Compress images to exact target size in KB',
    icon: Minimize2,
    badge: 'Target KB',
  },
  {
    name: 'Image Resizer',
    href: '/tools/image-resizer',
    description: 'Resize dimensions in px or % with social media presets',
    icon: Scaling,
    badge: 'Presets',
  },
];
