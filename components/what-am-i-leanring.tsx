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

function LearningCard({ title, link }: { title: string, link: string }) {
  return (
    <div className="w-full border border-zinc-600 rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex flex-row gap-2 items-center">
      <Link href={link} className="flex flex-row gap-2 items-center">
        <Github className="w-4 h-4 text-zinc-600" />
        <span className="text-zinc-400">{title}</span>
      </Link>
      {/* align arrow to extreme right */}
      <ArrowRight className="w-4 h-4 text-zinc-600 ml-auto" />
    </div>
  )
}
