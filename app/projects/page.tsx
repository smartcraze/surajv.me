import Footer from '@/components/footer'
import ProjectsList from '@/components/projects-list'
import Breadcrumbs from '@/components/routes-header-breadcrumb'

export const metadata = {
  title: 'Projects - Suraj Vishwakarma',
  description: 'These are some of the projects I have worked on — from fullstack apps to AI experiments. Click around, explore the builds, and vibe with the code ⚡',
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
