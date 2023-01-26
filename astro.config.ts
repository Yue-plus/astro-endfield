import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// https://docs.astro.build/zh-cn/reference/configuration-reference/
export default defineConfig({
  site: "https://astro.endfield.tech",
  integrations: [react(), tailwind()],
});
