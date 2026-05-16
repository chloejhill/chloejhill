import { ImageResponse } from 'next/og';

export const alt = 'Chloe J. Hill — systems change, futures thinking, and conscious leadership';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: '#ffffff',
          color: '#1f1f1f'
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -1 }}>
          Chloe J. Hill
        </div>
        <div style={{ marginTop: 24, fontSize: 34, fontWeight: 400, color: '#343433', maxWidth: 900 }}>
          Systems change researcher, advisor, and published futurist — thinking about uncertainty,
          transformation, and how we meet what\u2019s coming.
        </div>
      </div>
    ),
    { ...size }
  );
}
