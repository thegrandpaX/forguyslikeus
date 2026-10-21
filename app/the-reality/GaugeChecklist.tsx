"use client";

import { useState } from "react";
import Link from "next/link";

export default function GaugeChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const count = checked.filter(Boolean).length;
  const lastItemChecked = checked[items.length - 1];

  function toggle(i: number) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-lg flex flex-col gap-space-md">
      <div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Check what applies</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
          Think about the last few weeks. If two or more sound familiar, keep reading.
        </p>
      </div>
      <div className="flex flex-col gap-space-xs">
        {items.map((label, i) => (
          <label
            key={label}
            className="flex items-start gap-space-sm p-space-sm bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors rounded"
          >
            <input
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-1 w-4 h-4 shrink-0 accent-primary-container cursor-pointer"
              type="checkbox"
            />
            <span className="font-body-sm text-body-sm text-on-surface select-none">{label}</span>
          </label>
        ))}
      </div>
      {lastItemChecked ? (
        <div className="p-space-md bg-secondary-container text-on-secondary-container rounded font-body-sm text-body-sm">
          That last one matters most. Please call or text <a className="font-bold underline" href="tel:988">988</a> today,
          or tell someone you trust. You don&apos;t have to carry that alone.
        </div>
      ) : count >= 2 ? (
        <div className="p-space-md bg-surface-container-high rounded font-body-sm text-body-sm text-on-surface">
          You checked {count}. That&apos;s worth taking seriously. Read{" "}
          <Link className="text-primary underline" href="/the-paths">what actually helps</Link>. The first step is
          usually just a doctor visit.
        </div>
      ) : count === 1 ? (
        <div className="p-space-md bg-surface-container rounded font-body-sm text-body-sm text-on-surface-variant">
          One by itself might just be a rough patch. Keep an eye on it.
        </div>
      ) : null}
    </div>
  );
}
