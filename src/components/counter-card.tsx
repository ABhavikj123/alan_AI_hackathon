"use client";

import { useSyncExternalStore } from "react";
import { FiMinus, FiPlus, FiRotateCcw } from "react-icons/fi";
import { useCounterStore } from "@/stores/counter-store";

// False during server rendering and hydration, true once the client owns the
// tree, so persisted values never cause a hydration mismatch.
const emptySubscribe = () => () => {};

function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function CounterCard() {
  const hydrated = useHydrated();
  const count = useCounterStore((state) => state.count);
  const step = useCounterStore((state) => state.step);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const setStep = useCounterStore((state) => state.setStep);

  return (
    <section className="w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Zustand store, validated with Zod
          </h2>
          <p className="mt-1 text-4xl font-semibold tabular-nums tracking-tight">
            {hydrated ? count : 0}
          </p>
        </div>
        <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          step {step}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={decrement}
          aria-label="Decrease count"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <FiMinus aria-hidden />
          Decrease
        </button>
        <button
          type="button"
          onClick={increment}
          aria-label="Increase count"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <FiPlus aria-hidden />
          Increase
        </button>
        <button
          type="button"
          onClick={reset}
          aria-label="Reset count"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <FiRotateCcw aria-hidden />
          Reset
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
        <label htmlFor="step">Step size</label>
        <input
          id="step"
          type="number"
          min={1}
          max={10}
          value={step}
          onChange={(event) => setStep(Number(event.target.value) || 1)}
          className="w-20 rounded-lg border border-zinc-200 bg-transparent px-2 py-1 text-zinc-900 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:text-zinc-100"
        />
        <span className="text-xs">Persisted in localStorage.</span>
      </div>
    </section>
  );
}
