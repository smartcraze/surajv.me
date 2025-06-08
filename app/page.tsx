import Introduction from "@/components/Introduction";
import ProofOfWork from "@/components/proof-of-work";
import Footer from "@/components/footer";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {
  return (

    <main className="flex flex-col gap-y-8 justify-center  mx-auto">
      <Introduction />
      <ProofOfWork />
      <SkillsSection />
      <hr className="w-full border-zinc-600 border-1" />
      <Footer />
    </main>
  );
}
