export interface HeroHomeProps {
    imageSrc: string,
    imageAlt: string,
    headline: string,
    primaryText: string,
}

export const HeroHome =({
    imageSrc, imageAlt, headline, primaryText
}: HeroHomeProps) => {
    return (
        <section
            className="container flex flex-col items-center p-5 pt-12 lg:pt-20"
        >
            {
                imageSrc && (
                <img
                    src={`${imageSrc}`}
                    alt={imageAlt}
                    className={`mb-10 max-w-[234px] object-cover md:max-w-[349px] lg:max-w-[464px]`}
                />
                )
            }
            {
                headline && (
                <h1 className="mb-5 max-w-[900px] text-center font-sans text-2xl font-semibold leading-tight text-text-primary sm:text-3xl lg:text-5xl lg:leading-tight">
                    {headline}
                </h1>
                )
            }
            {
                primaryText && (
                <h2 className="text-md max-w-[920px] text-center font-display text-text-secondary lg:text-2xl">
                    {primaryText}
                </h2>
                )
            }
        </section>
    )
}