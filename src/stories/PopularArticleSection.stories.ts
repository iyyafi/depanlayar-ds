import type { Meta, StoryObj} from '@storybook/react'
import { PopularArticleSection } from '../components/ldc/PopularArticleSection'

const meta = {
    title: "LDC Website/Popular Article Section",
    component: PopularArticleSection,
    tags: ["autodocs"],
    argTypes: {
        headline: { control: "text" },
        buttonLink: { control: "text" },
        buttonText: { control: "text" },
    },
    args: {}
}satisfies Meta<typeof PopularArticleSection>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        headline: "We’ll Take Care of Your Business as if It’s Our Own",
        buttonLink: "case-study",
        buttonText: "More Project Showcase"
    }
}