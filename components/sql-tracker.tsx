"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Question = {
  titleSlug: string;
  status: string;
};

type Group = {
  title: string;
  slug: string;
  questions: Question[];
};

export default function SqlTracker({ studyPlan }: { studyPlan: Group[] }) {
  const [solvedQuestions, setSolvedQuestions] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);


  // Initialize from local storage
  useEffect(() => {
    const saved = localStorage.getItem("sql-50-progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSolvedQuestions(new Set(parsed));
        }
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    } else {
      // If no local storage, use the default status from the data
      const initialSolved = new Set<string>();
      studyPlan.forEach((group: Group) => {
        group.questions.forEach((q: Question) => {
          if (q.status === "PAST_SOLVED") {
            initialSolved.add(q.titleSlug);
          }
        });
      });
      setSolvedQuestions(initialSolved);
    }
    setIsLoaded(true);
  }, [studyPlan]);

  const toggleQuestion = (slug: string) => {
    // If not loaded yet, don't allow toggling to avoid overwriting or inconsistency
    if (!isLoaded) return; 

    const newSolved = new Set(solvedQuestions);
    if (newSolved.has(slug)) {
      newSolved.delete(slug);
    } else {
      newSolved.add(slug);
    }
    setSolvedQuestions(newSolved);
    localStorage.setItem("sql-50-progress", JSON.stringify(Array.from(newSolved)));
  };

  const allQuestions = studyPlan.flatMap((group) => group.questions);
  const total = allQuestions.length;
  
  // Calculate counts based on current state.
  // Before load, we can use props status to show initial state if we want, 
  // but showing outdated info might be confusing if localStorage has newer data.
  // However, showing loading state is better OR showing default and then updating.
  // Given the requirement, instant render is nice.
  
  const currentSolvedSet = isLoaded ? solvedQuestions : new Set(
    allQuestions.filter(q => q.status === 'PAST_SOLVED').map(q => q.titleSlug)
  );

  const solvedCount = currentSolvedSet.size;
  const progress = Math.round((solvedCount / total) * 100);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-sm font-medium text-zinc-500">
            {solvedCount} / {total} ({progress}%)
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
          <div
            className="h-2 rounded-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {studyPlan.map((group) => {
            
          const groupTotal = group.questions.length;
          const groupSolvedCount = group.questions.filter((q) => 
            currentSolvedSet.has(q.titleSlug)
          ).length;

          return (
            <div
              key={group.slug}
              className="rounded-xl border border-zinc-200 bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="border-b border-zinc-200 bg-zinc-50/50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50 flex justify-between items-center text-sm">
                <h2 className="font-semibold text-base">{group.title}</h2>
                <span className="text-zinc-500">
                  {groupSolvedCount} / {groupTotal}
                </span>
              </div>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {group.questions.map((question) => {
                  const isSolved = currentSolvedSet.has(question.titleSlug);

                  return (
                    <div
                      key={question.titleSlug}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer select-none",
                        isSolved ? "bg-zinc-50/50 dark:bg-zinc-900/30" : ""
                      )}
                      onClick={() => toggleQuestion(question.titleSlug)}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <button
                          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleQuestion(question.titleSlug);
                          }}
                        >
                          {isSolved ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 transition-transform scale-110" />
                          ) : (
                            <Circle className="h-5 w-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-400 dark:group-hover:text-zinc-500 transition-colors" />
                          )}
                        </button>


                        <div className="flex flex-col">
                             <span
                                className={cn(
                                    "font-medium transition-colors",
                                    isSolved ? "text-zinc-500 line-through decoration-zinc-400/50 decoration-2" : "text-zinc-900 dark:text-zinc-100"
                                )}
                            >
                                {question.titleSlug
                                .split("-")
                                .map((word) => {
                                    if (["ii", "iii", "iv", "vi"].includes(word))
                                    return word.toUpperCase();
                                    return word.charAt(0).toUpperCase() + word.slice(1);
                                })
                                .join(" ")}
                            </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 ml-2">
                        <Link
                          href={`https://leetcode.com/problems/${question.titleSlug}/description/`}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-md transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
