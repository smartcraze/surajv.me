"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resources } from "@/lib/resources";
import { Resource as ResourceType } from "@/lib/resources";

export default function ResourceBar() {
  return (
    <div className="w-full overflow-x-auto px-2">
      <div className="flex gap-2 py-2 min-w-max">
        {resources.map((res, index) => (
          <ResourceItem key={index} {...res} />
        ))}
      </div>
    </div>
  );
}

function ResourceItem({ title, link, icon: Icon }: ResourceType) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link
        href={link}
        className="flex items-center gap-1 px-2.5 py-1.5 border rounded-md text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-shadow shadow-sm hover:shadow-md"
      >
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span className="whitespace-nowrap">{title}</span>
      </Link>
    </motion.div>
  );
}
