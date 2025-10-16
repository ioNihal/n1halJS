import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, NewspaperIcon } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/ioNihal/strx',
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          n1halJS
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <BookIcon />,
        text: 'Docs',
        url: "/docs",
        secondary: false,
      },
      {
        icon: <NewspaperIcon />,
        text: 'Blog',
        url: "/blog",
        secondary: false,
      }
    ],
  };
}
