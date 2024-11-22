export interface MemberCardProps {
    /** Image url of the member */
    imageSrc: string;
    /** Image alt of the member */
    imageAlt: string;
    /** Name of the member */
    name: string;
    /** Information of the member */
    information: string;
}

export const MemberCard = ({
    imageSrc, 
    imageAlt, 
    name, 
    information
}: MemberCardProps) => {
    return (
        <div className="flex w-1/2 flex-col items-center justify-start gap-1  p-2 lg:w-1/4 lg:justify-between lg:gap-4 lg:p-7">
            <div className="flex w-full flex-col items-center gap-4 lg:gap-7">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    width="200"
                    height="200"
                    className="aspect-square w-[85%] rounded-[50%] object-cover object-center lg:w-full"
                    />
                <h3 className="text-center font-display text-base font-semibold leading-tight lg:text-2xl">
                    {name}
                </h3>
            </div>
            <p className="text-center font-display text-sm leading-tight text-text-secondary lg:text-base">
                {information}
            </p>
        </div>   
    )
}