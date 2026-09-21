"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "../icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable: the mailto: link next to this button
      // still works, so this is a silent no-op rather than an error state.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email address copied" : "Copy email address"}
      className="flex h-8 w-8 items-center justify-center text-ink-3 transition-colors duration-[var(--duration-fast)] hover:text-accent"
    >
      {copied ? <CheckIcon className="h-4 w-4 text-accent" /> : <CopyIcon className="h-4 w-4" />}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
