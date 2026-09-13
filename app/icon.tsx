import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4f46e5',
          borderRadius: 40,
        }}
      >
        <div style={{ color: '#ffffff', fontSize: 112, fontWeight: 800, fontFamily: 'sans-serif' }}>
          I
        </div>
      </div>
    ),
    { ...size }
  );
}
