import { GitMerge } from "lucide-react";
import Link from "next/link";
import { projects } from '@/lib/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have worked on',
};

interface ProjectCardProps {
  title: string;
  slug: string;
  status: string;
}

export function ProjectCard({ title, slug, status }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="w-full border border-zinc-600 rounded-md p-2 flex flex-row gap-2 items-center text-zinc-900 dark:text-zinc-100 hover:bg-gradient-to-r hover:from-zinc-100 hover:to-indigo-50 dark:hover:from-zinc-800 dark:hover:to-indigo-900/30 transition-all duration-200 ease-in-out group hover:shadow-md hover:scale-[1.02] hover:-translate-y-[2px]"
    >
      <GitMerge className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200" />
      <span className="font-semibold transition-colors duration-200">{title}</span>
      <span className="ml-auto text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
        {status}
      </span>
    </Link>
  );
}

export default function ProjectsList() {
  const statusOrder = ["fullstack", "GenAI", "npm-package", "web3"];
  
  const sortedProjects = [...projects].sort((a, b) => {
    const aIndex = statusOrder.indexOf(a.status);
    const bIndex = statusOrder.indexOf(b.status);
    return aIndex - bIndex;
  });

  return (
    <div className=" px-4 py-6">
      <h2 className="text-2xl font-bold pb-2 text-zinc-900 dark:text-zinc-100">Projects</h2>
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} title={project.title} slug={project.slug} status={project.status} />
        ))}
      </div>
    </div>
  );
}