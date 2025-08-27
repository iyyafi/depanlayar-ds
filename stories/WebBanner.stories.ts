import type { Meta, StoryObj} from '@storybook/react'
import { WebBanner } from '../components/ldc/WebBanner'

const meta = {
    title: "LDC Website/Web Banner",
    component: WebBanner,
    tags: ["autodocs"],
    argTypes: {
        logoSrc: { control: "text" },
        logoAlt: { control: "text" },
        headline: { control: "text" },
        subheadline: { control: "text" },
        buttonLink: { control: "text" },
        buttonText: { control: "text" },
        imageSrc: { control: "text" },
        imageAlt: { control: "text" },
    },
    args: {}
}satisfies Meta<typeof WebBanner>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        logoSrc: "https://www.longdistancecreator.com/wp-content/uploads/2023/08/Logo-LDC-1.png.webp",
        logoAlt: "logo-ldc",
        headline: "JANGAN SAMPAI WEBSITE ANDA JADUL!",
        subheadline: "Redesign website Anda jadi lebih modern dengan fitur-fitur terbaru untuk meningkatkan traffic dan conversion!",
        buttonLink: "https://www.longdistancecreator.com/service/website/form-website-service/",
        buttonText: "REDESIGN SEKARANG",
        imageSrc: "https://www.longdistancecreator.com/wp-content/uploads/2023/08/laptop-1.png.webp",
        imageAlt: "image laptop",
    }
}