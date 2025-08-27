import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "../components/ldc/Hero";

const meta = {
  title: "LDC Website/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    headline: { control: "text" },
    subheadline: { control: "text" },
    primaryText: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc:
      "https://www.longdistancecreator.com/wp-content/uploads/2023/06/ldc-birthday-2023-logo-1.png.webp",
    imageAlt: "logo ldc",
    headline:
      "We help business owners transform vision into actionable strategy",
    subheadline: "JUST START NOW! As a Pandemic-Born Company, LDC was established in the midst of uncertainty and agile transformation.",
    primaryText: "Sesuaikan kebutuhan bisnis Anda dengan tools dan strategy yang sesuai melalui Digital Marketing Audit yang tepat.",
  },
};
