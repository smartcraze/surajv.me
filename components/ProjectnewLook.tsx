"use client";

import React, { useState } from "react";
import ProjectCard from "./Newprojectcards";
import { Project } from "./Projects";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/newproject.json";

function ProjectnewLook() {
  const [ui, setUi] = useState(true);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2
          id="skill"
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 inline-block m"
        >
          Projects
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve built with passion and a pinch of chaos 😎
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => setUi(!ui)}
            className="bg-purple-500 hover:bg-purple-700 transition-all duration-200 ease-in-out px-6 py-2 text-white font-semibold rounded-xl shadow-md"
          >
            {ui ? "Switch to Old UI" : "Switch to New UI"}
          </Button>
        </div>
      </div>

      <div className="animate-fade-in-up">
        {ui ? (
          <ProjectCard projects={projectsData.projects} />
        ) : (
          <Project />
        )}
      </div>
    </section>
  );
}

export default ProjectnewLook;
