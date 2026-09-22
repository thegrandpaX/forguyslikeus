"use client";

import { useState } from "react";

const WARNINGS = [
  "Snapping explosively at crew or family over negligible mistakes.",
  "Needing alcohol, pills, or weed just to quiet the internal alarm.",
  "Deep apathy; not giving a damn whether standard job safety rules are followed.",
  "Waking up already empty, dreading the ignition key turn every single morning.",
  "Pervasive intrusive belief that your family would be better off financially without you.",
];

export default function GaugeChecklist() {
  const [checked, setChecked] = useState<boolean[]>(WARNINGS.map(() => false));
  const count = checked.filter(Boolean).length;

  function toggle(i: number) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  let feedback: { text: string; className: string };
  if (count === 0) {
    feedback = {
      text: "CHECK THE ITEMS THAT APPLY TO REVEAL STATUS",
      className: "p-space-sm bg-surface-container rounded text-center font-label-code text-label-code text-on-surface-variant uppercase",
    };
  } else if (count <= 2) {
    feedback = {
      text: "WARNING // STRUCTURAL STRAIN OBSERVED. PROCEED WITH RECOVERY PROTOCOLS.",
      className: "p-space-sm bg-surface-container-high rounded text-center font-label-code text-label-code text-primary uppercase font-bold",
    };
  } else {
    feedback = {
      text: "CRITICAL REDLINE // DO NOT DISMISS THIS. REACH OUT FOR IMMEDIATE BACKUP TODAY.",
      className: "p-space-sm bg-surface-container-high rounded text-center font-label-code text-label-code text-error uppercase font-bold",
    };
  }

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-md flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <div className="w-2 h-4 bg-primary-container" />
          <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">THE GAUGE // FAULT LOG</h3>
        </div>
        <span className="font-label-code text-label-code text-primary uppercase">{count} / 5 DETECTED</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Tap any warnings present in your day-to-day operations during the last 30 shifts:
      </p>
      <div className="flex flex-col gap-space-sm">
        {WARNINGS.map((label, i) => (
          <label
            key={label}
            className="gauge-item flex items-start gap-space-sm p-space-sm bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors rounded"
          >
            <input
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-1 w-4 h-4 rounded bg-surface-container-high text-primary-container focus:ring-0 focus:ring-offset-0"
              type="checkbox"
            />
            <span className="font-body-sm text-body-sm text-on-surface select-none">{label}</span>
          </label>
        ))}
      </div>
      <div className={feedback.className}>
        <p>{feedback.text}</p>
      </div>
    </div>
  );
}
