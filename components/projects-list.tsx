import { ArrowUpRight, GitMerge } from "lucide-react";
import Link from "next/link";
import { getPortfolioProjects, type PortfolioStatus } from "@/lib/portfolio";

type ProjectsListMode = "all" | "home";

interface ProjectsListProps {
  mode?: ProjectsListMode;
}

interface ProjectCardProps {
  title: string;
  slug: string;
  status: PortfolioStatus;
  description: string;
}

export function ProjectCard({ title, slug, status, description }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="w-full border border-zinc-600 rounded-md p-3 flex flex-col gap-2 text-zinc-900 dark:text-zinc-100 hover:bg-linear-to-r hover:from-zinc-100 hover:to-indigo-50 dark:hover:from-zinc-800 dark:hover:to-indigo-900/30 transition-all duration-200 ease-in-out group hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5"
      aria-label={`Read case study for ${title}`}
    >
      <div className="flex items-start gap-2">
        <GitMerge className="mt-0.5 w-4 h-4 text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200 shrink-0" />
        <div className="min-w-0">
          <h3 className="font-semibold transition-colors duration-200">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
        <span className="ml-auto text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 shrink-0">
          {status}
        </span>
      </div>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
        Read case study
        <ArrowUpRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

export default async function ProjectsList({ mode = "all" }: ProjectsListProps) {
  const portfolioProjects = await getPortfolioProjects();
  const statusOrder: PortfolioStatus[] = ["fullstack", "GenAI", "npm-package", "web3"];

  const sortedProjects = [...portfolioProjects].sort((a, b) => {
    const statusDiff = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    if (statusDiff !== 0) return statusDiff;

    const aDate = a.date ? Date.parse(a.date) : 0;
    const bDate = b.date ? Date.parse(b.date) : 0;
    return bDate - aDate;
  });

  const visibleProjects = mode === "home"
    ? sortedProjects.filter((project) => project.showOnHome)
    : sortedProjects;

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold pb-2 text-zinc-900 dark:text-zinc-100">Projects</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 pb-4">
        Each card opens a full breakdown with architecture, decisions, and outcomes.
      </p>
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title.trim()}
            slug={project.slug}
            status={project.status}
            description={
              project.description ||
              "Read the full case study for implementation details and key learnings."
            }
          />
        ))}
      </div>
    </div>
  );
}