"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const FullWidth = ["/meet", "/passion"];
  if (FullWidth.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <main className="bg-white dark:border-zinc-800 border-zinc-200 border-2 dark:bg-zinc-900 min-h-screen max-w-[45rem] mx-auto my-1 px-4 py-4 rounded">
      {children}
    </main>
  );
}
