import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

import type { Technology } from "../types/technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const iconMap: Record<string, IconType> = {
  react: SiReact,
  vue: SiVuedotjs,
  svelte: SiSvelte,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  redis: SiRedis,
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: FaJava,
  tailwind: SiTailwindcss,
  docker: SiDocker,
};

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      {/* Header */}
      <h3 className="text-lg font-bold text-slate-800">Your Stack</h3>

      <p className="mt-1 text-[12px] text-slate-400">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
        Selected
      </p>

      {/* Empty State */}
      {stack.length === 0 && (
        <div className="mt-6 rounded-lg bg-slate-50 px-3 py-5 text-center">
          <p className="text-[12px] text-slate-400">
            No technologies selected yet.
          </p>

          <p className="mt-1 text-[11px] text-slate-300">
            Add technologies from the list.
          </p>
        </div>
      )}

      {/* Selected Stack */}
      <div className="mt-4 space-y-2">
        {stack.map((technology) => {
          // Support both:
          // icon: "react"
          // OR
          // icon: "⚛", iconTone: "react"
          const iconKey =
            "iconTone" in technology && technology.iconTone
              ? technology.iconTone
              : technology.icon;

          const Icon = iconMap[iconKey];

          return (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
            >
              <div className="flex min-w-0 items-center gap-2">
                {/* Safe icon rendering */}
                {Icon ? (
                  <Icon className="shrink-0 text-xl text-pink-500" />
                ) : (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-xl">
                    {technology.icon}
                  </span>
                )}

                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-slate-700">
                    {technology.name}
                  </p>

                  <p className="text-[12px] text-slate-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="ml-2 text-xl leading-none text-slate-300 transition hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>

      {/* Remove All */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full rounded-md border border-red-200 py-2 text-[12px] font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}

export default YourStack;
