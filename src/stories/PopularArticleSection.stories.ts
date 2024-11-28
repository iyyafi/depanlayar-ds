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
        headline: "OUR LATEST UPDATES",
        buttonLink: "blog",
        buttonText: "DISCOVER MORE"
    }
}