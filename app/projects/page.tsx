import { projects } from '@/lib/projects';
import Link from 'next/link';
import RoutesHeaderBreadcrumb from '@/components/routes-header-breadcrumb';
import { Github, ArrowRight } from 'lucide-react'; 
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have worked on',
};


export default function ProjectsList() {
  return (
    <div className="min-h-screen px-4 py-6">
      <RoutesHeaderBreadcrumb />

      <div className="flex flex-col gap-4 mt-6">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="w-full border border-zinc-600 rounded-md p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-row justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </span>
              
              <span className="text-xs px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
                {project.status}
              </span>
            </div>

            <div className="flex flex-row items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Github className="w-4 h-4" />
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
