import React from 'react';
import StackIcon from 'tech-stack-icons';
import { skills } from '@/lib/skills';
export default function SkillsSection() {
  return (
    <>
      <h2 className="text-2xl font-bold">Skills I Play With</h2>
      <section className=" w-full flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="relative z-0 overflow-hidden group flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 transition"
            title={skill.charAt(0).toUpperCase() + skill.slice(1)}
          >
            {/* radial glow */}
            <div className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 transition duration-300 blur-sm bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.4),_transparent_70%)]" />

            <StackIcon name={skill} className="w-5 h-5 text-blue-600" />
            <span className="capitalize">{skill}</span>
          </div>
        ))}
      </section>
    </>
  );
}
