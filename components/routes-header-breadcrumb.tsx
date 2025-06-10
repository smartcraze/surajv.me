'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Home, ChevronRight } from 'lucide-react';

const formatSegment = (segment: string) =>
  segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full flex  mb-6"
    >
      <ol className="flex items-center space-x-2 bg-zinc-200 px-4 py-2 rounded-lg shadow-sm text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-zinc-800 transition">
            <Home size={18} />
          </Link>
        </li>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = '/' + segments.slice(0, index + 1).join('/');

          return (
            <Fragment key={href}>
              <ChevronRight size={16} className="text-gray-400" />

              <li>
                {isLast ? (
                  <span className="font-semibold text-gray-800">
                    {formatSegment(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:underline text-blue-600 transition"
                  >
                    {formatSegment(segment)}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
