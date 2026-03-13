import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "@/components/social-icons";

function Introduction() {
  return (
    <section id="intro" className="w-full px-4 pt-2 pb-1">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-2 text-balance text-zinc-950 dark:text-zinc-100">
              Suraj Vishwakarma
            </h1>

            <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-3 text-zinc-500 dark:text-zinc-400">
              <MapPin aria-hidden="true" className="w-4 h-4 shrink-0" />
              <p className="text-sm sm:text-base">Bangalore, India</p>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 max-w-xl mx-auto md:mx-0 text-base sm:text-lg leading-7">
              Full Stack Developer focused on GenAI products, scalable back-end systems, and thoughtful web experiences.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3.5 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Projects
              </Link>
              <Link
                href="/resource"
                className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3.5 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Resources
              </Link>
              <Link
                href="/resumes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-300/80 dark:border-zinc-700 px-3.5 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Resume
              </Link>
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="https://avatars.githubusercontent.com/u/133375708?v=4"
              alt="Suraj Vishwakarma"
              height={192}
              width={192}
              className="object-cover rounded-full border-2 dark:border-zinc-800 border-zinc-900 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
              priority
            />
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 tracking-wide">
            Let&apos;s connect
          </span>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
