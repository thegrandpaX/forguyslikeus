"use client";

import { useState } from "react";

const STEPS = [
  { id: "checkup", label: "Book a checkup and bloodwork" },
  { id: "breathing", label: "Try the 4-4-6 breathing reset once" },
  { id: "weeknights", label: "Cut back drinking on weeknights" },
  { id: "one-person", label: "Tell one person how it's actually going" },
  { id: "eap", label: "Look up my EAP or union assistance program" },
  { id: "988", label: "Save 988 in my phone" },
];

export default function FirstStepsChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const count = STEPS.filter((s) => checked[s.id]).length;

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="bg-surface-container-low p-space-lg rounded-lg flex flex-col gap-space-md">
      <div className="flex items-baseline justify-between gap-space-sm">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Your first steps</h3>
        <span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">
          {count} of {STEPS.length} done
        </span>
      </div>
      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div className="h-full bg-primary-container transition-all duration-300" style={{ width: `${(count / STEPS.length) * 100}%` }} />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        No need to do them all. Pick one this week.
      </p>
      <div className="flex flex-col gap-space-xs">
        {STEPS.map((s) => (
          <label
            key={s.id}
            className="flex items-start gap-space-sm p-space-sm bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-colors rounded"
          >
            <input
              checked={!!checked[s.id]}
              onChange={() => toggle(s.id)}
              className="mt-1 w-4 h-4 shrink-0 accent-primary-container cursor-pointer"
              type="checkbox"
            />
            <span className="font-body-sm text-body-sm text-on-surface select-none">{s.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
