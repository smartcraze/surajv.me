import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";

function Introduction() {
  return (
    <div className="flex flex-row justify-between items-center w-full gap-4">
      {/* Left Section */}
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white whitespace-nowrap">
          Suraj Vishwakarma
        </h1>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 shrink-0" />
          <p className="text-zinc-600 dark:text-zinc-500 truncate">
            Bangalore, India
          </p>
        </div>

        <p className="text-zinc-600 dark:text-zinc-500 max-w-lg p-2">
          Fullstack Developer • GenAI and Back-end Engineering
        </p>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/133375708?v=4"
          alt="suraj's photo"
          height={200}
          width={200}
          className="object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900 
          w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </div>
    </div>
  );
}

export default Introduction;
