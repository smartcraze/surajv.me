import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist. Visit surajv.dev for Suraj Vishwakarma's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-zinc-100">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
          Page Not Found
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Looking for surajv.me?</strong>
            <br />
            This domain has been moved to{" "}
            <Link 
              href="https://surajv.dev" 
              className="font-semibold underline hover:text-blue-700 dark:hover:text-blue-300"
            >
              surajv.dev
            </Link>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Go Home
          </Link>
          
          <Link
            href="/projects"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Need help? Connect with me on{" "}
            <Link
              href="https://github.com/smartcraze" 
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            {" "}or{" "}
            <Link 
              href="https://linkedin.com/in/surajv354" 
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
