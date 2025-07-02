import {  DockIcon, Github, ServerCrash } from "lucide-react";

export interface Learning {
    title: string;
    link: string;
    icon: React.ElementType;
}

export const learning: Learning[] = [
    {
        title: "Blockchain Development(solana)",
        link: "https://github.com/smartcraze/100xdev-web3",
        icon: Github

    },
    {
        title: "Langchain Generative AI",
        link: "https://github.com/smartcraze/Genrative-AI",
        icon: Github
    },
    {
        title: "Fullstack projects driven learning Both frontend and backend(node)",
        link: "https://github.com/smartcraze/100xdev-webcohort",
        icon: Github
    },
    {
        title: "Docker Containering multiple applications",
        link: "https://github.com/smartcraze/devops-assignment",
        icon: DockIcon
    },
    {
        title: "GitHub Actions Cron Job Exhausted My Render Free Tier",
        link: "https://github.com/whateverui/cron-job/actions",
        icon: ServerCrash
    }
]   