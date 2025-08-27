import type { Meta, StoryObj} from '@storybook/react'
import { HighlightShowcaseSection } from '../components/ldc/HighlighShowcaseSection'

const meta = {
    title: "LDC Website/Highlight Showcase Section",
    component: HighlightShowcaseSection,
    tags: ["autodocs"],
    argTypes: {
        headline: { control: "text" },
        buttonLink: { control: "text" },
        buttonText: { control: "text" },
    },
    args: {}
}satisfies Meta<typeof HighlightShowcaseSection>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        headline: "We’ll Take Care of Your Business as if It’s Our Own",
        buttonLink: "study-case",
        buttonText: "More Project Showcase"
    }
}