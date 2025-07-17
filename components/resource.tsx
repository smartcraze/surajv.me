"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resources } from "@/lib/resources";
import { Resource as ResourceType } from "@/lib/resources";

export default function ResourceBar() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-3 py-3 justify-center">
        {resources.map((res, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ResourceItem {...res} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ResourceItem({ title, link, icon: Icon }: ResourceType) {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-300/50 dark:border-zinc-700/50
                 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md
                 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-100
                 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-500 dark:text-zinc-400" />
      <span className="whitespace-nowrap">{title}</span>
    </Link>
  );
}
