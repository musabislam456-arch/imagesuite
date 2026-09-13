import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ImageSuite — Fast In-Browser Image Converter & Compressor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #6366f1 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 26,
              background: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 54,
              fontWeight: 700,
              color: '#ffffff',
              boxShadow: '0 8px 24px rgba(99,102,241,0.5)',
            }}
          >
            I
          </div>
          <div style={{ fontSize: 66, fontWeight: 800, color: '#ffffff', letterSpacing: -1 }}>
            ImageSuite
          </div>
        </div>
        <div style={{ fontSize: 30, color: '#c7d2fe', maxWidth: 940, textAlign: 'center' }}>
          Fast In-Browser Image Converter &amp; Compressor
        </div>
        <div style={{ marginTop: 44, display: 'flex', gap: 16 }}>
          {['Convert', 'Compress', 'Resize', 'Private'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 26px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.10)',
                color: '#e0e7ff',
                fontSize: 22,
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
