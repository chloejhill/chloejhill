import { ImageResponse } from 'next/og';

/** Same dot layout as `app/icon.tsx`, scaled for Apple touch icon. */
const VIEWBOX = 35;
const R = 4.827;

const DOTS = [
  { cx: 29.5227, cy: 4.82688 },
  { cx: 29.5227, cy: 16.9498 },
  { cx: 29.5227, cy: 29.5227 },
  { cx: 16.9508, cy: 16.9498 },
  { cx: 16.9503, cy: 29.5227 },
  { cx: 4.82688, cy: 29.5227 }
] as const;

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          position: 'relative',
          background: '#ffffff',
          /** Satori: multi-child div needs explicit display (see next/og / ImageResponse). */
          display: 'flex'
        }}
      >
        {DOTS.map((d, i) => {
          const left = ((d.cx - R) / VIEWBOX) * size.width;
          const top = ((d.cy - R) / VIEWBOX) * size.height;
          const dim = ((R * 2) / VIEWBOX) * size.width;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left,
                top,
                width: dim,
                height: dim,
                borderRadius: 99999,
                background: '#343433'
              }}
            />
          );
        })}
      </div>
    ),
    { ...size }
  );
}
