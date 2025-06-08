import {  Github } from "lucide-react";
import Link from "next/link";

export default function WhatAmILearning() {
    return (
        <div>
            <h2 className="text-2xl font-bold pb-4">What I&apos;m Learning</h2>
            <div className="flex flex-col gap-4 w-full ">
            <LearningCard 
            title="exploring Blockchain solana development ecosystem"
            link="https://github.com/smartcraze/100xdev-web3"
            />
            <LearningCard 
            title="Fullstack projects driven learning Both frontend and backend(node)"
            link="https://github.com/smartcraze/100xdev-webcohort"
            />
            <LearningCard 
            title="Docker containering multiple applications"
            link="https://github.com/smartcraze/devops-assignment"
            />
            
            </div>
        </div>
    )
}


function LearningCard({ title, link }: { title: string, link: string}) {
    return (
        <div className="w-full border border-zinc-600 rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <Link href={link} className="flex flex-row gap-2 items-center">
            <Github className="w-4 h-4" />
            {title}
        </Link>
        </div>
    )
}