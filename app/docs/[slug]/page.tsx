import RoutesHeaderBreadcrumb from '@/components/routes-header-breadcrumb';
import { getCompiledDocsForSlug } from '@/lib/get-contents';
import { docs, getAdjacentDocs } from '@/lib/docs';
import { Metadata } from 'next';
import { Typography } from '@/components/typography';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Dynamic route for docs and stories pages based on the slug.
 */

// Generate static params for all docs at build time
export async function generateStaticParams() {
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

// Revalidate every hour in production
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const res = await getCompiledDocsForSlug(slug, "docs");

  if (!res) {
    return {
      title: 'Doc Not Found',
      description: 'The requested documentation could not be found.',
    };
  }

  return {
    title: res.frontmatter.title,
    description: res.frontmatter.description,
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getCompiledDocsForSlug(slug, "docs");
  if (!res) {
    return <div className="p-8 text-red-500">Doc not found.</div>;
  }

  const { title, description, date, tags } = res.frontmatter;

  // Get adjacent docs using helper function
  const { previous: previousDoc, next: nextDoc } = getAdjacentDocs(slug);

  return (
    <div className="min-h-screen px-4 py-6">
      <RoutesHeaderBreadcrumb />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
            {title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            {description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            {date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            )}
            {tags && tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <div className="flex gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <Typography>
          <div className="prose dark:prose-invert max-w-none">
            {res.content}
          </div>
        </Typography>

        {/* Next/Previous Navigation */}
        <nav className="mt-12 pt-8 border-t border-zinc-300 dark:border-zinc-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Previous Doc */}
            {previousDoc ? (
              <Link
                href={`/docs/${previousDoc.slug}`}
                className="group border border-zinc-600 rounded-md p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                  {previousDoc.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                  {previousDoc.description}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Doc */}
            {nextDoc ? (
              <Link
                href={`/docs/${nextDoc.slug}`}
                className="group border border-zinc-600 rounded-md p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200 hover:shadow-md md:text-right"
              >
                <div className="flex items-center justify-end gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                  {nextDoc.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                  {nextDoc.description}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
