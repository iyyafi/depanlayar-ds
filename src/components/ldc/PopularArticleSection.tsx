export interface PopularArticleSectionProps {
    headline: string;
    buttonLink: string;
    buttonText: string;
}
import { ArticleCard } from "./ArticleCard";

const articles = [
    {
        imageSrc :"https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp/m/360x360",
        imageAlt :"Image Alt articles",
        title :"Landing Page Sekolah Musik di Surabaya",
        teaser :"Kita semua sudah familiar dengan manfaat belajar musik untuk otak kita; apalagi, untuk anak-anak.",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp/m/360x360",
        imageAlt :"Image Alt articles",
        title :"News Portal 5 Negara Travel Startup Besar di Indonesia",
        teaser :"Ini adalah era kehausan perusahaan dan brand yang terus berusaha untuk meningkatkan SEO dan traffic dari",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp/m/360x360",
        imageAlt :"Image Alt articles",
        title :"Redesign Situs Web Institusi Pendidikan S2",
        teaser :"Terdapat kesalahpahaman bahwa universitas tidak perlu memperhatikan situs mereka",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://a.storyblok.com/f/294243/1080x1080/7433b84310/img-article-3.webp/m/360x360",
        imageAlt :"Image Alt articles",
        title :"Website Development Perusahaan Otomotif Terbesar di Indonesia",
        teaser :"Topik-topik dunia perkantoran selalu trend dan viral dengan banyaknya “budak korporat” yang",
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