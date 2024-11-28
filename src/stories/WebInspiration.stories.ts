import type { Meta, StoryObj} from '@storybook/react'
import { WebInspiration } from '../components/ldc/WebInspiration'

const meta = {
    title: "LDC Website/Web Inspiration",
    component: WebInspiration,
    tags: ["autodocs"],
    argTypes: {
        headline: { control: "text" },
        subheadline: { control: "text" },
        primaryText: { control: "text" },
        imageSrc: { control: "text" },
        imageAlt: { control: "text" },
        headlineImage: { control: "text" },
        subheadlineImage: { control: "text" },
        primaryTextImage: { control: "text" },
    },
    args: {}
}satisfies Meta<typeof WebInspiration>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        headline: "Our Inspiration",
        subheadline: "“Website cuma formalitas aja, yang penting ada.”",
        primaryText: "Strategi yang paling efektif untuk melejitkan bisnismu sekarang adalah memanfaatkan momentum ini dengan memiliki website yang berkualitas.",
        imageSrc: "https://www.longdistancecreator.com/wp-content/uploads/2021/01/HOME_ILLUSTRATION-11.svg",
        imageAlt: "image-inspiration",
        headlineImage: "Apa perlu website saya di redesign?",
        subheadlineImage: "Mungkin kamu merasa bimbang,",
        primaryTextImage: "Sebelum ambil keputusan, yuk coba centang dulu performa website mu saat ini",
    }
}