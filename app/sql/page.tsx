import SqlTracker from "@/components/sql-tracker";
import { sqlStudyPlan } from "@/lib/sql-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL 50 Study Plan",
  description: "Track my progress on the LeetCode Top SQL 50 study plan.",
};

export default function SqlPage() {
  return (
    <div className="space-y-8 py-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Top SQL 50</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Tracking my progress on LeetCode&apos;s Top SQL 50 study plan.
        </p>
      </div>

      <SqlTracker studyPlan={sqlStudyPlan} />
    </div>
  );
}
