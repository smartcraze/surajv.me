"use client";
import { projects } from '@/lib/projects';
import Link from 'next/link';
import RoutesHeaderBreadcrumb from '@/components/routes-header-breadcrumb';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const, 
      },
    },
  };

  return (
    <div className="min-h-screen px-4 py-6">
      <RoutesHeaderBreadcrumb />

      <motion.div
        ref={ref}
        className="flex flex-col gap-3 mt-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="w-full border border-zinc-600 rounded-md p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-row justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  className="text-base font-semibold text-zinc-900 dark:text-zinc-100"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.span>
                
                <motion.span
                  className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.status}
                </motion.span>
              </div>

              <motion.div
                className="flex flex-row items-center gap-2 text-zinc-600 dark:text-zinc-400"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Github className="w-4 h-4 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" />
                <ArrowRight className="w-4 h-4 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}