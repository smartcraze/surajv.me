import React from 'react';
import StackIcon from 'tech-stack-icons';

const skills = [
  'react',
  'nextjs',
  'tailwindcss',
  'nodejs',
  'prisma',
  'docker',
  'python',
  'c++',
  'typescript',
  'mongodb',
  'postgresql',
  'aws',
  'git',
  'github',

];

export default function SkillsSection() {
  return (
    <>
    <h2 className="text-2xl font-bold">Skills I Play With</h2>
    <section className=" w-full flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          title={skill.charAt(0).toUpperCase() + skill.slice(1)}
        >
          <StackIcon name={skill} className="w-5 h-5 text-blue-600" />
          <span className="capitalize">{skill}</span>
        </div>
      ))}
    </section>
    </>
  );
}
