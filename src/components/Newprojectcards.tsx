import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import projectsData from "@/data/projects.json";

export function ProjectCard() {
  return (
    <div className=" container p-10">
      <p
        id="project"
        className="mt-2 text-3xl text-teal-600 leading-8 font-extrabold tracking-tight text-center sm:text-4xl"
      >
        Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {projectsData.projects.map((project) => (
          <Card
            className="w-full mx-auto shadow-lg"
            key={project.slug}
          >
            {/* Upper part: Carousel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images?.map((src, index) => (
                    <CarouselItem key={index}>
                      <CardContent className="flex py-4 items-center justify-center">
                        <img
                          src={src}
                          alt={`Project screenshot ${index + 1}`}
                          className="aspect-video object-cover rounded-md"
                        />
                      </CardContent>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full" />
              </Carousel>
            </div>

            {/* Lower part: Title, description, and links */}
            <CardHeader className="p-4">
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between px-4 py-2">
              <a href={project.slug} target="_blank" rel="noopener noreferrer">
                <Button>
                  <IconBrandGithub className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <IconExternalLink className="h-5 w-5 mr-2" />
                    View Live
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
