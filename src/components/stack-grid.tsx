import type { IconType } from "react-icons";
import { FiLayers } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

type StackItem = {
  name: string;
  role: string;
  icon: IconType;
};

const stack: StackItem[] = [
  { name: "Next.js", role: "App Router and server routes", icon: SiNextdotjs },
  { name: "TypeScript", role: "Strict types end to end", icon: SiTypescript },
  { name: "Tailwind CSS", role: "Utility-first styling", icon: SiTailwindcss },
  { name: "React", role: "Server and client components", icon: SiReact },
  { name: "Zod", role: "Runtime schema validation", icon: SiZod },
  { name: "Zustand", role: "Small client state store", icon: FiLayers },
];

export function StackGrid() {
  return (
    <ul className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {stack.map(({ name, role, icon: Icon }) => (
        <li
          key={name}
          className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <Icon aria-hidden className="mt-0.5 size-5 shrink-0" />
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
