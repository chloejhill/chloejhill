/** Logo mark only (six dots) — matches `LogoIcon` in `app/(site)/icons.tsx`. */
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

const DOT_COLOR = '#ffffff';

export function FaviconMark({
  width,
  height
}: {
  width: number;
  height: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        display: 'flex'
      }}
    >
      {DOTS.map((d, i) => {
        const left = ((d.cx - R) / VIEWBOX) * width;
        const top = ((d.cy - R) / VIEWBOX) * height;
        const dim = ((R * 2) / VIEWBOX) * width;
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
              background: DOT_COLOR
            }}
          />
        );
      })}
    </div>
  );
}
