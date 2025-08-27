import type { Meta, StoryObj} from '@storybook/react'
import { SellingPointSection } from '../components/ldc/SellingPointSection'

const meta = {
    title: "LDC Website/Selling Point Section",
    component: SellingPointSection,
    tags: ["autodocs"],
    argTypes: {
        headline: { control: "text" },
        primaryText: { control: "text" },
        buttonLink: { control: "text" },
        buttonText: { control: "text" },
    },
    args: {}
}satisfies Meta<typeof SellingPointSection>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        headline: "WHAT WILL YOU GET",
        primaryText: "Dengan keselarasan ide, kreativitas, dan pengalaman yang kami punya, kami berkolaborasi dengan berbagai industri untuk membantu Anda, sebagai pemilik bisnis dalam mengembangkan:",
        buttonLink: "contact-us",
        buttonText: "CONSULT NOW"
    }
}