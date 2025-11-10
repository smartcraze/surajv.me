import YouTubeVideos from "@/components/youtube-videos";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passion",
  description: "Watch Suraj Vishwakarma's YouTube channel featuring coding tutorials, tech livestreams, programming tips, and software development content.",
  keywords: [
    'YouTube channel',
    'coding tutorials',
    'tech livestreams',
    'programming videos',
    'developer content',
    'software development tutorials',
    'Suraj Vishwakarma YouTube',
  ],
  openGraph: {
    title: "Passion - YouTube Channel | Suraj Vishwakarma",
    description: "Coding tutorials, livestreams, and tech content by Suraj Vishwakarma",
    url: 'https://surajv.dev/passion',
    type: 'website',
  },
  alternates: {
    canonical: 'https://surajv.dev/passion',
  },
};

export default function PassionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 dark:bg-zinc-900">
     
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
     
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>


          <YouTubeVideos />
        </div>
      </main>

     
    </div>
  );
}
