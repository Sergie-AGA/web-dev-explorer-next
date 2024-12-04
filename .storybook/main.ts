import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "./Welcome.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/features/homepage/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/features/product-list/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/features/world-css/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/features/reusable-backend/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
