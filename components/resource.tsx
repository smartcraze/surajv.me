"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resources } from "@/lib/resources";
import { Resource as ResourceType } from "@/lib/resources";

export default function ResourceBar() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2 py-2 px-1">
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href={link}
        className="flex items-center gap-1 px-3 py-1 border rounded-md text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-shadow shadow-sm hover:shadow-md"
      >
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </Link>
    </motion.div>
  );
}
