export interface Doc {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
}

export const docs: Doc[] = [
  {
    slug: "warpspeed-hackathon",
    title: "Warpspeed: Agentic AI Hackathon",
    description: "Building the future of learning with AI agents at Lightspeed India's hackathon in Bangalore",
    date: "2025-06-01",
    tags: ["hackathon", "AI", "agentic-ai", "event"],
  },
  {
    slug: "sih-2024-finalist",
    title: "Smart India Hackathon 2024 - Finalist",
    description: "Our journey to becoming finalists at India's largest hackathon, solving real-world problems for Delhi Government",
    date: "2024-12-01",
    tags: ["hackathon", "finalist", "machine-learning", "fullstack", "event"],
  },
];

export function getDocBySlug(slug: string): Doc | undefined {
  return docs.find((doc) => doc.slug === slug);
}

export function getAdjacentDocs(slug: string): { previous: Doc | null; next: Doc | null } {
  const currentIndex = docs.findIndex((doc) => doc.slug === slug);
  
  return {
    previous: currentIndex > 0 ? docs[currentIndex - 1] : null,
    next: currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null,
  };
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  docs.forEach((doc) => {
    doc.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
