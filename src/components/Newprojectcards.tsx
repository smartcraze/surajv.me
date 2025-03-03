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
  <span className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full">
    {tech}
  </span>
);

export default function ProjectCard({
  projects,
  title = "Projects",
}: ProjectCardProps) {
  return (
    <div className="max-w-7xl m-10 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/50 "
          >
            <div className="aspect-video w-full relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex gap-4">
                <Link
                  href={project.githubUrl}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-center"
                >
                  View Code
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-center"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
