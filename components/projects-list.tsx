'use client';
import React from 'react';
import StackIcon from 'tech-stack-icons';
import Link from 'next/link';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';


export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        slug="rapidserve"
        title="RapidServe"
        description="deploy your website in seconds"
        link=""
        techStack={["nextjs2",  "tailwindcss", "typescript", "nodejs","docker"]}
        githubLink="https://github.com/smartcraze/vercel-deploy"
      />
      <ProjectCard
        slug="paytm"
        title="Paytm Clone"
        description="A clone of the Paytm website"
        link="https://paytm.surajv.me"
        techStack={["nextjs2", "tailwindcss", "typescript","prisma"]}
        githubLink="https://github.com/smartcraze/paytm"
      />

      <ProjectCard
        slug="ezsnipe"
        title="EzSnipe"
        description="component delivery cli tool"
        link="https://www.npmjs.com/package/ezsnipe"
        techStack={["typescript", "nodejs"]}
        githubLink="https://github.com/smartcraze/ezsnipe-npm-package"
      />
      <ProjectCard
        slug="cursor"
        title="Cursor for 2d animation"
        description="AI powered animation tool for 2d animation"
        link="https://cursor-for-2d-animation.surajv.me"
        techStack={["nextjs2",  "tailwindcss", "typescript", "python"]}
        githubLink="https://github.com/smartcraze/cursor-for-2d-animation"
      />
    </div>
  );
}



interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  slug: string;
  githubLink: string;
}

function ProjectCard({ title, description, link, techStack, slug, githubLink }: ProjectCardProps) {
  return (
    <div className="border border-zinc-200 rounded-md p-4 max-w-sm shadow-sm flex flex-col gap-2">
      <div className='flex flex-row justify-between'>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <Link href={`/projects-video/#${slug}`} className='flex flex-row justify-end'>
          <MonitorPlay  />
        </Link>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  gap-2 mb-3">
          {techStack.map((tech) => (
            <StackIcon key={tech} name={tech} className="w-6 h-6 text-zinc-600" />
            // <span key={tech} className="text-zinc-600 text-sm">{tech}</span>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-2">
          <Link href={link} passHref>
            <ExternalLink />
          </Link>
          <Link href={githubLink} passHref>
            <Github />
          </Link>
        </div>
        


      </div>

    </div>
  );
}

