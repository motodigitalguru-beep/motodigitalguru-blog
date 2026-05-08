import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://motodigitalguru.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  output: "static",
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: true,
    },
  },
});
