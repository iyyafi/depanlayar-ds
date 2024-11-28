export interface PopularArticleSectionProps {
    headline: string;
    buttonLink: string;
    buttonText: string;
}
import { ArticleCard } from "./ArticleCard";

const articles = [
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2022/10/b8e9b4b97ffacaf0636715c6a06bc105.png.webp",
        imageAlt :"Image Alt articles",
        title :"Cara Memanfaatkan Algoritma TikTok",
        teaser :"Sudah buat akun TikTok? ingin videomu FYP? Untuk mengetahui lebih dalam mengenai TikTok, coba kamu pahami cara memanfaatkan",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2022/10/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW5lb24tMDA3LWwyb2JtMHQyLmpwZw-1.webp",
        imageAlt :"Image Alt articles",
        title :"Ingin Videomu FYP? Yuk, Cari Tahu Algoritma TikTok",
        teaser :"Banyak orang yang menginginkan videonya FYP di TikTok. Hal ini perlu memahami cara kerja algoritma TikTok yang akan berpengaruh pada viralnya",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2023/09/Menyelami-Dasar-Copywriting-batch-26.png.webp",
        imageAlt :"Image Alt articles",
        title :"Menyelami Dasar Copywriting Batch 2: Pandangan",
        teaser :"Webinar ini akan membantumu menyelami dunia copywriting. Mempelajari teori dan dasar perencanaan Copywriting, bagaimana peluangnya di dunia",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2023/09/Burnout-Managementtt2.png.webp",
        imageAlt :"Image Alt articles",
        title :"Burnout Management: Teknik Mengelola Stress Biar Kamu Tidak",
        teaser :"Dalam webinar ini kamu akan mengenal tentang tipe-tipe stress yang bisa mempengaruhi produktifitasmu. Kamu juga akan mempelajari tentang stress",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
]

export const PopularArticleSection = ({
    headline, buttonLink, buttonText
}: PopularArticleSectionProps) => {
    return (
        <section className="bg-soft-blue py-10 lg:py-20">
            <div className="container flex flex-col items-center">
                <h2 className="mb-6 w-4/6 px-5 text-center font-sans text-2xl font-semibold leading-tight text-text-primary lg:mb-12 lg:text-5xl">
                    {headline}
                </h2>
                <div className="w-full overflow-x-auto">
                    <ul
                        className="grid w-fit grid-cols-[repeat(4,220px)] gap-5 px-5 md:grid-cols-4 md:gap-8"
                    >
                        {
                        articles?.length &&
                            articles.map((article) => {
                            return (
                                <li>
                                <ArticleCard
                                    imageSrc={article.imageSrc}
                                    imageAlt={article.imageAlt}
                                    title={article.title}
                                    teaser={article.teaser}
                                    slug={article.slug}
                                />
                                </li>
                            );
                            })
                        }
                    </ul>
                </div>
                {
                    buttonLink && (
                        <a href={`/${buttonLink}`}>
                            <button className="text-md mt-16 self-center rounded-[50px] bg-primary px-12 py-3 font-display font-medium text-white lg:text-xl">
                                {buttonText}
                            </button>
                        </a>
                    )
                }
            </div>
        </section>
    )
} 