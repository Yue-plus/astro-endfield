import endfieldConfig from "../../../endfield.config";
import type { NavBarItem, Theme } from "../../components/EndfieldUserConfig";

export default function Header() {
  const navBarItems: NavBarItem[] = endfieldConfig.navBar?.items ?? [];

  return (
    <header className="h-16 bg-gray">
      <a className="h-16" href="/">
        <img
          className="h-16 p-3 inline-block"
          src="/assets/img/astro-endfield-logo.svg"
          alt="Endfield-Astro"
        />
      </a>
      <ul className="inline-block">
        {navBarItems.map((item) => (
          <li className="inline-block">
            <a className="h16 p-4 inline-block" href={item.link}>
              {item.icon}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
