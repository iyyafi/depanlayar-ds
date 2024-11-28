export interface HeroProps {
    imageSrc: string,
    imageAlt: string,
    headline: string,
    subheadline: string,
    primaryText: string,
}

export const Hero =({
    imageSrc, imageAlt, headline, subheadline, primaryText
}: HeroProps) => {
    return (
        <section
            className="container mt-12 flex flex-col items-center gap-4 lg:mt-20"
        >
            {
                imageSrc && (
                <img
                    src={`${imageSrc}`}
                    alt={imageAlt}
                    className={`w-[70%] object-cover`}
                    loading={"eager"}
                    decoding={"sync"}
                />
                )
            }
            {
                headline && (
                <h1 className="w-[90%] text-center font-sans text-2xl font-semibold leading-tight text-text-primary lg:w-[70vw] lg:text-6xl">
                    {headline}
                </h1>
                )
            }
            {
                subheadline && (
                <h2 className="text-md w-[90%] text-center font-display font-semibold text-text-primary lg:w-[70vw] lg:text-2xl">
                    {subheadline}
                </h2>
                )
            }
            {
                primaryText && (
                <h2 className="text-md w-[90%] text-center font-display text-text-secondary lg:w-[70vw] lg:text-2xl">
                    {primaryText}
                </h2>
                )
            }
        </section>
    )
}