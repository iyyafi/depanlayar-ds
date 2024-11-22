import type { Meta, StoryObj } from "@storybook/react";
import { MemberCard } from "../components/ldc/MemberCard"

const meta = {
    title: "LDC Website/Member Card",
    component: MemberCard,
    tags: ["autodocs"],
    argTypes: {
        imageSrc: { control: "text" },
        imageAlt: { control: "text" },
        name: { control: "text" },
        information: { control: "text" },
    },
    args:{}
} satisfies Meta<typeof MemberCard>;

export default meta;
type Story = StoryObj<typeof MemberCard>;

export const Default: Story = {
    args: {
        imageSrc: "https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp/m/360x360",
        imageAlt: "Member Image",
        name: "John Doe",
        information: "Full-stack Developer"
    }
};