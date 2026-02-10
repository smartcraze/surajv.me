interface Project {
  slug: string;
  title: string;
  status: "fullstack" | "GenAI" | "npm-package" | "web3";
}

export const projects: Project[] = [
  {
    slug: "sketchkaro",
    title: "SketchKaro ",
    status: "fullstack",
  },
  {
    slug: "gothrottle",
    title: "Gothrottle ",
    status: "fullstack",
  },
  {
    slug: "rapidserve",
    title: "RapidServe ",
    status: "fullstack",
  },
  {
    slug: "pfpstudio",
    title: "PFP Studio",
    status: "fullstack",
  },
  {
    slug: "cipherstudio",
    title: "CipherStudio ",
    status: "fullstack",
  },
  {
    slug: "studysphere",
    title: "StudySphere ",
    status: "fullstack",
  },
  {
    slug: "paytm",
    title: "Paytm Clone ",
    status: "fullstack",
  },
];

// Helper functions for project navigation
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): { previous: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  
  return {
    previous: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

export function getSortedProjects(): Project[] {
  const statusOrder = ["fullstack", "GenAI", "npm-package", "web3"];
  
  return [...projects].sort((a, b) => {
    const aIndex = statusOrder.indexOf(a.status);
    const bIndex = statusOrder.indexOf(b.status);
    return aIndex - bIndex;
  });
}
