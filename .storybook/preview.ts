import type { Preview } from "@storybook/html-vite";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
      source: {
        transform: async (source) => {
          const prettier = await import("prettier/standalone");
          const prettierPluginBabel = await import("prettier/plugins/babel");
          const prettierPluginHTML = await import("prettier/plugins/html");

          return prettier.format(source, {
            parser: "html",
            plugins: [prettierPluginBabel, prettierPluginHTML],
          });
        },
      },
    },
  },
};

export default preview;
