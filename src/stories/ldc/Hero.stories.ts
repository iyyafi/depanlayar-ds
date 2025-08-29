import { createHero } from "./Hero";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "LDC Website/Hero",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createHero({ ...args });
  },
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    headline: { control: "text" },
    subheadline: { control: "text" },
    primaryText: { control: "text" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    imageSrc:
      "https://a.storyblok.com/f/294243/672x190/aa6132c93f/ldc-birthday-2023-logo-1-png.webp",
    imageAlt: "logo ldc",
    headline:
      "We help business owners transform vision into actionable strategy",
    subheadline:
      "JUST START NOW! As a Pandemic-Born Company, LDC was established in the midst of uncertainty and agile transformation.",
    primaryText:
      "Sesuaikan kebutuhan bisnis Anda dengan tools dan strategy yang sesuai melalui Digital Marketing Audit yang tepat.",
  },
};
