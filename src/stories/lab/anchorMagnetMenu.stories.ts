import {
  anchorMagnetMenu,
  type anchorMagnetMenuProps,
} from "./anchorMagnetMenu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Labs/Achor Magnet Slide Menu",
  tags: ["autodocs"],
  render: ({ vertical, menu }: anchorMagnetMenuProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return anchorMagnetMenu({ vertical, menu });
  },
  args: {
    menu: [
      {
        text: "Home",
        href: "#",
      },
      {
        text: "About Us",
        href: "#",
      },
      {
        text: "News",
        href: "#",
      },
      {
        text: "Contact Us",
        href: "#",
      },
    ],
  },
  argTypes: {
    menu: { control: "object" },
    vertical: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Source: <a href='https://codepen.io/jh3y/pen/GRapZqO' target='_blank'>Codepen by @jh3y</a><br />Browser Support: <a href='https://caniuse.com/?search=anchor-name' target='_blank'>Check in Caniuse</a>",
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {},
};

export const Vertical = {
  args: { vertical: true },
};
