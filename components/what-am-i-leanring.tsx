import { learning } from "@/lib/what-im-learning";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What I'm Learning",
  description: "Topics and resources I'm currently exploring",
};

export function LearningCard({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={link}
      className="w-full border border-zinc-600 rounded-md p-2 flex flex-row gap-2 items-center text-zinc-900 dark:text-zinc-100 hover:bg-gradient-to-r hover:from-zinc-100 hover:to-indigo-50 dark:hover:from-zinc-800 dark:hover:to-indigo-900/30 transition-all duration-200 ease-in-out group hover:shadow-md hover:scale-[1.02] hover:-translate-y-[2px]"
    >
      <Github className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200" />
      <span className="font-semibold transition-colors duration-200">
        {title}
      </span>
      <ArrowRight className="w-4 h-4 text-zinc-400 ml-auto transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
    </Link>
  );
}

export default function WhatAmILearning() {
  return (
    <div className=" px-4 py-6">
      <h2 className="text-2xl font-bold pb-2 text-zinc-900 dark:text-zinc-100">What I&apos;m Learning</h2>
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        {learning.map((x, index) => (
          <LearningCard key={index} title={x.title} link={x.link} />
        ))}
      </div>
    </div>
  );
}