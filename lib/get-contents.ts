import { Suspense } from 'react';
import { MarkdownRenderer } from '@/components/markdown-rendered';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

interface   PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// const blogSchema = z.object({
//   title: z.string(),
//   date: z.string(),
//   tags: z.array(z.string()).optional(),
//   description: z.string().optional(),
// });

export async function getProject(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'contents', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { ...data, content };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'contents');

  try {
    const files = fs.readdirSync(contentDir);

    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

/*
export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return {
    openGraph: {
      title: params.slug,
      description: post.title,
      images: [
        {
          url: `/og-image/${params.slug}`,
        },
      ],
    },
  };
}

*/