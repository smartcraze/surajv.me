import YouTubeVideos from "@/components/youtube-videos";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, Youtube } from "lucide-react";

export const metadata = {
  title: "Passion | YouTube Channel",
  description: "Check out my YouTube channel where I share coding tutorials, livestreams, and tech content",
};

export default function PassionPage() {
  return (
    <div className="min-h-screen flex flex-col">
     
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
