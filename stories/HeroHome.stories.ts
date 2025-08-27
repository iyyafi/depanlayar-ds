import type { Meta, StoryObj } from "@storybook/react";

import { HeroHome } from "../components/ldc/HeroHome";

const meta = {
  title: "LDC Website/Hero Home",
  component: HeroHome,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    headline: { control: "text" },
    primaryText: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof HeroHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc:
      "https://www.longdistancecreator.com/wp-content/uploads/2023/06/ldc-birthday-2023-logo-1.png.webp",
    imageAlt: "logo ldc",
    headline:
      "We help business owners transform vision into actionable strategy",
    primaryText: "Sesuaikan kebutuhan bisnis Anda dengan tools dan strategy yang sesuai melalui Digital Marketing Audit yang tepat.",
  },
};
