"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="mt-5"
    >
      {done ? (
        <p className="flex items-center gap-2 text-sm text-white/80">
          <Check className="size-4 text-accent" aria-hidden="true" />
          You&apos;re on the list. We send one note a month — never more.
        </p>
      ) : (
        <div className="flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur">
          <label htmlFor="newsletter-email" className="sr-only">
            Work email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            className="w-full bg-transparent px-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Subscribe
          </button>
        </div>
      )}
    </form>
  );
}
