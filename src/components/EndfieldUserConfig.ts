import { atom } from "nanostores";
import Colors from "./Colors";
import type { Valine, Gitalk, Waline } from "./types/CommentSystem";

export type Background = {
  color?: string;
  image?: string;
  dynamic?:
    | "disable"
    | "default"
    | "dust"
    | "firefly"
    | "overcast"
    | "sunshine";
};

export type Theme = {
  primary: string;
  foreground: string;
  background: string;
};

export type NavBar = {
  logo?: string;
  title?: string;
  items: NavBarItem[];
};

export type NavBarItem = {
  icon?: string;
  text?: string;
  link?: string;
  target: "_blank" | "_self";
};

export type SideBar = {
  // TODO
};

export type Footer = {
  icp?: string;
};

export type EndfieldUserConfig = {
  language?: string;
  background?: Background;
  darkTheme?: Theme;
  lightTheme?: Theme;
  commentSystem?: Valine | Gitalk | Waline;
  navBar?: NavBar;
  aside?: SideBar;
  footer?: Footer;
};

export function defineEndfieldConfig(
  config: EndfieldUserConfig
): EndfieldUserConfig {
  return {
    language: config.language ?? "zh",
    background: {
      color: config.background?.color ?? "black",
      image: config.background?.image ?? "/assets/img/base_bg.jpg",
      dynamic: "disable",
    },
    darkTheme: {
      primary: Colors.primaryEndfield,
      foreground: "white",
      background: "black",
    },
    lightTheme: {
      primary: Colors.primaryEndfield,
      foreground: "black",
      background: "white",
    },
    navBar: {
      logo: config.navBar?.logo ?? "",
      title: config.navBar?.title ?? "",
      items: [
        { text: "Docs", link: "docs/", target: "_blank" },
        { text: "Blog", link: "blog/", target: "_blank" },
      ],
    },
    footer: {
      icp: config.footer?.icp,
    },
  };
}

export const isDarkMode = atom(true);

