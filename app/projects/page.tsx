import Footer from '@/components/footer'
import ProjectsList from '@/components/projects-list'
import Breadcrumbs from '@/components/routes-header-breadcrumb'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Suraj Vishwakarma\'s full stack and GenAI projects including StudySphere, Paytm Clone, Token Launchpad, EZSnipe, and more. Built with React, Next.js, Node.js, TypeScript, AI/ML, Web3, and modern technologies.',
  keywords: [
    'full stack projects',
    'GenAI projects',
    'AI applications',
    'React projects',
    'Next.js applications',
    'Node.js projects',
    'web3 projects',
    'npm packages',
    'open source projects',
    'developer portfolio',
  ],
  openGraph: {
    title: 'Projects - Suraj Vishwakarma',
    description: 'Full stack apps, AI experiments, and web3 projects. Explore the builds and dive into the code.',
    url: 'https://surajv.dev/projects',
    type: 'website',
  },
  alternates: {
    canonical: 'https://surajv.dev/projects',
  },
}

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-y-2 justify-center mx-auto px-4">
      <div className="w-full max-w-5xl mx-auto pt-6 ">
        <div className="mb-4">
          <Breadcrumbs />
        </div>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl">
          These are full case studies, not just project cards. Open any card to see the full build story,
          architecture decisions, and implementation details.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/projects/slotify"
            className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Slotify Case Study
          </Link>
          <Link
            href="/projects/rapidserve"
            className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            RapidServe Case Study
          </Link>
          <Link
            href="/projects/sketchkaro"
            className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            SketchKaro Case Study
          </Link>
          <Link
            href="/projects/gothrottle"
            className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Gothrottle Case Study
          </Link>
        </div>
      </div>
      <section className="w-full max-w-6xl mx-auto">
        <ProjectsList />
      </section>
      <hr className="w-full border-zinc-200 pb-10" />
      <Footer />
    </main>
  )
}
