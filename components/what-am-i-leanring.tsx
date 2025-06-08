import { LinkIcon, Paperclip } from "lucide-react";
import Link from "next/link";

export default function WhatAmILearning() {
    return (
        <div>
            <h2 className="text-2xl font-bold pb-4">What I'm Learning</h2>
            <div className="flex flex-col gap-4 w-full ">
            <LearningCard 
            title="exploring Blockchain solana development ecosystem"
            link=""
            />
            <LearningCard 
            title="developing a web3 wallet"
            link=""
            />
            
            </div>
        </div>
    )
}


function LearningCard({ title, link }: { title: string, link: string}) {
    return (
        <div className="w-full border border-zinc-600 rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <Link href={link} className="flex flex-row gap-2">
            <Paperclip />
            {title}
        </Link>
        </div>
    )
}