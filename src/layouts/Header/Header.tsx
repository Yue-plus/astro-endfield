import React, { useState } from "react";
import Colors from "../../components/Colors";

export default function Header() {
    const [n, setN] = useState(0)
    return (
      <header style={{ height: "4.2em", maxHeight: 90, backgroundColor: "rgba(28,28,28,.8)" }}>
        <img style={{ height: "2.5em", padding: "0.8em" }} src="/assets/img/astro-endfield-logo.svg" alt="Endfield-Astro" />
      </header>
    )
}