import { CounterCard } from "@/components/counter-card";
import { StackGrid } from "@/components/stack-grid";
import { env } from "@/lib/env";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-5">
        <span className="w-fit rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          Starter project
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="max-w-2xl text-lg text-pretty text-zinc-600 dark:text-zinc-400">
          A minimal Next.js foundation with TypeScript, Tailwind CSS, React
          Icons, Zod, and Zustand already wired together. Replace this page with
          the real product when you are ready.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Next.js docs
          </a>
          <a
            className="inline-flex items-center rounded-lg border border-zinc-200 px-4 py-2 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            href="/api/health"
          >
            Check /api/health
          </a>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <CounterCard />
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Included in this starter
          </h2>
          <StackGrid />
        </section>
      </div>

      <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        Edit{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] dark:bg-zinc-900">
          src/app/page.tsx
        </code>{" "}
        to start building.
      </footer>
    </main>
  );
}
