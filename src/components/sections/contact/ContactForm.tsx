"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Fields";
import { site } from "@/content/site";

const interests = [
  "Strategy & Advisory",
  "AI & Intelligent Automation",
  "Technology & Engineering",
  "Execution & Growth",
  "Not sure yet",
];

const sizes = [
  "1–50 people",
  "51–200 people",
  "201–1000 people",
  "1000+ people",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  size: string;
  interest: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  size: "",
  interest: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (field: keyof FormState) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (v: FormState): Partial<FormState> => {
    const next: Partial<FormState> = {};
    if (!v.name.trim()) next.name = "Please add your name.";
    if (!v.email.trim()) next.email = "Please add your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      next.email = "That email doesn't look right.";
    if (!v.company.trim()) next.company = "Please add your company.";
    if (!v.size) next.size = "Please select a size.";
    if (!v.interest) next.interest = "Please select a topic.";
    if (!v.message.trim() || v.message.trim().length < 20)
      next.message = "Tell us a little more (20+ characters helps us prepare).";
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("idle");
        setSubmitError(
          data.error ?? "The message could not be sent. Please try again.",
        );
        return;
      }

      setStatus("done");
    } catch {
      setStatus("idle");
      setSubmitError(
        `The message could not be sent. Please email us directly at ${site.email}.`,
      );
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-line bg-surface/60 p-10 text-center sm:p-14">
        <CheckCircle2 className="mx-auto size-12 text-accent" aria-hidden="true" />
        <h2 className="mt-6 text-2xl font-medium tracking-tight text-ink">
          Message received.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted">
          Thank you, {values.name.split(" ")[0]}. A senior partner — not a
          business development rep — will reply within two working days.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-8"
          onClick={() => {
            setValues(empty);
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Work email" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            placeholder="jane@company.com"
          />
        </Field>
      </div>

      <Field label="Company" htmlFor="company" error={errors.company}>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => set("company")(e.target.value)}
          aria-invalid={Boolean(errors.company)}
          placeholder="Company name"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company size" htmlFor="size" error={errors.size}>
          <Select
            id="size"
            name="size"
            value={values.size}
            onChange={(e) => set("size")(e.target.value)}
            aria-invalid={Boolean(errors.size)}
          >
            <option value="" disabled>
              Select size
            </option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          label="What do you need help with?"
          htmlFor="interest"
          error={errors.interest}
        >
          <Select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(e) => set("interest")(e.target.value)}
            aria-invalid={Boolean(errors.interest)}
          >
            <option value="" disabled>
              Select a topic
            </option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label="What are you trying to achieve?"
        htmlFor="message"
        error={errors.message}
        hint="A few sentences is enough. We'll come prepared."
      >
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          placeholder="We're growing quickly and our operations haven't kept up. We'd like to understand where automation can actually help…"
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
            {status === "submitting" ? (
              <>
                <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              "Send message"
            )}
          </Button>
          {submitError ? (
            <p role="status" className="max-w-sm text-sm font-medium text-accent-ink">
              {submitError}
            </p>
          ) : null}
        </div>
        <p className="text-sm text-faint">
          Two working days. No pitch decks. A straight answer.
        </p>
      </div>
    </form>
  );
}
