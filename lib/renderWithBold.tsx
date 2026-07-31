import type { ReactNode } from 'react';

const emphasisPattern = /(\*{3}[^*]+\*{3}|\*{2}[^*]+\*{2}|\*[^*]+\*)/g;

function markerLength(segment: string): number {
  if (segment.startsWith('***') && segment.endsWith('***')) return 3;
  if (segment.startsWith('**') && segment.endsWith('**')) return 2;
  if (segment.startsWith('*') && segment.endsWith('*')) return 1;
  return 0;
}

export function stripBoldMarkers(text: string): string {
  return text.replace(emphasisPattern, (segment) => {
    const length = markerLength(segment);
    return length > 0 ? segment.slice(length, -length) : segment;
  });
}

export function renderWithBold(text: string, keyPrefix = ''): ReactNode[] {
  return text.split(emphasisPattern).map((segment, index) => {
    const length = markerLength(segment);
    if (length === 0) return segment;

    const inner = segment.slice(length, -length);
    const key = `emphasis-${keyPrefix}${index}`;

    if (length === 3) {
      return (
        <strong key={key} style={{ fontWeight: 700, fontStyle: 'italic' }}>
          {inner}
        </strong>
      );
    }
    if (length === 2) {
      return (
        <strong key={key} style={{ fontWeight: 700 }}>
          {inner}
        </strong>
      );
    }
    return (
      <em key={key} style={{ fontStyle: 'italic' }}>
        {inner}
      </em>
    );
  });
}
