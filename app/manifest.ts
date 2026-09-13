import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ImageSuite',
    short_name: 'ImageSuite',
    description:
      'Fast In-Browser Image Converter & Compressor - convert, compress and resize images with total privacy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e1b4b',
    theme_color: '#4f46e5',
    icons: [
      { src: '/icon', sizes: '192x192', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
