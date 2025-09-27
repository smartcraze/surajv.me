"use client";

import React, { useEffect, useRef, useState } from "react";
import StackIcon from "tech-stack-icons";
import { skills } from "@/lib/skills";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          Skills I Play With
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Technologies and tools I&apos;ve worked with, always learning and
          exploring new possibilities
        </p>
      </div>

      {/* Skills Grid */}
      <section
        ref={sectionRef}
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
      >
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`
              relative group flex items-center justify-center gap-2 p-4 rounded-xl
               border border-border/50 backdrop-blur-sm
              hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:-translate-y-1
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
            style={{
              transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
            }}
            title={skill.charAt(0).toUpperCase() + skill.slice(1)}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Subtle Border Glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
              <div className="relative">
                <StackIcon
                  name={skill}
                  className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 capitalize leading-tight">
                {skill}
              </span>
            </div>

            {/* Ripple Effect on Hover */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
