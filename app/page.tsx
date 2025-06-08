import Introduction from "@/components/Introduction";
import ProofOfWork from "@/components/proof-of-work";
export default function Home() {
  return (

    <main className="flex flex-col gap-y-8 justify-center items-start mx-auto">
      <Introduction />
      <ProofOfWork />
    </main>
  );
}
