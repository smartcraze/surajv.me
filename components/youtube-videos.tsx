import { Play, Radio, Youtube } from "lucide-react";
import Link from "next/link";
import { getLatestVideos } from "@/lib/youtube";
import Image from "next/image";

export default async function YouTubeVideos() {
  const videos = await getLatestVideos(6); 

  if (videos.length === 0) {
    return null; 
  }

  return (
    <section className="px-4 py-6">
      <div className="flex items-center gap-2 pb-2">
        <Youtube className="w-6 h-6 text-red-600" />
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Latest from YouTube
        </h2>
      </div>
      <p className="text-zinc-600 dark:text-zinc-500 max-w-md pb-4">
        Check out my recent videos and livestreams
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <Link
            key={video.id}
            href={`https://youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-600 rounded-md overflow-hidden transition-all duration-200 ease-in-out hover:bg-zinc-50 dark:hover:bg-zinc-900/50 group hover:shadow-md hover:scale-[1.02]"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                width={640}
                height={360}
                unoptimized
                loading={index < 3 ? "eager" : "lazy"}
                priority={index < 3}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                {video.isLive ? (
                  <div className="bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-2">
                    <Radio className="w-4 h-4" />
                    <span className="text-sm font-semibold">LIVE</span>
                  </div>
                ) : (
                  <div className="bg-white/90 dark:bg-zinc-800/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-zinc-900 dark:text-zinc-100 fill-current" />
                  </div>
                )}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2">
                {video.title}
              </h3>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 inline-block">
                {new Date(video.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
