import fs from "fs/promises";
import path from "path";
import { cache } from "react";

import { getCompiledDocsForSlug } from "./get-contents";
import { projects } from "./projects";

export type PortfolioStatus = "fullstack" | "GenAI" | "npm-package" | "web3";

export interface PortfolioProject {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags: string[];
  video?: string;
  github?: string;
  live?: string;
  status: PortfolioStatus;
}

const statusBySlug = new Map(projects.map((project) => [project.slug, project.status]));

function inferStatus(tags: string[]): PortfolioStatus {
  const normalizedTags = tags.map((tag) => tag.toLowerCase());

  if (normalizedTags.some((tag) => ["web3", "solana", "spl-token", "blockchain"].includes(tag))) {
    return "web3";
  }

  if (normalizedTags.some((tag) => ["npm-package", "cli", "developer-tools"].includes(tag))) {
    return "npm-package";
  }

  if (normalizedTags.some((tag) => ["ai", "genai", "rag", "langchain", "ai-agent"].includes(tag))) {
    return "GenAI";
  }

  return "fullstack";
}

function getTimestamp(date?: string): number {
  if (!date) return 0;
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export const getPortfolioProjects = cache(async (): Promise<PortfolioProject[]> => {
  const contentsDirectory = path.join(process.cwd(), "contents");
  const dirEntries = await fs.readdir(contentsDirectory, { withFileTypes: true });

  const slugs = dirEntries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));

  const loadedProjects: Array<PortfolioProject | null> = await Promise.all(
    slugs.map(async (slug) => {
      const projectDoc = await getCompiledDocsForSlug(slug);

      if (!projectDoc?.frontmatter?.title || !projectDoc.frontmatter.description) {
        return null;
      }

      const frontmatter = projectDoc.frontmatter;
      const tags = frontmatter.tags ?? [];

      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date ?? undefined,
        tags,
        video: frontmatter.video || undefined,
        github: frontmatter.github || undefined,
        live: frontmatter.live || undefined,
        status: statusBySlug.get(slug) ?? inferStatus(tags),
      } as PortfolioProject;
    })
  );

  return loadedProjects
    .filter((project): project is PortfolioProject => project !== null)
    .sort((a, b) => getTimestamp(b.date) - getTimestamp(a.date));
});

export const getPortfolioStats = cache(async () => {
  const projectsData = await getPortfolioProjects();

  const liveProjects = projectsData.filter((project) => Boolean(project.live)).length;
  const openSourceProjects = projectsData.filter((project) => Boolean(project.github)).length;

  return {
    totalProjects: projectsData.length,
    liveProjects,
    openSourceProjects,
  };
});
