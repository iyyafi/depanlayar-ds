import { fn } from "storybook/test";

import { createButton } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Card",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: "text" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: "Button",
  },
};
