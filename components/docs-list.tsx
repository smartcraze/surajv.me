"use client";

import { useState, useMemo, useCallback } from "react";
import { FileText, Search, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { docs, getAllTags, type Doc } from "@/lib/docs";

export default function DocsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags using helper function
  const allTags = useMemo(() => getAllTags(), []);

  // Filter docs based on search and tag - memoized
  const filteredDocs = useMemo(() => {
    return docs.filter((doc: Doc) => {
      const matchesSearch =
        searchQuery === "" ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag === null || doc.tags?.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  // Memoized callbacks
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleTagSelect = useCallback((tag: string | null) => {
    setSelectedTag(tag);
  }, []);

  return (
    <div className="px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6 max-w-3xl mx-auto">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-600 dark:group-focus-within:text-zinc-300 transition-colors duration-200" />
          <input
            type="text"
            placeholder="Search docs and stories..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-zinc-600 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-zinc-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Tag Filter */}
      {allTags.length > 0 && (
        <div className="mb-6 max-w-3xl mx-auto overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-zinc-600 dark:text-zinc-400 flex-shrink-0" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Filter by tag:
            </span>
          </div>
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            <button
              onClick={() => handleTagSelect(null)}
              className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0 ${
                selectedTag === null
                  ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 shadow-md"
                  : "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagSelect(tag)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0 ${
                  selectedTag === tag
                    ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Docs List */}
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        {filteredDocs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">
              No docs or stories found matching your search.
            </p>
          </div>
        ) : (
          filteredDocs.map((doc: Doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="w-full border border-zinc-600 rounded-md p-4 flex flex-col gap-2 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 ease-in-out group hover:shadow-lg hover:-translate-y-1 hover:border-zinc-500 dark:hover:border-zinc-500"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-all duration-200 mt-0.5 group-hover:scale-110" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 transition-all duration-200 group-hover:translate-x-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    {doc.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                    {doc.date && (
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Calendar className="w-3 h-3" />
                        <span className="whitespace-nowrap">
                          {new Date(doc.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                    {doc.tags && doc.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 min-w-0">
                        {doc.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-all duration-200 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600 whitespace-nowrap text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Results Count */}
      {searchQuery || selectedTag ? (
        <div className="text-center mt-6">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Showing {filteredDocs.length} of {docs.length} docs
          </p>
        </div>
      ) : null}
    </div>
  );
}
