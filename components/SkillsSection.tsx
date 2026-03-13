"use client";

import StackIcon from "tech-stack-icons";
import { skills } from "@/lib/skills";

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          Skills I Play With
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Technologies and tools I&apos;ve worked with, always learning and
          exploring new possibilities
        </p>
      </div>

      <section
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className={`
              relative group flex items-center justify-center gap-2 p-4 rounded-xl
              border border-border/50 bg-card/20
              hover:border-primary/20 hover:shadow-md hover:shadow-primary/5
              transition-[transform,box-shadow,border-color] duration-150 ease-out
              hover:scale-[1.02]
            `}
            title={skill.charAt(0).toUpperCase() + skill.slice(1)}
          >
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

            <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 -z-10" />

            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
              <div className="relative">
                <StackIcon
                  name={skill}
                  variant="dark"
                  className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-150 group-hover:scale-105"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/90 capitalize leading-tight">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

