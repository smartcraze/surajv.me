"use client";
import { useCallback, useState, useEffect } from "react";
import { Activity } from "react-github-calendar";

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);
  const [GitHubCalendar, setGitHubCalendar] = useState<any>(null);

  useEffect(() => {
    // Only import on client side
    import("react-github-calendar").then((mod) => {
      setGitHubCalendar(() => mod.default);
    });
  }, []);

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  if (!GitHubCalendar) {
    return <div className="h-[159px] w-full" />;
  }

  return (
    <GitHubCalendar
      username="smartcraze"
      transformData={processContributions}
      totalCount={totalCount}
    />
  );
}

export default GithubCalender;
