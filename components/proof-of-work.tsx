
import GithubCalendar from "@/components/github-calendar";
import ProjectsList from "@/components/projects-list";
export default function ProofOfWork() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Proof of Work</h1>
      <p className="text-zinc-600 dark:text-zinc-500 max-w-md p-2">All projects i have worked so far </p>
      <GithubCalendar />
      <ProjectsList />
    </div>
  )
}