import Iframe from '@/components/ResponsiveIframe';
import RoutesHeaderBreadcrumb from '@/components/routes-header-breadcrumb';
import React, { Suspense } from 'react';
import { projects } from '@/lib/projects';
import { getProject } from '@/lib/get-contents';
import { MarkdownRenderer } from '@/components/markdown-rendered';
import { Metadata } from 'next';
import Link from 'next/link';
import { Github, ExternalLink } from "lucide-react";

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
        {/*  */}
        <ProjectLinks project={project} />

      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MarkdownRenderer content={projectmdx.content} />
      </Suspense>
    </div>
  );
}

export default Projects;



export function ProjectLinks({ project }: { project: any }) {
  return (
    <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-300">
      <p>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">Status:</span>{" "}
        {project.status}
      </p>

      <div className="flex gap-4">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-zinc-200 text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-300 active:scale-[0.98] transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        )}

        {project.live && (
          <Link
            href={project.live}
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
