'use client';
import React from 'react';
import Iframe from './ResponsiveIframe';
import StackIcon from 'tech-stack-icons';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';


export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        title="Paytm Clone"
        description="A clone of the Paytm website"
        link="https://paytm.surajv.me"
        techStack={["nextjs2", "react", "tailwindcss", "typescript", "nodejs"]}
      />
      <ProjectCard
        title="RapidServe"
        description="deploy your website in seconds"
        link="https://paytm.surajv.me"
        techStack={["nextjs2", "react", "tailwindcss", "typescript", "nodejs"]}
      />
      <ProjectCard
        title="Paytm Clone"
        description="A clone of the Paytm website"
        link="https://paytm.surajv.me"
        techStack={["nextjs2", "react", "tailwindcss", "typescript", "nodejs"]}
      />
      <ProjectCard
        title="Paytm Clone"
        description="A clone of the Paytm website"
        link="https://paytm.surajv.me"
        techStack={["nextjs2", "react", "tailwindcss", "typescript", "nodejs"]}
      />
    </div>
  );
}



interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  techStack: string[];
}

function ProjectCard({ title, description, link, techStack }: ProjectCardProps) {
  return (
    <div className="border border-zinc-200 rounded-md p-4 max-w-sm shadow-sm flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {/* <Iframe
        src="https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
        title="Tella Video 1"
      /> */}
      
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  gap-2 mb-3">
          {techStack.map((tech) => (
            <StackIcon key={tech} name={tech} className="w-4 h-4" />
          ))}
        </div>
        <div className="flex flex-row justify-end gap-2">
          <Link href={link} passHref>
            <ExternalLink />
          </Link>
          <Link href={link} passHref>
            <Github />
          </Link>
        </div>
        


      </div>

    </div>
  );
}


// <Iframe
//   src="https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
//   title="Tella Video 1"
// />
