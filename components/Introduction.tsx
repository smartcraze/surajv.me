import Image from "next/image";
import React from "react";
import { Calendar, MapPin } from "lucide-react";
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
        <Link
          href="/meet"
          className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  px-4 py-2 mt-4"
        >
          <Calendar size={18} />
          Book a Meeting
        </Link>
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
