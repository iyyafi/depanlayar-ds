export interface LetsConnectSectionProps {
    imageSrc: string,
    headline: string,
    primaryText: string,
    buttonLink: string,
    buttonText: string,
}

export const LetsConnectSection =({
    imageSrc, headline, primaryText, buttonLink, buttonText
}: LetsConnectSectionProps) => {
    return (
        <section className="bg-soft-blue px-6 py-12 lg:py-20">
            <div className="container flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
                <img
                    src={imageSrc}
                    alt="connect image"
                    width="200"
                    height="200"
                    className="w-full rounded-lg object-cover object-center lg:w-2/5"
                />
                <div className="flex flex-col items-center">
                    <h2
                        className="mb-4 mt-3 text-center font-sans text-2xl font-bold leading-tight text-text-primary lg:text-5xl"
                    >
                        {headline}
                    </h2>

                    <p
                        className="text-center font-display text-base text-text-secondary lg:text-xl"
                    >
                        {primaryText}
                    </p>
                    <a href={buttonLink}>
                        <button
                            className="mt-5 self-center rounded-[50px] bg-primary px-12 py-3 text-base text-white lg:mt-10 lg:text-xl"
                        >
                            {buttonText}
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}