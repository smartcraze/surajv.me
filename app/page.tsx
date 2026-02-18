import Introduction from "@/components/Introduction";
import ProofOfWork from "@/components/proof-of-work";
import Footer from "@/components/footer";
import SkillsSection from "@/components/SkillsSection";
import WhatAmILearning from "@/components/what-am-i-leanring";
import ProjectsList from "@/components/projects-list";
import Resource from "@/components/resource";
import MeetLink from "@/components/meet-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Suraj Vishwakarma - Full Stack & GenAI Developer based in Bangalore, India. Specializing in React, Next.js, Node.js, TypeScript, AI/ML, and modern web development. Explore my projects, hackathon achievements, and developer stories.",
  openGraph: {
    title: "Suraj Vishwakarma — Full Stack & GenAI Developer",
    description: "Full Stack Developer specializing in GenAI, React, Next.js, and Node.js. Building innovative AI-powered applications and modern web solutions.",
    url: "https://surajv.dev",
    type: "website",
  },
  alternates: {
    canonical: "https://surajv.dev",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 justify-center mx-auto">
      <Introduction />
      <ProofOfWork />
      <Resource />
      <ProjectsList />
      <SkillsSection />
      <MeetLink />
      <WhatAmILearning />
      <hr className="w-full border-zinc-600 border-1" />
      <Footer />
    </main>
  );
}
