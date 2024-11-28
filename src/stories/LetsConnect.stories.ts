import type { Meta, StoryObj } from "@storybook/react";

import { LetsConnectSection } from "../components/ldc/LetsConnectSection";

const meta = {
  title: "LDC Website/Lets Connect Section",
  component: LetsConnectSection,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    headline: { control: "text" },
    primaryText: { control: "text" },
    buttonLink: { control: "text" },
    buttonText: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof LetsConnectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc:
      "https://www.longdistancecreator.com/wp-content/uploads/2023/09/Untitled-design-29-1.png",
    headline: "Let's leap with us!",
    primaryText:
      "Kami percaya bahwa melalui kerjasama dan kemitraan yang solid, potensi dan hasil yang dapat dicapai akan melampaui batasan yang biasa.",
    buttonLink: "/showcase/landing-page-sekolah-musik-di-surabaya",
    buttonText: "Lets Connect",
  },
};
