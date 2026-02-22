// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://Diego303.github.io",
    base: "/cookbooks/",
    integrations: [react(), mdx()],
    markdown: {
        shikiConfig: {
            theme: "one-dark-pro",
        },
    },
});