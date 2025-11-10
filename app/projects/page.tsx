import Footer from '@/components/footer'
import ProjectsList from '@/components/projects-list'
import Breadcrumbs from '@/components/routes-header-breadcrumb'
import { Metadata } from 'next'

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
          These are some of the projects I&apos;ve worked on — from fullstack apps to AI experiments.
          Click around, explore the builds, and vibe with the code ⚡
        </p>
      </div>
      <section className="w-full max-w-6xl mx-auto">
        <ProjectsList />
      </section>
      <hr className="w-full border-zinc-200 pb-10" />
      <Footer />
    </main>
  )
}
