"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { z } from "zod";

const counterStateSchema = z.object({
  count: z.number().int(),
  step: z.number().int().positive(),
});

export type CounterState = z.infer<typeof counterStateSchema>;

type CounterStore = CounterState & {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (step: number) => void;
};

const initialState: CounterState = { count: 0, step: 1 };

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      ...initialState,
      increment: () => set((state) => ({ count: state.count + state.step })),
      decrement: () => set((state) => ({ count: state.count - state.step })),
      reset: () => set(initialState),
      setStep: (step) =>
        set({ step: counterStateSchema.shape.step.parse(step) }),
    }),
    {
      name: "counter-store",
      // Ignore storage written by an older or tampered-with version.
      merge: (persistedState, currentState) => {
        const result = counterStateSchema.partial().safeParse(persistedState);
        return result.success
          ? { ...currentState, ...result.data }
          : currentState;
      },
    },
  ),
);
