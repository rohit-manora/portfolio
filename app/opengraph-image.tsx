import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rohit Manora — Senior Experience Engineer";

/** Generated at build time — no static asset to ship or keep in sync. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5b9dff",
          }}
        >
          {profile.title} — {profile.company}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              lineHeight: 1,
              letterSpacing: -6,
              color: "#eceff3",
            }}
          >
            Rohit Manora
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#9aa1aa",
              maxWidth: 900,
            }}
          >
            Frontend architecture · Microfrontends · React · Next.js · AEM
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#767d85",
          }}
        >
          8+ Years · Enterprise Frontend Engineering
        </div>
      </div>
    ),
    size,
  );
}
