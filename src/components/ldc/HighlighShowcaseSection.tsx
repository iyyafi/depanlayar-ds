export interface HighlightShowcaseSectionProps {
    headline: string;
    buttonLink: string;
    buttonText: string;
}
import { ArticleCard } from "./ArticleCard";

const articles = [
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2024/04/Untitled-design-15.png.webp",
        imageAlt :"Image Alt articles",
        title :"FnB Industry: Build Community",
        teaser :"Komunitas dapat menjadi tools marketing yang kuat. Anggota komunitas cenderung berbagi pengalaman positif mereka dengan orang lain, yang dapat",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2024/04/Untitled-design-16.png.webp",
        imageAlt :"Image Alt articles",
        title :"Digital Marketing Training for Team Sales | Vehicle Rental",
        teaser :"Selain meng-handle para klien untuk mendongkrak performa digital marketing mereka, LDC juga beberapa kali mendapatkan project pelatihan digital",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2024/04/Screen-Shot-2024-04-28-at-18.24.18.png.webp",
        imageAlt :"Image Alt articles",
        title :"Kunci Sukses Bisnis Kongsi di Era Modern",
        teaser :"“Eh, buka bisnis bareng yuk?” Sebuah ajakan yang terdengar menggiurkan, namun kerap kandas menjadi wacana belaka. Buka bisnis bersama partner",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
    {
        imageSrc :"https://www.longdistancecreator.com/wp-content/uploads/2024/04/Untitled-design-14.png.webp",
        imageAlt :"Image Alt articles",
        title :"Konsep Campaign untuk Kopi Instant",
        teaser :"Dulu kopi identik dengan minuman orang tua, sekarang menjadi minuman yang digemari semua kalangan, mulai dari anak muda hingga orang",
        slug :"/showcase/landing-page-sekolah-musik-di-surabaya",
    },
]

export const HighlightShowcaseSection = ({
    headline, buttonLink, buttonText
}: HighlightShowcaseSectionProps) => {
    return (
        <section>
            <div className="container my-12 flex flex-col items-center lg:my-20">
                <h2
                    className="mb-6 w-[70%] px-5 text-center font-sans text-2xl font-semibold leading-tight text-text-primary lg:mb-12 lg:text-5xl"
                >
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