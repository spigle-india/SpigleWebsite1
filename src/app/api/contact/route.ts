import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  size: string;
  interest: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bullseye(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: bullseye(body.name),
    email: bullseye(body.email),
    company: bullseye(body.company),
    size: bullseye(body.size),
    interest: bullseye(body.interest),
    message: bullseye(body.message),
  };

  if (
    !payload.name ||
    !EMAIL_REGEX.test(payload.email) ||
    payload.message.length < 20
  ) {
    return NextResponse.json(
      { error: "Name, a valid email, and a longer message are required." },
      { status: 422 },
    );
  }

  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE === "false" ? false : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? user ?? "spigle.india@gmail.com";
  const from = process.env.CONTACT_FROM ?? `Spigle Website <${user ?? "no-reply@spigle.com"}>`;

  if (!user || !pass) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Set SMTP_USER and SMTP_PASS (and optionally CONTACT_TO) in your environment.",
      },
      { status: 503 },
    );
  }

  const text = [
    `New enquiry from the Spigle website`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    `Company size: ${payload.size || "—"}`,
    `Interest: ${payload.interest || "—"}`,
    "",
    "Message:",
    payload.message,
    "",
    "—",
    "Submitted via spigle.com/contact",
  ].join("\n");

  const subject = `New consultation enquiry — ${payload.name} (${payload.company || "company"})`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      text,
    });
  } catch (error) {
    console.error("Contact form email failed to send:", error);
    return NextResponse.json(
      { error: "The message could not be sent. Please email us directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}