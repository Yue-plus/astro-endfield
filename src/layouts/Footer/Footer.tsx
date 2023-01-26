import type React from "react";
import type { CSSProperties } from "react";

export default function Footer() {
  const footerStyle: CSSProperties = {
    height: "8em",
    position: "fixed",
    right: "0",
    left: "0",
    bottom: "0",
  };

  return <footer style={footerStyle}>Footer</footer>;
}
