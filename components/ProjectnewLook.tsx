"use client";

import React, { useState } from "react";
import ProjectCard from "./Newprojectcards";
import { Project } from "./Projects";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/newproject.json";

function ProjectnewLook() {
  const [ui, setUi] = useState(true);

  return (
    <div className="container mx-auto  py-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button
          variant="secondary"
          onClick={() => setUi(!ui)}
          className="bg-purple-500 hover:bg-purple-700  max-w-xs sm:max-w-sm md:max-w-md"
        >
          {ui ? "Old UI" : "New UI"}
        </Button>
      </div>
      <div className="mt-8">
        {ui ? (
          <ProjectCard projects={projectsData.projects} title="My Projects" />
        ) : (
          <Project />
        )}
      </div>
    </div>
  );
}

export default ProjectnewLook;
