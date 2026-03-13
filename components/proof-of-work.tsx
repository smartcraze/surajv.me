import GithubCalendar from "@/components/github-calendar";

export default function ProofOfWork() {
  return (
    <section className="w-full px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-1">
          Proof of Work
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-center mb-4 text-sm sm:text-base">
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
