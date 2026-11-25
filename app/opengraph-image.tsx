import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background:
            "radial-gradient(circle at 82% 24%, rgba(255, 23, 36, 0.24) 0%, rgba(105, 0, 8, 0.12) 28%, #080808 68%)",
          backgroundColor: "#080808",
          color: "#F5F5F5",
          border: "1px solid rgba(192,192,192,0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 22,
              letterSpacing: "0.24em",
              color: "#C5C5C5",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: "#FF1724",
              }}
            />
            SOFTWDOCS
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.2em",
              color: "#A1A1A1",
            }}
          >
            TECHNOLOGY ENGINEERING
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#F5F5F5",
              maxWidth: "960px",
            }}
          >
            WE DON&apos;T JUST BUILD TECH. WE ENGINEER THE FUTURE.
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: "#A1A1A1",
              maxWidth: "820px",
            }}
          >
            Intelligent systems, Agentic AI, cloud infrastructure, and bespoke
            software engineering.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(192, 192, 192, 0.22)",
            paddingTop: "24px",
            fontSize: 18,
            color: "#C5C5C5",
          }}
        >
          <span>Software Engineering · Agentic AI · Cloud & DevOps</span>
          <span style={{ color: "#FF1724", fontWeight: 600 }}>
            Precision Engineering
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
