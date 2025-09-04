import { createArticleCard } from "./ArticleCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "LDC Website/Article Card",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createArticleCard({ ...args });
  },
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    publishedAt: { control: "text" },
    title: { control: "text" },
    teaser: { control: "text" },
    slug: { control: "text" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    imageSrc:
      "https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp",
    imageAlt: "Image Alt",
    publishedAt: "January 15, 2024",
    title: "Landing Page Sekolah Musik di Surabaya",
    teaser:
      "Kita semua sudah familiar dengan manfaat belajar musik untuk otak kita; apalagi, untuk anak-anak.",
    slug: "example-article",
  },
};
