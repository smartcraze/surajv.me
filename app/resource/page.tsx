"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ResourcePage } from "@/lib/resources";
import { ResourcePage as ResourceType } from "@/lib/resources";
import { ExternalLink } from "lucide-react";

export default function Resource() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <motion.h1
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Development Progress
      </motion.h1>

      <motion.p
        className="text-zinc-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Just raw links. No filters. Just proof I’m building stuff.
      </motion.p>

      <div className="space-y-4">
        {ResourcePage.map((item, idx) => {
          const Icon = item.icon || ExternalLink;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={item.url}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition transform hover:scale-[1.02] text-sm font-medium"
              >
                <Icon className="w-4 h-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
