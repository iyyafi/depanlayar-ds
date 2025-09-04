import { scrollBlurWord, type scrollBlurWordProps } from "./scrollBlurWord";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Labs/Scroll Blur by Word",
  tags: ["autodocs"],
  render: ({ text }: scrollBlurWordProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return scrollBlurWord({ text });
  },
  argTypes: {
    text: { control: "text" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    text: "Cannot destructure property text of undefined as it is undefined.",
  },
};
