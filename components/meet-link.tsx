import React from 'react'

import { Calendar } from 'lucide-react';
import Link from 'next/link';

function MeetLink() {
  return (
    <section className="max-w-3xl mx-auto w-full px-4">
      <div className="border border-zinc-600 rounded-md p-6 transition-all duration-200 ease-in-out hover:bg-zinc-50 dark:hover:bg-zinc-900/50 group">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-200" />
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Let's Connect
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Schedule a chat about projects or collaboration
              </p>
            </div>
          </div>
          <Link
            href="/meet"
            className="ml-auto border border-zinc-600 rounded-md px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 ease-in-out hover:scale-[1.02] hover:-translate-y-[1px] hover:shadow-sm"
          >
            Book Meeting
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MeetLink