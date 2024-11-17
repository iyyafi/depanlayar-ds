import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCard } from "./ArticleCard";

const meta = {
  title: "LDC Website/Article Card",
  component: ArticleCard,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    title: { control: "text" },
    teaser: { control: "text" },
    slug: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc:
      "https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp/m/360x360",
    imageAlt: "Landing Page Sekolah Musik di Surabaya",
    title: "Landing Page Sekolah Musik di Surabaya",
    teaser:
      "Kita semua sudah familiar dengan manfaat belajar musik untuk otak kita; apalagi, untuk anak-anak.",
    slug: "/showcase/landing-page-sekolah-musik-di-surabaya",
  },
};
