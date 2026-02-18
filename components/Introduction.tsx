import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";
import { SocialLinks } from "@/components/social-icons";

function Introduction() {
  return (
    <section className="w-full">
      <div className="relative w-full max-w-none md:max-w-4xl mx-auto overflow-hidden rounded-none md:rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/80 shadow-sm">
        {/* subtle cross overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute inset-y-0 left-1/2 w-px bg-zinc-300 dark:bg-zinc-700" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 pt-6 pb-4">
          {/* Left Section */}
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
              Suraj Vishwakarma
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <p className="text-zinc-600 dark:text-zinc-500 truncate">
                Bangalore, India
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-500 max-w-xl">
              Fullstack Developer • GenAI and Back-end Engineering
            </p>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <Image
              src="https://avatars.githubusercontent.com/u/133375708?v=4"
              alt="suraj's photo"
              height={192}
              width={192}
              className="object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900 
              w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44"
            />
          </div>
        </div>

        {/* Social row */}
        <div className="relative border-t border-zinc-200/80 dark:border-zinc-800/80 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Let&apos;s connect
          </span>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
