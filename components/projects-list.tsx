import {  GitMerge } from "lucide-react";
import Link from "next/link";
import { projects } from '@/lib/projects';

interface ProjectCardProps {
  title: string;
  slug: string;
  status: string;
}

function ProjectCard({ title, slug, status }: ProjectCardProps) {
  return (
          <Link href={`/projects/${slug}`} className=" w-full border border-zinc-600 rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex flex-row gap-2 items-center text-white ">
              <GitMerge  className="w-4 h-4 text-zinc-600" />
              <span className="text-zinc-400">{title}</span> 
             
              <span className="ml-auto text-xs px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
              {status}</span>
          </Link>
  );
}

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold pb-2">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.slug} title={project.title} slug={project.slug} status={project.status} />
      ))}
    </div>
  );
}