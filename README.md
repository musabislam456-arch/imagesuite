# ImageSuite

**Live site:** [imagesuite.toolbay.site](https://imagesuite.toolbay.site)

Fast, private, in-browser image conversion and compression. No file ever leaves your device.

## Features

- **JPG → PNG** and **PNG → WebP** conversion
- **Image Compressor** — compress to a target size in KB
- **Image Resizer** — resize images client-side
- 100% client-side processing, zero server uploads
- Blog for SEO and user education

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Auto-generated `sitemap.xml` and `robots.txt`

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
bun run build
bun start
```

## Project Structure

```
app/            Routes (tools/*, blog, about, contact, privacy, terms)
components/     Shared UI components (Navbar, Footer, etc.)
hooks/          Custom React hooks
lib/            Utility logic (image processing, blog data)
```

## License

All rights reserved.
