import GithubCalendar from "@/components/github-calendar";

export default function ProofOfWork() {
  return (
    <section className="w-full px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-1">Proof of Work</h1>
        <p className="text-zinc-600 dark:text-zinc-500 max-w-md text-center mb-4">
          All projects I have worked on so far
        </p>
        <div className="w-full flex justify-center overflow-x-auto">
          <GithubCalendar />
        </div>
        <div className="pt-4" />
      </div>
    </section>
  );
}
