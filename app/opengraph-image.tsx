import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yatin Kalra — Senior Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #030014 0%, #0f0a3a 45%, #0a1f3a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.45), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.35), transparent 60%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#10b981",
              boxShadow: "0 0 16px rgba(16,185,129,0.8)",
            }}
          />
          <span style={{ fontSize: 22, color: "#9ca3af" }}>
            Available for opportunities
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 28, color: "#a5b4fc", letterSpacing: 4 }}>
            SENIOR FULL STACK ENGINEER
          </span>
          <span
            style={{
              fontSize: 132,
              fontWeight: 700,
              lineHeight: 1,
              backgroundImage:
                "linear-gradient(90deg, #c4b5fd, #a78bfa, #67e8f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Yatin Kalra
          </span>
          <span style={{ fontSize: 32, color: "#94a3b8", maxWidth: 900 }}>
            8+ years shipping cloud-native systems · AI agents · 11 hackathons
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <span>fintech · healthcare · SaaS</span>
          <span>yatinkalra22-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
