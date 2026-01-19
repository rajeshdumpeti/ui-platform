// .storybook/main.js
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Force proper build output
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  // Ensure we get the correct index.html
  build: {
    test: {
      // Remove any problematic test configurations
    }
  }
};

export default config;