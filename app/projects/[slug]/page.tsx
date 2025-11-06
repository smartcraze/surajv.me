import Iframe from '@/components/ResponsiveIframe';
import RoutesHeaderBreadcrumb from '@/components/routes-header-breadcrumb';
import { getCompiledDocsForSlug } from '@/lib/get-contents';
import { projects } from '@/lib/projects';
import { Metadata } from 'next';
import Link from 'next/link';
import { Github, ExternalLink } from "lucide-react";
import { Typography } from '@/components/typography';

/**
 * This file handles the dynamic route for project pages based on the slug.
 * It fetches project data and renders the project details.
 */

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
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
  const res = await getCompiledDocsForSlug(slug);

  if (!res) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: res.frontmatter.title,
    description: res.frontmatter.description,
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getCompiledDocsForSlug(slug);
  if (!res) {
    return <div className="p-8 text-red-500">Project not found.</div>;
  }

  const { title, description, video, github, live } = res.frontmatter;

  return (
    <div className="min-h-screen px-4 py-6">
      <RoutesHeaderBreadcrumb />

      <div className="flex flex-col gap-6 mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        {video && <Iframe id={slug} src={video} title={title} />}
        <ProjectLinks github={github} live={live} />
      </div>

      <Typography>
        <h1 className="sm:text-3xl text-2xl !-mt-0.5">{title}</h1>
        <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">
          {description}
        </p>
        <div className="prose dark:prose-invert max-w-none mt-6">
          {res.content}
        </div>
      </Typography>
    </div>
  );
}

function ProjectLinks({ github, live }: { github?: string; live?: string }) {
  return (
    <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-300">
      <div className="flex gap-4">
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-zinc-200 text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-300 active:scale-[0.98] transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        )}

        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500 active:scale-[0.98] transition"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </Link>
        )}
      </div>
    </div>
  );
}
