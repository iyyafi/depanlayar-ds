export interface WebBannerProps {
    logoSrc: string,
    logoAlt: string,
    headline: string,
    subheadline: string,
    buttonLink: string,
    buttonText: string,
    imageSrc: string,
    imageAlt: string,
}

export const WebBanner =({
    logoSrc, logoAlt, headline, subheadline, buttonLink, buttonText, imageSrc, imageAlt
}: WebBannerProps) => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#042a94] to-[#2897ec]">
                <div className="w-full max-w-[1200px] px-5 mx-auto">
                    <div className="flex flex-col items-center gap-6 pb-20 pt-8 md:gap-14">
                        <img
                            src={logoSrc}
                            alt={logoAlt}
                            className="max-w-40 md:max-w-56 md:self-center"
                        />
                        <div
                            className="flex w-full flex-col items-center gap-6 text-white md:items-start md:gap-6"
                        >
                            <h1
                                className="max-w-[500px] text-center text-3xl font-bold md:max-w-[700px] md:text-left md:text-5xl"
                            >
                                {headline}
                            </h1>
                            <span
                                className="max-w-[500px] text-center md:max-w-[425px] md:text-left md:text-xl"
                            >
                                {subheadline}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1200px] px-5 mx-auto">
                <div
                    className="flex flex-col items-center gap-5 md:flex-row-reverse md:justify-between"
                >
                    <div
                        className="relative flex w-80 max-w-full flex-col items-center pt-24 md:w-3/5 md:min-w-[500px]"
                    >
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="absolute bottom-0 left-0 right-0 mx-auto md:left-auto"
                        />
                    </div>
                    <a  
                        className="border-transparent rounded-[50px] w-full text-center bg-[#f8a833] text-white font-bold px-4 py-2.5 md:text-lg  max-w-64 md:max-w-80"
                        href={buttonLink}
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    )
}