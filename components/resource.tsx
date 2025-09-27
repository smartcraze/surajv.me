"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resources } from "@/lib/resources";
import { Resource as ResourceType } from "@/lib/resources";

export default function ResourceBar() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Quick Access
          </h2>
          <p className="text-muted-foreground text-sm">
            Projects, tools, and platforms I&apos;ve built
          </p>
        </motion.div>

        {/* Resource Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {resources.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <ResourceItem {...res} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourceItem({ title, link, icon: Icon }: ResourceType) {
  return (
    <Link
      href={link}
      className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl 
                 border border-border/50 hover:border-border
                  hover:bg-card/5 backdrop-blur-sm
                 transition-all duration-300 ease-out
                 hover:shadow-lg hover:shadow-primary/5
                 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                 h-24 w-full aspect-square sm:h-28 sm:aspect-square"
    >
      {/* Icon container with subtle gradient */}
      <div
        className="relative p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 
                      transition-colors duration-300 flex-shrink-0"
      >
        <Icon
          className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:text-primary/80 
                        transition-colors duration-300"
        />

        {/* Subtle glow effect on hover */}
        <div
          className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 
                        group-hover:opacity-100 blur-sm transition-opacity duration-300"
        />
      </div>

      {/* Title with better typography and consistent height */}
      <span
        className="text-xs font-medium text-foreground/80 group-hover:text-foreground
                       text-center leading-tight transition-colors duration-300
                       px-1 flex-shrink-0 overflow-hidden text-ellipsis
                       max-h-8 flex items-center justify-center"
      >
        {title}
      </span>

      {/* Subtle bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                      bg-gradient-to-r from-primary/50 to-primary
                      group-hover:w-8 transition-all duration-300 rounded-full"
      />
    </Link>
  );
}
