"use client";

import { useState } from "react";

type FormState = { name: string; contact: string; sector: string; reason: string };
const EMPTY_FORM: FormState = { name: "", contact: "", sector: "general", reason: "" };

const INPUT =
  "w-full bg-surface-container-lowest px-space-md py-3 text-on-surface font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors";
const LABEL = "font-body-sm text-body-sm text-on-surface font-semibold";

export default function RecommendForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/resources/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm(EMPTY_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <form className="flex-1 w-full flex flex-col gap-space-md bg-surface-container p-space-lg rounded-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-space-xs">
        <label className={LABEL} htmlFor="rec-name">Organization or program name</label>
        <input
          required
          id="rec-name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={INPUT}
          placeholder="e.g. Local 49 peer support group"
          type="text"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <label className={LABEL} htmlFor="rec-contact">Phone or website</label>
          <input
            required
            id="rec-contact"
            value={form.contact}
            onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
            className={INPUT}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-space-xs">
          <label className={LABEL} htmlFor="rec-sector">Who it&apos;s for</label>
          <select
            id="rec-sector"
            value={form.sector}
            onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
            className={INPUT}
          >
            <option value="general">Anyone</option>
            <option value="construction">Construction &amp; heavy equipment</option>
            <option value="veterans">Veterans</option>
            <option value="linework">Electrical &amp; utilities</option>
            <option value="pipe">Pipe trades &amp; welding</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-space-xs">
        <label className={LABEL} htmlFor="rec-reason">Why do you vouch for them?</label>
        <textarea
          required
          id="rec-reason"
          value={form.reason}
          onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
          className={INPUT + " resize-none"}
          rows={3}
        />
      </div>
      {status === "sent" && (
        <div className="p-space-sm bg-surface-container-highest text-primary font-body-sm text-body-sm">
          Got it, thanks. I&apos;ll check it out before adding it.
        </div>
      )}
      {status === "error" && (
        <div className="p-space-sm bg-error-container text-on-error-container font-body-sm text-body-sm">
          Something went wrong. Try again.
        </div>
      )}
      <button
        className="w-full py-3 bg-primary-container hover:bg-primary text-on-primary-container font-label-badge text-label-badge uppercase tracking-wider transition-colors mt-space-xs disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Send recommendation"}
      </button>
    </form>
  );
}
