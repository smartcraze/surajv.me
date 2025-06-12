import Iframe from '@/components/ResponsiveIframe';
import RoutesHeaderBreadcrumb from '@/components/routes-header-breadcrumb';
import React, { Suspense } from 'react';
import { projects } from '@/lib/projects';
import { getProject } from '@/lib/get-contents';
import { MarkdownRenderer } from '@/components/markdown-rendered';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.status,
  };
}

async function Projects({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectmdx = await getProject(slug);

  if (!projectmdx) {
    return <div>Project not found</div>;
  }

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen px-4 py-6">
      <RoutesHeaderBreadcrumb />
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <Iframe id={project.slug} src={project.video} title={project.title} />
        <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-500 p-4 shadow-sm">
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-zinc-700">
              <span className="font-medium text-zinc-900">Status:</span> {project.status}
            </p>

            {project.github && (
              <p className="text-zinc-700">
                <span className="font-medium text-zinc-900">GitHub:</span>{' '}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-900"
                >
                  {project.github}
                </Link>
              </p>
            )}

            {project.live && (
              <p className="text-zinc-700">
                <span className="font-medium text-zinc-900">Live:</span>{' '}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-900"
                >
                  {project.live}
                </Link>
              </p>
            )}
          </div>
        </div>

      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MarkdownRenderer content={projectmdx.content} />
      </Suspense>
    </div>
  );
}

export default Projects;