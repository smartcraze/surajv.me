import { learning } from "@/lib/what-im-learning";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function WhatAmILearning() {
  return (
    <div>
      <h2 className="text-2xl font-bold pb-4">What I&apos;m Learning</h2>
      <div className="flex flex-col gap-3 w-full ">
        {learning.map((x, index) => (
          <LearningCard key={index} title={x.title} link={x.link} />
        ))}
      </div>
    </div>
  )
}


export function LearningCard({ title, link }: { title: string, link: string }) {
  return (
    <Link href={link} className="flex flex-row gap-2 items-center transition-all duration-200 w-full border border-zinc-600 rounded-md p-2 flex flex-row gap-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 ease-in-out hover:scale-[1.02] hover:-translate-y-[2px] hover:group">
      <Github className="w-4 h-4 text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors duration-200" />
      <span className="text-white font-semibold transition-colors duration-200 group-hover:text-black dark:group-hover:text-white">
        {title}
      </span>
      <ArrowRight
        className="w-4 h-4 text-zinc-600 ml-auto transform transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  )
}


