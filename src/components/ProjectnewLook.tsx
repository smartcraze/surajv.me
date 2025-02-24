"use client";

import React, { useState } from "react";
import ProjectCard from "./Newprojectcards";
import { Project } from "./Projects";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/newproject.json";

function ProjectnewLook() {
  const [ui, setUi] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button
          variant="secondary"
          onClick={() => setUi(!ui)}
          className="bg-purple-500 hover:bg-purple-700"
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
