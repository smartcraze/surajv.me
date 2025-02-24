import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectnewLook from "@/components/ProjectnewLook";
import Skill from "@/components/Skills";
import SocialHandle from "@/components/SocialHandle";

import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <div className="flex flex-col justify-center m-2 items-center">
        <h2 className="text-center text-4xl  m-2 p-2">Proof of works </h2>
        <GitHubCalendar username="smartcraze" />
        <Githubstats />
      </div>
      <ProjectnewLook />
      <Skill />
      <SocialHandle />
      <Footer />
    </main>
  );
}

function Githubstats() {
  const username = "smartcraze";
  const theme = "midnight-purple";
  const profileUrl = `https://github.com/${username}`;

  return (
    <div className="flex flex-wrap items-center gap-4 justify-center">
      <Link
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&count_private=true&include_all_commits=true`}
          alt="GitHub Stats"
          className="rounded-lg shadow-md border-2 border-white"
        />
      </Link>

      <Link
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}`}
          alt="Top Languages"
          className="rounded-lg shadow-md border-2 border-white"
        />
      </Link>

      <Link
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=false`}
          alt="GitHub Streak Stats"
          className="rounded-lg shadow-md border-2 border-white"
        />
      </Link>
    </div>
  );
}
