'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Home, ChevronRight } from 'lucide-react'

const formatSegment = (segment: string) =>
  segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

const Breadcrumbs = () => {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="mb-6 w-full">
      <ol className="flex items-center text-sm text-muted-foreground space-x-1">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-foreground transition"
          >
            <Home size={16} strokeWidth={1.8} />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          const href = '/' + segments.slice(0, index + 1).join('/')

          return (
            <Fragment key={href}>
              <ChevronRight
                size={16}
                strokeWidth={1.2}
                className="mx-1 text-muted"
              />
              <li>
                {isLast ? (
                  <span className="text-foreground font-medium">
                    {formatSegment(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:underline hover:text-foreground transition"
                  >
                    {formatSegment(segment)}
                  </Link>
                )}
              </li>
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
