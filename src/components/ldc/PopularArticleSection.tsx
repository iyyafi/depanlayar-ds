export interface PopularArticleSectionProps {
    headline: string;
    buttonLink: string;
    buttonText: string;
}

export const PopularArticleSection = ({
    headline, buttonLink, buttonText
}: PopularArticleSectionProps) => {
    return (
        <div>
            {headline}
            {buttonLink}
            {buttonText}
        </div>
    )
} 