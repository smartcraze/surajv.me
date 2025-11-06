import Footer from '@/components/footer'
import DocsList from '@/components/docs-list'
import Breadcrumbs from '@/components/routes-header-breadcrumb'

export const metadata = {
  title: 'Docs & Stories - Suraj Vishwakarma',
  description: 'Technical documentation, tutorials, event experiences, and stories about my journey in software development',
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
