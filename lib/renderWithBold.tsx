import type { ReactNode } from 'react';

const boldPattern = /(\*\*[^*]+\*\*)/g;

export function renderWithBold(text: string, keyPrefix = ''): ReactNode[] {
  return text.split(boldPattern).map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return (
        <strong key={`bold-${keyPrefix}${index}`} style={{ fontWeight: 700 }}>
          {segment.slice(2, -2)}
        </strong>
      );
    }
    return segment;
  });
}
