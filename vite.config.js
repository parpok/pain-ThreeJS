import { build, defineConfig } from "vite";

export default defineConfig({
    plugins: [], 
    build: { chunkSizeWarningLimit: 1600}
})