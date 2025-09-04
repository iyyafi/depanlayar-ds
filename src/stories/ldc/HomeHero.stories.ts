import { createHomeHero } from "./HomeHero";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "LDC Website/Hero - Homepage",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createHomeHero({ ...args });
  },
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    headline: { control: "text" },
    primaryText: { control: "text" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    imageSrc:
      "https://www.longdistancecreator.my.id/wp-content/uploads/2023/06/ldc-birthday-2023-logo-1.png",
    imageAlt: "logo ldc",
    headline:
      "We help business owners transform vision into actionable strategy",
    primaryText:
      "Sesuaikan kebutuhan bisnis Anda dengan tools dan strategy yang sesuai melalui Digital Marketing Audit yang tepat.",
  },
};
