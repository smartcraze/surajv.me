import { docs } from "@/lib/docs";
import { getPortfolioProjects } from "@/lib/portfolio";

export const revalidate = 3600;

type FeedItem = {
  title: string;
  description: string;
  url: string;
  date: Date;
};

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function dateFrom(value?: string): Date {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export async function GET() {
  const baseUrl = "https://surajv.dev";
  const projects = await getPortfolioProjects();

  const docItems: FeedItem[] = docs.map((doc) => ({
    title: doc.title,
    description: doc.description,
    url: `${baseUrl}/resource/docs/${doc.slug}`,
    date: dateFrom(doc.date),
  }));

  const projectItems: FeedItem[] = projects.map((project) => ({
    title: `${project.title} Case Study`,
    description: project.description,
    url: `${baseUrl}/projects/${project.slug}`,
    date: dateFrom(project.date),
  }));

  const items = [...projectItems, ...docItems].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const lastBuildDate = items.length > 0 ? items[0].date.toUTCString() : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Suraj Vishwakarma - Portfolio Feed</title>
    <link>${baseUrl}</link>
    <description>Latest project case studies, docs, and portfolio updates.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid>${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}