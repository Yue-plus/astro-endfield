import type React from "react";
import { CSSProperties, useState } from "react";

export default function Footer() {
  let [state, setState] = useState(false)

  return <footer
    className="h-24 max-h-24 fixed left-0 right-0 bottom-0 bg-no-repeat bg-cover"
    style={{ backgroundImage: "url(/assets/img/footer_bg.png)" }}
  >Footer</footer>;
}
