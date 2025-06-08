import Introduction from "@/components/Introduction";
import GithubCalendar from "@/components/github-calendar";
export default function Home() {
  return (

    <main className="flex flex-col gap-y-8 justify-center items-start mx-auto">
      <Introduction />
      <GithubCalendar />
    </main>
  );
}
