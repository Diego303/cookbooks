// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://Diego303.github.io",
    base: "/cookbooks/",
    integrations: [react()],
});