import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Spigle — Growth, powered by Strategy, AI & Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interRegular = await readFile(
    join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"),
  );
  const interSemibold = await readFile(
    join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0b0d",
          color: "#ffffff",
          padding: 80,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 32 32"
            style={{ display: "flex" }}
          >
            <line x1="9" y1="24" x2="16" y2="16" stroke="#d8dade" strokeWidth="1.5" />
            <line x1="23" y1="24" x2="16" y2="16" stroke="#d8dade" strokeWidth="1.5" />
            <line x1="16" y1="7" x2="16" y2="16" stroke="#d8dade" strokeWidth="1.5" />
            <circle cx="16" cy="7" r="3" fill="#ef7f3c" />
            <circle cx="9" cy="24" r="3" fill="#ffffff" />
            <circle cx="23" cy="24" r="3" fill="#ffffff" />
            <circle cx="16" cy="16" r="2.1" fill="#2f5ce8" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Spigle
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#858a94",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              AI &amp; Business Consulting
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              maxWidth: 920,
            }}
          >
            Growth, powered by strategy, AI &amp; technology.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "#858a94",
              lineHeight: 1.5,
              maxWidth: 760,
            }}
          >
            Strategy first. Technology second. Marketing as execution.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 18, color: "#565b66" }}>
          spigle.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: interSemibold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
