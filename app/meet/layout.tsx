import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Meeting',
  description: 'Schedule a 1-on-1 meeting with smartcraze (Suraj Vishwakarma). Let\'s chat about projects, ideas, collaboration, full stack development, GenAI, or career opportunities.',
  keywords: [
    'book meeting',
    'schedule call',
    '1-on-1 meeting',
    'developer consultation',
    'collaboration',
    'smartcraze meeting',
    'Suraj Vishwakarma meeting',
  ],
  openGraph: {
    title: 'Book a Meeting — smartcraze (Suraj Vishwakarma)',
    description: 'Schedule a 1-on-1 with smartcraze (Suraj Vishwakarma) to discuss projects, ideas, or collaboration opportunities.',
    url: 'https://surajv.dev/meet',
    type: 'website',
  },
  alternates: {
    canonical: 'https://surajv.dev/meet',
  },
};

export default function MeetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
