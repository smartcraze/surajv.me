import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';





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


