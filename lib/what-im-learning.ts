import { 
    ServerCrash, 
    Network, 
    BrainCircuit, 
    Code2, 
    Container, 
    Settings2 
} from "lucide-react";

export interface Learning {
    title: string;
    link: string;
    icon: React.ElementType;
}

export const learning: Learning[] = [
    {
        title: "100xdev DevOps",
        link: "https://github.com/smartcraze/DevOpsPilot",
        icon: Settings2 // more relevant to infrastructure/devops
    },
    {
        title: "Blockchain Development (Solana)",
        link: "https://github.com/smartcraze/100xdev-web3",
        icon: Network // suitable for blockchain/distributed networks
    },
    {
        title: "Langchain Generative AI",
        link: "https://github.com/smartcraze/Genrative-AI",
        icon: BrainCircuit // represents AI/ML/LLM
    },
    {
        title: "Fullstack Projects Driven Learning (Frontend + Backend Node.js)",
        link: "https://github.com/smartcraze/100xdev-webcohort",
        icon: Code2 // represents general fullstack/code
    },
    {
        title: "Docker Containerizing Multiple Applications",
        link: "https://github.com/smartcraze/devops-assignment",
        icon: Container // perfect for Docker
    },
    {
        title: "GitHub Actions Cron Job Exhausted My Render Free Tier",
        link: "https://github.com/whateverui/cron-job/actions",
        icon: ServerCrash // good fit for this context
    }
];
