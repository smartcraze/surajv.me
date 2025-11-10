import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Collection of Suraj Vishwakarma\'s development projects, experiments, and learning resources. Links to live demos, GitHub repositories, and ongoing work.',
  keywords: [
    'developer resources',
    'project links',
    'live demos',
    'development progress',
    'portfolio links',
    'coding projects',
  ],
  openGraph: {
    title: 'Resources - Suraj Vishwakarma',
    description: 'Raw links to all my builds, experiments, and development progress.',
    url: 'https://surajv.dev/resource',
    type: 'website',
  },
  alternates: {
    canonical: 'https://surajv.dev/resource',
  },
};

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
