import Image from "next/image";
import React from "react";
import {
  Calendar,
  MapPin,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import Link from "next/link";

function Introduction() {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Suraj Vishwakarma
        </h1>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <p className="text-zinc-600 dark:text-zinc-500">Bangalore, India</p>
        </div>

        <p className="text-zinc-600 dark:text-zinc-500 max-w-md p-2">
          Fullstack developer with a love for clean code and real-world
          problem-solving. Always building, always learning from JS to Rust to
          cloud infra.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <Link
            href="/meet"
            className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2"
          >
            <Calendar size={18} />
            Book a Meeting
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <Link
              href="https://github.com/smartcraze"
              className="hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              title="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="mailto:dev.surajv@gmail.com"
              className="hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              title="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/surajv354"
              className="hover:text-pink-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              title="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/surajv354"
              className="hover:text-blue-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://x.com/surajv354"
              className="hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              title="X (Twitter)"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/133375708?v=4"
          alt="suraj's photo"
          height={200}
          width={200}
          className="object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900"
        />
      </div>
    </div>
  );
}

export default Introduction;
