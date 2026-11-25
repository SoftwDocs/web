import React from "react";

interface MetallicTextProps {
  children: React.ReactNode;
  variant?: "chrome" | "crimson";
  className?: string;
}

export function MetallicText({
  children,
  variant = "chrome",
  className = "",
}: MetallicTextProps) {
  return (
    <span
      className={`${
        variant === "crimson" ? "crimson-gloss-text" : "chrome-text"
      } ${className}`}
    >
      {children}
    </span>
  );
}
