"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const FullWidth = ["/passion"];
  if (FullWidth.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <main className="bg-white dark:border-zinc-800 border-zinc-200 border-dashed dark:bg-zinc-900 min-h-screen max-w-3xl  mx-auto my-1 px-4 py-4 rounded">
      {children}
    </main>
  );
}
