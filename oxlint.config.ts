import { defineConfig } from "oxlint";

const config = defineConfig({
  plugins: ["eslint", "react", "nextjs", "import"],
  categories: {
    correctness: "error",
  },
});

export default config;
