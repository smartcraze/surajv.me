"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  projects: Project[];
  title?: string;
}

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="px-2 py-1 text-xs sm:text-sm bg-gray-800 text-gray-300 rounded-full whitespace-nowrap">
    {tech}
  </span>
);

export default function ProjectCard({
  projects,
  title = "Projects",
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50"
          >
            {/* Image container with responsive aspect ratio */}
            <div className="relative w-full pt-[56.25%]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover absolute top-0 left-0"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack - Scrollable on mobile */}
              <div className="flex overflow-x-auto pb-2 mb-4 gap-2 hide-scrollbar">
                {project.techStack.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>

              {/* Actions - Stack on small mobile, side by side otherwise */}
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
                <Link
                  href={project.githubUrl}
                  className="flex-1 px-3 py-2 text-xs sm:text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-center"
                >
                  View Code
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="flex-1 px-3 py-2 text-xs sm:text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-center"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add global styles for hiding scrollbar on tech stack */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
