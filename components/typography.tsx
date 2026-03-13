import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-sm sm:prose-base md:prose-lg max-w-3xl mx-auto pt-2 prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-p:leading-7 prose-li:leading-7 prose-code:font-mono prose-code:font-medium prose-code:text-[0.84em] prose-code:text-zinc-800 dark:prose-code:text-zinc-200 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-900/60 prose-code:border prose-code:border-zinc-200 dark:prose-code:border-zinc-800 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800 prose-pre:bg-zinc-50 dark:prose-pre:bg-zinc-950 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-img:rounded-xl prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800 prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:text-zinc-900 dark:hover:prose-a:text-zinc-100 prose-td:px-4">
      {children}
    </div>
  );
}
