import Colors from "./Colors";

export type Backround = {
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

export type NavigationBarItem = {
  icon: string;
  text: string;
  link: URL;
  target: "_blank" | "_self";
};

export type SideBar = {
  // TODO
};

export type Valine = {
  appId: string;
  appKey: string;
  serverUrl?: string;
};

export type Gitalk = {
  clientId: string;
  clientSecret: string;
  repo: string;
  owner: string;
  admin: string[];
  id: string;
};

export type Waline = {
  serverUrl: string;
};

export type EndfieldUserConfig = {
  language?: string;
  background?: Backround;
  darkTheme?: Theme;
  lightTheme?: Theme;
  commentSystem?: Valine | Gitalk | Waline;
  navigationBar?: NavigationBarItem[];
  aside?: SideBar;
};

export function defineEndfieldConfig(
  config: EndfieldUserConfig
): EndfieldUserConfig {
  return {
    language: config.language ?? "zh",
    background: {
      color: config.background?.color ?? "black",
      image: "/assets/img/base_bg.jpg",
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
  };
}
