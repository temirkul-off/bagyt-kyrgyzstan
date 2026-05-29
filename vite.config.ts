import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import cloudflareAdapter from "@tanstack/start-plugin-adapters/cloudflare";

export default defineConfig({
  // 1. Forces Lovable's underlying engine (Nitro) to output Cloudflare Edge compatible files
  nitro: {
    preset: "cloudflare-pages"
  },
  // 2. Provides the standard array Cloudflare is looking for
  vite: {
    plugins: [
      cloudflareAdapter()
    ]
  }
});