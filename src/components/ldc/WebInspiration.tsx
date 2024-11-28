export interface WebInspirationProps {
    headline: string,
    subheadline: string,
    primaryText: string,
    imageSrc: string,
    imageAlt: string,
    headlineImage: string,
    subheadlineImage: string,
    primaryTextImage: string,
}

export const WebInspiration =({
    headline, subheadline, primaryText, imageSrc, imageAlt, subheadlineImage, headlineImage, primaryTextImage
}: WebInspirationProps) => {
    return (
        <section>
        <div className="px-5 pb-14 pt-24">
            <div className="mx-auto flex flex-col items-center gap-4 md:max-w-[800px]">
                <h2 className="text-3xl font-bold md:text-5xl">{headline}</h2>
                <div className="flex flex-col gap-2 text-center md:text-xl">
                    <p>
                        <strong>
                            {subheadline}
                        </strong>
                    </p>
                    <p>
                        {primaryText}
                    </p>
                </div>
            </div>
        </div>

        <div className="pb-20">
            <div
                className="mx-auto flex flex-col items-center justify-center gap-5 md:flex-row"
            >
                <div className="w-11/12 max-w-96">
                    <img
                        src={imageSrc} 
                        alt={imageAlt}
                    />
                </div>
                <div
                    className="flex max-w-80 flex-col gap-2 text-center md:gap-4 md:text-left"
                >
                    <h2 className="text-lg">{subheadlineImage}</h2>
                    <h3 className="text-2xl font-bold md:text-4xl">
                        {headlineImage}
                    </h3>
                    <p className="text-sm md:text-lg">
                        {primaryTextImage}
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}