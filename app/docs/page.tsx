import Footer from '@/components/footer'
import DocsList from '@/components/docs-list'
import Breadcrumbs from '@/components/routes-header-breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docs & Stories',
  description: 'Technical documentation, tutorials, hackathon experiences, and developer stories by smartcraze (Suraj Vishwakarma). Read about Smart India Hackathon, Warpspeed AI Hackathon, and the journey in software development.',
  keywords: [
    'smartcraze docs',
    'developer stories',
    'technical documentation',
    'hackathon experience',
    'Smart India Hackathon',
    'Warpspeed Hackathon',
    'AI hackathon',
    'developer journey',
    'coding tutorials',
    'web development stories',
  ],
  openGraph: {
    title: 'Docs & Stories — smartcraze (Suraj Vishwakarma)',
    description: 'Technical docs, tutorials, event experiences, and stories from smartcraze\'s journey in software development.',
    url: 'https://surajv.dev/docs',
    type: 'website',
  },
  alternates: {
    canonical: 'https://surajv.dev/docs',
  },
}

export const revalidate = 3600;

export default function DocsPage() {
  return (
    <main className="flex flex-col gap-y-2 justify-center mx-auto px-4">
      <div className="w-full max-w-5xl mx-auto pt-6">
        <div className="mb-4">
          <Breadcrumbs />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          Docs & Stories
        </h1>
        <p className="text-zinc-600 dark:text-zinc-500 text-sm md:text-base max-w-xl">
          Technical documentation, tutorials, event experiences, and stories about my journey.
        </p>
      </div>
      <section className="w-full max-w-6xl mx-auto">
        <DocsList />
      </section>
      <hr className="w-full border-zinc-600 pb-10" />
      <Footer />
    </main>
  )
}
