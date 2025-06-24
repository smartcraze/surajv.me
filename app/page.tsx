import Introduction from "@/components/Introduction";
import ProofOfWork from "@/components/proof-of-work";
import Footer from "@/components/footer";
import SkillsSection from "@/components/SkillsSection";
import WhatAmILearning from "@/components/what-am-i-leanring";
import ProjectsList from "@/components/projects-list";
import SurajGPT from "@/components/Surajgpt";
import Resource from "@/components/resource";
export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 justify-center mx-auto">
      <Introduction />
      <ProofOfWork />
      <Resource/>
      <ProjectsList />
      <SkillsSection />
      <WhatAmILearning />
      <SurajGPT />
      <hr className="w-full border-zinc-600 border-1" />
      <Footer />
    </main>
  );
}
