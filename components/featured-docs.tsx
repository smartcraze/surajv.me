"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { FileText, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { docs } from "@/lib/docs";

export default function FeaturedDocs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Memoize featured docs to prevent recalculation
  const featuredDocs = useMemo(() => docs.slice(0, 2), []);
  
  if (featuredDocs.length === 0) return null;

  const currentDoc = featuredDocs[currentIndex];

  // Memoized navigation handlers
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredDocs.length);
  }, [featuredDocs.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredDocs.length) % featuredDocs.length);
  }, [featuredDocs.length]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <section className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Latest Stories
          </h2>
        </div>
        <Link
          href="/docs"
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Featured Doc Card */}
        <div className="border border-zinc-600 rounded-md p-6 relative group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200">
          <Link href={`/docs/${currentDoc.slug}`} className="block" prefetch={true}>
            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-6 h-6 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-200 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 transition-colors">
                  {currentDoc.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  {currentDoc.description}
                </p>
                {currentDoc.tags && currentDoc.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {currentDoc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>

          {/* Navigation Controls */}
          {featuredDocs.length > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-300 dark:border-zinc-700">
              <button
                onClick={goToPrevious}
                className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {featuredDocs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-zinc-900 dark:bg-zinc-100 w-6"
                        : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="Next story"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
